import React from 'react';
import Head from 'next/head';
import { Navbar } from '../components';

interface IProps {
	children: any;
}

const Layout = ({ children }: IProps) => {
	return (
		<div className='max-w-7xl w-full m-auto'>
			<Head>
				<title>Portfolio - Sébastien Léoville</title>
			</Head>

			<header className='fixed w-full max-w-7xl bg-gradient-to-b from-[#1a1a1a] to-[#1a1a1a00] via-[#1a1a1aea] z-50'>
				<Navbar />
			</header>

			<main className='pt-[140px]'>{children}</main>

		</div>
	);
};

export default Layout;
