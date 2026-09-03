import prisma from "./prisma"
import type { Oggetto, SetBase, Inventario } from "./prisma/client"

export interface CompleteItem {
    item: Oggetto
    stats: SetBase
}

export interface statFilter {
    Vita                         ?: number
    VitaPerLivello               ?: number
    Mana                         ?: number
    ManaPerLivello               ?: number
    Velocità_di_movimento        ?: number
    Armatura                     ?: number
    ArmaturaPerLivello           ?: number
    ResistenzaMagica             ?: number
    ResistenzaMagicaPerLivello   ?: number
    Gittata                      ?: number
    RigenerazioneVita            ?: number
    RigenerazioneMana            ?: number
    RigenerazioneManaPerLivello  ?: number
    Critico                      ?: number
    CriticoPerLivello            ?: number
    Attacco                      ?: number
    AttaccoPerLivello            ?: number
    VelocitàDiAttacco            ?: number
    VelocitàDiAttaccoPerLivello  ?: number
    AttaccoMagico                ?: number  
}

export function createStatFilter() {

}

export async function getItems({
    name = undefined,
    costsLess = undefined,
    costsMore = undefined,
    containsStat = {
        Vita: 0,
        VitaPerLivello: 0,
        Mana: 0,
        ManaPerLivello: 0,
        Velocità_di_movimento: 0,
        Armatura: 0,
        ArmaturaPerLivello: 0,
        ResistenzaMagica: 0,
        ResistenzaMagicaPerLivello: 0,
        Gittata: 0,
        RigenerazioneVita: 0,
        RigenerazioneMana: 0,
        RigenerazioneManaPerLivello: 0,
        Critico: 0,
        CriticoPerLivello: 0,
        Attacco: 0,
        AttaccoPerLivello: 0,
        VelocitàDiAttacco: 0,
        VelocitàDiAttaccoPerLivello: 0,
        AttaccoMagico: 0,
    }
} : {
    name? : string
    costsLess? : number
    costsMore? : number
    containsStat? : statFilter
}) : Promise<CompleteItem[]> {

    console.log("lllll")
    const itemList = await prisma.oggetto.findMany({
        include: {
            Stats: true
        },
        /*where: {
            Nome: name,
            Costo: {
                lt: costsLess,
                gt: costsMore
            },
            Stats: {
                Vita                         : { gt: containsStat.Vita },
                VitaPerLivello               : { gt: containsStat.VitaPerLivello },
                Mana                         : { gt: containsStat.Mana },
                ManaPerLivello               : { gt: containsStat.ManaPerLivello },
                Velocità_di_movimento        : { gt: containsStat.Velocità_di_movimento },
                Armatura                     : { gt: containsStat.Armatura },
                ArmaturaPerLivello           : { gt: containsStat.ArmaturaPerLivello },
                ResistenzaMagica             : { gt: containsStat.ResistenzaMagica },
                ResistenzaMagicaPerLivello   : { gt: containsStat.ResistenzaMagicaPerLivello },
                Gittata                      : { gt: containsStat.Gittata },
                RigenerazioneVita            : { gt: containsStat.RigenerazioneVita },
                RigenerazioneMana            : { gt: containsStat.RigenerazioneMana },
                RigenerazioneManaPerLivello  : { gt: containsStat.RigenerazioneManaPerLivello },
                Critico                      : { gt: containsStat.Critico },
                CriticoPerLivello            : { gt: containsStat.CriticoPerLivello },
                Attacco                      : { gt: containsStat.Attacco },
                AttaccoPerLivello            : { gt: containsStat.AttaccoPerLivello },
                VelocitàDiAttacco            : { gt: containsStat.VelocitàDiAttacco },
                VelocitàDiAttaccoPerLivello  : { gt: containsStat.VelocitàDiAttaccoPerLivello },
                AttaccoMagico                : { gt: containsStat.AttaccoMagico },
            }
        }*/
    })

    console.log("3333")
    console.log(itemList.length)
    return itemList.map(o => {
        return {
            item: o,
            stats: o.Stats
        }
    })
}