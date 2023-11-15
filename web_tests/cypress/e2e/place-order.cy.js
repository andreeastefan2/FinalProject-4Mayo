/// <reference types="cypress" />

const myPassword = "MyPassword3!";
const loginName = "TUeiBVfBUQThtQLXl";

describe("Place order", () => {
  beforeEach(() => {
    cy.login(loginName, myPassword);
  });

  it("Place order with one product", () => {
    cy.get("a[class='active menu_home']").click();
    cy.xpath(
      '//*[@id="block_frame_featured_1769"]/div/div[1]/div[2]/div[3]/a'
    ).click();
    cy.xpath("/html/body/div/header/div[2]/div/div[3]/ul/li/a").click();
    cy.get("#cart_checkout2").click();
    cy.get('button[title="Confirm Order"').click();
    cy.contains("Your Order Has Been Processed!").should("be.visible");
  });
});
