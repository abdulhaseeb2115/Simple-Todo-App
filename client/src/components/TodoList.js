import React from "react";
import Card from "./Card";
import Loader from "./Loader";
import Empty from "./Empty";

export default function TodoList({ filteredList, refreshData, isLoading }) {
	return (
		<div className="List w-[370px] flex flex-col mx-auto mt-4">
			{isLoading === true ? (
				<Loader />
			) : filteredList.length <= 0 ? (
				<Empty />
			) : (
				filteredList?.map(
					({ _id, todo, completed, completionTime, createdAt }, index) => (
						<Card
							key={index}
							id={_id}
							name={todo}
							completedDate={completionTime}
							status={completed}
							createdAt={createdAt}
							first={index === 0}
							last={index === filteredList.length - 1}
							refresh={refreshData}
						/>
					)
				)
			)}
		</div>
	);
}
