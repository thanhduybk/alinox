import React from "react";
import PropTypes from "prop-types";
import { Menu } from "antd";
import { CalendarOutlined } from "@ant-design/icons";

const SideBar = ({ current, change }) => {
	return (
		<Menu
			style={{ height: "100%" }}
			mode="inline"
			selectedKeys={[ `${current}` ]}
			onClick={({ key }) => {
				change(parseInt(key));
			}}
		>
			<Menu.Item key={1} icon={<CalendarOutlined/>}>
				Chủng sản phẩm
			</Menu.Item>
			<Menu.Item key={2} icon={<CalendarOutlined/>}>
				Dạng vật liệu
			</Menu.Item>
			<Menu.Item key={3} icon={<CalendarOutlined/>}>
				Mực
			</Menu.Item>
			<Menu.Item key={4} icon={<CalendarOutlined/>}>
				Vanish
			</Menu.Item>
			<Menu.Item key={5} icon={<CalendarOutlined/>}>
				Máy in
			</Menu.Item>
			<Menu.Item key={6} icon={<CalendarOutlined/>}>
				Màu in
			</Menu.Item>
			<Menu.Item key={7} icon={<CalendarOutlined/>}>
				Độ phân giải tram với độ phân giải trục Anilox
			</Menu.Item>
			<Menu.Item key={8} icon={<CalendarOutlined/>}>
				Độ phân giải tram với thể tích chứa mực
			</Menu.Item>
			<Menu.Item key={9} icon={<CalendarOutlined/>}>
				Tính chất hình ảnh
			</Menu.Item>
			<Menu.Item key={10} icon={<CalendarOutlined/>}>
				Độ phân giải tram với dao gạt mực
			</Menu.Item>
			<Menu.Item key={11} icon={<CalendarOutlined/>}>
				Bảng thông số khuyến cáo cho trục Anilox
			</Menu.Item>
		</Menu>
	);
};

SideBar.propTypes = {
	current: PropTypes.number.isRequired,
	change: PropTypes.func.isRequired
};

export default SideBar;