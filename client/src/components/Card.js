import { useEffect, useState } from "react";
import { RxDragHandleDots2 } from "react-icons/rx";
import { HiOutlineCheck } from "react-icons/hi";
import * as api from "../api/todoRequests";

export default function Card({
	id,
	name,
	status,
	completedDate,
	createdAt,
	first,
	last,
	refresh,
}) {
	const [completed, setCompleted] = useState(completedDate); // checkbox status
	const [isChecked, setIsChecked] = useState(false); // checkbox status
	const [toggleSubMenu, setToggleSubMenu] = useState(false); // checkbox status

	//
	//

	// handle task status update
	async function handleUpdate(id, updatedStatus) {
		setIsChecked(updatedStatus);
		try {
			const { data } = await api.updateItem(id, { status: updatedStatus }); // update request
			if (data?.success === true) {
				setCompleted(data?.item?.completionTime);
			}
			console.log(data);
		} catch (error) {
			console.log(error);
			alert("Checkbox error occured !");
		}
	}

	// handle task delete
	async function handleDelete() {
		setToggleSubMenu(false);
		try {
			const { data } = await api.deleteItem(id); // delete request
			if (data?.success === true) {
				refresh(); // refresh full data
			}
			console.log(data);
		} catch (error) {
			console.log(error);
			alert("Delete error occured !");
		}
	}

	// update checked
	useEffect(() => {
		function updateChecked(params) {
			setIsChecked(status);
		}

		updateChecked();
	}, [status]);

	return (
		<div
			className={`Card relative h-[70px] w-full flex items-center bg-[#EDECE7] bg-opacity-95 pl-6 pr-3 border-y border-[#CBCAC6] 
			${first === true && "rounded-t-lg !border-t-0"} 
			${last === true && "rounded-b-lg !border-b-0"}
			`}
		>
			{/* custom checkbox */}
			<button
				className={`Checkbox h-[26px] aspect-square border-2 border-[#766B57] rounded-full flex items-center justify-center 
				hover:opacity-80 duration-150 ease-in-out
				${isChecked === true && "bg-[#A59C82] shadow-inner shadow-[#555]"}
				`}
				onClick={() => handleUpdate(id, !isChecked)}
			>
				{isChecked === true && <HiOutlineCheck color="white" />}
			</button>

			{/* text */}
			<p className="ml-5 font-semibold text-gray-700">{name}</p>

			{/* menu btn */}
			<button
				className="ml-auto -mb-1 px-3 hover:opacity-80 duration-150 ease-in-out"
				onClick={() => setToggleSubMenu(!toggleSubMenu)}
			>
				<RxDragHandleDots2 size={20} color="#766B57" />
			</button>

			{/* menu */}
			<div
				className={`absolute z-30 w-0 h-0 overflow-hidden top-full right-6 -mt-4 flex flex-col justify-between bg-[#EDECE7] opacity-95 
				rounded shadow shadow-[#555] duration-300 delay-100 ease-in-out
				${toggleSubMenu === false ? "!h-0 !w-0" : "!h-[180px] !w-[85%] !p-5"}
				`}
			>
				{/* created on */}
				<div>
					<p className="text-xs font-semibold">Date Created</p>
					<p className="text-sm pb-2 border-b border-gray-300">
						{new Date(createdAt).toUTCString()}
					</p>
				</div>

				{/* completed on */}
				{isChecked === true && (
					<div>
						{/* completed */}
						<p className="text-xs font-semibold">Date Completed</p>
						<p className="text-sm pb-2 border-b border-gray-300">
							{new Date(completed).toUTCString()}
						</p>
					</div>
				)}

				{/* delete */}
				<button
					className="bg-red-400 text-white p-1 rounded-md 
						duration-300 ease-in-out
						hover:opacity-60"
					onClick={() => handleDelete()}
				>
					Delete
				</button>
			</div>
		</div>
	);
}
