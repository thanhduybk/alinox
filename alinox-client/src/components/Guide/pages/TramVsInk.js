import React from "react";
import { Col, Row } from "antd";
import TramVsInk1 from "../../../asserts/images/guides/tram-vs-ink-1.png";
import TramVsInk2 from "../../../asserts/images/guides/tram-vs-ink-2.png";
import TramVsInk3 from "../../../asserts/images/guides/tram-vs-ink-3.png";
import TramVsInk4 from "../../../asserts/images/guides/tram-vs-ink-4.png";
import TramVsInk5 from "../../../asserts/images/guides/tram-vs-ink-5.png";
import TramVsInk6 from "../../../asserts/images/guides/tram-vs-ink-6.png";
import TramVsInk7 from "../../../asserts/images/guides/tram-vs-ink-7.png";
import TramVsInk8 from "../../../asserts/images/guides/tram-vs-ink-8.png";

const TramVsInk = () => {
	return (
		<div className="guide">
			<div className="section">
				Khái quát về độ phân giải tram và thể tích chứa mực ảnh hưởng đến quá trình chọn trục
			</div>
			<div className="content">
				<p>Lượng mực truyền lên bản in phụ thuộc vào thể tích chứa mực trong cell, vì vậy muốn dễ kiểm soát,
					giảm hiện tượng dotgain, tăng chất lượng truyền tải hình ảnh thì cần in với một lớp mực mỏng nhất có
					thể.</p>
				<p>Khi độ dày lớp mực in tăng lên thì hiện tượng dotgain sẽ tăng rất nhanh.</p>
				<p>Để in được với một lớp mực mỏng, đồng thời tránh được tình trạng mực khô ngay trên trục Anilox trước
					khi truyền qua bản in và đảm bảo được độ đậm cần thiết của mực thì loại mực ta sử dụng cần phải có
					nồng độ pigment cao.</p>
				<Row className="center" style={{ width: "80%" }}>
					<Col span={12}>
						<img src={TramVsInk1} alt="tram-vs-ink-1"/>
					</Col>
					<Col span={12}>
						<img src={TramVsInk2} alt="tram-vs-ink-2"/>
					</Col>
				</Row>
				<p>Điều cần lưu ý là ta có thể giảm độ sâu của trục Anilox (tức là giảm thể tích mực) khi sử dụng loại
					600 như đã trình bày tại phần cấu trúc cell.</p>
				<Row className="center" style={{ width: "80%" }}>
					<Col span={12}>
						<img src={TramVsInk3} alt="tram-vs-ink-3"/>
					</Col>
					<Col span={12}>
						<img src={TramVsInk4} alt="tram-vs-ink-4"/>
					</Col>
				</Row>
				<p>Như thể hiện ở hình ảnh mô tả trên, in với lớp mực mỏng hơn tương đương với thể tích lớp mực thấp hơn
					thì cung cấp đồ họa sắc nét hơn, rõ ràng hơn. Sau đây là những ưu điểm khi in ấn với lớp mực mỏng
					(thể tích mực nằm trong khoảng khuyến cáo):</p>
				<ul>
					<li>Dự đoán được dotgain</li>
					<li>In ấn sạch hơn (không bị bẩn bản in)</li>
					<li>Dots nhỏ hơn</li>
					<li>In sắc nét hơn</li>
				</ul>
				<p>Theo hướng dẫn của <b>Harper Corporation of America</b> thì độ sâu của cell nên bằng 23% - 33% độ mở
					của cell.</p>
				<p>Tuy nhiên khi thể tích mực quá nhỏ thì có thể xảy ra tình huống là mực in có thể khô trước khi truyền
					sang khuôn in. Như vậy, mục đích đặt ra phải đảm bảo được độ đậm mực cần thiết với độ dày lớp mực
					mỏng nhất. Do đó, cần phải kiểm soát loại mực đang sử dụng. </p>

			</div>
			<div className="section">
				Đặc điểm đặc trưng của độ phân giải tram và thể tích chứa mực ảnh hưởng đến quá trình chọn trục
			</div>
			<div className="content">
				<table className="table">
					<tbody>
						<tr>
							<td className="center bold" colSpan={2}>Theo Harper Corporation of America</td>
						</tr>
						<tr>
							<td className="center bold" colSpan={2}>Công thức tính tỉ lệ giữa độ sâu và độ mở của cell</td>
						</tr>
						<tr>
							<td className="center" colSpan={2}>
								<img src={TramVsInk5} alt="tram-vs-ink-5"/>
							</td>
						</tr>
						<tr>
							<td colSpan={2}>Theo tiêu chuẩn thì độ sâu của cell thường khoảng từ 23% đến 33% so với độ mở
							của cell. Tốt nhất là giá trị 28%
							</td>
						</tr>
						<tr>
							<td style={{ width: "40%" }}>Nhược điểm của cell có D/O &gt; 33%</td>
							<td style={{ width: "60%" }}>
								<ul>
									<li>Mực khó thoát ra, hệ số truyền mực kém</li>
									<li>Khó khăn trong lúc vệ sinh, làm sạch trục</li>
									<li>Lỗ cell gồ ghề</li>
								</ul>
								<div className="center">
									<img src={TramVsInk6} alt="tram-vs-ink-6"/>
								</div>
							</td>
						</tr>
						<tr>
							<td style={{ width: "40%" }}>Nhược điểm của cell có D/O &lt; 23%</td>
							<td style={{ width: "60%" }}>
								<ul>
									<li>Lỗ cell thô, gồ ghề</li>
									<li>Khó khăn trong quá trình khắc phù hợp với dự đoán trước</li>
									<li>Khó giữ được độ ổn định của trục Anilox với các thông số trước</li>
								</ul>
								<div className="center">
									<img src={TramVsInk7} alt="tram-vs-ink-7"/>
								</div>
							</td>
						</tr>
						<tr>
							<td style={{ width: "40%" }}>Ưu điểm của cell hình bát (D/O = 23% - 33%)</td>
							<td style={{ width: "60%" }}>
								<ul>
									<li>Cell có kích thước và hình dạng đồng nhất</li>
									<li>Dễ thoát mực do các đường cell trơn phù hợp với hệ số truyền mực tối ưu</li>
									<li>Vách ngăn mỏng và trơn</li>
									<li>Có thể giữ được độ ổn định của trục Anilox với các thông số định trước</li>

								</ul>
								<div className="center">
									<img src={TramVsInk8} alt="tram-vs-ink-8"/>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="section">
				Các mối liên hệ ảnh hưởng đến quá trình chọn trục
			</div>
			<div className="content">
				<div className="title">
					Mối liên hệ giữ trục độ phân giải trục Anilox với độ sâu và độ mở cell
				</div>
				<p>Từ bảng hướng dẫn chọn trục theo mối tương quan giữa độ phân giải tram/ bản in và độ phân giải trục
					Anilox thì <b>Harper Corporation of America</b> cho ra tiếp một bảng về mối tương quan giữa tần số
					cell
					trên trục Anilox và độ mở cell như sau:</p>
				<table className="table">

					<tbody className="center">
						<tr className="bold">
							<td>Tần số tram (lpi)</td>
							<td>1% dot(microns)</td>
							<td>Tần số cell (lpi)</td>
							<td>2% dot(microns)</td>
							<td>Tần số cell (lpi)</td>
							<td>3% dot(microns)</td>
							<td>Tần số cell (lpi)</td>
						</tr>
						<tr>
							<td>85</td>
							<td>34</td>
							<td>655</td>
							<td>48</td>
							<td>481</td>
							<td>58</td>
							<td>400</td>
						</tr>
						<tr>
							<td>100</td>
							<td>29</td>
							<td>754</td>
							<td>41</td>
							<td>557</td>
							<td>50</td>
							<td>464</td>
						</tr>
						<tr>
							<td>110</td>
							<td>26</td>
							<td>817</td>
							<td>37</td>
							<td>606</td>
							<td>45</td>
							<td>506</td>
						</tr>
						<tr>
							<td>120</td>
							<td>24</td>
							<td>878</td>
							<td>34</td>
							<td>654</td>
							<td>41</td>
							<td>547</td>
						</tr>
						<tr>
							<td>133</td>
							<td>22</td>
							<td>956</td>
							<td>31</td>
							<td>715</td>
							<td>37</td>
							<td>599</td>
						</tr>
						<tr>
							<td>150</td>
							<td>19</td>
							<td>1052</td>
							<td>27</td>
							<td>792</td>
							<td>33</td>
							<td>666</td>
						</tr>
						<tr>
							<td>175</td>
							<td>16</td>
							<td>1187</td>
							<td>23</td>
							<td>901</td>
							<td>28</td>
							<td>760</td>
						</tr>
						<tr>
							<td>200</td>
							<td>14</td>
							<td>1313</td>
							<td>20</td>
							<td>1004</td>
							<td>25</td>
							<td>851</td>
						</tr>
					</tbody>
				</table>
				<p><i><b>Lưu ý:</b> Thông số ứng với vách ngăn cell 5 microns và kích thước điểm tram (dot size) bằng độ
					mở của
					cell (cell opening)</i></p>
				<table className="table">
					<tbody className="center">
						<tr>
							<td className="bold">Tần số cell trục Anilox (lpi)</td>
							<td>250</td>
							<td>300</td>
							<td>360</td>
							<td>400</td>
							<td>440</td>
							<td>500</td>
							<td>600</td>
							<td>660</td>
							<td>700</td>
							<td>800</td>
							<td>1000</td>
							<td>1200</td>
						</tr>
						<tr>
							<td className="bold">Độ mở của cell(microns)</td>
							<td>97</td>
							<td>80</td>
							<td>66</td>
							<td>59</td>
							<td>53</td>
							<td>46</td>
							<td>37</td>
							<td>33</td>
							<td>31</td>
							<td>27</td>
							<td>20</td>
							<td>16</td>
						</tr>
					</tbody>
				</table>
				<p><i><b>Lưu ý</b>: Thông số ứng với vách ngăn cell 5 microns.</i></p>
				<div className="title">
					Mối liên hệ giữ trục độ phân giải trục Anilox với thể tích chứa mực
				</div>
				<p>Bảng thông số về mối liên hệ giữa tần số cell của trục Anilox và thể tích chứa mực theo khuyến cáo
					của nhà cung cấp trục Anilox <b>Harper Corporation of America</b> như sau: </p>
				<table className="table">

					<tbody className="center">
						<tr className="bold">
							<td rowSpan="2">Tần số cell
							(lpi)</td>
							<td colSpan="3">BCM (Billion cubic microns per square
							inch)</td>
						</tr>
						<tr>
							<td>Thấp</td>
							<td>Trung bình</td>
							<td>Cao</td>
						</tr>
						<tr>
							<td>120</td>
							<td>11.10</td>
							<td>12.60</td>
							<td>13.50</td>
						</tr>
						<tr>
							<td>140</td>
							<td>9.00</td>
							<td>10.50</td>
							<td>12.00</td>
						</tr>
						<tr>
							<td>165</td>
							<td>7.00</td>
							<td>8.50</td>
							<td>10.00</td>
						</tr>
						<tr>
							<td>180</td>
							<td>6.00</td>
							<td>7.50</td>
							<td>9.00</td>
						</tr>
						<tr>
							<td>200</td>
							<td>5.50</td>
							<td>6.80</td>
							<td>8.10</td>
						</tr>
						<tr>
							<td>220</td>
							<td>5.10</td>
							<td>6.30</td>
							<td>7.60</td>
						</tr>
						<tr>
							<td>240</td>
							<td>4.80</td>
							<td>6.00</td>
							<td>7.30</td>
						</tr>
						<tr>
							<td>250</td>
							<td>4.70</td>
							<td>5.80</td>
							<td>7.00</td>
						</tr>
						<tr>
							<td>260</td>
							<td>4.60</td>
							<td>5.70</td>
							<td>6.70</td>
						</tr>
						<tr>
							<td>280</td>
							<td>4.40</td>
							<td>5.20</td>
							<td>6.10</td>
						</tr>
						<tr>
							<td>300</td>
							<td>4.10</td>
							<td>4.80</td>
							<td>5.60</td>
						</tr>
						<tr>
							<td>330</td>
							<td>3.90</td>
							<td>4.60</td>
							<td>5.30</td>
						</tr>
						<tr>
							<td>360</td>
							<td>3.60</td>
							<td>4.30</td>
							<td>5.00</td>
						</tr>
						<tr>
							<td>400</td>
							<td>3.00</td>
							<td>3.70</td>
							<td>4.40</td>
						</tr>
						<tr>
							<td>440</td>
							<td>2.90</td>
							<td>3.40</td>
							<td>4.00</td>
						</tr>
						<tr>
							<td>500</td>
							<td>2.80</td>
							<td>3.20</td>
							<td>3.70</td>
						</tr>
						<tr>
							<td>550</td>
							<td>2.60</td>
							<td>3.00</td>
							<td>3.50</td>
						</tr>
						<tr>
							<td>600</td>
							<td>2.10</td>
							<td>2.50</td>
							<td>3.00</td>
						</tr>
						<tr>
							<td>660</td>
							<td>1.90</td>
							<td>2.30</td>
							<td>2.80</td>
						</tr>
						<tr>
							<td>700</td>
							<td>1.80</td>
							<td>2.20</td>
							<td>2.60</td>
						</tr>
						<tr>
							<td>800</td>
							<td>1.50</td>
							<td>1.80</td>
							<td>2.10</td>
						</tr>
						<tr>
							<td>900</td>
							<td>1.20</td>
							<td>1.45</td>
							<td>1.70</td>
						</tr>
						<tr>
							<td>1000</td>
							<td>1.10</td>
							<td>1.25</td>
							<td>1.40</td>
						</tr>
						<tr>
							<td>1200</td>
							<td>0.90</td>
							<td>0.95</td>
							<td>1.00</td>
						</tr>
					</tbody>
				</table>
				<div className="title">
					Hướng dẫn sử dụng:
				</div>
				<table className="table">

					<tbody className="center">

						<tr className="bold">
							<td>Đường thẳng đậm nét, nền</td>
							<td>180- 330</td>
							<td>9 -4</td>
						</tr>
						<tr>
							<td>Đường thẳng,chữ</td>
							<td>200- 400</td>
							<td>8 -3</td>
						</tr>
						<tr>
							<td>Hình nền,mờ</td>
							<td>360- 500</td>
							<td>3.6 – 2.8</td>
						</tr>
						<tr>
							<td>Process(CMYK)</td>
							<td>500- 1200</td>
							<td>2.8 - 0.9</td>
						</tr>
					</tbody>
				</table>
				
			</div>
		</div>
	);
};

export default TramVsInk;