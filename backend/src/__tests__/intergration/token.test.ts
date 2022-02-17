import { createTestServer } from "../../utils/test-utils";
import { request } from "undici";

const { serverURL } = createTestServer();

const tokenStructure = {
  meter: expect.any(String),
  amount: expect.any(String),
  createdAt: expect.any(Date),
  updateAt: expect.any(Date),
  expiresAt: expect.any(Date),
};

describe("Token api", () => {
  describe("GET /api/tokens", () => {
    it.skip("should return all tokens", async () => {
      const { statusCode, body, headers } = await request(
        `${serverURL}/api/tokens`
      );

      const statusBody = await body.json();

      expect(statusCode).toBe(200);
      expect(headers["content-type"]).toMatch(/application\/json/);
      expect(statusBody).toEqual([]);
    });
  });

  describe("GET /api/tokens/:id", () => {
    it.skip("should find token by id", async () => {});
  });

  describe("POST /api/tokens", () => {
    it("should create token and return back token created", async () => {
      const { statusCode, body } = await request(`${serverURL}/api/tokens`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          meter: "123456",
          amount: "100",
        }),
      });

      const respBody = await body.json();

      console.log({ statusCode, respBody });

      expect(statusCode).toBe(201);
    });
  });
});
