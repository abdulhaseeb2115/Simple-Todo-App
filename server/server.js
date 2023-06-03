import app from "./app.js";
import connectDB from "./config/database.js";
import dotenv from "dotenv";

dotenv.config({ path: "./config/config.env" }); // process.env file path

process.on("uncaughtException", (err) => {
	console.log("!! Error: " + err.message);
	console.log("!! Shutting down the server due to Uncaught Exception");
	process.exit(1);
}); // handle uncaught exceptions

connectDB(process.env.MONGO_DB_URI); // DB connection
const server = app.listen(process.env.PORT, () =>
	console.log(`\n-> Server is running on http://localhost:${process.env.PORT}`)
); // server

process.on("unhandledRejection", (err) => {
	console.log("!! Error: " + err.message);
	console.log(
		"!! Shutting down the server due to Unhandeled Promise Rejection"
	);
	console.log("!! Error: " + err.stack);
	// console.log("Error " + err.stack.substring(0, err.stack.indexOf("at Module")));
	server.close(() => {
		process.exit(1);
	});
}); // handle unhandeled promise rejection
