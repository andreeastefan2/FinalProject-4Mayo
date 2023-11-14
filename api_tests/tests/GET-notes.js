const { spec, request } = require("pactum");

const baseUrl = "https://practice.expandtesting.com/notes/api/";
const requestBody = {
  email: "Andreeasd@mail.com",
  password: "Password232",
};
const getAllNotesSchema = require("../Data/response/get-notes-schema.json");

describe("Get notes with user", () => {
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

  it("GET notes", async () => {
    console.log(authToken);
    await spec()
      .get(baseUrl + "notes/")
      .withHeaders("X-Auth-Token", authToken)
      .expectStatus(200)
      .expectJsonSchema(getAllNotesSchema);
  });
});
