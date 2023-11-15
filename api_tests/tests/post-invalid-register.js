const { spec, request } = require("pactum");
const { faker } = require("@faker-js/faker");

const baseUrl = "https://practice.expandtesting.com/notes/api/";
const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password();
const randomUserinvalid = faker.string.sample(3);

describe("POST - invalid register ", () => {
  before(async () => {
    request.setDefaultTimeout(10000);
  });

  it("Register User - invalid username", async () => {
    await spec()
      .post(baseUrl + "users/register")
      .withBody({
        name: randomUserinvalid,
        email: randomEmail,
        password: randomPassword,
      })
      .inspect()
      .expectStatus(400)
      .expectBodyContains("User name must be between 4 and 30 characters");
  });
});
