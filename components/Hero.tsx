import React from 'react';

const Hero = () => {
	return (
		<div className='section-flex'>
			<div className='section-left'>
				<h2 className='section-title'>
					Bienvenu sur <br />
					Mon Portfolio Personnel
				</h2>
				<p className='section-text'>
					Prestaverse a été créé avec pour objectifs de coupler ma passion pour
					les technologies et le code, qui me fascinent depuis ma decouverte de
					l&apos;informatique pendant mes jeunes années, à mon envie de fournir
					le service dont vous avez besoin pour développer de votre activité.
				</p>
				<div className='btn-back'>
					En savoir plus
					<button
						className='btn-front'
						onClick={() =>
							window.open(
								'https://github.com/L0ot3r',
								'_blank',
								'noopener,noreferrer'
							)
						}
					>
						En savoir plus
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
