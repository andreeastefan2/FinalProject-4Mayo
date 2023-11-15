/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

const myPassword = "MyPassword3!";
const loginName = faker.string.alpha({ length: { min: 5, max: 64 } });

describe("Register new user", () => {
  it("Create account", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a").contains("Login or register").click();
    cy.get('button[title="Continue"]').click();
    cy.get("#AccountFrm_firstname").type(faker.person.firstName(), {
      delay: 0,
    });
    cy.get("#AccountFrm_lastname").type(faker.person.lastName(), { delay: 0 });
    cy.get("#AccountFrm_email").type(faker.internet.email(), { delay: 0 });
    cy.get("#AccountFrm_address_1").type(faker.location.streetAddress(), {
      delay: 0,
    });
    cy.get("#AccountFrm_city").type("Paris", { delay: 0 });
    cy.get("#AccountFrm_zone_id").select("Angus");
    cy.get("#AccountFrm_postcode").type("70123");
    cy.get("#AccountFrm_loginname").type(loginName);
    cy.get("#AccountFrm_password").type(myPassword);
    cy.get("#AccountFrm_confirm").type(myPassword);
    cy.get("#AccountFrm_agree").click();
    cy.get('button[title="Continue"]').click();
    cy.contains("Your Account Has Been Created!").should("be.visible");
  });
});
