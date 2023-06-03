import axios from "axios";

// main url for the backend server
const mainUrl = "http://localhost:8080/api/v1/todo";

// get all to do items
export const getCompleteList = async () => await axios.get(`${mainUrl}/all`);

// add new item
export const addNewItem = async (data) =>
	await axios.post(`${mainUrl}/add`, data);

// update an item
export const updateItem = async (id, data) =>
	await axios.put(`${mainUrl}/update/${id}`, data);

// delete an item
export const deleteItem = async (id) =>
	await axios.delete(`${mainUrl}/delete/${id}`);
