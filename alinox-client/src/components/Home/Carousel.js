import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CarouselImg1 from "../../asserts/images/carousel/carousel-1.png";
import CarouselImg2 from "../../asserts/images/carousel/carousel-2.png";
import CarouselImg3 from "../../asserts/images/carousel/carousel-3.png";
import CarouselImg4 from "../../asserts/images/carousel/carousel-4.png";
import CarouselImg5 from "../../asserts/images/carousel/carousel-5.png";
import CarouselImg6 from "../../asserts/images/carousel/carousel-6.png";
import CarouselImg7 from "../../asserts/images/carousel/carousel-7.png";

const items = [
	{
		image: CarouselImg1,
		caption: "HEALTH & PERSONAL CARE PRODUCTS"
	},
	{
		image: CarouselImg2,
		caption: "HYGIENIC GOODS"
	},
	{
		image: CarouselImg3,
		caption: "BEAUTY CARE PACKAGING"
	},
	{
		image: CarouselImg4,
		caption: "FOLDING BOXES, TUBES, BOTTLES & CANS"
	},
	{
		image: CarouselImg5,
		caption: "DAIRY BRANDS"
	},
	{
		image: CarouselImg6,
		caption: "GLOBAL BEVERAGES"
	},
	{
		image: CarouselImg7,
		caption: "PET FOOD INDUSTRY"
	}
];

const MyCarousel = () => {
	return (
		<div className="my-carousel">
			<Carousel
				swipeable={true}
				swipeScrollTolerance={20}
				showArrows
				dynamicHeight={false}
				thumbWidth={220}
				emulateTouch
				autoPlay
				interval={1850}
			>
				<div className="my-carousel-item">
					<img src={CarouselImg1} alt="carousel-0"/>
					<p className="legend">{items[0].caption}</p>
				</div>
				<div className="my-carousel-item">
					<img src={CarouselImg2} alt="carousel-1"/>
					<span className="legend">{items[1].caption}</span>
				</div>
				<div className="my-carousel-item">
					<img src={CarouselImg3} alt="carousel-2"/>
					<span className="legend">{items[2].caption}</span>
				</div>
				<div className="my-carousel-item">
					<img src={CarouselImg4} alt="carousel-3"/>
					<span className="legend">{items[3].caption}</span>
				</div>
				<div className="my-carousel-item">
					<img src={CarouselImg5} alt="carousel-4"/>
					<span className="legend">{items[4].caption}</span>
				</div>
				<div className="my-carousel-item">
					<img src={CarouselImg6} alt="carousel-5"/>
					<span className="legend">{items[5].caption}</span>
				</div>
				<div className="my-carousel-item">
					<img src={CarouselImg7} alt="carousel-6"/>
					<span className="legend">{items[6].caption}</span>
				</div>
			</Carousel>
		</div>
	);
};

export default MyCarousel;