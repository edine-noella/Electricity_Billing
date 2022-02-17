import app from "./app";
import prisma from "../client";

export const createTestServer = () => {
  // const prisma = new PrismaClient();

  const server = app();

  const internalConfig: { server: any } = {
    server: undefined,
  };

  beforeAll(async () => {
    const instance = server.listen({ port: 8003 });

    internalConfig.server = instance;

    await prisma.$connect();
  });

  afterAll(async () => {
    internalConfig.server.close();
    await prisma.$disconnect();
  });

  return {
    prisma,
    serverURL: `http://localhost:8003`,
  };
};
