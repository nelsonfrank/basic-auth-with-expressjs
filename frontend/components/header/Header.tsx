import React from "react";
import Image from "next/image";
import logo from "@/public/icon/logo.svg";

const Header = () => {
	return (
		<header>
			<section className='nxt-flex nxt-justify-between nxt-items-center nxt-w-full'>
				<div className='nxt-w-1/2'>
					<Image src={logo} alt='Logo svg' width='60' height='60' />
				</div>
				<div className='nxt-w-1/2 nxt-flex nxt-justify-end'>
					<ul className='nxt-flex nxt-mr-4'>
						<li className='nxt-mx-2 nxt-text-xl'>Blogs</li>
						<li className='nxt-mx-2 nxt-text-xl'>Contacts</li>
					</ul>
					<ul className='nxt-flex'>
						<li className='nxt-mx-2 nxt-text-xl'>Login</li>
						<li className='nxt-mx-2 nxt-text-xl'>Signup</li>
					</ul>
				</div>
			</section>
		</header>
	);
};

export default Header;
