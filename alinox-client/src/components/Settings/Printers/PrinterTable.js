import React from "react";
import { makeReadable } from "../../../util/DateUtil";
import { Spin, Table } from "antd";
import { useSelector } from "react-redux";
import PrinterFormWrapper from "../forms/PrinterFormWrapper";
import PrinterAddForm from "../forms/PrinterAddForm";

import "./styles.scss";

const columns = [
	{
		title: "Name",
		dataIndex: "name",
		key: "name",
		sorter: {
			compare: (a, b) => a.name.localeCompare(b.name)
		},
		fixed: "left",
		width: 200
	},
	{
		title: "Rolling Size",
		children: [
			{
				title: "Length",
				children: [
					{
						title: "Max",
						dataIndex: "maxRh"
					},
					{
						title: "Min",
						dataIndex: "minRh"
					}
				]
			},
			{
				title: "Width",
				children: [
					{
						title: "Max",
						dataIndex: "maxRw"
					},
					{
						title: "Min",
						dataIndex: "minRw"
					}
				]
			}
		]
	},
	{
		title: "Printing Size",
		children: [
			{
				title: "Length",
				children: [
					{
						title: "Max",
						dataIndex: "maxPh"
					},
					{
						title: "Min",
						dataIndex: "minPh"
					}
				]
			},
			{
				title: "Width",
				children: [
					{
						title: "Max",
						dataIndex: "maxPw"
					},
					{
						title: "Min",
						dataIndex: "minPw"
					}
				]
			}
		]
	},
	{
		title: "Units",
		dataIndex: "printUnit"
	},
	{
		title: "Last Updated",
		dataIndex: "updatedAt",
		key: "last-updated",
		render: text => makeReadable(new Date(text))
	},
	{
		title: "Category",
		// eslint-disable-next-line react/display-name
		render: (_, record) => {
			const color = !record.state ? "blue" : "green";

			return (
				<div style={{
					display: "inline",
					padding: "4px 8px",
					backgroundColor: color,
					borderRadius: 4,
					color: "white"
				}}
				>
					{!record.state ? "Built-in" : "Customized"}
				</div>
			);
		},
		key: "category"
	},
	{
		title: "Actions",
		// eslint-disable-next-line react/display-name
		render: (_, record) => {
			return <PrinterFormWrapper printer={record} />;
		},
		key: "actions"
	}
];

const PrinterTable = () => {
	const printers = useSelector(state => state.printer.printers);
	const waiting = useSelector(state => state.printer.waiting);

	return (
		<Spin tip="Waiting a few seconds..." spinning={waiting}>
			<div className="printer-table setting-table">
				<Table
					dataSource={printers}
					columns={columns}
					bordered
					rowKey="printerId"
					rowClassName={() => "printer-table-row"}
				/>
				<PrinterAddForm />
			</div>
		</Spin>
	);
};

PrinterTable.propTypes = {
	
};

export default PrinterTable;