import React from "react";
import { CaretRightOutlined } from "@ant-design/icons";

const Clazz = () => {
	return (
		<div className="guide">
			<div className="section">
				Khái quát về chủng loại sản phẩm
			</div>
			<div className="content">
				<p>Nếu trước đây khi nói đến in ấn trong Flexo, chúng ta thường nghĩ ngay là bao bì mềm dạng màng (bao
					bì thực phẩm) hay decal là chủ yếu thì hiện nay, với sự ra đời của nhiều loại vật liệu mới cùng sự
					hỗ trợ của công nghệ đã mang tới khả năng ứng dụng đa dạng cho nhiều loại vật liệu. </p>
				<p><b>Ví dụ:</b> Theo truyền thống, in trên dạng vật liệu, in trên dạng vật liệu là carton gợn sóng thì
					chủ yếu
					dùng máy Typo hay còn gọi là máy in Offset tờ rời để in. Nhưng để in các sản phẩm dạng carton gợn
					sóng chất lượng cao kết hợp với thành phẩm tốt mà không phá hỏng cấu trúc bề mặt vật liệu làm giảm
					sức bền bề mặt vật liệu thì ở phương pháp in Offset chưa thể kiểm soát tốt. Nhưng đối với kỹ thuật
					Flexo thì có thể kết hợp theo đó là các dạng thành phẩm inline và offline như cắt, gấp, dán,… cho ra
					được tấm carton cuối cùng gia công bề mặt và nâng cao chất lượng</p>
				<p>Với những yếu tố trên đã cho thấy được công nghệ Flexo thay đổi có khả năng ứng dụng trên nhiều chủng
					vật liệu. Và theo thị trường hiện nay, các sản phẩm cho phương pháp in Flexo thường được chia thành
					3 dạng chủng loại sản phẩm chính là carton gợn sóng, bao bì giấy, bao bì mềm dạng film/foil.</p>
			</div>

			<div className="section">
				Đặc điểm đặc trưng của các chủng loại sản phẩm
			</div>
			<div className="content">
				<p>Bảng sau đây sẽ mô tả các đặc điểm và đặc trưng của từng loại chủng loại sản phẩm:</p>
				<table className="table">
					<thead className="header">
						<tr>
							<td style={{ width: "10%" }} className="center">STT</td>
							<td style={{ width: "20%" }} className="center">Loại sản phẩm</td>
							<td style={{ width: "70%" }}>Ứng dụng</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="center">1</td>
							<td className="center">Bao bì carton gợn sóng</td>
							<td>Sử dụng làm thùng giấy carton dùng cho đóng gói và vận chuyển hàng hóa. Ngoài chức năng bảo
							vệ hàng hóa tránh những va đập, carton có thể được in ấn bắt mắt nhằm mục đích quảng bá cho
							hình ảnh thương hiệu của một doanh nghiệp nào đó.
							</td>
						</tr>
						<tr>
							<td className="center">2</td>
							<td className="center">Bao bì giấy</td>
							<td>
								<ul>
									<li>Bao bì giấy cao cấp: Chủ yếu dùng trong ngành sữa. Bao bì chứa đựng sữa ở dạng hộp
									giấy và túi giấy.
									</li>
									<li>Bao bì giấy dạng hộp.</li>
									<li>Bao bì giấy dạng túi.</li>
									<li>Bao bì giấy Kraft.</li>
									<li>Tem, nhãn giấy, decal, mác,…</li>
								</ul>
							</td>
						</tr>
						<tr>
							<td className="center">3</td>
							<td className="center">Bao bì mềm</td>
							<td>
								<ul>
									<li>Bao bì mềm thực phẩm</li>
									<li>Nhãn dạng màng</li>
									<li>Màng co,…</li>
								</ul>
							</td>
						</tr>
					</tbody>

				</table>
			</div>

			<div className="section">
				Các mối liên hệ hay ảnh hưởng của các chủng sản phẩm đến quá trình chọn trục Anilox
			</div>
			<div className="content">
				<p>Chủng loại sản phẩm in cũng là một trong những yếu tố làm thay đổi các thông số về trục Anilox như
					tần số cell trên một trục Anilox, thể tích chứa mực, độ sâu ô chứa mực hay độ mở của ô chưa mực,… Vì
					dựa vào chủng loại sản phẩm mà chất lượng hay độ phân giải cũng được chia khác nhau. Mà độ phân giải
					của sản phẩm lại ảnh hưởng đến sự lựa chọn các thông số về trục Anilox.</p>
				<table className="table">
					<thead className="header">
						<tr>
							<td style={{ width: "10%" }} className="center">STT</td>
							<td style={{ width: "20%" }} className="center">Loại sản phẩm</td>
							<td style={{ width: "35%" }}>Những vấn đề liên quan đến trục Anilox</td>
							<td style={{ width: "35%" }}>Giải thích</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="center">1</td>
							<td className="center">Bao bì carton gợn sóng</td>
							<td>
								<p>Độ phân giải được lựa chọn cho loại sản phẩm này chỉ ở mức thấp so với các dạng còn
								lại.</p>
								<p>Hay do vật liệu của loại sản phẩm này chủ yếu là giấy có tính chất thấm hút hay mao dẫn
								mực rất cao nên cần phải lựa chọn trục Anilox có tần số cell ít để mang được nhiều mực,
								thì mới có thể đảm bảo việc truyền đủ lượng mực qua bề mặt vật liệu in.</p>
							</td>
							<td>
							Đối với những sản phẩm là carton gợn sóng, thì sản phẩm dạng này chủ yếu là bao bì cấp 2,
							cấp 3, thường có công dụng chứa hay bảo vệ sản phẩm bên trong nên độ phân giải được lựa chọn
							cho loại sản phẩm này chỉ ở mức thấp.
							</td>
						</tr>
						<tr>
							<td className="center">2</td>
							<td className="center">Bao bì giấy</td>
							<td>
							Độ phân giải của loại vật liệu này ở mức trung bình.
							</td>
							<td>
							Do đặc trưng của loại sản phẩm này chủ yếu là bao giấy, túi giấy hay túi Kraft (túi đựng
							xi-măng, phân bón,…) nên độ phân giải chỉ ở mức tầm trung, không cần quá cao.
							</td>
						</tr>
						<tr>
							<td className="center">3</td>
							<td className="center">Bao bì mềm dạng film/ foil</td>
							<td>
							Độ phân giải của loại vật liệu này ở mức tương đối cao. Vì đối với loại sản phẩm này chi
							tiết hình ảnh cần đạt được chất lượng tốt nhất, sắc nét nhất. Nên mật độ cell trong một trục
							Anilox là rất nhiều để đảm bảo được lớp mực truyền qua vật liệu in là mỏng nhất để mang lại
							chất lượng hình ảnh tốt nhất.
							</td>
							<td>
							Ở dạng này chủ yếu là bao bì thực phẩm nên cần miêu tả màu sắc hình ảnh trên bao bì thức ăn
							phải nhìn giống như thật, tạo cảm giác ngon miệng. Nếu màu sắc trông có vẻ không thực bởi vì
							chất lượng in kém, thì sẽ ảnh hướng đến việc bán hàng.
							</td>
						</tr>
					</tbody>

				</table>
				<p><CaretRightOutlined />Vậy nên dựa vào chủng loại sản phẩm cần in ở loại nào mà ta lựa chọn độ phân giải tram sao cho hợp
					lý hay nói yếu tố ảnh hưởng của chủng loại sản phẩm liên quan đến trục Anilox là độ phân giải
					tram.</p>
			</div>
		</div>
	);
};

export default Clazz;