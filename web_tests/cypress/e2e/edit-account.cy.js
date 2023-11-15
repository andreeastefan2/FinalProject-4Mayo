/// <reference types="cypress" />

const myPassword = "MyPassword3!";
const loginName = "TUeiBVfBUQThtQLXl";

describe("Login and Edit account", () => {
  beforeEach(() => {
    cy.login(loginName, myPassword);
  });

  it("Edit account first name", () => {
    cy.get(".side_account_list >li:nth-child(3)").click();
    cy.get("#AccountFrm_firstname").clear();
    cy.get("#AccountFrm_firstname").type("Simon");
    cy.get('button[title="Continue"]').click();
    cy.contains("Success: Your account has been successfully updated.").should(
      "be.visible"
    );
  });
});
