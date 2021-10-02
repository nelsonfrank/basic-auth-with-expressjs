import React from "react";

const Footer = () => {
	return (
		<section className='nxt-mt-12 nxt-p-8 nxt-text-white nxt-bg-gray-800'>
			<h2>
				Created with{" "}
				<span style={{ color: "red", fontSize: "1.5rem" }}>&#128150; </span> by
				<span>
					<a
						style={{ textDecoration: "none" }}
						href='https://twitter.com/nelsonfrank78'
					>
						{" "}
						@nelsonfrank78
					</a>
				</span>
			</h2>
		</section>
	);
};

export default Footer;
