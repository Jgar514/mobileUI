import React from "react";

function Navbar() {
	return (
		<nav className="bg-transparent pt-4 px-3 mb-0 flex justify-between ">
			<h1 className="text-xl font-burtons pb-3">Hello World1</h1>
			<ul className="flex items-center">
				<li>{/* <BsFillMoonStarsFill className="cursor-pointer pb-4 text-5xl" /> */}</li>
				{/* <li>
          <a className="bg-cyan-500 text-white px-4 py-2 rounded" href="#">
            Resume
          </a>
        </li> */}
			</ul>
		</nav>
	);
}

export default Navbar;
