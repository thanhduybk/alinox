import React from "react";
import PropTypes from "prop-types";
import { Menu } from "antd";
import { CalendarOutlined, MailOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

const Sidebar = ({ current, change }) => {
	const role = useSelector(state => state.auth.myDetails.role);

	return (
		<Menu
			className="sidebar"
			style={{ width: 256 }}
			mode="inline"
			selectedKeys={[ `${current}` ]}
			onClick={({ key }) => {
				change(parseInt(key));
			}}
		>
			<Menu.Item key={1} icon={<MailOutlined/>}>
				Materials
			</Menu.Item>
			<Menu.Item key={2} icon={<CalendarOutlined/>}>
				Printers
			</Menu.Item>
			<Menu.Item key={3} icon={<CalendarOutlined/>}>
				Artworks
			</Menu.Item>
			{[ "MASTER" ].includes(role) ? (
				<Menu.Item key={4} icon={<CalendarOutlined/>}>
					Employees
				</Menu.Item>
			) : ""}
		</Menu>
	);
};

Sidebar.propTypes = {
	current: PropTypes.number.isRequired,
	change: PropTypes.func.isRequired,
};

export default Sidebar;