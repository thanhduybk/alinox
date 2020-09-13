import React, { useState } from "react";
import PropTypes from "prop-types";
import { Alert, Button, Checkbox, Col, Divider, Form, Input, Row, Select } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { connect, useSelector } from "react-redux";

import * as reportActions from "../../actions/report.action";
import { colors } from "../../asserts/data/colors";
import ColorSelector from "./ColorSelector";

const builtinProcessColors = [
	{ label: "C", value: "C" },
	{ label: "M", value: "M" },
	{ label: "Y", value: "Y" },
	{ label: "K", value: "K" }
];

const layout = {
	labelCol: {
		xs: {},
		sm: {},
		md: {},
		lg: {},
		xl: { span: 6 },
		xxl: {}
	},
	wrapperCol: {
		xs: {},
		sm: {},
		md: {},
		lg: {},
		xl: { span: 18 },
		xxl: {}
	}
};

const processColorsLayout = {
	labelCol: {
		xs: {},
		sm: {},
		md: {},
		lg: {},
		xl: { span: 3 },
		xxl: {}
	},
	wrapperCol: {
		xs: {},
		sm: {},
		md: {},
		lg: {},
		xl: { span: 9 },
		xxl: {}
	}
};

const Printer = ({ nextStep, prevStep, updateReport }) => {
	const [ form ] = Form.useForm();
	const [ colorForm ] = Form.useForm();
	const printers = useSelector(state => state.printer.printers);

	const [ printerId, setPrinterId ] = useState(null);
	const [ printUnit, setPrintUnit ] = useState(null);
	const [ numSelectedProcessColors, setNumSelectedProcessColors ] = useState(0);
	const [ numSelectedSpotColors, setNumSelectedSpotColors ] = useState(0);
	const [ exceedThreshold, setExceedThreshold ] = useState(false);
	const [ processColors, setProcessColors ] = useState([]);
	const [ spotColors, setSpotColors ] = useState([]);

	const [ debounceTimeout, setDebounceTimeout ] = useState(0);

	const [ modalVisible, setModalVisible ] = useState(false);

	const handlePrinterChange = (printerId) => {
		setPrinterId(printerId);

		const selectedPrinter = printers.find(printer => printer.printerId === printerId);

		if (selectedPrinter) {
			setPrinterId(printerId);
			setPrintUnit(selectedPrinter.printUnit);

			form.setFieldsValue({
				rollSizeMaxWidth: selectedPrinter.maxRw,
				printUnit: selectedPrinter.printUnit
			});

			if (selectedPrinter.printUnit < (numSelectedSpotColors + numSelectedSpotColors)) {
				setExceedThreshold(true);
			}
		} else {
			form.resetFields([ "rollSizeMaxWidth", "printUnit" ]);
		}
	};

	const onProcessColorsChange = (selectedColors) => {
		setNumSelectedProcessColors(selectedColors.length);
		setProcessColors(selectedColors);

		if (selectedColors.length + numSelectedSpotColors > printUnit) {
			setExceedThreshold(true);
		} else if (exceedThreshold) {
			setExceedThreshold(false);
		}
	};

	const onSpotColorChange = (e) => {
		const typedSpotColor = e.target.value;
		const inputId = e.target.classList[2];

		if (debounceTimeout) {
			clearTimeout(debounceTimeout);
		}

		setDebounceTimeout(setTimeout(() => {
			if (typedSpotColor && typedSpotColor !== "") {
				setSpotColors(prev => {
					const curr = prev.filter(color => color.id !== inputId);
					curr.push({
						id: inputId,
						code: typedSpotColor
					});
					setNumSelectedSpotColors(curr.length);
					return curr;
				});
			} else {
				setSpotColors(prev => {
					const curr = prev.filter(color => color.id !== inputId);
					setNumSelectedSpotColors(curr.length);
					return curr;
				});
			}

			if (numSelectedProcessColors + numSelectedSpotColors > printUnit) {
				setExceedThreshold(true);
			} else if (exceedThreshold) {
				setExceedThreshold(false);
			}
		}, 300));
	};

	const handleClickInput = () => {
		setModalVisible(true);
	};

	const handleModalOk = () => {
		setModalVisible(false);
	};

	const handleModalCancel = () => {
		setModalVisible(false);
	};

	const updateSpotColor = (color, id) => {
		setSpotColors(prev => {
			const curr = prev.filter(color => color.id !== id);
			curr.push({
				id: id,
				code: color
			});
			setNumSelectedSpotColors(curr.length);
			return curr;
		});
	};

	const onFinish = ({ printUnit }) => {
		updateReport({
			printerId,
			printUnit,
			colors: [ ...processColors, ...spotColors.map(cl => cl.code) ]
		});
		nextStep();
	};

	const [ types, setTypes ] = useState(colors.map(item => ({
		id: item.id,
		name: item.name
	})));

	return (
		<div className="printer">
			<Form
				className="printer-form" form={form}
				name="printer-form" layout="horizontal"
				onFinish={onFinish}
			>
				<Divider orientation="left">Printer</Divider>
				<Row gutter={16}>
					<Col span={12}>
						<Form.Item
							{...layout}
							name="printerId"
							label="Printer"
							hasFeedback
							rules={[
								{
									required: true,
									message: "Please select a printer"
								},
							]}
						>
							<Select
								placeholder="Select a printer"
								allowClear
								onChange={handlePrinterChange}
							>
								{printers.map(printer => (
									<Select.Option key={printer.printerId} value={printer.printerId}>
										{printer.name}
									</Select.Option>
								))}
							</Select>
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={16}>
					<Col span={12}>
						<Form.Item
							{...layout}
							name="rollSizeMaxWidth" label="Size"
							rules={[
								{
									required: true,
									message: "Undetermined printer roll size"
								},
							]}
							hasFeedback
						>
							<Input disabled/>
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							{...layout}
							name="printUnit" label="Printing Units"
							rules={[
								{
									required: true,
									message: "Undetermined printing units"
								},
							]}
							hasFeedback
						>
							<Input disabled/>
						</Form.Item>
					</Col>
				</Row>
				<Divider orientation="left">Printing Colors</Divider>
				{printerId && (numSelectedProcessColors + numSelectedSpotColors) === 0 && (
					<Alert
						style={{ marginBottom: 8 }} message="Please select at least one color."
						type="error" showIcon closeable
					/>
				)}
				{exceedThreshold && (
					<Alert
						style={{ marginBottom: 8 }}
						message="The number of colors exceeds the maximum allowed printing units."
						type="error" showIcon closeable
					/>
				)}
				<Form.Item {...processColorsLayout} name="processColors" label="Process Colors">
					<Checkbox.Group
						disabled={!printerId}
						className="process-colors" options={builtinProcessColors}
						onChange={onProcessColorsChange}/>
				</Form.Item>

				<Form.List name="spotColors">
					{(fields, { add, remove }) => {
						return (
							<div className="spot-colors">
								{fields.map((field, index) => (
									<Form.Item
										{...processColorsLayout}
										label={`Spot Color #${index + 1}`}
										required={false}
										key={field.key}
										className="input-list-item"
									>
										<ColorSelector updateSpotColor={updateSpotColor} parentForm={form} handleModalCancel={handleModalCancel} modalVisible={modalVisible} handleModalOk={handleModalOk}  id={index}/>
										<Form.Item
											{...field}
											validateTrigger={[ "onChange", "onBlur" ]}
											rules={[
												{
													required: true,
													whitespace: true,
													message: "Please input the color code or remove it.",
												},
											]}
											noStyle
										>
											<Input
												readOnly
												onClick={handleClickInput}
												onChange={onSpotColorChange}
												placeholder="Input the spot color"
												className={`input-list-item-input input-list-item-input-${field.key}`}
											/>
										</Form.Item>

										<div style={{
											display: "inline-block",
											textAlign: "center",
											width: "15%"
										}}>
											<MinusCircleOutlined
												className="dynamic-delete-button"
												onClick={() => {
													let ele = document.querySelector(`.input-list-item-input.input-list-item-input-${field.key}`);
													if (ele.value && ele.value !== "") {
														setNumSelectedSpotColors(prev => prev - 1);
													}
													remove(field.name);
												}}
											/>
										</div>
									</Form.Item>
								))}

								<Row gutter={12}>
									<Col span={3}/>
									<Col span={21}>
										<Form.Item>
											<Button
												className="spot-color-add-button"
												type="dashed"
												onClick={() => {
													add();
												}}
												disabled={!printerId || (numSelectedProcessColors + numSelectedSpotColors) >= printUnit}
											>
												<PlusOutlined/> Add Spot Color
											</Button>
										</Form.Item>
									</Col>
								</Row>

							</div>
						);
					}}
				</Form.List>

				<Divider/>
				<div className="step-navigation">
					<Form.Item>
						<Button
							className="step-button" type="secondary" size="large"
							onClick={prevStep}
						>
							Previous Step
						</Button>
					</Form.Item>
					<Form.Item>
						<Button
							className="step-button" type="primary" size="large"
							htmlType="submit"
							disabled={exceedThreshold || (numSelectedProcessColors + numSelectedSpotColors) === 0}
						>
							Next Step
						</Button>
					</Form.Item>
				</div>
			</Form>
		</div>
	);
};

Printer.propTypes = {
	nextStep: PropTypes.func.isRequired,
	prevStep: PropTypes.func.isRequired,
	updateReport: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
	updateReport: (payload) => dispatch(reportActions.update(payload))
});

export default connect(null, mapDispatchToProps)(Printer);