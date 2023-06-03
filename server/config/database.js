import mongoose from "mongoose";
mongoose.set("strictQuery", true);

const connectDB = (dbPath) => {
	mongoose
		.connect(dbPath, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then((data) => {
			console.log(
				`-> Mongodb connected with server: ${data.connection.host}\n`
			);
		});
};

export default connectDB;
