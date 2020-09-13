import React from "react";
import Material1 from "../../../asserts/images/guides/material-1.png";
import Material2 from "../../../asserts/images/guides/material-2.png";

const Material = () => {
	return (
		<div className="guide">
			<div className="section">Khái quát về các dạng vật liệu</div>
			<div className="content">
				<p>Vật liệu in trong in Flexo là yếu tố quan trọng để xác định và lựa chọn trục Anilox vì nó mang yếu tố
					quyết định đến chất lượng của sản phẩm in ấn. Thị trường hiện nay có khá nhiều loại vật liệu in khác
					nhau. Mỗi loại giấy in sẽ có những đặc điểm và tính chất khác nhau. Bề mặt vật liệu in cũng chính là
					nguyên nhân chính gây nên hiện tượng sai lệch về màu sắc khi cùng một thông số màu, nhưng in trên
					nhiều loại giấy khác nhau. Ánh sáng khi phản xạ lại trên các bề mặt có độ bằng phẳng khác nhau thì
					sẽ khác nhau. Ví dụ, bề mặt lồi lõm sần sùi (khi soi kính hiển vi) của giấy không tráng phủ sẽ ít
					phản xạ ánh sáng hơn bề mặt trơn nhẵn của giấy tráng phủ. Đó là lý do tại sao giấy càng láng bóng
					thì màu sắc hiển thị lên đó càng rực rỡ. Ngược lại, giấy càng thô, nhám thì màu sắc sẽ càng nhạt
					nhòa, sai lệch và dễ bị xuống màu. Vì vậy phải phân biệt được loại giấy theo mục đích sử dụng.</p>
				<p><b>Ví dụ liên quan về dạng vật liệu đến trục Anilox:</b> Đối với dạng vật liệu là giấy có phủ một lớp
					tráng
					phủ ở bề mặt giấy dẫn tới khả năng thấm hút mực kém thì lúc này sự phân bố của cell trên trục Anilox
					sẽ nhiều hơn giấy không tráng phủ, bởi lẽ sự phân bố cell nhiều thì thành vách ngăn của cell cũng
					nhiều mà các thành vách ngăn lại không mang mực nên hạn chế việc truyền mực nhiều lên bề mặt không
					thấm hút. Mực truyền nhiều lên bề mặt không thấm hút mà ta không kiểm soát được sẽ dẫn tới sự gia
					tăng tầng thứ xảy ra trong quá trình in, hoặc gây ra dơ bản in,…</p>
			</div>

			<div className="section">Đặc điểm đặc trưng của các loại vật liệu</div>
			<div className="content">
				<p>Về tính chất vật liệu in thì có rất nhiều các đặc tính, nhưng tính chất liên quan đến sự lựa chọn
					trục là tính chất thấm hút của vật liệu hay nói cách khác là khả năng mao dẫn, vì nó miêu tả được sự
					truyền mực từ các ô chứa mực lên bề mặt vật liệu in. Sau đây là bảng tính chất đặc trưng của giấy
					tráng phủ và giấy không tráng phủ và những loại giấy thông dụng.</p>
				<table className="table">
					<thead className="header">
						<tr>
							<td style={{ width: "10%" }} className="center" colSpan={2}>
							Đặc tính của giấy không tráng phủ
							</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td style={{ width: "20%" }}><b>Khái niệm</b></td>
							<td>Là loại giấy được tạo nên bởi các xớ sợi cellulose có nguồn gốc từ thực vật tự dính lấy nhau
							bởi liên kết hydro mà không có thêm bất kỳ chất kết dính hay chất phụ gia nào hỗ trợ.
							</td>
						</tr>
						<tr>
							<td><b>Bề mặt giấy</b></td>
							<td>Bề mặt giấy nhám, không láng bóng. Thậm chí khi nhìn dưới kính hiển vi còn thấy rõ được độ
							sần sùi của bề mặt. Thông thường khi in ấn trên loại giấy này, độ sắc nét hình ảnh chỉ đạt
							mức trung bình. Tuy nhiên còn tùy vào các đặc tính khác như độ trắng, độ cán láng,… khác
							nhau mà giấy không tráng phủ cũng cho ra chất lượng màu sắc hình ảnh cũng khác nhau.
							</td>
						</tr>
						<tr>
							<td><b>Khả năng bám mực</b></td>
							<td>Khả năng bám mực của giấy không tráng phủ tốt do tính chất bề mặt dẫn tới sự tương tác của
							giấy với chất lỏng tốt.
							</td>
						</tr>
						<tr>
							<td colSpan={2} style={{ textAlign: "center" }}>
								<img src={Material1} alt="material-1"/>
							</td>
						</tr>
					</tbody>
				</table>
				<table className="table">
					<thead className="header">
						<tr>
							<td style={{ width: "10%" }} className="center" colSpan={2}>
							Đặc tính của giấy tráng phủ
							</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td style={{ width: "20%" }}><b>Khái niệm</b></td>
							<td>Là loại giấy được tráng phủ một lớp phụ gia (thường là cao lanh trộn với nhựa thông). Lớp
							tráng phủ này sẽ lấp đầy những lỗ trống trên bề mặt giấy.
							</td>
						</tr>
						<tr>
							<td><b>Bề mặt giấy</b></td>
							<td>Bề mặt giấy láng mịn hơn giấy không tráng phủ, tính chất này giúp cải thiện độ mờ đục và khả
							năng hấp thụ màu sắc. Điều này giúp cho việc tái tạo màu sắc được trung thực nên hình ảnh in
							rất đẹp. Giấy tráng phủ có thể tráng 1 mặt hoặc 2 mặt.
							</td>
						</tr>
						<tr>
							<td><b>Khả năng bám mực</b></td>
							<td>Khả năng bám mực của giấy tráng phủ thấp do tính chất bề mặt dẫn tới sự tương tác của giấy
							với chất lỏng yếu.
							</td>
						</tr>
						<tr>
							<td colSpan={2} style={{ textAlign: "center" }}>
								<img src={Material2} alt="material-2"/>
							</td>
						</tr>
					</tbody>
				</table>
				<table className="table" style={{ width: "100%" }}>
					<thead className="header">
						<tr>
							<td style={{ width: "50%" }} className="center">Những loại giấy không tráng phủ thông dụng</td>
							<td style={{ width: "50%" }} className="center">Những loại giấy tráng phủ thông dụng</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="center">Giấy Ford (trắng/ vàng)</td>
							<td className="center">Giấy Couche (bóng/mờ/tráng phủ 1 mặt/tráng phủ 2 mặt)</td>
						</tr>
						<tr>
							<td className="center">Giấy Kraft</td>
							<td className="center">Giấy Bristol (bóng cả 2 mặt)</td>
						</tr>
						<tr>
							<td className="center">Decal</td>
							<td className="center">Giấy Ivory (tráng phủ 1 mặt, mặt còn lại nhám)</td>
						</tr>
						<tr>
							<td className="center">Giấy Cacbonless</td>
							<td className="center">Giấy Duplex (1 mặt trắng và láng, mặt còn lại thường bồi)</td>
						</tr>
						<tr>
							<td className="center">Giấy mỹ thuật</td>
							<td className="center">Giấy Crystal (1 mặt bóng, 1 mặt nhám)</td>
						</tr>
						<tr>
							<td className="center">Giấy can</td>
							<td className="center"/>
						</tr>

					</tbody>

				</table>
			</div>

			<div className="section">Các mối liên hệ hay ảnh hưởng của các các dạng vật liệu đến quá trình chọn trục
				Anilox
			</div>
			<div className="content">
				<p>In Flexo cho phép in những sản phẩm đa dạng, in trên nhiều vật liệu khác nhau: giấy, màng, lá
					nhôm,... </p>
				<p>Theo cấu hình của một đơn vị in Flexo thì vật liệu in sẽ không tiếp xúc trực tiếp với trục Anilox.
					Mối quan hệ giữa chúng chỉ là gián tiếp qua lượng mực truyền lên vật liệu. Với những yêu cầu về vật
					liệu khác nhau thì đòi hỏi những yêu cầu về tính chất mực, lượng mực riêng. Nên khi lựa chọn trục
					Anilox cần phải lưu ý: tần số cell và thể tích chứa mực BCM của trục thì phụ thuộc vào bề mặt vật
					liệu in, khi in trên vật liệu không thấm hút thì cần lượng mực ít hơn khi in trên vật liệu thấm
					hút. </p>
				<p>Nếu chỉ có một loại vật liệu được in thì việc chọn trục rất dễ dàng. Thực tế, một trục Anilox sử dụng
					cho rất nhiều loại vật liệu khác nhau. Điều này đòi hỏi các trục Anilox cung cấp lượng mực cần
					thiết, ít nhất để đạt được mật độ và tính đồng nhất của nền mực trên hầu hết các vật liệu thấm hút
					và không thấm hút.</p>
				<p>Lựa chọn độ phân giải tram theo tính chất bề mặt của giấy:</p>
				<table className="table" style={{ width: "100%" }}>
					<thead className="header">
						<tr>
							<td style={{ width: "20%" }} className="center">Loại vật liệu</td>
							<td style={{ width: "20%" }} className="center">Vật liệu in</td>
							<td style={{ width: "20%" }}>Độ phân giải tram (l/cm)</td>
							<td style={{ width: "20%" }}>Độ phân giải tram (lpi)</td>
							<td style={{ width: "20%" }}>Tổng diện tích điểm tram (TAC)</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Loại 1</td>
							<td>Carton gợn sóng</td>
							<td>14 – 33</td>
							<td>35 – 85</td>
							<td>270% - 300%</td>
						</tr>
						<tr>
							<td>Loại 2</td>
							<td>Giấy không tráng phủ</td>
							<td>18 – 40</td>
							<td>45 - 100</td>
							<td>290% - 320%</td>
						</tr>
						<tr>
							<td>Loại 3</td>
							<td>Giấy tráng phủ</td>
							<td>45 – 54</td>
							<td>113 – 133</td>
							<td>280% - 290%</td>
						</tr>
						<tr>
							<td>Loại 4</td>
							<td>Màng/foil</td>
							<td>36 – 60</td>
							<td>90 - 150</td>
							<td>270% - 290%</td>
						</tr>
					</tbody>

				</table>
				<p><i><b>Lưu ý:</b> Áp dụng cho sản phẩm in sử dụng tram AM – tram điều biên.</i></p>
			</div>
		</div>
	);
};

export default Material;