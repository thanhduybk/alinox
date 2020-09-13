import React, { useState } from "react";
import { Menu } from "antd";
import {
	BulbOutlined,
	CloudServerOutlined,
	HomeOutlined,
	LoginOutlined,
	SettingOutlined,
	TeamOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
	const [ current, setCurrent ] = useState("home");

	const authenticated = useSelector(state => state.auth.authenticated);
	const role = useSelector(state => state.auth.myDetails.role);

	const handleClick = e => {
		setCurrent(e.key);
	};

	return (
		<div className="header-menu">
			<Menu className="menu" onClick={handleClick} selectedKeys={[ current ]} mode="horizontal">
				<Menu.Item className="menu-item" key="home" icon={<HomeOutlined/>}>
					<Link to="/">Home</Link>
				</Menu.Item>
				<Menu.Item className="menu-item" key="guides" icon={<HomeOutlined/>}>
					<Link to="/guides">Guides</Link>
				</Menu.Item>
				<Menu.Item className="menu-item" key="anilox" icon={<BulbOutlined/>}>
					<Link to="/anilox">FASO</Link>
				</Menu.Item>

				{authenticated ? (
					<Menu.Item className="menu-item" key="history" icon={<CloudServerOutlined/>}>
						<Link to="/history">History</Link>
					</Menu.Item>) : null
				}

				{[ "MASTER", "MANAGER" ].includes(role) ? (
					<Menu.Item className="menu-item" key="settings" icon={<SettingOutlined/>}>
						<Link to="/settings">Settings</Link>
					</Menu.Item>) : null
				}


				<Menu.Item className="menu-item" key="about" icon={<TeamOutlined/>}>
					<Link to="/about">About Us</Link>
				</Menu.Item>

				{authenticated ? "" : (
					<Menu.Item className="menu-item" key="login" icon={<LoginOutlined/>}>
						<Link to="/login">Sign In</Link>
					</Menu.Item>
				)}
			</Menu>
		</div>
	);
};

export default Header;