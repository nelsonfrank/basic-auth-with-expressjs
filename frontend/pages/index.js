import Head from "next/head";

export default function Home() {
	return (
		<div className='nxt-w-11/12 nxt-mx-auto nxt-my-'>
			<Head>
				<title>Landing Page</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='nxt-mt-8'>
				<h1 className='nxt-text-4xl nxt-text-purple-900'>Hello World</h1>
			</main>
		</div>
	);
}
