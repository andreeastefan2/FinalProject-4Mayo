/// <reference types="cypress" />

const myPassword = "MyPassword3!";
const loginName = "TUeiBVfBUQThtQLXl";

describe("Login and Logout", () => {
  beforeEach(() => {
    cy.login(loginName, myPassword);
  });
  it("Login and Logout with existing user", () => {
    cy.get(".side_account_list >li:last-child").click();
    cy.contains(
      "You have been logged off your account. It is now safe to leave the computer."
    ).should("be.visible");
  });
});
