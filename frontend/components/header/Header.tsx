import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/icon/logo.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import Cookie from 'js-cookie'
import { signout } from '@/api'
import Menu from './menu'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
// types
import { User } from '@/common/types/user'
const Header = () => {
	const [status, setStatus] = useState<string>()
	const isLogin = Cookie.get("login-status");
	const router = useRouter();

	const userState = useSelector((state: RootState) => state.user)
	useEffect(() => {
		setStatus(isLogin);
	}, [isLogin])

	const handleSignOut = async () => {
		const [_, response] = await signout();

		if (response && response.data.status) {
			Cookie.set('login-status', response.data.status)
			setStatus(response.data.status);
			router.push("/auth/signin");
		}
	}
	return (
		<header className='nxt-my-6 nxt-w-98/100 nxt-mx-auto'>
			<section className='nxt-flex nxt-justify-between nxt-items-center nxt-w-full'>
				<div className='nxt-w-1/2'>
					<Link href='/'>
						<Image src={logo} alt='Logo svg' width='60' height='60' />
					</Link>
				</div>
				<div className='nxt-w-1/2 nxt-flex nxt-justify-end nxt-font-quicksand nxt-font-medium'>
					<ul className={status !== 'logged-in' ? 'nxt-flex nxt-mr-4' : 'nxt-flex'}>
						<li className='nxt-mx-2 nxt-text-xl'>Blogs</li>
						<li className='nxt-mx-2 nxt-text-xl'>Contacts</li>
					</ul>
					<ul className='nxt-flex'>
						{

							status !== 'logged-in' ? (
								<>
									<li className='nxt-mx-2 nxt-text-xl'>
										<Link href='/auth/signin'>Login</Link>
									</li>
									<li className='nxt-mx-2 nxt-text-xl'>
										<Link href='/auth/signup'>Signup</Link>
									</li>
								</>
							) :
								(
									<>
										<li className='nxt-mx-2 nxt-text-xl'>
											<Link href='/dashboard'>Dashboard</Link>
										</li>
										<li className='nxt-mx-2 nxt-text-xl'>
											<Menu handleSignOut={handleSignOut} user={userState} />
										</li>
									</>
								)

						}
					</ul>
				</div>
			</section>
		</header>
	);
};


export default Header;
