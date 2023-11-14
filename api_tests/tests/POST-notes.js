const { spec, request } = require("pactum");

const baseUrl = "https://practice.expandtesting.com/notes/api/";
const requestBody = {
  email: "Andreeasd@mail.com",
  password: "Password232",
};

describe("Post notes with user", () => {
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

  it("POST notes", async () => {
    console.log(authToken);
    await spec()
      .post(baseUrl + "notes")
      .withHeaders("X-Auth-Token", authToken)
      .withBody({
        title: "My 3rd note",
        description: "This is a note to test the delete notes",
        category: "Work",
      })
      .expectStatus(200);
  });
});
