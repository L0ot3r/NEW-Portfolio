import React from 'react';

interface IProps {
  title: string;
  onClick: any;
}

const BtnMain = ({ title, onClick }: IProps) => {
	return (
		<div className='btn-back'>
			{title}
			<button
				className='btn-front'
				onClick={onClick}
			>
				{title}
			</button>
		</div>
	);
};

export default BtnMain;
