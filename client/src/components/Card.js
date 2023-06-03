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
}) {
	const [isChecked, setIsChecked] = useState(false); // checkbox status
	const [toggleSubMenu, setToggleSubMenu] = useState(false); // checkbox status

	// handle task status update
	const handleUpdate = async (id, updatedStatus) => {
		setIsChecked(updatedStatus);
		try {
			const { data } = await api.updateItem(id, { status: updatedStatus });
			console.log(data);
		} catch (error) {
			console.log(error);
			alert("Checkbox error occured !");
		}
	};

	// update checked
	useEffect(() => {
		function updateChecked(params) {
			setIsChecked(status);
		}

		updateChecked();
	}, [status]);

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
