import React, { useState } from "react";
import PropTypes from "prop-types";
import { AutoComplete, Col, Form, Modal, Row } from "antd";

import { colors } from "../../asserts/data/colors";

const ColorSelector = ({
	modalVisible, handleModalOk, handleModalCancel, parentForm, id, updateSpotColor
}) => {
	const [ form ] = Form.useForm();

	const [ types, setTypes ] = useState(colors.map(item => ({
		id: item.id,
		name: item.name,
	})));

	const [ selectedType, setSelectedType ] = useState(-1);

	const [ selectableColors, setSelectableColors ] = useState(colors.map(item => item.colors).flat().map(item => ({ value: item })));

	const [ selectedColor, setSelectedColor ] = useState("");

	const onFinish = () => {
		form.validateFields().then(({ color }) => {
			parentForm.setFieldsValue({
				spotColors: parentForm.getFieldValue("spotColors").map((old, index) => {
					if (index === id) {
						return color;
					}

					return old;
				})
			});

			updateSpotColor(color, id);
		});

		handleModalOk();
	};

	const onSelectType = e => {
		const colorType = e.target.textContent;

		setSelectableColors(colors.filter(item => item.name.localeCompare(colorType) === 0)
			.map(item => item.colors).flat().map(item => ({ value: item })));

		setSelectedType(types.find(item => item.name.localeCompare(colorType) === 0).id);
	};

	const onSelectColor = e => {
		const color = e.target.textContent;

		setSelectedColor(color);

		form.setFieldsValue({ color: color });
	};

	const onInputColor = () => {
		setSelectedType(-1);
		setSelectedColor("");
		setSelectableColors(colors.map(item => item.colors).flat().map(item => ({ value: item })));
	};

	return (
		<Modal
			className="color-modal"
			title="Basic Modal"
			visible={modalVisible}
			onOk={onFinish}
			onCancel={handleModalCancel}
		>

			<Form
				className="color-selector-form" form={form}
				name="printer-form" layout="horizontal"
			>
				<Form.Item
					name="color"
					label="Color"
					rules={[
						{
							required: true,
							message: "Please select or input a color!"
						}
					]}
				>
					<AutoComplete
						onInput={onInputColor}
						options={selectableColors}
						filterOption={(term, option) => option.value.toLowerCase().indexOf(term.toLowerCase()) !== -1}
					/>
				</Form.Item>

				<Row gutter={0}>
					<Col span={11}>
						<div className="color-selector-label">Library:</div>
					</Col>
					<Col span={11} offset={2}>
						<div className="color-selector-label">Code:</div>
					</Col>
				</Row>

				<Row gutter={0}>
					<Col className="color-selector" span={11}>
						{types.map((c, i) => (
							<div
								onClick={onSelectType}
								className={`color-item color-type-item ${selectedType === c.id ? "color-item-selected" : ""}`}
								key={`${c.name}-${i}`}
							>
								{c.name}
							</div>
						))}
					</Col>
					<Col
						className="color-selector color-selector-detail"
						style={{ backgroundColor: selectedType < 0 ? "rgb(0, 0, 0, .1)" : "white", cursor: "not-allowed" }} span={11}
						offset={2}
					>
						{selectableColors.map((c, i) => (
							<div
								style={{ pointerEvents: selectedType < 0 ? "none" : "auto" }}
								onClick={onSelectColor}
								className={`color-item color-name-item ${selectedColor.localeCompare(c.value) === 0 ? "color-item-selected" : ""}`}
								key={`${i}`}
							>
								{c.value}
							</div>
						))}
					</Col>
				</Row>
			</Form>

		</Modal>
	);
};

ColorSelector.propTypes = {
	modalVisible: PropTypes.bool.isRequired,
	handleModalOk: PropTypes.func.isRequired,
	handleModalCancel: PropTypes.func.isRequired,
	parentForm: PropTypes.any,
	id: PropTypes.number.isRequired,
	updateSpotColor: PropTypes.func.isRequired,
};

export default ColorSelector;