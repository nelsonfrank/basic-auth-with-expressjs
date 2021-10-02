import React from "react";
import Image from "next/image";
import logo from "@/public/icon/logo.svg";
import Link from "next/link";

const Header = () => {
	return (
		<header className='nxt-my-6 nxt-w-98/100 nxt-mx-auto'>
			<section className='nxt-flex nxt-justify-between nxt-items-center nxt-w-full'>
				<div className='nxt-w-1/2'>
					<Link href='/'>
						<Image src={logo} alt='Logo svg' width='60' height='60' />
					</Link>
				</div>
				<div className='nxt-w-1/2 nxt-flex nxt-justify-end nxt-font-quicksand nxt-font-medium'>
					<ul className='nxt-flex nxt-mr-4'>
						<li className='nxt-mx-2 nxt-text-xl'>Blogs</li>
						<li className='nxt-mx-2 nxt-text-xl'>Contacts</li>
					</ul>
					<ul className='nxt-flex'>
						<li className='nxt-mx-2 nxt-text-xl'>Login</li>
						<li className='nxt-mx-2 nxt-text-xl'>
							<Link href='/signup'>Signup</Link>
						</li>
					</ul>
				</div>
			</section>
		</header>
	);
};

export default Header;
