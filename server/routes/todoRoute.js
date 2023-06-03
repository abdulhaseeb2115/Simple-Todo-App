import express from "express";
import {
	addItem,
	deleteItem,
	getAllItems,
	updateItemStatus,
} from "../controllers/todoController.js";
const router = express.Router();

router.get("/all", getAllItems); // get all item
router.post("/add", addItem); // add item
router.delete("/delete/:itemId", deleteItem); // delete item
router.put("/update/:itemId", updateItemStatus); // mark item as completed

export default router;
