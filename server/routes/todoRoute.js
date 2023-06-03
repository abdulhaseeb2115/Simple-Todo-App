import express from "express";
import {
	addItem,
	deleteItem,
	markAsCompleted,
} from "../controllers/todoController.js";
const router = express.Router();

router.post("/add", addItem); // add item
router.delete("/delete/:itemId", deleteItem); // delete item
router.put("/markcompleted/:itemId", markAsCompleted); // mark item as completed

export default router;
