import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Alert, Button, Checkbox, Col, Divider, Form, Row } from "antd";

import { connect, useSelector } from "react-redux";

import * as reportActions from "../../actions/report.action";

const formItemLayout = (classId) => {
	if (classId === 3) {
		return {
			labelCol: { span: 6 },
			wrapperCol: { span: 18 }
		};
	} else {
		return {
			labelCol: { span: 8 },
			wrapperCol: { span: 16 }
		};
	}
};

const Artwork = ({ nextStep, prevStep, updateReport }) => {
	const [ form ] = Form.useForm();

	const artworks = useSelector(state => state.artwork.artworks);
	const printUnit = useSelector(state => state.report.current.printUnit);
	const classId = useSelector(state => state.report.current.classId);
	const artworkResolution = useSelector(state => state.report.current.artworkResolution);
	const colors = useSelector(state => state.report.current.colors);

	const varnishArtworkIds = artworks
		.filter(aw => aw.propertyName.includes("vanish"))
		.map(aw => aw.artworkId);

	const [ coloredArtworks, setColoredArtworks ] = useState([]);

	useEffect(() => {
		const numColored = coloredArtworks.map(item => item.colors ? item.colors.length : 0)
			.reduce((total, num) => total + num, 0);

		const uncheckedCheckbox = document.querySelectorAll(".artwork-colors-item input[type=checkbox]:not(:checked)");

		if (numColored >= printUnit) {
			uncheckedCheckbox.forEach(e => {
				e.disabled = true;
				e.closest(".ant-checkbox").classList.add("ant-checkbox-disabled");
				e.closest(".ant-checkbox-wrapper").classList.add("ant-checkbox-wrapper-disabled");
			});
		} else {
			uncheckedCheckbox.forEach(e => {
				e.disabled = false;
				e.closest(".ant-checkbox").classList.remove("ant-checkbox-disabled");
				e.closest(".ant-checkbox-wrapper").classList.remove("ant-checkbox-wrapper-disabled");
			});
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ coloredArtworks ]);

	const onColorArtworks = (artworkId, selectedColors) => {
		setColoredArtworks(prev => {
			const curr = prev.filter(item => item.artworkId !== artworkId);
			if (selectedColors.length > 0) {
				curr.push({
					artworkId,
					colors: selectedColors
				});
			}
			return curr;
		});
	};

	const onFinish = () => {
		const printedArtworks = [];

		let base = 1;

		coloredArtworks.forEach(item => {
			const artworks = item.colors.map((color, offset) => ({
				artworkId: item.artworkId,
				color,
				aniloxAxis: base + offset
			}));

			printedArtworks.push(...artworks);

			base = base + item.colors.length;
		});

		updateReport({ coloredArtworks: printedArtworks });

		nextStep();
	};

	return (
		<div className="artwork">
			<Form
				className="artwork-form" form={form} {...formItemLayout(classId)} name="artwork-form"
				layout="horizontal"
				onFinish={onFinish}
			>
				<Divider orientation="left">Artwork</Divider>
				{coloredArtworks.map(item => item.colors ? item.colors.length : 0)
					.reduce((total, num) => total + num, 0) === 0 && (
					<Alert
						style={{ marginBottom: 8 }} message="Please color at least one"
						type="error" showIcon closeable
					/>
				)}
				{artworks.filter(artwork => artwork.clazz.clazzId === classId)
					.filter(artwork => !artwork.propertyName.includes("lpi") || artwork.propertyName.includes(artworkResolution))
					.map(artwork => (
						<Form.Item
							key={artwork.artworkId} name={`artwork-${artwork.artworkId}`}
							label={artwork.propertyName}
						>
							<Checkbox.Group
								// disabled={!output.class.classId}
								className="artwork-colors"
								onChange={(selectedColors) => onColorArtworks(artwork.artworkId, selectedColors)}
							>
								{varnishArtworkIds.includes(artwork.artworkId) ? (
									<Col key={`${artwork.artworkId}`} flex={1}>
										<Checkbox className="artwork-colors-item" value="Vanish">Vanish</Checkbox>
									</Col>
								) : (
									<Row>
										{colors.map(color => (
											<Col key={`${artwork.artworkId}-${color}`} flex={1}>
												<Checkbox
													className="artwork-colors-item"
													value={color}
												>
													{color}
												</Checkbox>
											</Col>
										))}
									</Row>
								)}
							</Checkbox.Group>
						</Form.Item>
					))
				}
				<Divider/>
				<div className="step-navigation">
					<Form.Item>
						<Button
							className="step-button" type="secondary" size="large"
							onClick={prevStep}
						>
							Previous Step
						</Button>
					</Form.Item>
					<Form.Item>
						<Button
							className="step-button" type="primary" size="large"
							htmlType="submit"
							disabled={coloredArtworks.map(item => item.colors ? item.colors.length : 0)
								.reduce((total, num) => total + num, 0) === 0}
						>
							Finish
						</Button>
					</Form.Item>
				</div>
			</Form>
		</div>
	);
};

Artwork.propTypes = {
	nextStep: PropTypes.func.isRequired,
	prevStep: PropTypes.func.isRequired,
	updateReport: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
	updateReport: (payload) => dispatch(reportActions.update(payload))
});

export default connect(null, mapDispatchToProps)(Artwork);