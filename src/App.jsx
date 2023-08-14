import { useState } from "react";
import Tabbox from "./components/Tabbox";

// import reactLogo from "./assets/react.svg";

import "./App.css";

import Navbar from "./components/Navbar";

import Intro from "./components/Intro";

import propic from "./assets/propic.jpeg";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlineSend, AiOutlineMenu, AiOutlineInstagram } from "react-icons/ai";

function App() {
	const [count, setCount] = useState(0);
	const [currentTabIndex, setCurrentTabIndex] = useState(0);

	const handleTabChange = (e, tabIndex) => {
		console.log(tabIndex);
		setCurrentTabIndex(tabIndex);
	};

	return (
		<>
			{/*  */}
			<div className="h-full bg-white">
				{/* Nav */}
				<div className="bg-green-300 h-2/6 border-b-2 border-black">
					<div className="bg-red-200 h-1/3  pr-4 text-4xl ">
						{/* <MenuIcon viewBox="0 0 20 20" class="w-10 h-10 fill-current " /> */}
						<Navbar />
					</div>
					{/* <Navbar /> */}

					{/* intro */}

					<div className="bg-red-300 h-2/3 flex flex-col">
						{/* propic */}
						<div className="flex h-1/2">
							<div className="w-full">
								<div className="bg-white gap-2 w-full flex p-2 justify-start">
									<img src={propic} className=" rounded-full bg-white h-full w-auto mx-2 border-2  border-black " />
									<div className="flex flex-col">
										<h1 className="flex  text-2xl text-start  font-bold pt-1">Joshua Garvey</h1>
										<p className="text-lg">"Status"</p>
									</div>
									<div className="p-3 mt-3">
										<a className="bg-button text-type border-ol border-2 px-2 py-2 rounded" href="#">
											Resume
										</a>
									</div>
								</div>

								{/* nametag */}
								{/* <div className="bg-indigo-400 w-2/3 flex pt-2">
									<div className="bg-red-300 pt-4 h-1/2 flex flex-col ">
										<h1 className="flex  text-2xl text-start h-1/2 font-bold pt-1">Joshua Garvey</h1>
										<p className="text-lg">"Status"</p>
									</div>
									<div className="bg-yellow-100 h-1/4"></div>

									End Name and Staus
								</div> */}
							</div>
						</div>
						<div className="h-1/2 bg-blue-50 px-2">
							<p className="text-m p-2 px-2 py-2 leading-normal font-burtons">I enjoy making web applications, challenging myself, and learning from others. </p>
						</div>
					</div>
				</div>

				{/* TabBox */}

				<div className="bg-green-400 h-3/6 flex flex-row items-center ">
					{/* Project Window */}
					<div className=" bg-purple-200 h-5/6 w-full ">
						<Tabbox />
					</div>
				</div>

				{/* Bottom */}

				<div className="bg-green-500 h-1/6 flex flex-row flex-wrap items-center justify-center p-2 ">
					<div className="bg-yellow-300  w-full rounded-3xl items-center  overflow-hidden    flex h-full px-0 z-50">
						<div className="text-6xl w-full flex gap-8 py-0 px-4 ">
							<AiFillGithub />
							<AiFillLinkedin />
							<AiOutlineInstagram />
							<AiOutlineSend />
						</div>
						{/* <div className="bg-blue-100 h-full w-1/4 flex items-center justify-center object-cover p-3">
							<GitHubIcon viewBox="0 0 25 25" class="w-20 h-auto fill-current " />
						</div>

						<div className="bg-blue-100 h-full w-1/4 flex items-center justify-center object-cover py-3">
							<LinkedInIcon viewBox="0 0 25 25" class="w-20  h-auto  fill-current fill-blue-600 bg-white rounded-2xl" />
						</div>
						<div className="bg-blue-100 h-full w-1/4 flex items-center justify-center object-cover p-3">
							<GitHubIcon viewBox="0 0 25 25" class="w-20 h-20 fill-current " />
						</div>
						<div className="bg-blue-100 h-full w-1/4 flex items-center justify-center object-cover p-3">
							<GitHubIcon viewBox="0 0 25 25" class="w-20 h-auto fill-current bg-black rounded-2xl fill-white  " />
						</div> */}
					</div>
					{/* <div className="h-1/3 w-full flex items-end bg-gray-700"></div> */}
				</div>

				{/* <Navbar />
				<Intro />
				<Tabbox /> */}
			</div>
		</>
	);
}

export default App;
