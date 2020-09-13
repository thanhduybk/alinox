import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Col, Divider, Form, Input, Row, Select } from "antd";
import { connect, useSelector } from "react-redux";
import * as reportActions from "../../actions/report.action";

const layout = {
	labelCol: {
		xs: {},
		sm: {},
		md: {},
		lg: {},
		xl: { span: 8 },
		xxl: {}
	},
	wrapperCol: {
		xs: {},
		sm: {},
		md: {},
		lg: {},
		xl: { span: 16 },
		xxl: {}
	}
};

const inks = [
	"UV Ink", "Water-based Ink", "Sovent Ink"
];

const trams = [
	"AM"
];

const tramRotation = "C=7.5, K=37.5, M=67.5, Y=82.5";

const Material = ({ nextStep, prevStep, updateReport }) => {
	const [ form ] = Form.useForm();
	const classes = useSelector(state => state.clazz.classes);
	const materials = useSelector(state => state.material.materials);

	// materialId, ink, artworkResolution, tram, tramRotation
	const _classId = useSelector(state => state.report.current.classId);
	const _materialId = useSelector(state => state.report.current.materialId);
	const _ink = useSelector(state => state.report.current.ink);
	const _artworkResolution = useSelector(state => state.report.current.artworkResolution);
	const _tramRotation = useSelector(state => state.report.current.tramRotation);

	const [ clazzId, setClassId ] = useState(null);

	const handleClazzChange = clazzId => {
		setClassId(clazzId);

		form.resetFields([ "materialId", "artworkResolution" ]);

		const selectedClass = classes.find(clazz => clazz.clazzId === clazzId);

		if (selectedClass) {
			form.setFieldsValue({
				clazzType: selectedClass.type,
				preferredArtworkResolution: selectedClass.par
			});
		} else {
			form.resetFields([ "classType", "preferredArtworkResolution" ]);
		}
	};

	const handleResolutionChange = () => {
	};

	const handleMaterialChange = () => {
	};

	const handleInkChange = () => {
	};

	const onFinish = ({ classId, materialId, ink, artworkResolution, tram, tramRotation }) => {
		updateReport({ classId, materialId, ink, artworkResolution, tram, tramRotation });
		nextStep();
	};

	return (
		<div className="material">
			<Form
				className="material-form" form={form}
				name="material-form" layout="horizontal"
				onFinish={onFinish}
				initialValues={{
					classId: _classId,
					materialId: _materialId,
					ink: _ink,
					tram: trams[0],
					tramRotation: tramRotation,
					artworkResolution: _artworkResolution
				}}
			>
				<Divider orientation="left">Typical Printing</Divider>
				<Row gutter={16}>
					<Col span={12}>
						<Form.Item
							{...layout}
							name="classId"
							label="Typical Printing"
							hasFeedback
							rules={[
								{
									required: true,
									message: "Please select a typical printing"
								},
							]}
						>
							<Select
								placeholder="Select a typical printing"
								allowClear
								onChange={handleClazzChange}
							>
								{classes.map(clazz => (
									<Select.Option
										key={clazz.clazzId}
										value={clazz.clazzId}
									>
										{clazz.name}
									</Select.Option>
								))}
							</Select>
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							{...layout}
							name="clazzType"
							label="Type of Material"
							hasFeedback
						>
							<Input disabled/>
						</Form.Item>
					</Col>
				</Row>

				<Divider orientation="left">Material &amp; Ink</Divider>
				<Row gutter={16}>
					<Col span={12}>
						<Form.Item
							{...layout}
							name="materialId"
							label="Material"
							hasFeedback
							rules={[
								{
									required: true,
									message: "Please select a material"
								}
							]}
						>
							<Select
								placeholder="Select a material"
								allowClear
								onChange={handleMaterialChange}
							>
								{clazzId || _classId ? materials
									.filter(material => {
										if (clazzId) {
											return material.clazzId === clazzId;
										} else {
											return material.clazzId === _classId;
										}
									})
									.map(material => (
										<Select.Option
											key={material.materialId}
											value={material.materialId}
										>
											{material.name}
										</Select.Option>
									)) : []}
							</Select>
						</Form.Item>
					</Col>

					<Col span={12}>
						<Form.Item
							{...layout}
							name="ink"
							label="Type of Ink"
							hasFeedback
							rules={[
								{
									required: true,
									message: "Please select a type of ink"
								},
							]}
						>
							<Select
								placeholder="Select ink to print"
								allowClear
								onChange={handleInkChange}
							>
								{inks.map(ink => (
									<Select.Option key={ink} value={ink}>{ink}</Select.Option>
								))}
							</Select>
						</Form.Item>
					</Col>
				</Row>

				<Divider orientation="left">Resolution</Divider>
				<Row gutter={16}>
					<Col span={12}>
						<Form.Item
							{...layout}
							name="artworkResolution" label="Resolution (lpi)"
							hasFeedback
							rules={[
								{
									required: true,
									message: "Please select a resolution",
								}
							]}
						>
							<Select
								placeholder="Select a resolution"
								allowClear
								onChange={handleResolutionChange}
								disabled={!clazzId}
							>
								{clazzId && classes
									.find(clazz => clazz.clazzId === clazzId).resolutions
									.map(resolution => (
										<Select.Option
											key={resolution}
											value={resolution}
										>
											{resolution}
										</Select.Option>
									))}
							</Select>
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item {...layout} name="preferredArtworkResolution" label="Recommendation">
							<Input disabled/>
						</Form.Item>
					</Col>
				</Row>
				{/**/}
				<Divider orientation="left">Trame</Divider>
				<Row gutter={16}>
					<Col span={12}>
						<Form.Item
							{...layout}
							name="tram" label="Trame"
							hasFeedback
							rules={[
								{
									required: true,
									message: "Please select a trame type",
								}
							]}
						>
							<Input disabled/>
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item {...layout} name="tramRotation" label="Angle">
							<Input disabled/>
						</Form.Item>
					</Col>
				</Row>

				<Divider/>
				<div className="step-navigation">
					<Form.Item className="step-button">
						<Button
							className="step-button" type="secondary" size="large"
							onClick={prevStep}
						>
							Previous Step
						</Button>
					</Form.Item>
					<Form.Item className="step-button">
						<Button
							className="step-button" type="primary" size="large"
							htmlType="submit"
						>
							Next Step
						</Button>
					</Form.Item>
				</div>
			</Form>
		</div>
	);
};

Material.propTypes = {
	nextStep: PropTypes.func.isRequired,
	prevStep: PropTypes.func.isRequired,
	updateReport: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
	updateReport: (payload) => dispatch(reportActions.update(payload))
});

export default connect(null, mapDispatchToProps)(Material);