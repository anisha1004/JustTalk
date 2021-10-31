import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Above() {
	const [showBtns, setShowBtns] = useState(false);
	return (
		<React.Fragment>
			<div className='above'>
				<h1 className='above_h1'>A STRANGER'S ADVICE</h1>
				<p className='above_p'>Made by students for students</p>
			</div>
		</React.Fragment>
	);
}

export default Above;
