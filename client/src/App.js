import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Screens from "./screens/all";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Screens.MainScreen />} />
				<Route
					path="*"
					element={
						<div className="h-screen w-full flex bg-gray-400 justify-center items-center text-center text-2xl font-semibold">
							<h1>
								404 <br /> Page Not Found
							</h1>
						</div>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
