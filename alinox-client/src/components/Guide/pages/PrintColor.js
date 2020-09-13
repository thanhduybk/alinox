import React from "react";

const PrintColor = () => {
	return (
		<div className="guide" style={{ marginTop: 16 }}>
			<p>Xác định số màu trong một bài in, (có thể có tráng phủ varnish, lót trắng,…) là một trong những yếu tố
				liên quan đến việc xác định số lượng trục Anilox cần dùng cho một bài in.</p>
			<p>Tổng số màu trong một file Artwork sử dụng bao gồm màu Process (Cyan, Magenta, Yellow, Black) + màu Spot
				(Orange, Violet, Green,…)</p>
			<p>Theo chuẩn của <b>Flexographic Image Reproduction Specifications and Tolerances 5.1 FIRST 5</b> thì tất
				cả các
				file thiết kế nên sử dụng tối đa 10 màu (bao gồm cả lót trắng và tráng phủ varnish)</p>
			<p>Về màu Process: Với xu hướng hiện nay, để hình ảnh có tính chân thật và sắc nét và để màu đen ở hình ảnh
				được đen huyền mà không ngả về xám, thì các nhà in có xu hướng in màu Process, in bằng các màu process
				là hệ thống của việc tái tạo nhiều màu bằng 3 màu mực in tiêu chuẩn với sự phối hợp và cân đối, có thể
				thêm đen để tăng tính tương phản của bài in. Thông thường dùng màu process để in hình bitmap hay in
				tram.</p>
			<p>Về màu Spot: Có những trường hợp cần phải được sử dụng màu pha hoặc ưu tiên sử dụng màu pha. (Nếu có sử
				dụng màu pha ưu tiên lựa chọn màu pha có trong bảng Swatch để có thể dễ dàng phục chế, cách đặt tên màu
				pha cũng rất quan trọng trong việc lưu trữ file). Những trường hợp đó được thể hiện sau đây:</p>
			<ul>
				<li>Thường sử dụng in logo thương hiệu, màu nền,… để tạo ra màu sắc mang tính đặc trưng của một thương
					hiệu hay tính nhất quán trong toàn bộ dòng sản phẩm của một thương hiệu.
				</li>
				<li>Sử dụng màu pha cho text để tối ưu việc chồng nhiều màu ở chữ dẫn đến làm chữ bị mất nét, bị nhòe
					khó đọc.
				</li>
				<li>Không phải lúc nào màu pha khi chuyển sang màu CMYK cũng duy trì được độ sáng tốt hay giống với sắc
					màu gốc ban đầu. Nên có thể dùng màu pha cho trường hợp này để duy trì sắc thái cũng như độ sáng về
					màu.
				</li>

			</ul>
		</div>
	);
};

export default PrintColor;