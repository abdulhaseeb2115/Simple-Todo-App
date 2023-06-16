import React, { useState } from "react";
import * as api from "../api/todoRequests";
import { toast } from "react-hot-toast";

export default function AddItem({ refreshData }) {
	const [name, setName] = useState("");

	// add item
	async function handleItemAdd() {
		if (name === "" || name?.trim() === "") {
			toast.error("Invalid item name !");
			return;
		}

		try {
			const { data } = await api.addNewItem({ todo: name?.trim() }); // data request
			if (data?.success === true) {
				refreshData();
				setName("");
				console.log(data);
				toast.success("New Task Added !");
			} else {
				console.log(data);
				toast.error("An error occured !");
			}
		} catch (error) {
			console.log(error);
			toast.error("An error occured !");
		}
	}

	return (
		<div className="Button relative w-[370px] h-[100px] bg-[#A59C82] bg-opacity-90 mt-5 rounded-lg border border-[#A59C82] mx-auto">
			{/* heading */}
			<p className="text-white drop-shadow-md my-3 mx-7">Add new item</p>

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
					placeholder="Enter item name"
					onChange={(e) => setName(e.target.value)}
					className="flex-1 px-4 mr-2 py-1 bg-[#766B57] bg-opacity-60 text-white focus:outline-none rounded placeholder:text-gray-300"
				/>

				{/* btn */}
				<button
					type="submit"
					className="bg-[#766B57]  bg-opacity-60 px-2 text-white rounded hover:opacity-70 text-sm disabled:opacity-70"
					disabled={name === "" || name?.trim() === ""}
				>
					Submit
				</button>
			</form>
		</div>
	);
}
