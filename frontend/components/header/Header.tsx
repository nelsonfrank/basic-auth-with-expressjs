import React, {useState, useEffect} from "react";
import Image from "next/image";
import logo from "@/public/icon/logo.svg";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
	const [token, setToken] = useState<string>()
	const router = useRouter();

	useEffect(() => {
		const token = localStorage.getItem("auth_token");
		setToken(token);
	}, [localStorage.getItem("auth_token")])

	const handleSignOut = () =>{
		localStorage.removeItem("auth_token")
		router.push("/auth/signin");
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
					<ul className='nxt-flex nxt-mr-4'>
						<li className='nxt-mx-2 nxt-text-xl'>Blogs</li>
						<li className='nxt-mx-2 nxt-text-xl'>Contacts</li>
					</ul>
					<ul className='nxt-flex'>
						{
							
							!token ?(
								<>
									<li className='nxt-mx-2 nxt-text-xl'>
									<Link href='/auth/signin'>Login</Link>
									</li>
									<li className='nxt-mx-2 nxt-text-xl'>
										<Link href='/auth/signup'>Signup</Link>
									</li>
								</>
							):
							(
								<li className='nxt-mx-2 nxt-text-xl'>
									<button onClick={handleSignOut}>Logout</button>
								</li>
							)
							
						}
					</ul>
				</div>
			</section>
		</header>
	);
};

export default Header;
