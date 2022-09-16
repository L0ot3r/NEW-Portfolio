import React from 'react';

interface IProps {
  title: string;
  onClick: any;
	style?: string;
}

const BtnMain = ({ title, onClick, style }: IProps) => {
	return (
		<div className={`${style}`}>
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
