import type { GenerationData } from "@spt/models/eft/common/tables/IBotType";

export interface PmcConfig
{
    pocketLoot: GenerationData;
    backpackLoot: GenerationData;
    vestLoot: GenerationData;
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