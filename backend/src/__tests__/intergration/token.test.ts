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

beforeAll(() => {});

describe("Token api", () => {
  describe("GET /api/tokens", () => {
    it("should return all tokens", async () => {
      const { statusCode, body, headers } = await request(
        `${serverURL}/api/tokens`
      );

      const statusBody = await body.json();

      console.log({ statusBody });

      expect(statusCode).toBe(200);
      expect(headers["content-type"]).toMatch(/application\/json/);
      expect(statusBody).toEqual([]);
    });
  });

  it.skip("should find token by id", async () => {});

  describe("POST /api/tokens", () => {
    it("should create token and return back token created", async () => {
      const { statusCode } = await request(`${serverURL}/api/tokens`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          meter: 123456,
          amount: 100,
        }),
      });

      expect(statusCode).toBe(201);
    });
  });
});
