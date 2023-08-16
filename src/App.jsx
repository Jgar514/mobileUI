import { useState } from "react";
import Tabbox from "./components/Tabbox";

// import reactLogo from "./assets/react.svg";

import "./App.css";

import Navbar from "./components/Navbar";

import Intro from "./components/Intro";
import Bottom from "./components/Bottom";
import Profile from "./components/Profile";
import Top from "./components/Top";
import Middle from "./components/Middle";

import { Box, Tab, Tabs, Typography } from "@mui/material";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlineSend, AiOutlineMenu, AiOutlineInstagram } from "react-icons/ai";

function App() {
	return (
		<>
			{/*  */}
			<div className="h-full bg-izzy-400">
				<Top />

				<Middle />

				<Bottom />
			</div>
		</>
	);
}

export default App;
