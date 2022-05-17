import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
interface LayoutProps {
	children: JSX.Element
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div>
			<Head>
				<title>Landing Page</title>
				<link rel='icon' href='/icon/favicon.ico' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<section className='nxt-flex nxt-flex-col nxt-min-h-screen'>
				<Header />
				<main className='nxt-flex-1'>{children}</main>
				<Footer />
			</section>
		</div>
	);
};

export default Layout;
