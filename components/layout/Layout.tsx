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
