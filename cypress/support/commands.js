Cypress.Commands.add("fillMandatoryFieldsAndSubmit", () => {
  cy.get("#firstName").type("Alan");
  cy.get("#lastName").type("Costa");
  cy.get("#email").type("alan@exemplo.com");
  cy.get("#open-text-area").type("Teste", { delay: 0 });
  cy.get('button[type="submit"]').click();
});
