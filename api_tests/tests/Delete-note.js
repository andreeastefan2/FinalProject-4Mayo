const { spec, request } = require("pactum");

const baseUrl = "https://practice.expandtesting.com/notes/api/";
const requestBody = {
  email: "Andreeasd@mail.com",
  password: "Password232",
};

describe("Delete notes", () => {
  let authToken = "";
  let noteId = "";
  before(async () => {
    request.setDefaultTimeout(10000);

    const response = await spec()
      .post(baseUrl + "users/login")
      .withBody(requestBody)
      .withHeaders("Content-Type", "application/json")
      .expectStatus(200);
    authToken = response.body.data.token;

    const responseNote = await spec()
      .get(baseUrl + "notes/")
      .withHeaders("X-Auth-Token", authToken)
      .expectStatus(200);
    noteId = responseNote.body.data.id;
  });

  it("Delete note by Id", async () => {
    console.log(authToken);
    console.log(noteId);
    await spec()
      .delete(baseUrl + "notes/" + noteId)
      .withHeaders("X-Auth-Token", authToken)
      .expectStatus(200);
  });
});
