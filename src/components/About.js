import React, { useEffect } from "react";
import "../styles/About.css";
import about1 from "../images/about1.jpg";
import about2 from "../images/about2.jpg";
import about3 from "../images/about3.jpg";

import Rellax from "rellax";

function About() {
	useEffect(() => {
		new Rellax(".about__images", {
			speed: 10,
			center: true,
		});
		// new Rellax(".about__text", {
		// 	speed: 3,
		// 	center: true,
		// });
	}, []);
	return (
		<div className="about">
			<div className="about__images">
				<div className="about__imagesLeft">
					<img src={about1} alt="" className="image" />
					<img src={about3} alt="" className="image" />
				</div>
				<div className="about__imagesRight">
					<img src={about2} alt="" className="image" />
				</div>
			</div>
			<div className="about__text">
				<div className="about__textTop">
					<h1>
						WHO <span>WE ARE</span>
					</h1>
				</div>
				<p>
					CMD Pioneer Corp. is a subcontracting company dealing with
					construction of houses, buildings, offices and other facilities. We
					are a team of highly innovative individuals aiming to provide the best
					service to all our clients.
				</p>
			</div>
		</div>
	);
}

export default About;
