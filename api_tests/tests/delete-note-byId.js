const { spec, request } = require("pactum");

const baseUrl = "https://practice.expandtesting.com/notes/api/";
const requestBody = {
  email: "Andreeasd@mail.com",
  password: "Password232",
};

describe("Delete notes", () => {
  let authToken = "";
  before(async () => {
    request.setDefaultTimeout(10000);

    const response = await spec()
      .post(baseUrl + "users/login")
      .withBody(requestBody)
      .withHeaders("Content-Type", "application/json")
      .expectStatus(200);
    authToken = response.body.data.token;
  });

  it("Delete note by Id", async () => {
    await spec()
      .delete(baseUrl + "notes/" + "65554c1e54df310141aea5ea")
      .withHeaders("X-Auth-Token", authToken)
      .expectStatus(200);
  });
});
