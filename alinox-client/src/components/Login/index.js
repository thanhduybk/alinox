import React, { useEffect } from "react";
import PropTypes from "prop-types";

import "./styles.scss";

import { Button, Form, Input, notification } from "antd";
import { login } from "../../actions/auth.action";
import { connect, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

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

const Login = ({ login }) => {
	const authenticated = useSelector(state => state.auth.authenticated);
	const numTry = useSelector(state => state.auth.numTry);
	const history = useHistory();

	const onFinish = ({ username, password, orgCode }) => {
		login(username, password, orgCode);
	};

	useEffect(() => {
		if (!authenticated && numTry > 0) {
			notification.error({
				message: "Failed!",
				description: "Invalid username or password."
			});
		} else if (authenticated) {
			history.push("/");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ numTry, authenticated ]);

	return (
		<div className="login-page">
			<h2 className="login-header">Welcome to FASO - Anilox</h2>
			<Form
				className="login-form"
				{...layout}
				name="login-form"
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

				<Form.Item {...tailLayout} className="login-submit-button">
					<Button type="primary" htmlType="submit">
						Sign In
					</Button>
					<span className="to-register-page">
						Not yet have an account?
						<Link to="/register" className="register-button">
							Sign Up
						</Link>
					</span>
				</Form.Item>
			</Form>
		</div>
	);
};

Login.propTypes = {
	login: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
	login: (username, password, orgCode) => dispatch(login(username, password, orgCode))
});

export default connect(null, mapDispatchToProps)(Login);