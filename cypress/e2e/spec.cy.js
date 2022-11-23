describe("Testing the form", () => {
  it("Filling the form", () => {
    cy.visit("/");
    cy.get("form");
    
    cy.get('input[name="name"]')
      .type("Caroline")
      .should("have.value", "Caroline");
  });
});