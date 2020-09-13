import React from "react";

const Printer = () => {
	return (
		<div className="guide">
			<div className="section">Khái niệm về máy in Flexo</div>
			<div className="content">
				<p>Trên thực tế, nếu điều kiện sản xuất cho phép người ta có thể đặt làm các trục Anilox có các tần số
					khác nhau với thể tích chứa mực khác nhau trên cùng một trục. </p>
				<p>Như vậy, số lượng trục Anilox trung bình vào khoảng 20 – 30 trục cho một máy in 6 màu khi in trên
					giấy, màng.
				</p>
				<p><b>Ví dụ:</b> Đối với máy in màng khổ lớn sẽ sử dụng trục Anilox 220 đường với thể tích là 7.7
					BCM/in2 để in nền lớn, trong khi máy in hộp dạng sóng sử dụng trục 180 đường với thể tích 9.5 để in
					cùng hình ảnh lên bìa dày. </p>
				<p>Đặc trưng của in Flexo là một phương pháp in cao trực tiếp dạng trục quay có các phần tử in cao hơn
					phần tử không in và bản in sử dụng là cao su hay photopolymer có tính đàn hồi. Bản in được gắn vào
					trục bản có các chu vi khác nhau và được chà mực bởi lô định lượng mực (lô Anilox) có cấu trúc các
					vi lỗ, có thể có hoặc không có hệ thống dao gạt mực. Mực in dạng lỏng có khả năng khô nhanh truyền
					lên khuôn in và chúng được in lên bất kỳ một loại vật liệu nào, cả vật liệu thấm hút hay không thấm
					hút.</p>
			</div>

			<div className="section">Đặc điểm đặc trưng của máy in Flexo</div>
			<div className="content">
				<p>Dựa vào thiết kế, màu in và khổ in mà máy in Flexo được phân chia thành các loại khác nhau. Mỗi loại
					máy in được sử dụng với mục đích cụ thể khác nhau sao cho phù hợp với loại bản in khác nhau.</p>
				<p>Sau đây là bảng phân loại máy in:</p>
				<table className="table">
					<tbody>
						<tr>
							<td className="center" colSpan={2}><b>Phân loại máy in theo thiết kế</b></td>
						</tr>
						<tr>
							<td className="center">Máy in Flexo dạng chồng đứng</td>
							<td>
								<p>Các lô (lô máng mực, trục Anilox, lô bản in, lô ép in) xếp chồng lên nhau</p>
								<p>Máy in dạng này có từ 1 – 4 màu, hoặc lên đến 8 màu (phụ thuộc vào cách sắp xếp các
								trục)</p>
								<p>Có thể in 2 mặt</p>
							</td>
						</tr>
						<tr>
							<td className="center">Máy in Flexo dạng nằm</td>
							<td>
								<p>Các lô được xếp theo hàng ngang, các đơn vị in nối tiếp nhau thành dãy dài</p>
								<p>Kết hợp với các đơn vị như cắt, bế, cán màng,… inline</p>
								<p>Có thể in 2 mặt</p>
								<p>Có thể nhiều đơn vị in</p>
							</td>
						</tr>
						<tr>
							<td className="center" colSpan={2}><b>Phân loại theo số lượng màu in</b></td>
						</tr>
						<tr>
							<td className="center">Máy in Flexo 2 màu</td>
							<td>
							Thường để in bìa carton đơn giản hay các bài in chỉ có 1 tới 2 màu và không yêu cầu chất
							lượng bản in quá cao.
							</td>
						</tr>
						<tr>
							<td className="center">Máy in Flexo 4 màu</td>
							<td>
							Thường được sử dụng nhiều, cho bản in màu sắc đẹp, chân thực.
							</td>
						</tr>
						<tr>
							<td className="center">Máy in Flexo 6 màu</td>
							<td>
							In các ấn phẩm nhiều màu sắc. Kết hợp với thành phẩm inline.
							</td>
						</tr>


					</tbody>

				</table>
				<p>Dựa vào các sản phẩm in cũng có thể phân loại được các máy in sử dụng. Việc sử dụng máy in phù hợp
					cho từng loại sản phẩm in giúp hạn chế thời gian canh chỉnh hệ thống máy in, in tốt trên loại sản
					phẩm đó,… Sau đây là bảng phân loại máy in theo sản phẩm in:</p>
				<table className="table">
					<thead className="header">
						<tr>
							<td>Máy in</td>
							<td>Sản phẩm in</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Máy in CI, Stack (khổ lớn)</td>
							<td>Tất cả các sản phẩm bao bì từ bao bì giấy đến bao bì mềm.</td>
						</tr>
						<tr>
							<td>Máy in inline khổ nhỏ</td>
							<td>In nhãn, decal, tag, mác và bao bì giấy dạng hộp.</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div className="section">Các mối liên hệ hay ảnh hưởng của máy in Flexo đến quá trình chọn trục Anilox</div>
			<div className="content">
				<p>Có 2 yếu tố ảnh hưởng trực tiếp đến trục Anilox là số đơn vị in và khổ máy in. Vì xác định số đơn vị
					trên máy in để có thể biết được tối đa gắn được bao nhiêu trục Anilox trên một máy in, còn yếu tố về
					khổ máy in thì giúp ta xác định được chiều dài của trục Anilox. Ngoài ra còn phải xác định thêm máy
					in có đơn vị sấy UV - (đơn vị sấy liên quan đến việc lựa chọn mực in) và có hay không đơn vị thành
					phẩm inline, vì nó ảnh hưởng đến quá trình gia công sau in. </p>
				<table className="table">
					<tbody>
						<tr>
							<td className="center" rowSpan={2}><b>Sản phẩm in</b></td>
							<td className="center" colSpan={3}><b>Trục Anilox</b></td>
						</tr>
						<tr>
							<td className="center"><b>Góc</b></td>
							<td className="center"><b>Tần số (lines/cm)
							</b></td>
							<td className="center"><b>Thể tích cell (cm³/m²)
							</b></td>
						</tr>
						<tr>
							<td colSpan={4}><b>Máy in in-line (tờ rời, cuộn)</b></td>
						</tr>
						<tr>
							<td>In 4 màu process</td>
							<td>45</td>
							<td>170</td>
							<td>5.5- 3.5</td>
						</tr>
						<tr>
							<td>In 4 màu process / chữ</td>
							<td>45</td>
							<td>14</td>
							<td>7.0</td>
						</tr>
						<tr>
							<td>Đường thẳng / chữ</td>
							<td>45 hoặc 60</td>
							<td>100-120</td>
							<td>8-12</td>
						</tr>
						<tr>
							<td>In nền</td>
							<td>60</td>
							<td>80-100</td>
							<td>14.5-12</td>
						</tr>
						<tr>
							<td>Nền đậm, lót trắng</td>
							<td>60</td>
							<td>60</td>
							<td>18-20</td>
						</tr>
						<tr>
							<td colSpan={4}><b>In nhãn, hộp bao bì giấy (in-line machine, narrow web)</b></td>
						</tr>
						<tr>
							<td>In 4 màu process</td>
							<td>45</td>
							<td>180-255</td>
							<td>4.8-2.9</td>
						</tr>
						<tr>
							<td>Đường thẳng / chữ</td>
							<td>45</td>
							<td>120-140</td>
							<td>3.5-6.5</td>
						</tr>
						<tr>
							<td>In nền</td>
							<td>60</td>
							<td>100-120</td>
							<td>8-12</td>
						</tr>
						<tr>
							<td>Nền đậm</td>
							<td>60</td>
							<td>8</td>
							<td>14.5-18</td>
						</tr>
					</tbody>

				</table>
			</div>
		</div>
	);
};

export default Printer;