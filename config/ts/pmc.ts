export interface PmcConfig
{
    botRelativeDelta: number;
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