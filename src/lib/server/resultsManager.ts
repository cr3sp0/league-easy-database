import prisma from "./prisma";
import type { Partita } from "./prisma/browser";
import { Risultato } from "./prisma/enums";

export async function createResults({
  buildID = undefined,
  userID = undefined,
  results = undefined
} : {
  buildID? : number,
  userID? : number,
  results? : Risultato[]
}) : Promise<Partita[]> {

  if (
    !buildID
    || !userID
    || !results
  ) {
    throw { message : "Illegal values" }
  }

  return await prisma.partita.createManyAndReturn({
    data: results.map((r) => {
      return {
        ConfigurazioneId: buildID,
        AccountId: userID,
        Risultato: r
      }
    }).values().toArray()
  })
}