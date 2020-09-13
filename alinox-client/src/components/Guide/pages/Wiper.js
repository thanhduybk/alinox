import React from "react";

const Wiper = () => {
	return (
		<div className="guide">
			<div className="section">Khái quát về độ phân giải tram và dao gạt mực ảnh hưởng đến quá trình chọn trục
			</div>
			<div className="content">
				<p>Dao gạt là một bộ phận được sử dụng trong hệ thống in để điều chỉnh độ dày màng mực trên trục Anilox.
					Bởi vậy dao gạt mạt mực cũng là một trong những yếu tố ảnh hưởng đến mật độ của lớp mực trên bề mặt
					vật liệu in, làm ảnh hưởng đến chất lượng của sản phẩm in. </p>
				<p><b>Ví dụ:</b> Hiện nay đa số các máy in đều sử dụng lưỡi dao gạt mực in làm bằng thép carbon có độ
					dày 0,006
					inch. Độ dày của lưỡi dao gạt mực đủ để tạo ra vùng tiếp xúc rộng với trục Anilox nhưng không làm
					mài mòn dao gạt mực cũng như trục Anilox, đặc biệt là đối với các loại mực có thể gây ra sự mài mòn.
					Với lưỡi dao dày hơn chúng tạo ra vùng tiếp xúc rộng hơn với trục Anilox dẫn đến áp lực để làm sạch
					bề mặt trục Anilox nhỏ hơn, bởi vì áp lực của việc làm sạch được trải rộng qua một vùng lớn
					hơn. </p>
				<p>Vì vậy, áp lực của lưỡi dao có thể tăng thêm khi cần thiết để tạo ra một độ sạch phù hợp. Áp lực có
					thể tăng thêm điều này là không cần thiết, bởi vì nó làm mài mòn lưỡi dao và trục Anilox, làm ảnh
					hưởng đến thể tích của các ô chứa mực cũng như là mật độ của màng mực trên bề mặt vật liệu.</p>
			</div>
			<div className="section">Đặc điểm đặc trưng của độ phân giải tram và dao gạt mực ảnh hưởng đến quá trình
				chọn trục
			</div>
			<div className="content">
				<table className="table">

					<tbody>
						<tr>
							<td className="center bold">Đặc tính</td>
							<td>Độ phẳng và thẳng là yếu tố cầnthiết tối thiểu cho dao gạt mực. Ở những nơi thiếu độ phẳng sẽ cần áp lực gạtlớn. Độ thẳng được định nghĩa là độ chênh lệch so với một đường thẳng hoàntoàn, chênh lệch do uốn cong hoặc do gợn sóng.</td>
						</tr>
						<tr>
							<td className="center bold">Sức căng của dao gạt mực</td>
							<td>Sức căng yêu cầu là 1860 N/mm² hoặc 190 kg/mm² T.S.I</td>
						</tr>
						<tr>
							<td className="center bold">Độ cứng</td>
							<td>Từ 500 đến 600 Vickers.</td>
						</tr>
						<tr>
							<td className="center bold">Ảnh hưởng của dao gạt mực đến độ dày lớp mực</td>
							<td>Dao gạt mực ảnh hưởng trực tiếp đến độ dày lớp mực. Độ dàylớp mực bị gia tăng thì làm gia tăng độ tương phản in và do đó làm tăng độ sắcnét của hình ảnh. Có thể làm tăng hay giảm độ dày lớp mực bằng cách mở lưỡidao gạt mực, tăng tốc độ vòng xoay của lô lấy mực hoặc tăng mức độ thườngxuyên dao động của lô truyền mực.Ngoài việc ảnh hưởng đến các thuộc tính về màu sắc, độ dàylớp mực còn ảnh hưởng đến nhiều yếu tố khác như khả năng khô và sự lột giấy.Những lớp mực quá mỏng có thể gây nên những vấn đề về lột giấy và tạo ra cácmảng màu không đều.</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="section">Mối liên hệ giữ độ dày dao gạt mực đến độ phân giải trục Anilox</div>
			<div className="content">
				<p>Việc sử dụng lô Anilox có độ phân giải thấp hơn với thể tích của các ô chứa mực lớn hơn, nên dao gạt
					mực cần phải dày hơn để điều chỉnh thể tích mực lớn hơn này. </p>
				<p>Độ phân giải trục Anilox tỷ lệ nghịch với độ dày dao gạt mực. Độ phân giải trục Anilox càng cao thì
					yêu cầu về độ dày dao gạt mực càng mỏng.</p>
				<p>Theo nhà cung cấp dao gạt mực cho dao <b>Lamella</b> của <b>Max Daetwyler Corporation</b> khuyến
					khích sử dụng độ
					dày dao gạt mực theo độ phân giải trục Anilox như sau:</p>
				<table className="table">
					<tbody className="center bold">
						<tr>
							<td> </td>
							<td colSpan="5" className="center bold">Độ phân giải trục Anilox
							(lpi)</td>
						</tr>
						<tr >
							<td>Độ dày dao gạtmực (microns)</td>
							<td>400</td>
							<td>600</td>
							<td>800</td>
							<td>1000</td>
							<td>1200</td>
						</tr>
						<tr>
							<td>75</td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td>X</td>
						</tr>
						<tr>
							<td>95</td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td>X</td>
							<td> </td>
						</tr>
						<tr>
							<td>120</td>
							<td> </td>
							<td> </td>
							<td>X</td>
							<td> </td>
							<td> </td>
						</tr>
						<tr>
							<td>150</td>
							<td> </td>
							<td>X</td>
							<td>X</td>
							<td> </td>
							<td> </td>
						</tr>
						<tr>
							<td>200</td>
							<td>X</td>
							<td>X</td>
							<td> </td>
							<td> </td>
							<td> </td>
						</tr>
						<tr>
							<td>250</td>
							<td>X</td>
							<td> </td>
							<td> </td>
							<td> </td>
							<td> </td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Wiper;