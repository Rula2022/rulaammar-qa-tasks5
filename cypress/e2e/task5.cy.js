/// <reference types="cypress"/>  

  it('check that all fields and buttons are visible', () => {
    cy.visit('/customer/account/create/')
    cy.get("#firstname").should("be.visible");
    cy.get("#lastname").should("be.visible");
    cy.get("#email_address").should("be.visible");
    cy.get("#password").should("be.visible");
    cy.get("#password-confirmation").should("be.visible");
    cy.get(".action.submit").should("be.visible");
  })
  it.only('create an account', () => {
    cy.visit('/customer/account/create/')
    cy.get("#firstname").type("Majd")
    cy.get("#lastname").type("Ammar")
    cy.get("#email_address").type("majdammar13@gmail.com");
    cy.get("#password").type("Majd123$");
    cy.get("#password-confirmation").type("Majd123$");
    cy.get(".action.submit").click({delay:600});
    cy.get(".success.message div").should("contain","Thank you for registering with Main Website Store.")
  })
