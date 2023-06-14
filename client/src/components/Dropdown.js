import React from "react";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";

export default function Dropdown({
	setToggleMenu,
	setToggleDropdown,
	toggleDropdown,
	setListType,
	handleItemFilter,
	itemsList,
	listType,
}) {
	// dropdown change
	const handleListChange = (type) => {
		setListType(type);
		setToggleDropdown(!toggleDropdown);

		handleItemFilter(type, itemsList);
	};

	return (
		<>
			<button
				className="DropdownBtn w-full h-full flex items-center justify-between hover:opacity-80 duration-150 pr-5"
				onClick={() => {
					setToggleMenu(false);
					setToggleDropdown(!toggleDropdown);
				}}
			>
				{/* selected option */}
				<p className="text-white drop-shadow-md">
					{listType === 0
						? "To do today"
						: listType === 1
						? "Yesterday to do list"
						: "Past to do list"}
				</p>

				{/* up/down arrow */}
				<div className={`ml-auto -mb-1 p-2 pr-0`}>
					{toggleDropdown === false ? (
						<HiOutlineChevronDown size={18} color="#766B57" />
					) : (
						<HiOutlineChevronUp size={18} color="#766B57" />
					)}
				</div>
			</button>

			{/* dropdown options */}
			<div
				className={`Options z-50 absolute top-full left-0 w-[371px] h-0 overflow-auto duration-300 delay-100 ease-in-out mt-2 mx-auto -ml-0.5 
					${toggleDropdown === false ? "!h-0" : "!h-[200px]"}`}
			>
				{/* today */}
				<button
					className="TodayTodo w-full h-[60px] bg-[#A59C82] bg-opacity-[98%] rounded-t-lg text-left text-white px-5 disabled:text-opacity-50"
					disabled={listType === 0}
					onClick={() => handleListChange(0)}
				>
					To do today
				</button>

				{/* yesterday */}
				<button
					className="YesterdayTodo w-full h-[60px] bg-[#A59C82] bg-opacity-[98%] text-left text-white border-y border-[#766B57] px-5 disabled:text-opacity-50"
					disabled={listType === 1}
					onClick={() => handleListChange(1)}
				>
					Yesterday to do list
				</button>

				{/* past */}
				<button
					className="PastTodo w-full h-[60px] bg-[#A59C82] bg-opacity-[98%] rounded-b-lg shadow-md text-left text-white px-5 disabled:text-opacity-50"
					disabled={listType === 2}
					onClick={() => handleListChange(2)}
				>
					Past to do list
				</button>
			</div>
		</>
	);
}
