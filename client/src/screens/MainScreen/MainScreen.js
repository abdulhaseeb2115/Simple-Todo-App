import React from "react";
import "./MainScreen.css";
import bg from "../../assets/bridge.jpg";
import person from "../../assets/person.jpg";

export default function MainScreen() {
	return (
		<div
			style={{
				backgroundImage: `url(${bg})`,
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
			className="MainScreen h-screen w-full overflow-hidden relative flex items-center justify-center"
		>
			<img
				src={person}
				alt="person_image"
				className="h-28 aspect-square rounded-full z-10 border-[3px] border-[#AB9A90] shadow-xl"
			/>
		</div>
	);
}
