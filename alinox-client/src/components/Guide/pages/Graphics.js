import React from "react";

const Graphics = () => {
	return (
		<div className="guide">
			<div className="section">Khái quát về tính chất hình ảnh</div>
			<div className="content">
				<p>Tính chất hình ảnh là yếu tố quan trọng nhất trong việc lựa chọn các thông số cho trục Anilox sao cho
					việc in được kết quả tốt nhất.</p>
				<p><b>Ví dụ:</b> Khi in nền, nét thì đòi hỏi lớp mực in dày hơn khi in hình ảnh tầng thứ. Hay khi tráng
					phủ
					varnish, lót trắng (đối với sản phẩm dạng màng) thì cần một lớp mực rất dày để có thể</p>
				<p>Phụ thuộc vào tính chất sản phẩm in để lựa chọn tần số và thể tích chứa mực của trục Anilox cho phù
					hợp.</p>
			</div>
			<div className="section">Đặc điểm đặc trưng của tính chất hình ảnh</div>
			<div className="content">
				<p>Tiêu chí thiết kế và xử lý dữ liệu file Artwork có thể tham khảo thêm ở phần phụ lục theo đường dẫn
					trên:</p>
				<table className="table">
					<tbody>
						<tr className="center bold">
							<td>STT</td>
							<td>Tiêu chí</td>
							<td>Nộidung đánh giá</td>
							<td>Giảithích</td>
						</tr>
						<tr>
							<td rowSpan="2" className="center">1</td>
							<td rowSpan="2" className="center">Tram</td>
							<td>Loại tram:AM vì mang tính thông
							dụng.
							</td>
							<td rowSpan="2">Góc xoay tram và loại tram sửdụng dựa
							vào tiêu chuẩn ISO 12647 – 6 để tham khảo cho ra được khả năng phụcchế là
							tốt nhất
							</td>
						</tr>
						<tr>
							<td>Góc xoay tram:Dựa theo tiêu chuẩn ISO 12647 – 6. Để
							tránh hiện tượng moire, lệch 7.50 sovới quá trình in Offset dùng cho tram
							AM: C: 750 – K: 37.50– M: 67.50 – Y: 82.50&nbsp;</td>
						</tr>
						<tr>
							<td rowSpan="7" className="center">2</td>
							<td rowSpan="7" className="center">Phân tích bài mẫu</td>
							<td>Xác định đối tượng bitmap/tram (Có/Không?)</td>
							<td rowSpan="7">Việc phân tích bài mẫu để tínhtoán đến
							khả năng tách / ghép trục Anilox sao cho tối ưu nhất và đảm bảo đượcchất
							lượng bài in in ra được tốt nhất.
							</td>
						</tr>
						<tr>
							<td>Xác định đối tượng Text(Có/Không?)
							</td>
						</tr>
						<tr>
							<td>Xác định đối tượng in nền/ đườngline
							đậm
							</td>
						</tr>
						<tr>
							<td>Xác định đối tượng in nền đậm,có lót
							trắng
							</td>
						</tr>
						<tr>
							<td>Xác định đối tượng là đườngline mảnh/chi tiết
							nhỏ
							</td>
						</tr>
						<tr>
							<td>Xác định đối tượng là hình mờ</td>
						</tr>
						<tr>
							<td>Tráng phủ varnish (Có/Không?)</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="section">Các mối liên hệ hay ảnh hưởng của tính chất hình ảnh đến quá trình chọn trục
				Anilox
			</div>
			<div className="content">
				<p>Trục Anilox phải phù hợp với tính chất sản phẩm in: khi in nền, nét thì đòi hỏi lớp mực in dày hơn
					khi in hình ảnh tầng thứ. </p>
				<p>Phụ thuộc vào tính chất sản phẩm in để lựa chọn tần số và thể tích chứa mực của trục Anilox cho phù
					hợp.</p>
				<p>Theo khuyến khích của nhà cung cấp trục Anilox của <b>Harper Corporation of America</b> đã đưa ra bảng thông
					số lựa chọn trục theo tính chất hình ảnh</p>
				<table className="table">

					<tbody className="center">
						<tr className="bold">
							<td>Tính chất hình ảnh (bài mẫu)</td>
							<td>Tần số Anilox (lines/inch)</td>
							<td>Thể tích (BCM)</td>
						</tr>
						<tr>
							<td>Đường và in nền</td>
							<td>180 – 330 </td>
							<td>8 – 4 </td>
						</tr>
						<tr>
							<td>Chữ / đường thẳng</td>
							<td>200 – 400 </td>
							<td>7.5 – 3.5 </td>
						</tr>
						<tr>
							<td>Hình trang trí (mờ)</td>
							<td>360 – 500 </td>
							<td>4.7 – 2.8 </td>
						</tr>
						<tr>
							<td>Process (4 màu)</td>
							<td>500 – 1200 </td>
							<td>3.2 – 1.0</td>
						</tr>
						<tr>
							<td>Phủvarnish</td>
							<td>250 – 400 </td>
							<td>5.0 – 8.0 </td>
						</tr>
						<tr>
							<td>Innền đậm có lót trắng</td>
							<td>180 – 250 </td>
							<td>8.0 – 11.5 </td>
						</tr>
					</tbody>
				</table>
				<div className="title">Mối liên hệ giữa trục Anilox và tính chất hình ảnh theo từng loại vật liệu in</div>
				<table className="table">
					<tbody>
						<tr>
							<td colSpan="5" className="bold">MỐI LIÊN HỆ GIỮA TRỤC ANILOX VÀ TÍNH CHẤT
							HÌNH ẢNH</td>
						</tr>
						<tr className="bold">
							<td rowSpan="2">Tính chất hình ảnh in</td>
							<td colSpan="2">Độ phân giải trục Anilox</td>
							<td colSpan="2">Thể tích chứa mực</td>
						</tr>
						<tr className="bold center" >
							<td>L/Inch</td>
							<td>L/cm</td>
							<td>BCM/in2</td>
							<td>Cm3/m2</td>
						</tr>
						<tr className="bold">
							<td colSpan="5">Carton gợn sóng</td>
						</tr>
						<tr>
							<td>Tram &lt; 85 LPI</td>
							<td>300-550</td>
							<td>118-217</td>
							<td>4.1-7.9</td>
							<td>6.4-12.2</td>
						</tr>
						<tr>
							<td>Kết hợp in tram và in nền (dao gạt mực)</td>
							<td>330-550</td>
							<td>130-217</td>
							<td>4.1-7.4</td>
							<td>6.4-11.5</td>
						</tr>
						<tr>
							<td>Kết hợp in tram và in nền (dao gạt mực bằng cao su)
							</td>
							<td>250-400</td>
							<td>98-157</td>
							<td>4.0-6.9</td>
							<td>6.2-10.7</td>
						</tr>
						<tr>
							<td>Kết hợp in đường và chữ (dao gạt mực)</td>
							<td>300-500</td>
							<td>118-197</td>
							<td>4.7-7.9</td>
							<td>7.3-12.2</td>
						</tr>
						<tr>
							<td>Kết hợp in đường và chữ (dao gạt mực bằng cao su)
							</td>
							<td>250-360</td>
							<td>98-142</td>
							<td>4.5-6.9</td>
							<td>6.9-10.7</td>
						</tr>
						<tr>
							<td>Kết hợp in đường và nền (dao gạt mực)</td>
							<td>300-400</td>
							<td>118-157</td>
							<td>5.6-7.9</td>
							<td>8.7-12.2</td>
						</tr>
						<tr>
							<td>Đường thẳng và in nền (dao gạt mực bằng cao su)</td>
							<td>220-300</td>
							<td>87-118</td>
							<td>5.5-7.7</td>
							<td>8.6-11.9</td>
						</tr>
						<tr>
							<td>In nền toàn bộ khuôn in và phủ varnish (dao gạt
							mực)</td>
							<td>250-330</td>
							<td>98-130</td>
							<td>7.4-9.9</td>
							<td>11.5-15.3</td>
						</tr>
						<tr>
							<td>In nền toàn bộ khuôn in và phủ varnish (dao gạt
							mựcbằng cao su)</td>
							<td>180-250</td>
							<td>71-98</td>
							<td>6.9-9.6</td>
							<td>10.7-14.8</td>
						</tr>
						<tr>
							<td colSpan="5"> </td>
						</tr>
						<tr className="bold">
							<td colSpan="5">Bao bì giấy (Giấy không tráng
							phủ)</td>
						</tr>
						<tr>
							<td>Tram &gt; 85 LPI</td>
							<td>400-660</td>
							<td>157-260</td>
							<td>3.2-5.6</td>
							<td>4.9-8.7</td>
						</tr>
						<tr>
							<td>45 LPI &lt; Tram &lt; 85 LPI</td>
							<td>300-550</td>
							<td>118-217</td>
							<td>4.1-7.9</td>
							<td>6.4-12.2</td>
						</tr>
						<tr>
							<td>Kết hợp in tram và in nền (dao gạt mực)</td>
							<td>330-550</td>
							<td>130-217</td>
							<td>4.1-7.4</td>
							<td>6.4-11.5</td>
						</tr>
						<tr>
							<td>Kết hợp in tram và in nền (dao gạt mực bằng cao su)
							</td>
							<td>250-400</td>
							<td>98-157</td>
							<td>4.0-6.9</td>
							<td>6.2-10.7</td>
						</tr>
						<tr>
							<td>Kết hợp in đường và chữ (dao gạt mực)</td>
							<td>300-500</td>
							<td>118-197</td>
							<td>4.7-7.9</td>
							<td>7.3-12.2</td>
						</tr>
						<tr>
							<td>Kết hợp in đường và chữ (dao gạt mực bằng cao su)
							</td>
							<td>250-360</td>
							<td>98-142</td>
							<td>4.5-6.9</td>
							<td>6.9-10.7</td>
						</tr>
						<tr>
							<td>Kết hợp in đường và nền (dao gạt mực)</td>
							<td>300-400</td>
							<td>118-157</td>
							<td>5.6-7.9</td>
							<td>8.7-12.2</td>
						</tr>
						<tr>
							<td>Đường thẳng và in nền (dao gạt mực bằng cao su)</td>
							<td>220-300</td>
							<td>87-118</td>
							<td>5.5-7.7</td>
							<td>8.6-11.9</td>
						</tr>
						<tr>
							<td>In nền toàn bộ khuôn in và phủ varnish (dao gạt
							mực)</td>
							<td>250-330</td>
							<td>98-130</td>
							<td>7.4-9.9</td>
							<td>11.5-15.3</td>
						</tr>
						<tr>
							<td>In nền toàn bộ khuôn in và phủ varnish (dao gạt
							mựcbằng cao su )</td>
							<td>180-250</td>
							<td>71-98</td>
							<td>6.9-9.6</td>
							<td>10.7-14.8</td>
						</tr>
						<tr>
							<td colSpan="5"> </td>
						</tr>
						<tr>
							<td className="bold" colSpan="5">Bao bì giấy (Giấy
							trángphủ)</td>
						</tr>
						<tr>
							<td>Tram</td>
							<td>600-800</td>
							<td>236-315</td>
							<td>2.0-2.6</td>
							<td>3.1-4.0</td>
						</tr>
						<tr>
							<td>Kết hợp in tram và in nền (dao gạt mực)</td>
							<td>330-550</td>
							<td>130-217</td>
							<td>4.1-7.4</td>
							<td>6.4-11.5</td>
						</tr>
						<tr>
							<td>Kết hợp in tram và in nền (dao gạt mực bằng cao su)
							</td>
							<td>250-400</td>
							<td>98-157</td>
							<td>4.0-6.9</td>
							<td>6.2-10.7</td>
						</tr>
						<tr>
							<td>Kết hợp in đường và chữ (dao gạt mực)</td>
							<td>300-500</td>
							<td>118-197</td>
							<td>4.7-7.9</td>
							<td>7.3-12.2</td>
						</tr>
						<tr>
							<td>Kết hợp in đường và chữ (dao gạt mực bằng cao su)
							</td>
							<td>250-360</td>
							<td>98-142</td>
							<td>4.5-6.9</td>
							<td>6.9-10.7</td>
						</tr>
						<tr>
							<td>Kết hợp in đường và nền (dao gạt mực)</td>
							<td>300-400</td>
							<td>118-157</td>
							<td>5.6-7.9</td>
							<td>8.7-12.2</td>
						</tr>
						<tr>
							<td>Đường thẳng và in nền (dao gạt mực bằng cao su)</td>
							<td>220-300</td>
							<td>87-118</td>
							<td>5.5-7.7</td>
							<td>8.6-11.9</td>
						</tr>
						<tr>
							<td>In nền toàn bộ khuôn in và phủ varnish (dao gạt
							mực)</td>
							<td>250-330</td>
							<td>98-130</td>
							<td>7.4-9.9</td>
							<td>11.5-15.3</td>
						</tr>
						<tr>
							<td>In nền toàn bộ khuôn in và phủ varnish (dao gạt
							mực bằng cao su )</td>
							<td>180-250</td>
							<td>71-98</td>
							<td>6.9-9.6</td>
							<td>10.7-14.8</td>
						</tr>
						<tr>
							<td className="bold" colSpan={5}>Bao bì mềm (Film / foil)</td>
						</tr>
						<tr>
							<td>Tram 120 – 150 LPI</td>
							<td>500-1200</td>
							<td>197-315</td>
							<td>2.0-2.6</td>
							<td>3.1-4.0</td>
						</tr>
						<tr>
							<td>Tram 85 – 120 LPI</td>
							<td>440-700</td>
							<td>173-276</td>
							<td>2.5-4.0</td>
							<td>3.9-6.2</td>
						</tr>
						<tr>
							<td>Tram và in nền (kết hợp với dao gạt mực)</td>
							<td>440-700</td>
							<td>173-276</td>
							<td>4.0-6.0</td>
							<td>6.2-9.3</td>
						</tr>
						<tr>
							<td>Tram và chữ</td>
							<td>360-500</td>
							<td>142-197</td>
							<td>3.5-5.0</td>
							<td>5.4-7.8</td>
						</tr>
						<tr>
							<td>Đường thẳng và chữ</td>
							<td>300-440</td>
							<td>118-173</td>
							<td>4.0-6.0</td>
							<td>6.2-9.3</td>
						</tr>
						<tr>
							<td>Đường thẳng và nền</td>
							<td>250-400</td>
							<td>98-157</td>
							<td>5.5-7.8</td>
							<td>8.5-12.1</td>
						</tr>
						<tr>
							<td>Nền</td>
							<td>200-330</td>
							<td>79-130</td>
							<td>6.5-9.0</td>
							<td>10.1-14.0</td>
						</tr>
						<tr>
							<td>Nền có lót trắng</td>
							<td>180-250</td>
							<td>71-98</td>
							<td>8.0-11.5</td>
							<td>12.4-17.8</td>
						</tr>
					</tbody>
				</table>
				
			</div>
		</div>
	);
};

export default Graphics;