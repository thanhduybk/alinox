import React from "react";
import PropTypes from "prop-types";
import { Button, Form, Input, notification } from "antd";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";

import "./styles.scss";

import { register } from "../../actions/employee.action";

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

const tailLayout = {
	wrapperCol: {
		xs: {},
		sm: {},
		md: {},
		lg: {},
		xl: { span: 18, offset: 6 },
		xxl: {}
	}
};

const Register = ({ register }) => {
	const history = useHistory();

	const onFinish = ({ username, password, confirmPassword, name, orgCode }) => {
		register(username, password, confirmPassword, name, orgCode).then(success => {
			if (success) {
				notification.success({
					message: "Success!",
					description: "Registered successfully! Please log in!"
				});
				setTimeout(() => {
					history.push("/login");
				}, 2000);
			} else {
				notification.error({
					message: "Failed!",
					description: "Something went wrong. Please try again!"
				});
			}
		});
	};

	return (
		<div className="register-page">
			<h2 className="register-header">Welcome to FASO - Anilox</h2>
			<Form
				className="register-form"
				{...layout}
				name="register-form"
				onFinish={onFinish}
			>
				<Form.Item
					label="Organization Code"
					name="orgCode"
					rules={[ { required: true, message: "Please input your organization code!" } ]}
				>
					<Input/>
				</Form.Item>

				<Form.Item
					label="Full Name"
					name="name"
					rules={[ { required: true, message: "Please input your full name!" } ]}
				>
					<Input/>
				</Form.Item>

				<Form.Item
					label="Username"
					name="username"
					rules={[ { required: true, message: "Please input your username!" } ]}
				>
					<Input/>
				</Form.Item>

				<Form.Item
					label="Password"
					name="password"
					rules={[ { required: true, message: "Please input your password!" } ]}
				>
					<Input.Password/>
				</Form.Item>

				<Form.Item
					label="Confirm"
					name="confirmPassword"
					rules={[ { required: true, message: "Please confirm your password!" } ]}
				>
					<Input.Password/>
				</Form.Item>

				<Form.Item {...tailLayout} className="register-submit-button">
					<Button type="primary" htmlType="submit">
						Sign Up
					</Button>
					<span className="to-login-page">
						Already have an account?
						<Link to="/login" className="login-button">
							Sign In
						</Link>
					</span>
				</Form.Item>
			</Form>
		</div>
	);
};

Register.propTypes = {
	register: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
	register: (username, password, confirmPassword, name, orgCode) => dispatch(register({
		username, password, confirmPassword, name, orgCode
	}))
});

export default connect(null, mapDispatchToProps)(Register);