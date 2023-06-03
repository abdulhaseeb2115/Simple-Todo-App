import Todo from "../models/todoModel.js";
import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";

// GET ALL ITEMS
export const getAllItems = catchAsyncErrors(async (req, res, next) => {
	const allItems = await Todo.find();

	res.status(200).json({
		success: true,
		items: allItems,
	});
});

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

// MARK ITEM AS COMPLETED/UNCOMPLETED
export const updateItemStatus = catchAsyncErrors(async (req, res, next) => {
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
				completed: req.body.status,
				completionTime: req.body.status === true ? now : null,
			},
		},
		{ new: true }
	);

	res.status(200).json({
		success: true,
		item: updatedItem,
	});
});
