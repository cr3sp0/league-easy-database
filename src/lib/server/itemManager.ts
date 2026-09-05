import prisma from "./prisma"
import type { Oggetto, SetBase, Inventario } from "./prisma/client"

export interface CompleteItem {
    item: Oggetto
    stats: SetBase
}

export interface itemStatFilter {
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

export async function getItems({
    name = undefined,
    costFloor = undefined,
    costCeil = undefined,
    containsStat = {
        Vita: undefined,
        VitaPerLivello: undefined,
        Mana: undefined,
        ManaPerLivello: undefined,
        Velocità_di_movimento: undefined,
        Armatura: undefined,
        ArmaturaPerLivello: undefined,
        ResistenzaMagica: undefined,
        ResistenzaMagicaPerLivello: undefined,
        Gittata: undefined,
        RigenerazioneVita: undefined,
        RigenerazioneMana: undefined,
        RigenerazioneManaPerLivello: undefined,
        Critico: undefined,
        CriticoPerLivello: undefined,
        Attacco: undefined,
        AttaccoPerLivello: undefined,
        VelocitàDiAttacco: undefined,
        VelocitàDiAttaccoPerLivello: undefined,
        AttaccoMagico: undefined,
    }
} : {
    name? : string
    costFloor? : number
    costCeil? : number
    containsStat? : itemStatFilter
}) {

    const itemList = await prisma.oggetto.findMany({
        include: {
            Stats: true
        },
        where: {
            Nome: {
                contains: name,
                mode: "insensitive"
            },
            Costo: {
                gt: costFloor,
                lt: costCeil
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
                AttaccoMagico                : { gt: containsStat.AttaccoMagico }
            }
        },
        orderBy: {
            Costo: "desc"
        }
    })

    return itemList
}

export async function updateItem(
    id: number,
    {} : {}
) {
    
}