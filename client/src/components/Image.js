import React from "react";
import person from "../assets/person.jpg";

export default function Image() {
	return (
		<img
			src={person}
			alt="person_image"
			className="User h-28 aspect-square rounded-full border-[3px] border-[#AB9A90] shadow-xl mx-auto"
			loading="lazy"
		/>
	);
}
