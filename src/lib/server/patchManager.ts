import prisma from "./prisma";
import type { Campione, Modifica, Oggetto, SetBase } from "./prisma/client";

export async function getPatches({
version = undefined
} : {
version?: string
}) {
  return await prisma.versione.findMany({
    where: {
    Versione: version
    },
    include: {
      Modif: {
        include: {
          Set_Statiche: {
            include: {
              Champ: true,
              Item: true
            }
          }
        }
      }
    }
  })
}

export async function createPatch({
  patchName,
  values
} : {
  patchName : string
  values : {
    subject: Campione | Oggetto
    stats: Modifica[]
  }[]
}) {

  if(values.findIndex(e => e.stats.findIndex(l => l.Versione !== patchName))) {
    throw { message: "Invalid Input: All values must be part of the same patch" }
  }

  await prisma.versione.create({
    data: {
      Versione: patchName,
      Data: new Date(Date.now())
    }
  })

  return values.map(async value => {
    return await prisma.setBase.update({
      where: {
        IdStatistiche: value.subject.SetStatistiche
      },
      data: {
        Vita : value.stats.find(s => s.Id_Statistica === "Vita")?.Nuovo_Valore,
        VitaPerLivello : value.stats.find(s => s.Id_Statistica === "VitaPerLivello")?.Nuovo_Valore,
        Mana : value.stats.find(s => s.Id_Statistica === "Mana")?.Nuovo_Valore,
        ManaPerLivello : value.stats.find(s => s.Id_Statistica === "ManaPerLivello")?.Nuovo_Valore,
        Velocità_di_movimento : value.stats.find(s => s.Id_Statistica === "Velocità_di_movimento")?.Nuovo_Valore,
        Armatura : value.stats.find(s => s.Id_Statistica === "Armatura")?.Nuovo_Valore,
        ArmaturaPerLivello : value.stats.find(s => s.Id_Statistica === "ArmaturaPerLivello")?.Nuovo_Valore,
        ResistenzaMagica : value.stats.find(s => s.Id_Statistica === "ResistenzaMagica")?.Nuovo_Valore,
        ResistenzaMagicaPerLivello : value.stats.find(s => s.Id_Statistica === "ResistenzaMagicaPerLivello")?.Nuovo_Valore,
        Gittata : value.stats.find(s => s.Id_Statistica === "Gittata")?.Nuovo_Valore,
        RigenerazioneVita : value.stats.find(s => s.Id_Statistica === "RigenerazioneVita")?.Nuovo_Valore,
        RigenerazioneVitaPerLivello : value.stats.find(s => s.Id_Statistica === "RigenerazioneVitaPerLivello")?.Nuovo_Valore,
        RigenerazioneMana : value.stats.find(s => s.Id_Statistica === "RigenerazioneMana")?.Nuovo_Valore,
        RigenerazioneManaPerLivello : value.stats.find(s => s.Id_Statistica === "RigenerazioneManaPerLivello")?.Nuovo_Valore,
        Critico : value.stats.find(s => s.Id_Statistica === "Critico")?.Nuovo_Valore,
        CriticoPerLivello : value.stats.find(s => s.Id_Statistica === "CriticoPerLivello")?.Nuovo_Valore,
        Attacco : value.stats.find(s => s.Id_Statistica === "Attacco")?.Nuovo_Valore,
        AttaccoPerLivello : value.stats.find(s => s.Id_Statistica === "AttaccoPerLivello")?.Nuovo_Valore,
        VelocitàDiAttacco : value.stats.find(s => s.Id_Statistica === "VelocitàDiAttacco")?.Nuovo_Valore,
        VelocitàDiAttaccoPerLivello : value.stats.find(s => s.Id_Statistica === "VelocitàDiAttaccoPerLivello")?.Nuovo_Valore,
        Storico: {
          createMany: {
            data: value.stats
          }
        }
      },
      include: {
        Champ: true,
        Item: true,
        Storico: {
          include: {
            Vers: true
          }
        }
      }
    })
  })
}