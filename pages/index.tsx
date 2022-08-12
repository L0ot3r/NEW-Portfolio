import type { NextPage } from 'next';
import Head from 'next/head';
import { client } from '../utils/lib/client'

import { Layout, Hero, BgAnim, Footer, Projects, Technologies } from '../components';

const Home: NextPage = ({ projects }: any) => {


	return (
		<Layout>
			<Head>
				<title>Portfolio -Sébastien Léoville</title>
			</Head>

				<div className='section-grid'>
					<div className='section-flex'>
						<Hero />
					</div>
					<BgAnim />
				</div>
				<Projects projects={projects} />
				<Technologies />

			<footer>
				<Footer />
			</footer>
		</Layout>
	);
};

export const getServerSideProps = async () => {
	const query = `*[_type == "project"]`;
	const projects = await client.fetch(query);
	return {
		props: {
			projects,
		},
	}
}

export default Home;
