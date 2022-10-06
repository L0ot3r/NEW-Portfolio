import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BtnMain } from '../components';

import { urlFor } from '../utils/lib/client';

const Projects = ({ projects }: any) => {
	return (
		<div id='projects' className='pt-2'>
			<div className='section mt-[150px]'>
				<h3 className='section-title'>Projets</h3>
			</div>
			<div className={`section bg-img-projects bg-fixed bg-cover bg-bottom`}>
				<div>
					<div className='grid md:grid-cols-3 sm:grid-cols-2 gap-4 p-5 justify-center items-center'>
						{projects.map((project: any) => (
							<div key={project._id} className='sm:px-0 p-4 px-7'>
								<div className='shadow-xl'>
									<Image
										src={urlFor(project.image.asset._ref).url()}
										alt={project.title}
										width={250}
										height={150}
										layout='responsive'
										className='rounded-t-md'
									/>
									<div className='bg-[#3a3a3a] text-[#f1f1f1] p-4 rounded-md rounded-t-none w-full min-h-[250px] flex flex-col justify-around'>
										<h1 className='text-2xl font-semibold mt-2'>
											{project.title}
										</h1>
										<p className='p-2 mt-2'>{project.description}</p>
										<div className='flex justify-between'>
											<BtnMain 
												title='Code'
												onClick={() => window.open(
													project.githuburl,
													'_blank',
													'noopener,noreferrer'
												)}
												style='btn-back w-[90px] py-1'
											/>
											<BtnMain 
												title='Aperçu'
												onClick={() => window.open(
													project.viewurl,
													'_blank',
													'noopener,noreferrer'
												)}
												style='btn-back w-[90px] py-1'
											/>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
