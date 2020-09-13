import React from "react";
import PropTypes from "prop-types";
import { Button, Col, Divider, Form, Input, Row } from "antd";

import * as actions from "../../actions/report.action";
import { connect, useSelector } from "react-redux";
import ImageUploader from "./ImageUploader";

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

const Product = ({ nextStep, prevStep, updateReport }) => {
	const [ form ] = Form.useForm();

	const _productName = useSelector(state => state.report.current.productName);
	const _productCode = useSelector(state => state.report.current.productCode);
	const _customerName = useSelector(state => state.report.current.customerName);
	const _customerCode = useSelector(state => state.report.current.customerCode);
	const _customerCountry = useSelector(state => state.report.current.customerCountry);
	const _customerProvince = useSelector(state => state.report.current.customerProvince);

	const onFinish = ({ productName, productCode, productImage, customerName, customerCode, customerCountry, customerProvince }) => {
		updateReport({ productCode, productName, productImage, customerName, customerCode, customerCountry, customerProvince });
		nextStep();
	};

	const onSelectedImage = (file) => {
		form.setFieldsValue({
			productImage: file
		});
	};

	return (
		<div className="product">
			<Form
				className="product-form" form={form}
				name="customer-info-form" layout="horizontal"
				onFinish={onFinish}
				initialValues={{
					productCode: _productCode,
					productName: _productName,
					customerName: _customerName,
					customerCode: _customerCode,
					customerCountry: _customerCountry,
					customerProvince: _customerProvince,
				}}
			>
				<Divider orientation="left">Customer Information</Divider>
				<Row gutter={16}>
					<Col span={12}>
						<Form.Item
							{...layout}
							name="customerName"
							label="Company"
							hasFeedback
							rules={[
								{
									required: true,
									message: "Please input your full name"
								},
							]}
						>
							<Input placeholder="Your full name"/>
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							{...layout}
							name="customerCode"
							label="Customer Code"
							hasFeedback
							rules={[
								{
									required: true,
									message: "Please input your customer code"
								},
							]}
						>
							<Input placeholder="Your customer code (MO)"/>
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							{...layout}
							name="customerCountry"
							label="Country"
							hasFeedback
							rules={[
								{
									required: true,
									message: "Please input your country"
								},
							]}
						>
							<Input placeholder="Your country"/>
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							{...layout}
							name="customerProvince"
							label="Province/State"
							hasFeedback
							rules={[
								{
									required: true,
									message: "Please input your province/state"
								},
							]}
						>
							<Input placeholder="Your province/state"/>
						</Form.Item>
					</Col>
				</Row>

				<Divider orientation="left">Product Overview</Divider>
				<Row gutter={16}>
					<Col span={12}>
						<Form.Item
							{...layout}
							name="productName"
							label="Product Name"
							hasFeedback
							rules={[
								{
									required: true,
									message: "Please input your product name"
								},
							]}
						>
							<Input placeholder="Your product name"/>
						</Form.Item>
						<Form.Item
							{...layout}
							name="productCode"
							label="Product Code"
							hasFeedback
							rules={[
								{
									required: true,
									message: "Please input the product code"
								},
							]}
						>
							<Input placeholder="Your product code (PO)"/>
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							{...layout}
							name="productImage"
							label="Product Image"
						>
							<ImageUploader onSelectImage={onSelectedImage}/>
						</Form.Item>

					</Col>
				</Row>

				<Divider/>
				<div className="step-navigation">
					<Form.Item {...layout} className="step-button">
						<Button
							className="step-button" type="secondary" size="large"
							onClick={prevStep} disabled
						>
							Previous Step
						</Button>
					</Form.Item>
					<Form.Item {...layout} className="step-button">
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

Product.propTypes = {
	nextStep: PropTypes.func.isRequired,
	prevStep: PropTypes.func.isRequired,
	updateReport: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
	updateReport: (payload) => dispatch(actions.update(payload)),
});

export default connect(null, mapDispatchToProps)(Product);