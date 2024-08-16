import React from "react";
import Content from "./Typography/Content";
import SectionTitle from "./Typography/SectionTitle";
import Title from "./Typography/Title";

const profileImg = "./img/profile-img.webp";
const About = () => {
	return (
		<>
			<SectionTitle>About me</SectionTitle>
			<div className="flex flex-wrap w-full h-full">
				<Image />
				<Info />
			</div>
		</>
	);
};

const Image = () => {
	return (
		<div className="flex items-center justify-center w-full md:ml-8 md:w-2/5">
			<img
				className="w-4/5 rounded-full shadow-2xl dark:shadow-white md:w-full shadow-black xl:w-4/5"
				src={profileImg}
				alt="profile"
			/>
		</div>
	);
};

const Info = () => {
	return (
		<div className="flex flex-col items-center w-full h-auto px-4 mt-4 md:w-1/2 md:px-12">
			<Title>Full-Stack Software Engineer</Title>
			<div className="flex flex-wrap">
				<Content>
					Hey 👋, I'm a Full-Stack Engineer with 1.5 years of
					experience. Proficient in building and deploying web
					applications using JavaScript, TypeScript, React, Node.js,
					and PostgreSQL. I'm experienced in startup environments,
					wearing multiple hats, and teaching college students
					software development.
				</Content>
			</div>
		</div>
	);
};

export default About;
