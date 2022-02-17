import prisma from "../client";
import { Request, Response } from "express";

export async function getAllTokens(_req: Request, res: Response) {
  const tokens = await prisma.token.findMany();
  return res.json(tokens);
}

export async function getTokenById(req: Request, res: Response) {
  const id = req.params;

  if (!id) {
    return res.status(401).json({
      message: "Id should be provided",
    });
  }

  const token = await prisma.token.findFirst({ where: { id } });

  if (!token) {
    return res.status(404).json({
      message: "No token found with this id ",
    });
  }
}

export async function createToken(req: Request, res: Response) {
  const { meter, amount } = req.body;

  if (!meter || !amount) {
    return res.status(401).json({
      message: "All fields are required",
    });
  }

  if (meter.length < 6) {
    return res.status(401).json({
      message: "Invalid meter, only 6 digits accepted",
    });
  }

  if (amount.length > 6) {
    return res.status(401).json({
      message:
        "Invalid amount, only multiples of 100 not greater than 182,500 is accepted",
    });
  }

  return res.status(201).json({ message: "works" });
}
