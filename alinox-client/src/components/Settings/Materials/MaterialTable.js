import React from "react";
import { Spin, Table } from "antd";
import { useSelector } from "react-redux";
import { makeReadable } from "../../../util/DateUtil";

import "./styles.scss";
import MaterialEditFormWrapper from "../forms/MaterialFormWrapper";
import MaterialAddForm from "../forms/MaterialAddForm";

const typesFilter = [
	{
		text: "Uncoated paper",
		value: "Uncoated paper"
	},
	{
		text: "Coated paper",
		value: "Coated paper"
	},
	{
		text: "Film / foil",
		value: "Film / foil"
	},
	{
		text: "Carton",
		value: "Carton"
	}
];

const columns = [
	{
		title: "Name of Material",
		dataIndex: "name",
		sorter: {
			compare: (a, b) => a.name.localeCompare(b.name),
		},
		key: "material-name"
	},
	{
		title: "Type of Material",
		dataIndex: [ "clazz", "type" ],
		key: "material-type",
		filters: typesFilter,
		filterMultiple: true,
		onFilter: (value, record) => record.clazz.type === value
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
			return <MaterialEditFormWrapper material={record}/>;
		},
		key: "actions"
	}
];

const MaterialTable = () => {
	const materials = useSelector(state => state.material.materials);
	const waiting = useSelector(state => state.material.waiting);

	return (
		<Spin tip="Waiting a few seconds..." spinning={waiting}>
			<div className="material-table setting-table">
				<Table
					dataSource={materials}
					columns={columns}
					bordered
					rowKey="materialId"
					rowClassName={() => "material-table-row"}
				/>
				<MaterialAddForm />
			</div>
		</Spin>
	);
};

export default MaterialTable;