import React from "react";
import "./AboutScreen.css";
import * as Components from "../../components/all";
import { useNavigate } from "react-router-dom";

export default function AboutScreen() {
	const navigate = useNavigate();
	return (
		<div className="AboutScreen h-screen w-full overflow-y-scroll relative p-2">
			<button
				className="text-white bg-[#A59C82] w-fit px-6 py-1 rounded shadow-md m-4"
				onClick={() => navigate("/")}
			>
				back to home
			</button>

			<Components.Image />

			<div className="mx-auto w-[400px] text-justify bg-slate-100 p-6 rounded mt-5 select-none">
				Introducing my incredible TODO APP! This fantastic tool is designed to
				assist you in staying organized and effortlessly managing your daily
				tasks.
				<br />
				<br />
				With its user-friendly interface, you can seamlessly add, view, and
				remove items from your to-do list. It doesn't matter if you're
				organizing work assignments, personal errands, or just capturing random
				ideas.
				<br />
				<br />
				My app offers a convenient and intuitive way to keep track of all your
				tasks. Boost your productivity and maximize your day by relying on our
				dependable and efficient todo app!
			</div>
		</div>
	);
}
