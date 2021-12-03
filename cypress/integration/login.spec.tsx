context("Login Page", () => {
    beforeEach(() => {
      cy.visit(Cypress.env('auth_url'));
    });
  
    it("should render the home page and display a message", () => {
      cy.get("#submitbutton").click();

    });
  });
  
  export {}