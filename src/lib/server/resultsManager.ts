import prisma from "./prisma";
import type { Partita } from "./prisma/browser";

export async function createResults(results : Partita[]) : Promise<Partita[]> {

  return await prisma.partita.createManyAndReturn({
    data: results
  })
}