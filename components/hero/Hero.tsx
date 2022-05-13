import React from "react";
import Image from "next/image";
import LakeImg from "@/public/lake.jpg";

const Hero = () => {
	return (
		<section>
			<div className='nxt-w-full'>
				<Image
					src={LakeImg}
					alt='Earth from space'
					className='nxt-hero-img '
					layout='responsive'
				/>
			</div>
		</section>
	);
};

export default Hero;
