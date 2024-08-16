import React from "react";

interface ContentProps {
	children: any;
}

const Content = ({ children }: ContentProps) => {
	return (
		<div className="mx-2 my-4 dark:text-white text-lg text-left md:mx-4 md:text-left md:text-xl xl:text-2xl text-black font-sans leading-relaxed tracking-wide">
			{children}
		</div>
	);
};

export default Content;
