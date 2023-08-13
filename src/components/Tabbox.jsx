import React, { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import Projects from "./Projects";
function Tabbox() {
	const [currentTabIndex, setCurrentTabIndex] = useState(0);

	const handleTabChange = (e, tabIndex) => {
		console.log(tabIndex);
		setCurrentTabIndex(tabIndex);
	};
	return (
		<React.Fragment>
			<div className=" border-t-2 border-b-2 h-full border-black overflow-hidden text-ol drop-shadow">
				<Tabs className="text-black bg-white h-1/6 border-b-2 border-black" value={currentTabIndex} onChange={handleTabChange}>
					<Tab label="< Projects />" />
					<Tab label="< Tab 2 />" />
					<Tab label="Tab 3" />
				</Tabs>
				<div className="bg-red-200  ">
					{/* TAB 1 Contents */}
					{currentTabIndex === 0 && (
						<Box className="h-full bg-white " sx={{ p: 0 }}>
							<Projects />
						</Box>
					)}

					{/* TAB 2 Contents */}
					{currentTabIndex === 1 && (
						<Box sx={{ p: 3 }}>
							<Typography variant="h5">Tab 2 Content</Typography>
						</Box>
					)}

					{/* TAB 3 Contents */}
					{currentTabIndex === 2 && (
						<Box sx={{ p: 3 }}>
							<Typography variant="h5">Tab 3 Content</Typography>
						</Box>
					)}
				</div>
			</div>
		</React.Fragment>
	);
}

export default Tabbox;
