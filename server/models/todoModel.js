import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
	{
		todo: {
			type: String,
			required: [true, "Please enter todo item name"],
		},
		completed: {
			type: Boolean,
			default: false,
		},
		completionTime: {
			type: Date,
			default: null,
		},
	},
	{ timestamps: true }
);

var Todo = mongoose.model("Todo", todoSchema);
export default Todo;
