describe("todos", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  describe("when clicks on check button", () => {
    it("completes the task", () => {
      cy.get(".input__box").type("Study Typescript").type("{enter}");
      cy.get('[data-cy="done"]').click();
      cy.contains("Study Typescript").should(
        "have.css",
        "text-decoration",
        "line-through solid rgb(0, 0, 0)"
      );
    });
  });

  describe("when clicks on delete button", () => {
    it("deletes the task", () => {
      cy.get(".input__box").type("Study english").type("{enter}");
      cy.get('[data-cy="delete"]').click();
      cy.contains("Study english").should("not.exist");
    });
  });

  describe("when clicks on edit button", () => {
    it("edits the task", () => {
      cy.get(".input__box").type("Study tests").type("{enter}");
      cy.get('[data-cy="edit"]').click();
      cy.get('[data-cy="input"]').clear().type("Study italian").type("{enter}");
      cy.contains("Study italian").should("exist");
    });
  });

  describe("when use completes a tasks", () => {
    //using DataTransfer
    it("moves the task to completed tasks board", () => {
      const dataTransfer = new DataTransfer();

      cy.get(".input__box").type("Study Typescript").type("{enter}");
      cy.get('[data-cy="done"]').click();
      cy.contains("Study Typescript").should(
        "have.css",
        "text-decoration",
        "line-through solid rgb(0, 0, 0)"
      );
      cy.get("#task").trigger("dragstart", {
        dataTransfer,
      });
      cy.get("#done-board").trigger("drop", {
        dataTransfer,
      });
      cy.get("#task").trigger("dragend");
    });

    it.only("moves the completed task to board", () => {
      //using drag and drop plugin
      cy.get(".input__box").type("Study Typescript").type("{enter}");
      cy.get('[data-cy="done"]').click();
      cy.get('#task').drag('#done-board')
      cy.get('#done-board').contains('#task')
    });
  });
});
