import React, { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import * as api from "../api/todoRequests";

export default function Menu({
	setToggleDropdown,
	setToggleMenu,
	toggleMenu,
	refreshData,
}) {
	const [name, setName] = useState([]); // filtered list

	// add item
	async function handleItemAdd() {
		if (name === "") {
			return;
		}

		try {
			const { data } = await api.addNewItem({ todo: name }); // data request
			if (data?.success === true) {
				refreshData();
				setName("");
				setToggleMenu(false);
				console.log(data);
			} else {
				console.log(data);
				alert("An error occured !!");
				setToggleMenu(false);
			}
		} catch (error) {
			console.log(error);
			alert("An error occured !");
			setToggleMenu(false);
		}
	}
	return (
		<>
			<button
				className="MenuBtn px-5 -mb-0.5 hover:opacity-50 duration-150 h-full"
				onClick={() => {
					setToggleDropdown(false);
					setToggleMenu(!toggleMenu);
				}}
			>
				<HiOutlineMenu size={25} color="#766B57" />
			</button>

			<div
				className={`Menu z-50 absolute top-full left-0 w-[371px] h-0 overflow-hidden bg-[#A59C82] rounded-lg shadow shadow-[#555] duration-300 
					delay-100 ease-in-out mt-2 mx-auto -ml-0.5
					${toggleMenu === false ? "!h-0" : "!h-[120px]"}
					`}
			>
				{/* heading */}
				<p className="text-[#766B57] text-center font-semibold my-4">
					Add new item
				</p>

				{/* form */}
				<form
					action="#"
					onSubmit={(e) => {
						e.preventDefault();
						handleItemAdd();
					}}
					className="flex justify-between mx-7"
				>
					{/* input */}
					<input
						type="text"
						value={name}
						placeholder="Item name"
						onChange={(e) => setName(e.target.value)}
						className="flex-1 px-4 mr-2 py-1 bg-[#766B57] text-white focus:outline-none rounded-full"
					/>

					{/* butn */}
					<button
						type="submit"
						className="bg-[#766B57] px-4 text-white rounded-full hover:opacity-70 disabled:opacity-70"
						disabled={name === ""}
					>
						Submit
					</button>
				</form>
			</div>
		</>
	);
}
