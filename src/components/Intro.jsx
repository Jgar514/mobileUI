import React from "react";
import propic from "../assets/propic.jpeg";

function Intro() {
	return (
		<div className="flex flex-col h-auto bg-transparent z-1 px-2 py-2 border-t-2 border-b-8 border-black ">
			<div className="bg-transparent flex flex-row gap-5 items-center ">
				<img src={propic} className=" rounded-full bg-white h-auto w-1/5 border-4 border-black " />
				{/* <Image className="rounded-full bg-white h-auto w-1/5 border-4 border-black  " width={90} height={90} src={Propic} alt="idk" /> */}
				<div className="flex flex-column  gap-2">
					<div className="w-full mt-2 mr-3">
						<h1 className="py-1 bg-transparent text-xl  font-bold">Joshua Garvey</h1>
					</div>
					<div className="w-2/5 mt-5 bg-transparent py-3 ">
						<a className="bg-button text-type border-ol border-2 px-4 py-2 rounded" href="#">
							Resume
						</a>
					</div>
				</div>
			</div>
			<div className="bg-transparent  p-2">
				<p className="text-base px-2 py-2 leading-normal font-burtons">I enjoy making web applications, challenging myself, and learning from others. I believe how you do anything is how you do everything.</p>
			</div>
		</div>
	);
}

export default Intro;
