const { spec, request } = require("pactum");
const { faker } = require("@faker-js/faker");

const baseUrl = "https://practice.expandtesting.com/notes/api/";
const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password();
const randomUserName = faker.internet.userName();

describe("POST - Register User ", () => {
  before(async () => {
    request.setDefaultTimeout(10000);
  });

  it("Register User - valid scenario", async () => {
    await spec()
      .post(baseUrl + "users/register")
      .withBody({
        name: randomUserName,
        email: randomEmail,
        password: randomPassword,
      })
      .expectStatus(201);
  });
});
