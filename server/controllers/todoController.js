import Todo from "../models/todoModel.js";
import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";

// ADD NEW ITEM
export const addItem = catchAsyncErrors(async (req, res, next) => {
	// invalid todo name
	if (req.body.todo === "") {
		return next(new ErrorHandler(400, "Todo name is invalid !"));
	}

	const newItem = await Todo.create({
		todo: req.body.todo,
	});

	res.status(200).json({
		success: true,
		item: newItem,
	});
});

// DELETE ITEM
export const deleteItem = catchAsyncErrors(async (req, res, next) => {
	const item = await Todo.findById(req.params.itemId);

	// invalid item id
	if (!item) {
		return next(new ErrorHandler(404, "Todo list item not found !"));
	}

	await Todo.findByIdAndDelete(req.params.itemId);
	res.status(200).json({
		success: true,
	});
});

// MARK ITEM AS COMPLETED
export const markAsCompleted = catchAsyncErrors(async (req, res, next) => {
	const item = await Todo.findById(req.params.itemId);

	// invalid item id
	if (!item) {
		return next(new ErrorHandler(404, "Todo list item not found !"));
	}

	const now = new Date();
	const updatedItem = await Todo.findByIdAndUpdate(
		req.params.itemId,
		{
			$set: {
				completed: true,
				completionTime: now,
			},
		},
		{ new: true }
	);

	res.status(200).json({
		success: true,
		item: updatedItem,
	});
});
