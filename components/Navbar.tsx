import React from 'react';
import Link from 'next/link';

import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

const Navbar = () => {
	return (
		<div className='nav-container'>
				<div className='nav-brand'>
					<Link href='/'>
						<a className='text-[#f1f1f1] mb-1 flex items-center'>
							<DiCssdeck size='2.5rem' />{' '}
							<span className='text-3xl ml-1'>Portfolio</span>
						</a>
					</Link>
				</div>
				<div className='nav-links'>
					<li>
						<Link href='#projects'>
							<a className='nav-link'>Projets</a>
						</Link>
					</li>
					<li>
						<Link href='#tech'>
							<a className='nav-link'>Technos</a>
						</Link>
					</li>
					<li>
						<Link href='#about'>
							<a className='nav-link'>À Propos</a>
						</Link>
					</li>
				</div>
				<div className='social-links'>
					<a
						className='social-icons mr-2'
						href='https://github.com/L0ot3r'
						target='_blank'
						rel='noopener noreferrer'
					>
						<AiFillGithub size='2rem' />
					</a>
					<a
						className='social-icons mr-2'
						href='https://linkedin.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						<AiFillLinkedin size='2rem' />
					</a>
					<a
						className='social-icons'
						href='https://instagram.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						<AiFillInstagram size='2rem' />
					</a>
				</div>
		</div>
	);
};

export default Navbar;
