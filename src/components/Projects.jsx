import React from "react";
import { useKeenSlider } from "keen-slider/react";
import IMAGES from "../images/Images";

// import "./styles.css";

function Projects() {
	const [sliderRef] = useKeenSlider({
		loop: false,
		mode: "free-snap",
		slides: {
			perView: 1.75,
			spacing: 15,
		},
	});

	return (
		<div ref={sliderRef} className="keen-slider h-5/6  p-4 flex bg-blue-300 border-2 border-white ">
			<div className="keen-slider__slide number-slide3 flex justify-center items-center">
				<div className=" bg-[url('./images/square.png')] h-6/6 bg-cover rounded-xl border-2 border-black flex aspect-square  object-scale-down bg-center items-end">
					<div class="w-full h-1/6 flex  items-center justify-center bottom-0 backdrop-brightness-50">
						<span class="text-white text-lg text-bold   ">Immersive 3d Portfolio</span>
					</div>
				</div>
			</div>

			<div className="keen-slider__slide number-slide3 flex justify-center items-center">
				<div className=" bg-[url('./images/square.png')] h-6/6 bg-cover rounded-xl border-2 border-black flex aspect-square  object-scale-down bg-center">
					<h1 className="">Immersive 3d portfolio</h1>
				</div>
			</div>

			<div className="keen-slider__slide number-slide3 flex justify-center items-center">
				<div className=" bg-[url('./images/square.png')] h-6/6 bg-cover rounded-xl border-2 border-black flex aspect-square  object-scale-down bg-center">
					<h1 className="">Immersive 3d portfolio</h1>
				</div>
			</div>

			<div className="keen-slider__slide number-slide5">5</div>
			<div className="keen-slider__slide number-slide6">6</div>
		</div>
	);
}

export default Projects;
