import app from "./app.js";
import connectDB from "./config/database.js";
import dotenv from "dotenv";
dotenv.config();

////// handle uncaught exceptions
process.on("uncaughtException", (err) => {
	console.log("!! Error: " + err.message);
	console.log("!! Shutting down the server due to Uncaught Exception");
	process.exit(1);
});

////// DB Connection
connectDB(process.env.MONGO_DB_URI);

////// Server Connection
export const server = app.listen(process.env.PORT || 8080, () =>
	console.log(`\n-> Server is running on port ${process.env.PORT}`)
);

////// handle unhandeled promise rejection
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
});
