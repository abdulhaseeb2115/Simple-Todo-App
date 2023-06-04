describe("Todo List Test", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000");
	});

	// should display "To do today" initially
	it('app should display "To do today" text', () => {
		cy.contains("To do today");
	});

	// should contain Menu Btn
	it("app should have a Menu Btn element", () => {
		cy.get(".Button").should("exist");
	});

	// should contain Menu
	it("app should have a Menu element", () => {
		cy.get(".Menu").should("exist");
	});

	// should contain Options
	it("app should have Options elements", () => {
		cy.get(".Options").should("exist");
	});

	// should contain Card
	it("app should have Card elements", () => {
		cy.get(".Card").should("exist");
	});

	// should change items
	it("app should change to yesterday todo items", () => {
		cy.get(".DropdownBtn").click();
		cy.get(".YesterdayTodo").click();
	});

	// should change items
	it("app should change to past todo items", () => {
		cy.get(".DropdownBtn").click();
		cy.get(".PastTodo").click();
	});
});
