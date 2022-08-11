import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { urlFor } from '../utils/lib/client';

const Projects = ({ projects }: any) => {
	return (
		<div className='section'>
			<h1 className='section-title'>Projets</h1>
			<div>
				<div className='grid md:grid-cols-3 sm:grid-cols-2 gap-4 p-5 justify-center items-center'>
					{projects.map((project: any) => (
						<div key={project._id} className='sm:px-0 p-4 px-7'>
							<Image
								src={urlFor(project.image.asset._ref).url()}
								alt={project.title}
								width={250}
								height={150}
								layout='responsive'
								className='rounded-t-md'
							/>
							<div className='bg-gray-200 p-4 rounded-md rounded-t-none w-full min-h-[250px] flex flex-col justify-around'>
								<h1 className='text-2xl font-semibold mt-2'>{project.title}</h1>
								<p className='p-2 mt-2'>{project.description}</p>
								<div className='flex justify-between'>
									<Link href={project.githuburl}>
										<a
											className='text-blue-700 hover:text-red-400 px-3 font-semibold'
											target='_blank'
											rel='noopener noreferrer'
										>
											Code
										</a>
									</Link>
									<Link href={project.viewurl}>
										<a
											className='text-blue-700 hover:text-red-400 px-3 font-semibold'
											target='_blank'
											rel='noopener noreferrer'
										>
											Aperçu
										</a>
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
