import { GenerationData } from "@spt-aki/models/eft/common/tables/IBotType";

export interface PmcConfig
{
    pocketLoot: GenerationData;
    backpackLoot: GenerationData;
    vestLoot: GenerationData;
    botRelativeLevelDeltaMax: number;
    botRelativeLevelDeltaMin: number;
    levelRange: levelRange;
}

export interface levelRange
{
    loyalty1: minMax;
    loyalty2: minMax;
    loyalty3: minMax;
    loyalty4: minMax;
}

export interface minMax
{
    min: number;
    max: number;
}