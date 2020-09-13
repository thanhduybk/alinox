import React from "react";
import { makeReadableShort } from "../../../util/DateUtil";
import { useSelector } from "react-redux";
import { Spin, Table } from "antd";

import "./styles.scss";
import EmployeeAddForm from "./EmployeeAddForm";
import EmployeeEditFormWrapper from "./EmployeeEditFormWrapper";

const roleFilter = [
	{
		text: "Root Administrator",
		value: "MASTER",
	},
	{
		text: "Group Manager",
		value: "MANAGER",
	},
	{
		text: "Employee",
		value: "EMPLOYEE"
	}
];

const columns = [
	{
		title: "Full Name",
		dataIndex: "name",
		sorter: {
			compare: (a, b) => a.name.localeCompare(b.name)
		},
		// eslint-disable-next-line react/display-name
		render: (text, record) => (
			<div style={{
				display: "inline-block"
			}}>
				{text} {record.me ?
				<span style={{
					marginLeft: 6,
					backgroundColor: "green",
					padding: "2px 6px",
					color: "white",
					borderRadius: "4px"
				}}> Me </span> : ""}
			</div>
		)
	},
	{
		title: "Username",
		dataIndex: "username",
	},
	{
		title: "Role",
		dataIndex: "role",
		filters: roleFilter,
		onFilter: (value, record) => record.role === value,
		// eslint-disable-next-line react/display-name
		render: text => (
			<div style={{
				display: "inline-block",
				backgroundColor: "MASTER" === text ? "red" : ("MANAGER" === text ? "blue" : "green"),
				padding: "4px 8px",
				color: "white"
			}}>{`${text.charAt(0)}${text.substring(1).toLowerCase()}`}</div>
		)
	},
	{
		title: "Created At",
		dataIndex: "createdAt",
		render: text => makeReadableShort(new Date(text))
	},
	{
		title: "Actions",
		// eslint-disable-next-line react/display-name
		render: (_, record) => {
			return <EmployeeEditFormWrapper employee={record}/>;
		}
	}
];

const EmployeeTable = () => {
	const employees = useSelector(state => state.employee.employees);
	const waiting = useSelector(state => state.employee.waiting);

	return (
		<Spin tip="Waiting a few seconds..." spinning={waiting}>
			<div className="employee-table setting-table">
				<Table
					dataSource={employees}
					columns={columns}
					bordered
					rowKey="employeeId"
					rowClassName="employee-table-row"
				/>
				<EmployeeAddForm/>
			</div>
		</Spin>
	);
};

EmployeeTable.propTypes = {};

export default EmployeeTable;