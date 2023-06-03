import React, { useEffect, useState } from "react";
import "./MainScreen.css";
import person from "../../assets/person.jpg";
import { RxDragHandleDots2 } from "react-icons/rx";
import {
	HiOutlineMenu,
	HiOutlineChevronDown,
	HiOutlineChevronUp,
	HiOutlineCheck,
} from "react-icons/hi";
import * as api from "../../api/todoRequests";

export default function MainScreen() {
	const [listType, setListType] = useState(0); // change list type
	const [toggleDropdown, setToggleDropdown] = useState(false); // toggle dropdown
	const [refresh, setRefresh] = useState(false); // refresh data
	const [itemsList, setItemsList] = useState(false); // todo items list

	// handle dropdown options
	const handleListChange = (type) => {
		setListType(type);
		setToggleDropdown(!toggleDropdown);
	};

	// fetch data
	useEffect(() => {
		async function fetchData() {
			try {
				const { data } = await api.getCompleteList(); // data request
				if (data?.success === true) {
					setItemsList(data?.items);
					console.log(data);
				} else {
					console.log(data);
					alert("An error occured !!");
				}
			} catch (error) {
				console.log(error);
				alert("An error occured !");
			}
		}

		fetchData();
	}, [refresh]);

	return (
		<div
			className="MainScreen 
			h-screen w-full overflow-y-scroll 
			relative p-20
			"
		>
			{/* User Image */}
			<img
				src={person}
				alt="person_image"
				className="h-28 aspect-square 
				rounded-full 
				border-[3px] border-[#AB9A90] 
				shadow-xl mx-auto"
			/>

			{/* Main Button */}
			<div
				className="Button relative w-[370px] h-[70px] 
				bg-[#A59C82] bg-opacity-90 
				mt-5
				rounded-lg border border-[#A59C82]
				flex mx-auto
				"
			>
				{/* menu btn*/}
				<button
					className="px-5 -mb-0.5 hover:opacity-50 duration-150 h-full"
					onClick={() => {}}
				>
					<HiOutlineMenu size={25} color="#766B57" />
				</button>

				{/* dropdown btn */}
				<button
					className="w-full h-full flex 
					items-center justify-between 
					hover:opacity-80 duration-150 pr-5
					"
					onClick={() => setToggleDropdown(!toggleDropdown)}
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
					className={`Options 
					absolute top-full left-0 
					w-[371px] h-0 overflow-auto
					duration-300 delay-100 ease-in-out
					mt-2 mx-auto -ml-0.5
					${toggleDropdown === false ? "!h-0" : "!h-[200px]"}
					`}
				>
					{/* today */}
					<button
						className="w-full h-[60px]
						bg-[#A59C82] bg-opacity-[98%]
						rounded-t-lg
						text-left text-white
						px-5
						disabled:text-opacity-50
						"
						disabled={listType === 0}
						onClick={() => handleListChange(0)}
					>
						To do today
					</button>

					{/* yesterday */}
					<button
						className="w-full h-[60px]
						bg-[#A59C82] bg-opacity-[98%]
						text-left text-white 
						border-y border-[#766B57]
						px-5
						disabled:text-opacity-50
						"
						disabled={listType === 1}
						onClick={() => handleListChange(1)}
					>
						Yesterday to do list
					</button>

					{/* past */}
					<button
						className="w-full h-[60px]
						bg-[#A59C82] bg-opacity-[98%]
						rounded-b-lg 
						shadow-md
						text-left text-white
						px-5
						disabled:text-opacity-50
						"
						disabled={listType === 2}
						onClick={() => handleListChange(2)}
					>
						Past to do list
					</button>
				</div>
			</div>

			{/* List */}
			<div
				className="List w-[370px] 
				flex flex-col 
				mx-auto mt-4
				"
			>
				{/* filter items based on date */}
				{itemsList.length > 0 &&
					itemsList?.map(
						({ _id, todo, completed, completionTime, createdAt }, index) => {
							// items creation date
							var itemDate = new Date(createdAt);
							itemDate = itemDate.toISOString().split("T")[0];

							// yesterday date
							var yesterday = new Date();
							yesterday.setDate(yesterday.getDate() - 1);
							yesterday = yesterday.toISOString().split("T")[0];

							// filter
							var show = false;

							if (itemDate > yesterday && listType === 0) {
								show = true; // today
							} else if (itemDate === yesterday && listType === 1) {
								show = true; // yesterday
							} else if (itemDate < yesterday && listType === 2) {
								show = true; // past
							}

							if (!show) {
								return;
							}
							return (
								<Card
									key={index}
									id={_id}
									name={todo}
									completedDate={completionTime}
									status={completed}
									createdAt={createdAt}
									first={index === 0}
									last={index === itemsList.length - 1}
								/>
							);
						}
					)}
			</div>
		</div>
	);
}

function Card({ id, name, status, completedDate, createdAt, first, last }) {
	const [isChecked, setIsChecked] = useState(status); // checkbox status
	const [toggleSubMenu, setToggleSubMenu] = useState(false); // checkbox status

	const handleUpdate = async (id, status) => {
		setIsChecked(status);
		try {
			const { data } = await api.updateItem(id, { status: status });
			console.log(data);
		} catch (error) {
			console.log(error);
			alert("Checkbox error occured !");
		}
	};
	return (
		<div
			className={`
			h-[70px] w-full
			flex items-center 
			bg-[#EDECE7]
			pl-6 pr-3
			border-y border-[#CBCAC6]
			${first === true && "rounded-t-lg !border-t-0"}
			${last === true && "rounded-b-lg !border-b-0"}
			`}
		>
			{/* custom checkbox */}
			<button
				className={`
				Checkbox 
				h-[26px] aspect-square 
				border-2 border-[#766B57]
				rounded-full
				flex items-center justify-center
				hover:opacity-80 
				duration-150 ease-in-out
				${isChecked === true && "bg-[#A59C82] shadow-inner shadow-[#555]"}
				`}
				onClick={() => handleUpdate(id, !isChecked)}
			>
				{isChecked === true && <HiOutlineCheck color="white" />}
			</button>

			{/* text */}
			<p className="ml-5 font-semibold text-gray-700">{name}</p>

			{/* menu */}
			<button
				className="ml-auto -mb-1 
				px-3 
				hover:opacity-80 
				duration-150 ease-in-out"
				onClick={() => setToggleSubMenu(!toggleSubMenu)}
			>
				<RxDragHandleDots2 size={20} color="#766B57" />
			</button>
		</div>
	);
}
