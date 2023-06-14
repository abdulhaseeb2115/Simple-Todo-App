import React from "react";
import { RxDragHandleDots2 } from "react-icons/rx";

export default function Loader() {
	return (
		<div className="Loader">
			{[1, 2, 3, 4].map((x) => (
				<div
					key={x}
					className={`CardSkeleton relative h-[70px] w-full flex items-center bg-[#766B57] bg-opacity-60 pl-6 pr-3 animate-pulse border-y border-slate-300
                    ${x === 1 && "rounded-t border-t-0"}
                    ${x === 4 && "rounded-b border-b-0"}
			    `}
				>
					<button
						className={`Checkbox h-[26px] aspect-square rounded-full flex items-center justify-center 
		    			bg-slate-200 shadow-inner
		    		`}
					/>

					<div className="flex-1">
						<div className="ml-5 h-2 w-1/3 rounded-full bg-slate-200 mb-1" />
						<div className="ml-5 h-2 flex-1 rounded-full bg-slate-200" />
					</div>

					<button className="ml-auto -mb-1 px-3">
						<RxDragHandleDots2 size={25} color="rgb(226 232 240)" />
					</button>
				</div>
			))}
		</div>
	);
}
