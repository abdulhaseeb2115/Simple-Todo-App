import React, { useState } from "react";
import "./MainScreen.css";
import person from "../../assets/person.jpg";
import {
	HiOutlineMenu,
	HiOutlineChevronDown,
	HiOutlineChevronUp,
} from "react-icons/hi";

export default function MainScreen() {
	const [showToday, setShowToday] = useState(false);

	return (
		<div
			className="MainScreen 
			min-h-screen w-full 
			relative overflow-auto
			flex flex-col items-center 
			pt-20 pb-10 px-10
			"
		>
			{/* User Image */}
			<img
				src={person}
				alt="person_image"
				className="h-28 aspect-square rounded-full border-[3px] border-[#AB9A90] shadow-xl"
			/>

			{/* To Do Today */}
			<div
				className="Button w-[370px] h-[70px] 
				bg-[#A59C82] bg-opacity-90 
				mt-5 py-1 px-5
				rounded-md border border-[#A59C82]
				flex items-center
				"
			>
				<button
					className="mr-4 -mb-0.5 hover:opacity-50 duration-150"
					onClick={() => {}}
				>
					<HiOutlineMenu size={25} color="#766B57" />
				</button>

				<p className="text-white drop-shadow-md">To do today</p>

				<button
					className={`ml-auto -mb-1 hover:opacity-50 duration-150 p-2 pr-0`}
					onClick={() => setShowToday(!showToday)}
				>
					{showToday === false ? (
						<HiOutlineChevronDown size={18} color="#766B57" />
					) : (
						<HiOutlineChevronUp size={18} color="#766B57" />
					)}
				</button>
			</div>
			<div
				className={`List 
				w-[370px] h-0
				overflow-auto
				bg-slate-300 
				rounded-md
				mt-2
				duration-300
				delay-100
				ease-in-out
				${showToday === false ? "!h-0" : "!h-[300px]"}
				`}
			>
				<div className="h-[200px] mb-2 w-5 bg-red-500"></div>
			</div>
		</div>
	);
}
