import React from "react";

import "./styles.scss";
import { CheckCircleOutlined } from "@ant-design/icons";

import CoverImage from "../../asserts/images/cover-bg.png";
import Evolution from "../../asserts/images/evolution.png";
import CircleChart from "../../asserts/images/circle-chart.jpg";
import MyCarousel from "./Carousel";
import ResearchMethod from "../../asserts/images/research-method.png";
import Advantages from "../../asserts/images/advantages.png";
import Types from "../../asserts/images/types.png";
import { Col, Row } from "antd";

import Demo from "../../asserts/videos/1080.mp4";

const Home = () => {
	return (
		<div className="home-page">
			<div className="cover-bg">
				<img src={CoverImage} alt="cover-image"/>
				<div className="cover-overlay">
					<div className="title">FASO</div>
					<div className="sub-title">Flexo&apos;s Anilox roll Selection Optimizer</div>
				</div>
			</div>


			<div className="overview ">
				<div className="title">
					<div className="line"/>
					<span className="text">FASO</span>
					<div className="line"/>
				</div>
				<div className="body">
					&ldquo;Flexo&apos;s Anilox roll Selection Optimizer&rdquo; or also known as FASO, is an extension
					that helps
					optimize and reduce time in selecting Anilox roll for Flexo&apos;s products.
				</div>
			</div>


			<div className="evolution ">
				<div className="image animate__animated animate__fadeInUp">
					<img src={Evolution} alt="evolution"/>
				</div>
				<div className="content animatable">
					<div className="title ">
						EVOLUTION
					</div>
					<div className="body">
						From the early days, data about Anilox roll are stored in Excel sheets, which is not very
						effective at accessing and operating. Therefore, it wasn&apos;t easy to get used to it, from
						time to
						time, it&apos;s becoming a real concern. We&apos;ve looked for a solution; and eventually, with
						hard-working and enthusiasm, FASO is born. The foundation of FASO is originally built from days
						and days researching and studying about Anilox roll properties and products regarding about this
						topic. FASO development is our pride and we hope that you will experience the best of FASO.
					</div>
				</div>
			</div>


			<div className="chart">
				<div className="content">
					According to &ldquo;Smithers Pira For Intergraf&apos;s Packing report 2019&rdquo; has shown that
					Flexo&apos;s worldwide
					packaging market share in 2017 increased 55,9% compared to other printing methods.
				</div>
				<div className="image">
					<img src={CircleChart} alt="circle-chart"/>
				</div>
			</div>


			<div className="my-carousel-container">
				<MyCarousel/>
			</div>


			<div className="just-text">
				<p>
					And its production scale is improving and upgrading from a mid-level to a large scale. That a
					company has a large production scale means the amount of daily needed Anilox roll is also very high
					and complicated within the terms of managing the roll. Statistically, every company which has a
					mid-level product scale, is having approximately below 100 Anilox roll. Moreover, It is normal
					when a
					larger production scale company to have from 100 to 500 Anilox roll.
				</p>
				<p>
					Therefore, managing Anilox roll is a complex problem. To ensure choosing the suitable Anilox
					roll&apos;s
					parameter for certain printing products require time to reconsider, calculate and choose. For that
					reason, it is important and necessary for companies to create a tool that helps choosing Anilox
					easily and manageable.
				</p>
			</div>


			<div className="evolution ">
				<div className="image">
					<img src={ResearchMethod} alt="evolution"/>
				</div>
				<div className="content content-research animatable">
					<div className="title ">
						RESEARCH METHODS
					</div>
					<div className="body">
						Research Methods are the tools to help the process of researching and collecting data,
						information, knowledge to achieve a new thing. These methods are connectedness like a system and
						accompanying with each other
					</div>
				</div>
			</div>

			<div className="research-methods">
				<div className="method">
					<div className="method-name">
						Data Collection
					</div>
					<div className="method-content">
						The data regarding the parameters of Anilox or doctor blades: Obtained from providers such as
						the roll provider of <b>Harper Corporation of America</b>, or the doctor blades provider of <b>Max
						Daetwyler Corporation</b>. It is then referenced with such standards as <b>ISO 12647-6, ISO
						12647-7, FIRST
						5</b>.
					</div>
				</div>
				<div className="method">
					<div className="method-content">
						Find out the specific parameter value: From the referenced data, proceeding selecting the
						specific value by excluding and categorizing each levels from low, medium, high, etc. Next,
						making a specific and complete value table.
					</div>
					<div className="method-name">
						Analyzing and Processing Data
					</div>
				</div>
				<div className="method">
					<div className="method-name">
						Presenting in Excel Table
					</div>
					<div className="method-content">
						By input data as usual. Build functions to create links or to access input and output data.
					</div>
				</div>
			</div>

			<div className="video-demo">
				<video src={Demo} width="85%" height="760" controls="controls"/>
			</div>

			<div className="evolution ">
				<div className="image image-advantages">
					<img src={Advantages} alt="evolution"/>
				</div>
				<div className="content content-advantages animatable">
					<div className="title ">
						ADVANTAGES OF FASO
					</div>
					<div className="body">
						FASO is a wonderful tool to help you working with Anilox roll more easily, manageable and
						shortening the wasted time choosing the roll.
					</div>
				</div>
			</div>


			<div className="advantages">
				<div className="advantage">
					<div className="check">
						<CheckCircleOutlined/>
					</div>
					<div className="content">
						Simple and easy-to-use interface helps to interact with the website
					</div>
				</div>
				<div className="advantage">
					<div className="check">
						<CheckCircleOutlined/>
					</div>
					<div className="content">
						Taking less than 1 minute to set up the input data to have the wanted Anilox roll parameters
						results
					</div>
				</div>
				<div className="advantage">
					<div className="check">
						<CheckCircleOutlined/>
					</div>
					<div className="content">
						Accessing the results easily
					</div>
				</div>
				<div className="advantage">
					<div className="check">
						<CheckCircleOutlined/>
					</div>
					<div className="content">
						Adjusting and updating Anilox roll parameters according to the company&apos;s basis more easily
						and internally.
					</div>
				</div>
			</div>


			<div className="evolution">
				<div className="image">
					<img src={Types} alt="evolution"/>
				</div>
				<div className="content content-types animatable">
					<div className="title ">
						WHAT ARE USER TYPES OF FASO?
					</div>
					<div className="body">
						Employees of FASO can be classified into three types of user types; company admin, group admin
						or user.
					</div>
				</div>
			</div>


			<div className="user-types ">
				<Row gutter={24}>
					<Col span={8} className="user-type">
						<div className="title ">
							Company Managers
						</div>
						<div className="line"/>
						<div className="content">
							Full access to all portal&apos;s functionalities and can manage all user types.
						</div>
					</Col>
					<Col span={8} className="user-type">
						<div className="title">
							Group Managers
						</div>
						<div className="line"/>
						<div className="content">
							The rights to add, remove, update and edit the specifications, parameters regarding the
							Anilox roll.
						</div>
					</Col>
					<Col span={8} className="user-type">
						<div className="title">
							Employees
						</div>
						<div className="line"/>
						<div className="content">
							View, access history, select Anilox roll parameters, report and store the data.
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Home;