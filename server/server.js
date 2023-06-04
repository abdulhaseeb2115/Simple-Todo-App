import app from "./app.js";
import connectDB from "./config/database.js";
import dotenv from "dotenv";

// process.env file path
dotenv.config({ path: "./config/config.env" });

////// handle uncaught exceptions
process.on("uncaughtException", (err) => {
	console.log("!! Error: " + err.message);
	console.log("!! Shutting down the server due to Uncaught Exception");
	process.exit(1);
});

////// DB Connection
////// Server Connection
connectDB("mongodb://mongo-cntnr/Cowlar-Test");
export const server = app.listen(8080, () =>
	console.log(`\n-> Server is running on http://localhost:8080`)
);

////// RUN THE APP ON LOCAL HOST WITHOUT DOCKER
// connectDB(process.env.MONGO_DB_URI); // DB connection
// const server = app.listen(process.env.PORT, () =>
// 	console.log(`\n-> Server is running on http://localhost:${process.env.PORT}`)
// ); // server

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
