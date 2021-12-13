import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
	return (
		<div>
			<div className="ui secondary pointing menu">
				<Link
					to="/"
					className="item"
					style={{ fontSize: "16px", fontWeight: "600" }}
				>
					Stream
				</Link>

				<div className="right menu">
					<Link
						to="/"
						className="item"
						style={{ fontSize: "16px", fontWeight: "600" }}
					>
						All Streams
					</Link>
					<div className="item">
						<GoogleAuth />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
