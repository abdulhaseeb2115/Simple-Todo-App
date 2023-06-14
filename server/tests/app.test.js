import request from "supertest";
import app from "../app.js";
import { server } from "../server.js";

const mainUrl = "/api/v1/todo";

// closes server after all the tests are done
afterAll((done) => {
	server.close(done);
});

// Add Item Test
describe("Add New Todo Item", () => {
	test.skip("should add a new todo item", async () => {
		const response = await request(app)
			.post(`${mainUrl}/add`)
			.send({ todo: "Test-task" });

		expect(response.status).toBe(200);
		expect(response.body.success).toBe(true);
		expect(response.body.item).toBeDefined();
		expect(response.body).toHaveProperty("item");
	}, 15000);
});

// Get All Items Test
describe("Get All Todo Items", () => {
	test("should get all todo items", async () => {
		const response = await request(app).get(`${mainUrl}/all`);

		expect(response.status).toBe(200);
		expect(response.body.success).toBe(true);
		expect(response.body.items).toBeDefined();
		expect(Array.isArray(response.body.items)).toBe(true);
	}, 15000);
});

// Delete An Item
describe("Delete An Item", () => {
	test.skip("should delete a todo item", async () => {
		const response = await request(app).delete(
			`${mainUrl}/delete/647cfffa37735135b1c357fc`
		);

		expect(response.status).toBe(200);
		expect(response.body.success).toBe(true);
	}, 15000);
});

// Update An Item
describe("Update Task Controller", () => {
	test.skip("should update a task", async () => {
		const response = await request(app)
			.put(`${mainUrl}/update/647b92cec2602c33a0a1c659`)
			.send({ status: true });

		expect(response.status).toBe(200);
		expect(response.body.success).toBe(true);
		expect(response.body.item).toBeDefined();
		expect(response.body).toHaveProperty("item");
		expect(response.body.item.completed).toBe(true);
	}, 15000);
});
