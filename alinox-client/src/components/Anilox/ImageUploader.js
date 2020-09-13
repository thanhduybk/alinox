import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal, Upload } from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";

const getBase64 = (file) => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = err => reject(err);
	});
};

const ImageUploader = ({ onSelectImage }) => {
	const [ fileList, setFileList ] = useState([]);
	const [ previewVisible, setPreviewVisible ] = useState(false);
	const [ previewImage, setPreviewImage ] = useState("");
	const [ previewTitle, setPreviewTitle ] = useState("");

	const handleCancel = () => {
		setPreviewVisible(false);
	};

	const handlePreview = async file => {
		if (!file.url || !file.preview) {
			file.preview = await getBase64(file.originFileObj);
		}

		setPreviewImage(file.url || file.preview);
		setPreviewVisible(true);
		setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf("/") + 1));
	};

	const handleChange = ({ fileList }) => {
		setFileList(fileList);
		onSelectImage(fileList.length > 0 ? fileList[0].originFileObj : null);
	};

	return (
		<div className="image-uploader">
			<Upload
				listType="picture-card"
				fileList={fileList}
				onPreview={handlePreview}
				onChange={handleChange}
				accept=".jpg,.png,.jpeg"
				beforeUpload={() => {
					return false;
				}}
			>
				{fileList.length >= 1 ? null : (<span><CloudUploadOutlined/> Upload</span>)}
			</Upload>
			<Modal
				visible={previewVisible}
				title={previewTitle}
				footer={null}
				onCancel={handleCancel}
			>
				<img alt="example" style={{ width: "100%" }} src={previewImage}/>
			</Modal>
		</div>
	);
};

ImageUploader.propTypes = {
	onSelectImage: PropTypes.func.isRequired,
};

export default ImageUploader;