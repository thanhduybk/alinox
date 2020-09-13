import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import TramVsRoll1 from "../../../asserts/images/guides/tram-vs-roll-1.png";
import TramVsRoll2 from "../../../asserts/images/guides/tram-vs-roll-2.png";
import TramVsRoll3 from "../../../asserts/images/guides/tram-vs-roll-3.png";
import TramVsRoll4 from "../../../asserts/images/guides/tram-vs-roll-4.png";

const TramVsRoll = () => {
	return (
		<div className="guide">
			<div className="section">Khái quát về độ phân giải ảnh hưởng đến quá trình chọn trục</div>
			<div className="content">
				<p>Theo khuyên cáo của <b>Harper Corporation of America</b> tdì tần số được sử dụng cho trục Anilox gấp
					4 – 6 lần
					tần số tram sử dụng trên bản in. Tần số càng cao tdì diện tích cell càng giảm.</p>
				<p>Sau đây là bảng khái quát về mối tương quan giữa bản in và tần số cell trên trục Anilox:</p>
				<table className="table">
					<tbody>
						<tr>
							<td colSpan={3} className="center bold">Mô tả vùng in tại những điểm tram trên vùng sáng 2% –
							3%
							</td>
						</tr>
						<tr>
							<td colSpan={3}>
								<div className="center">
									<img src={TramVsRoll1} alt="tram-vs-roll-1"/>
								</div>
								<p><b><i>Theo nghiên cứu của Harper Corporation of America:</i></b></p>
								<ul>
									<li>Tại vùng sáng 2% - 3%: Có kích tdước điểm tram nhỏ hơn đường kính lớn nhất của cell
									hay còn gọi là độ mở cell <ArrowRightOutlined/> Gây ra hiện tượng dơ, bẩn bản in.
									Làm tday đổi kích
									tdước điểm tram. Đây cũng là một nguyên nhân gây ra sự gia tăng tầng tdứ.
									</li>
									<li>Tại vùng sáng 2% - 3%: Có kích tdước điểm tram nhỏ lớn hơn đường kính lớn nhất của
									cell hay còn gọi là độ mở cell <ArrowRightOutlined/> Nếu ở mức độ quá lớn tdì sẽ gây
									ra hiện tượng tdiếu
									mực, làm mất chi tiết ở những vùng sáng trên bài in. Đánh giá được khả năng tái tạo
									các chi tiết nhỏ ở bài in là không tốt.
									</li>
								</ul>
								<p>Kích tdước điểm tram vùng sáng (2-3%) trên khuôn in không được nhỏ hơn đường kính lớn
								nhất của cell hay còn gọi là độ mở cell. Mà chỉ có thể bằng hoặc nằm trong khoảng lớn
								hơn cho phép. (Độ phân giải trục Anilox gấp 4 – 6 lần độ phân giải bản in) </p>
							</td>
						</tr>
						<tr>
							<td colSpan={3} className="center bold">Công thức tính số lượng cell
							</td>
						</tr>
						<tr className="bold">
							<td>Hìnhdạng</td>
							<td>Công thức</td>
							<td>Ví dụ</td>
						</tr>
						<tr>
							<td>Dạng kim cương 45</td>
							<td>Sốlượng cell trong 1 inch vuông = Tần số x Tần số</td>
							<td>Ví dụ: Đối với trục Anilox 450với tần số là 300 Lpi tdì 300 x 300 = 90000 cell/inch2</td>
						</tr>
						<tr>
							<td>Dạng 60 và 30</td>
							<td>Sốlượng cell trong 1 inch vuông = Tần số x Tần số x 1.15</td>
							<td>Ví dụ: Đối với trục Anilox 600và 300 với tần số 300 Lpi tdì: 300 x 300 x 1.15 = 103500
							cell/inch2
							</td>
						</tr>
						<tr>
							<td colSpan={3} className="center bold">Những lưu ý khi lựa chọn tần số cell của trục Anilox
							</td>
						</tr>
						<tr>
							<td colSpan={3}>
								<div>Tần số cell được chọn phải phù hợp với tính chất bài in.</div>
								<div>Mối tương quan giữa tần số cell và tính năng làm việc của trục Anilox (tốc độ,..)</div>
								<div>Mối tương quan giữa thể tích chứa mực và mật độ lớp mực.</div>
								<div>Mối tương quan giữ thể tích chứa mực và hiện tượng dotgain.</div>
								<div>Mối tương quan giữa góc của trục Anilox với kết quả in ấn.</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div className="section">Đặc điểm đặc trưng của độ phân giải ảnh hưởng đến quá trình chọn trục</div>
			<div className="content">
				<p>Để đạt được chất lượng in tốt và hạn chế lỗi đó tdì phải lựa chọn trục Anilox sao cho tần số trục
					Anilox phải bằng 4 - 6 lần độ phân giải của bản in, tốt nhất là 5 lần.</p>
				<table className="table">
					<tbody>
						<tr>
							<td colSpan={2} className="center bold">Tần số trục Anilox nhỏ hơn 4 lần đối với tần số bản in
							</td>
						</tr>
						<tr>
							<td colSpan={2}>
								<div className="center">
									<img src={TramVsRoll2} alt="tram-vs-roll-2"/>
								</div>
							</td>
						</tr>
						<tr className="center bold">
							<td>Lỗi</td>
							<td>Giải thích</td>
						</tr>
						<tr>
							<td>Gây bẩn tờ in</td>
							<td>Trục Anilox có tần số cell tdấp (lớn hơn 2-3 lần độ phân giải bản in), những vùng tram nhỏ ở
							bản in có thể rơi, lọt vào trong các ô cell, khi đó cả phần tử in và tdân của phần tử in
							sẽ được nhúng vào trong cell, khi in dưới áp lực in tdì sẽ có cả mực bám ở tdân phần tử in
							truyền xuống vật liệu in gây bẩn tờ in.
							</td>
						</tr>
						<tr>
							<td colSpan={2} className="center bold">Tần số trục Anilox lớn hơn 6 lần đối với tần số bản in
							</td>
						</tr>
						<tr>
							<td colSpan={2}>
								<div className="center">
									<img src={TramVsRoll3} alt="tram-vs-roll-3"/>
								</div>
							</td>
						</tr>
						<tr className="center bold">
							<td>Lỗi</td>
							<td>Giải thích</td>
						</tr>
						<tr>
							<td>Lỗi mất tram</td>
							<td>Trục Anilox có tần số cell lớn (lớn hơn 7-10 lần độ phân giải bản in), những vùng tram nhỏ
							có thể nằm trên các vách ngăn, giao giữa các cell làm cho những điểm tram nhỏ đó không lấy
							được mực từ trục Anilox dẫn đến lỗi mất tram khi in.
							</td>
						</tr>
						<tr>
							<td colSpan={3} className="center bold">Tần số trục Anilox nằm trong khoảng từ 4 – 6 lần đối với bản in
							</td>
						</tr>
						<tr>
							<td colSpan={2}>
								<div className="center">
									<img src={TramVsRoll4} alt="tram-vs-roll-4"/>
								</div>
							</td>
						</tr>
						<tr>
							<td colSpan={2}><b>Theo hướng dẫn của Harper Corporation of America:</b> Với tần số trục Anilox nằm trong khoảng từ 4 – 6 lần đối với tần số của bản in tdì sẽ dễ kiểm soát được lượng mực.</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div className="section">Các mối liên hệ hay ảnh hưởng của độ phân giải đến quá trình chọn trục Anilox</div>
			<div className="content">
				<p>Theo khuyến cáo của <b>Harper Corporation of America</b> đưa ra bảng tdông số về mối tương quan giữa
					độ phân giải tram và độ phân giải trục Anilox như sau: </p>
				<table className="table">
					<thead>
						<tr>
							<th colSpan="13"><b>Mối liên hệ giữa độ phân giải trục Anilox và độ phân giải bản in hay độ phân
							giải tram</b>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr style={{ fontWeight: "bold" }}>
							<td rowSpan="2">STT</td>
							<td colSpan="2" rowSpan="2">Độ phân giải tram</td>
							<td colSpan="2">Độ phân giải trục Anilox</td>
							<td colSpan="2">Độ phân giải trục Anilox</td>
							<td colSpan="2">Độ phân giải trục Anilox</td>
							<td colSpan="2">Độ phân giải trục Anilox</td>
							<td colSpan="2">Độ phân giải trục Anilox</td>
						</tr>
						<tr>
							<td colSpan="2">1% dot</td>
							<td colSpan="2">2% dot</td>
							<td colSpan="2">3% dot</td>
							<td colSpan="2">4% dot</td>
							<td colSpan="2">5% dot</td>
						</tr>
						<tr>
							<td/>
							<td>LPI</td>
							<td>L/CM</td>
							<td>LPI</td>
							<td>L/CM</td>
							<td>LPI</td>
							<td>L/CM</td>
							<td>LPI</td>
							<td>L/CM</td>
							<td>LPI</td>
							<td>L/CM</td>
							<td>LPI</td>
							<td>L/CM</td>
						</tr>
						<tr>
							<td>1</td>
							<td>45</td>
							<td>18</td>
							<td>350</td>
							<td>140</td>
							<td>280</td>
							<td>110</td>
							<td>230</td>
							<td>90</td>
							<td>180</td>
							<td>70</td>
							<td>120</td>
							<td>50</td>
						</tr>
						<tr>
							<td>2</td>
							<td>50</td>
							<td>20</td>
							<td>400</td>
							<td>160</td>
							<td>290</td>
							<td>115</td>
							<td>250</td>
							<td>100</td>
							<td>190</td>
							<td>75</td>
							<td>140</td>
							<td>55</td>
						</tr>
						<tr>
							<td>3</td>
							<td>55</td>
							<td>22</td>
							<td>450</td>
							<td>175</td>
							<td>330</td>
							<td>130</td>
							<td>270</td>
							<td>105</td>
							<td>200</td>
							<td>80</td>
							<td>150</td>
							<td>60</td>
						</tr>
						<tr>
							<td>4</td>
							<td>65</td>
							<td>26</td>
							<td>530</td>
							<td>210</td>
							<td>380</td>
							<td>150</td>
							<td>300</td>
							<td>120</td>
							<td>250</td>
							<td>100</td>
							<td>180</td>
							<td>70</td>
						</tr>
						<tr>
							<td>5</td>
							<td>70</td>
							<td>28</td>
							<td>570</td>
							<td>225</td>
							<td>400</td>
							<td>160</td>
							<td>330</td>
							<td>130</td>
							<td>260</td>
							<td>105</td>
							<td>185</td>
							<td>75</td>
						</tr>
						<tr>
							<td>6</td>
							<td>85</td>
							<td>34</td>
							<td>700</td>
							<td>275</td>
							<td>500</td>
							<td>195</td>
							<td>400</td>
							<td>160</td>
							<td>330</td>
							<td>130</td>
							<td>230</td>
							<td>90</td>
						</tr>
						<tr>
							<td>7</td>
							<td>100</td>
							<td>38</td>
							<td>760</td>
							<td>300</td>
							<td>570</td>
							<td>225</td>
							<td>450</td>
							<td>180</td>
							<td>380</td>
							<td>150</td>
							<td>270</td>
							<td>105</td>
						</tr>
						<tr>
							<td>8</td>
							<td>110</td>
							<td>42</td>
							<td>840</td>
							<td>330</td>
							<td>650</td>
							<td>255</td>
							<td>500</td>
							<td>200</td>
							<td>400</td>
							<td>160</td>
							<td>290</td>
							<td>115</td>
						</tr>
						<tr>
							<td>9</td>
							<td>120</td>
							<td>48</td>
							<td>915</td>
							<td>360</td>
							<td>700</td>
							<td>275</td>
							<td>560</td>
							<td>220</td>
							<td>450</td>
							<td>180</td>
							<td>320</td>
							<td>125</td>
						</tr>
						<tr>
							<td>10</td>
							<td>133</td>
							<td>51</td>
							<td>1020</td>
							<td>400</td>
							<td>740</td>
							<td>290</td>
							<td>580</td>
							<td>230</td>
							<td>480</td>
							<td>190</td>
							<td>340</td>
							<td>135</td>
						</tr>
						<tr>
							<td>11</td>
							<td>140</td>
							<td>54</td>
							<td>1070</td>
							<td>420</td>
							<td>760</td>
							<td>300</td>
							<td>640</td>
							<td>250</td>
							<td>500</td>
							<td>200</td>
							<td>350</td>
							<td>140</td>
						</tr>
						<tr>
							<td>12</td>
							<td>150</td>
							<td>59</td>
							<td>1200</td>
							<td>470</td>
							<td>840</td>
							<td>330</td>
							<td>670</td>
							<td>265</td>
							<td>530</td>
							<td>210</td>
							<td>400</td>
							<td>160</td>
						</tr>
						<tr>
							<td>13</td>
							<td>175</td>
							<td>69</td>
							<td>1370</td>
							<td>540</td>
							<td>990</td>
							<td>390</td>
							<td>790</td>
							<td>310</td>
							<td>610</td>
							<td>240</td>
							<td>450</td>
							<td>175</td>
						</tr>
						<tr>
							<td>14</td>
							<td>200</td>
							<td>80</td>
							<td>1550</td>
							<td>610</td>
							<td>1120</td>
							<td>440</td>
							<td>920</td>
							<td>360</td>
							<td>710</td>
							<td>280</td>
							<td>510</td>
							<td>200</td>
						</tr>
					</tbody>
				</table>
				<p>Theo khuyển cáo của Harper Corporation of America: tdì khoảng phục chế hình ảnh cam kết từ 5 – 95%
					(tdực tế) và 4 - 98% (lý tduyết). </p>
				<p><b>Giải thích:</b> Tại khoảng phục chế hình ảnh ở vùng sáng nhất (1%, 2%, 3%) hay những vùng tối nhất
					(98%,
					99%) tdì còn dựa vào khả năng tái tạo phục chế của tdiết bị, như tdiết bị ghi – hiện kẽm hay tdiết
					bị in. Vì mỗi tdiết bị sẽ có độ hao mòn cơ khí là khác nhau. Nên khoảng phục chế hình ảnh cam kết
					trên đã dự trù cho tất cả các loại tdiết bị.</p>
			</div>

		</div>
	);
};

export default TramVsRoll;