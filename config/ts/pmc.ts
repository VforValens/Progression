import type { IGenerationData } from "@spt/models/eft/common/tables/IBotType";

export interface PmcConfig
{
    pocketLoot: IGenerationData;
    backpackLoot: IGenerationData;
    vestLoot: IGenerationData;
    botRelativeLevelDeltaMax: number;
    botRelativeLevelDeltaMin: number;
    levelRange: LevelRange;
    widerWhitelistRange: boolean;
}

export interface LevelRange
{
    loyalty1: MinMax;
    loyalty2: MinMax;
    loyalty3: MinMax;
    loyalty4: MinMax;
}

export interface MinMax
{
    min: number;
    max: number;
}