import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import Above from "../Components/aboveHome";
import CounselHome from "../Components/images/listen.jpg";
import Frontimg from "../Components/images/front.jpg";

function Home() {
	return (
		<div className='homepage'>
			<div className='front-top'>
				<div className='front-top-left'>
					<span className='front-head'>JUST TALK</span>
					<span className='front-subhead'>
						Healing takes time and asking for help is a courageous step
					</span>
				</div>
				<div className='front-top-right'>
					<img src={Frontimg} className='frontImg' />
				</div>
			</div>
			{/* <CounselPage /> */}
			<div className='front-bot'>
				<div>
					<span className='bot-heading'>Need Someone to talk to?</span>
				</div>
				<Link to='/counsel' className='link-counsel'>
					<div className='bot-desc'>
						<span>We Are here to</span>
						<span>
							<img src={CounselHome} alt='img' className='bot-image' />
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Home;
