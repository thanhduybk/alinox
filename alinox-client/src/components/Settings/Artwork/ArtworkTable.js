import React from "react";

import "./styles.scss";
import { useSelector } from "react-redux";
import { Spin, Table } from "antd";
import ArtworkFormWrapper from "../forms/ArtworkFormWrapper";

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
		title: "Image Property",
		dataIndex: "propertyName",
		sorter: {
			compare: (a, b) => a.propertyName.localeCompare(b.propertyName)
		},
		fixed: "left",
		width: 160
	},
	{
		title: "Material",
		dataIndex: [ "clazz", "type" ],
		filters: typesFilter,
		filterMultiple: true,
		onFilter: (value, record) => record.clazz.type === value
	},
	{
		title: "Resolution",
		dataIndex: "aniloxResolution"
	},
	{
		title: "Wiper's Thick",
		dataIndex: [ "wiper", "thick" ]
	},
	{
		title: "Ink Volume",
		dataIndex: "inkVolume"
	},
	{
		title: "Opening",
		dataIndex: "openDegree"
	},
	{
		title: "Wall",
		dataIndex: "thickDegree"
	},
	{
		title: "Cell Depth",
		dataIndex: "cellDepth"
	},
	{
		title: "D,O (%)",
		dataIndex: "doPercent"
	},
	{
		title: "Angle",
		dataIndex: "angle"
	},
	{
		title: "Shape",
		dataIndex: "shape"
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
			return <ArtworkFormWrapper artwork={record}/>;
		},
		key: "actions"
	}
];

const ArtworkTable = () => {
	const artworks = useSelector(state => state.artwork.artworks);
	const waiting = useSelector(state => state.artwork.waiting);

	return (
		<Spin tip="Waiting a few seconds..." spinning={waiting}>
			<div className="artwork-table setting-table">
				<Table
					dataSource={artworks}
					columns={columns}
					bordered
					rowKey="artworkId"
					rowClassName="artwork-table-row"
				/>
			</div>
		</Spin>
	);
};

ArtworkTable.propTypes = {};

export default ArtworkTable;