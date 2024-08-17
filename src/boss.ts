import type { ILocationConfig } from "@spt/models/spt/config/ILocationConfig";
import type { BossConfig } from "../config/ts/boss";

export class Boss
{
    private locationConfig: ILocationConfig;
    private bossConfig: BossConfig = require("../config/boss.json");

    constructor (locationConfig: ILocationConfig)
    {
        this.locationConfig = locationConfig;
    }

    public updateBoss(): void
    {
        // Reduce Custom PMC Boss Chances
        const pmcBoss = this.locationConfig.customWaves.boss;
        const bossConfig = this.bossConfig;

        pmcBoss.factory4_day = [{
            "sptId": "pmcBEARFactoryDayBossSpawn",
            "BossName": "pmcBEAR",
            "BossChance": bossConfig.factoryDayChance,
            "BossZone": "BotZone",
            "BossPlayer": false,
            "BossDifficult": "normal",
            "BossEscortType": "pmcBEAR",
            "BossEscortDifficult": "normal",
            "BossEscortAmount": "1",
            "Time": -1,
            "Supports": [{
                "BossEscortType": "pmcBEAR",
                "BossEscortDifficult": [
                    "normal"
                ],
                "BossEscortAmount": "1"
            }
            ],
            "RandomTimeSpawn": false,
            "TriggerId": "",
            "TriggerName": "",
            spawnMode: []
        }, {
            "sptId": "pmcUSECFactoryDayBossSpawn",
            "BossName": "pmcUSEC",
            "BossChance": bossConfig.factoryDayChance,
            "BossZone": "BotZone",
            "BossPlayer": false,
            "BossDifficult": "normal",
            "BossEscortType": "pmcUSEC",
            "BossEscortDifficult": "normal",
            "BossEscortAmount": "1",
            "Time": -1,
            "Supports": [{
                "BossEscortType": "pmcUSEC",
                "BossEscortDifficult": [
                    "normal"
                ],
                "BossEscortAmount": "1"
            }
            ],
            "RandomTimeSpawn": false,
            "TriggerId": "",
            "TriggerName": "",
            spawnMode: []
        }
        ];

        pmcBoss.bigmap = 
        [{
            "sptId": "pmcBEARCustomsScavBaseNormalSpawn",
            "BossName": "pmcBEAR",
            "BossChance": bossConfig.customsChance,
            "BossZone": "ZoneScavBase",
            "BossPlayer": false,
            "BossDifficult": "normal",
            "BossEscortType": "pmcBEAR",
            "BossEscortDifficult": "normal",
            "BossEscortAmount": "2",
            "Time": -1,
            "Supports": [{
                "BossEscortType": "pmcBEAR",
                "BossEscortDifficult": [
                    "normal"
                ],
                "BossEscortAmount": "2"
            }
            ],
            "RandomTimeSpawn": false,
            "TriggerId": "",
            "TriggerName": "",
            spawnMode: []
        }, {
            "sptId": "pmcUSECCustomsScavBaseNormalSpawn",
            "BossName": "pmcUSEC",
            "BossChance": bossConfig.customsChance,
            "BossZone": "ZoneScavBase",
            "BossPlayer": false,
            "BossDifficult": "normal",
            "BossEscortType": "pmcUSEC",
            "BossEscortDifficult": "normal",
            "BossEscortAmount": "2",
            "Time": -1,
            "Supports": [{
                "BossEscortType": "pmcUSEC",
                "BossEscortDifficult": [
                    "normal"
                ],
                "BossEscortAmount": "2"
            }
            ],
            "RandomTimeSpawn": false,
            "TriggerId": "",
            "TriggerName": "",
            spawnMode: []
        }
        ];

        pmcBoss.woods =
        [{
            "sptId": "pmcBEARWoodScavBaseNormalSpawn",
            "BossName": "pmcBEAR",
            "BossChance": bossConfig.woodsChance,
            "BossZone": "ZoneScavBase2",
            "BossPlayer": false,
            "BossDifficult": "normal",
            "BossEscortType": "pmcBEAR",
            "BossEscortDifficult": "normal",
            "BossEscortAmount": "2",
            "Time": -1,
            "Supports": [{
                "BossEscortType": "pmcBEAR",
                "BossEscortDifficult": [
                    "normal"
                ],
                "BossEscortAmount": "2"
            }
            ],
            "RandomTimeSpawn": false,
            "TriggerId": "",
            "TriggerName": "",
            spawnMode: []
        }, {
            "sptId": "pmcUSECWoodScavBaseNormalSpawn",
            "BossName": "pmcUSEC",
            "BossChance": bossConfig.woodsChance,
            "BossZone": "ZoneScavBase2",
            "BossPlayer": false,
            "BossDifficult": "normal",
            "BossEscortType": "pmcUSEC",
            "BossEscortDifficult": "normal",
            "BossEscortAmount": "2",
            "Time": -1,
            "Supports": [{
                "BossEscortType": "pmcUSEC",
                "BossEscortDifficult": [
                    "normal"
                ],
                "BossEscortAmount": "2"
            }
            ],
            "RandomTimeSpawn": false,
            "TriggerId": "",
            "TriggerName": "",
            spawnMode: []
        }];

        pmcBoss.shoreline =
        [{
            "sptId": "pmcBEARShorelinePortNormalSpawn",
            "BossName": "pmcBEAR",
            "BossChance": bossConfig.shorelineChance,
            "BossZone": "ZonePort",
            "BossPlayer": false,
            "BossDifficult": "normal",
            "BossEscortType": "pmcBEAR",
            "BossEscortDifficult": "normal",
            "BossEscortAmount": "2",
            "Time": -1,
            "Supports": [{
                "BossEscortType": "pmcBEAR",
                "BossEscortDifficult": [
                    "normal"
                ],
                "BossEscortAmount": "1"
            }
            ],
            "RandomTimeSpawn": false,
            "TriggerId": "",
            "TriggerName": "",
            spawnMode: []
        }, {
            "sptId": "pmcUSECShorelinePortNormalSpawn",
            "BossName": "pmcUSEC",
            "BossChance": bossConfig.shorelineChance,
            "BossZone": "ZonePort",
            "BossPlayer": false,
            "BossDifficult": "normal",
            "BossEscortType": "pmcUSEC",
            "BossEscortDifficult": "normal",
            "BossEscortAmount": "2",
            "Time": -1,
            "Supports": [{
                "BossEscortType": "pmcUSEC",
                "BossEscortDifficult": [
                    "normal"
                ],
                "BossEscortAmount": "1"
            }
            ],
            "RandomTimeSpawn": false,
            "TriggerId": "",
            "TriggerName": "",
            spawnMode: []
        },
        {
            "sptId": "pmcUSECShorelineSanatorium1NormalSpawn",
            "BossName": "pmcUSEC",
            "BossChance": bossConfig.shorelineChance,
            "BossZone": "ZoneSanatorium1",
            "BossPlayer": false,
            "BossDifficult": "normal",
            "BossEscortType": "pmcUSEC",
            "BossEscortDifficult": "normal",
            "BossEscortAmount": "1",
            "Time": -1,
            "Supports": [{
                "BossEscortType": "pmcUSEC",
                "BossEscortDifficult": [
                    "normal"
                ],
                "BossEscortAmount": "1"
            }
            ],
            "RandomTimeSpawn": false,
            "TriggerId": "",
            "TriggerName": "",
            spawnMode: []
        },
        {
            "sptId": "pmcBEARShorelineSanatorium1NormalSpawn",
            "BossName": "pmcBEAR",
            "BossChance": bossConfig.shorelineChance,
            "BossZone": "ZoneSanatorium1",
            "BossPlayer": false,
            "BossDifficult": "normal",
            "BossEscortType": "pmcBEAR",
            "BossEscortDifficult": "normal",
            "BossEscortAmount": "1",
            "Time": -1,
            "Supports": [{
                "BossEscortType": "pmcBEAR",
                "BossEscortDifficult": [
                    "normal"
                ],
                "BossEscortAmount": "1"
            }
            ],
            "RandomTimeSpawn": false,
            "TriggerId": "",
            "TriggerName": "",
            spawnMode: []
        },
        {
            "sptId": "pmcUSECShorelineSanatorium2NormalSpawn",
            "BossName": "pmcUSEC",
            "BossChance": bossConfig.shorelineChance,
            "BossZone": "ZoneSanatorium2",
            "BossPlayer": false,
            "BossDifficult": "normal",
            "BossEscortType": "pmcUSEC",
            "BossEscortDifficult": "normal",
            "BossEscortAmount": "1",
            "Time": -1,
            "Supports": [{
                "BossEscortType": "pmcUSEC",
                "BossEscortDifficult": [
                    "normal"
                ],
                "BossEscortAmount": "1"
            }
            ],
            "RandomTimeSpawn": false,
            "TriggerId": "",
            "TriggerName": "",
            spawnMode: []
        },
        {
            "sptId": "pmcBEARShorelineSanatorium2NormalSpawn",
            "BossName": "pmcBEAR",
            "BossChance": bossConfig.shorelineChance,
            "BossZone": "ZoneSanatorium2",
            "BossPlayer": false,
            "BossDifficult": "normal",
            "BossEscortType": "pmcBEAR",
            "BossEscortDifficult": "normal",
            "BossEscortAmount": "1",
            "Time": -1,
            "Supports": [{
                "BossEscortType": "pmcBEAR",
                "BossEscortDifficult": [
                    "normal"
                ],
                "BossEscortAmount": "1"
            }
            ],
            "RandomTimeSpawn": false,
            "TriggerId": "",
            "TriggerName": "",
            spawnMode: []
        }];
    }
}