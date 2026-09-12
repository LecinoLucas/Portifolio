import { PrismaClient } from "@prisma/client";

let prismaInstance: PrismaClient | null = null;

export function obterPrisma(): PrismaClient {
  if (!prismaInstance) {
    prismaInstance = new PrismaClient();
  }
  return prismaInstance;
}
