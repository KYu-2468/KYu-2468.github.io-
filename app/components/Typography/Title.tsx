import React from "react";

interface TitleProps {
	children: any;
}

const Title = ({ children }: TitleProps) => {
	return (
		<div className="dark:text-white m-4 text-xl font-bold text-center md:text-3xl lg:text-4xl text-black font-sans">
			{children}
		</div>
	);
};

export default Title;
