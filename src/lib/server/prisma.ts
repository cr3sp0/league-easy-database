import { PrismaClient } from "./prisma/client";
import { DATABASE_URL } from "$env/static/private";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg"; 

const { Pool } = pg;

//Creates a global prisma var as a Singleton, initialized with an appropriate adapter
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || (() => {
  const pool = new Pool({
    connectionString: DATABASE_URL,
  });
  
  const adapter = new PrismaPg(pool);
  
  return new PrismaClient({ adapter });
})();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;