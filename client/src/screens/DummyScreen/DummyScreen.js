import React from "react";
import "./DummyScreen.css";
import * as Components from "../../components/all";
import { useNavigate } from "react-router-dom";

export default function DummyScreen() {
	const navigate = useNavigate();

	return (
		<div className="DummyScreen h-screen w-full overflow-y-scroll relative p-2">
			<button
				className="text-white bg-[#A59C82] w-fit px-6 py-1 rounded shadow-md m-4"
				onClick={() => navigate("/")}
			>
				back to home
			</button>

			<Components.Image />

			<div className="mx-auto w-[400px] text-justify bg-slate-100 p-6 rounded mt-5 select-none">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
				distinctio. Quibusdam voluptatibus aliquam nisi distinctio temporibus
				reiciendis, rerum beatae similique illo ex animi consequatur eaque aut
				excepturi! Corrupti beatae similique nisi distinctio temporibus
				reiciendis, rerum beatae similique illo ex animi consequatur eaque aut
				excepturi! Corrupti beatae similique sit obcaecati, sequi magnam minus
				porro placeat suscipit hic officiis? sit obcaecati, sequi magnam minus
				porro placeat suscipit hic officiis?
				<br />
				<br />
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
				obcaecati temporibus et eligendi rem a facilis, illo quae iure quidem.
			</div>
		</div>
	);
}
