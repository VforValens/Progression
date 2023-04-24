import { ILocationConfig } from "@spt-aki/models/spt/config/ILocationConfig";

export class Boss
{
    private locationConfig: ILocationConfig;

    constructor (locationConfig: ILocationConfig)
    {
        this.locationConfig = locationConfig;
    }

    public updateBoss(): void
    {
        // Reduce Custom PMC Boss Chances
        const pmcBoss = this.locationConfig.customWaves.boss;
        pmcBoss.factory4_day = [{
            "sptId": "sptBearFactoryDayBossSpawn",
            "BossName": "sptBear",
            "BossChance": 7,
            "BossZone": "BotZone",
            "BossPlayer": false,
            "BossDifficult": "normal",
            "BossEscortType": "sptBear",
            "BossEscortDifficult": "normal",
            "BossEscortAmount": "1",
            "Time": -1,
            "Supports": [{
                "BossEscortType": "sptBear",
                "BossEscortDifficult": [
                    "normal"
                ],
                "BossEscortAmount": "1"
            }
            ],
            "RandomTimeSpawn": false,
            "TriggerId": "",
            "TriggerName": ""
        }, {
            "sptId": "sptUsecFactoryDayBossSpawn",
            "BossName": "sptUsec",
            "BossChance": 7,
            "BossZone": "BotZone",
            "BossPlayer": false,
            "BossDifficult": "normal",
            "BossEscortType": "sptUsec",
            "BossEscortDifficult": "normal",
            "BossEscortAmount": "1",
            "Time": -1,
            "Supports": [{
                "BossEscortType": "sptUsec",
                "BossEscortDifficult": [
                    "normal"
                ],
                "BossEscortAmount": "1"
            }
            ],
            "RandomTimeSpawn": false,
            "TriggerId": "",
            "TriggerName": ""
        }
        ];

        pmcBoss.bigmap = 
        [{
            "sptId": "sptBearCustomsScavBaseNormalSpawn",
            "BossName": "sptBear",
            "BossChance": 7,
            "BossZone": "ZoneScavBase",
            "BossPlayer": false,
            "BossDifficult": "normal",
            "BossEscortType": "sptBear",
            "BossEscortDifficult": "normal",
            "BossEscortAmount": "2",
            "Time": -1,
            "Supports": [{
                "BossEscortType": "sptBear",
                "BossEscortDifficult": [
                    "normal"
                ],
                "BossEscortAmount": "2"
            }
            ],
            "RandomTimeSpawn": false,
            "TriggerId": "",
            "TriggerName": ""
        }, {
            "sptId": "sptUsecCustomsScavBaseNormalSpawn",
            "BossName": "sptUsec",
            "BossChance": 7,
            "BossZone": "ZoneScavBase",
            "BossPlayer": false,
            "BossDifficult": "normal",
            "BossEscortType": "sptUsec",
            "BossEscortDifficult": "normal",
            "BossEscortAmount": "2",
            "Time": -1,
            "Supports": [{
                "BossEscortType": "sptUsec",
                "BossEscortDifficult": [
                    "normal"
                ],
                "BossEscortAmount": "2"
            }
            ],
            "RandomTimeSpawn": false,
            "TriggerId": "",
            "TriggerName": ""
        }
        ];

        pmcBoss.woods =
        [{
            "sptId": "sptBearWoodScavBaseNormalSpawn",
            "BossName": "sptBear",
            "BossChance": 7,
            "BossZone": "ZoneScavBase2",
            "BossPlayer": false,
            "BossDifficult": "normal",
            "BossEscortType": "sptBear",
            "BossEscortDifficult": "normal",
            "BossEscortAmount": "2",
            "Time": -1,
            "Supports": [{
                "BossEscortType": "sptBear",
                "BossEscortDifficult": [
                    "normal"
                ],
                "BossEscortAmount": "2"
            }
            ],
            "RandomTimeSpawn": false,
            "TriggerId": "",
            "TriggerName": ""
        }, {
            "sptId": "sptUsecWoodScavBaseNormalSpawn",
            "BossName": "sptUsec",
            "BossChance": 7,
            "BossZone": "ZoneScavBase2",
            "BossPlayer": false,
            "BossDifficult": "normal",
            "BossEscortType": "sptUsec",
            "BossEscortDifficult": "normal",
            "BossEscortAmount": "2",
            "Time": -1,
            "Supports": [{
                "BossEscortType": "sptUsec",
                "BossEscortDifficult": [
                    "normal"
                ],
                "BossEscortAmount": "2"
            }
            ],
            "RandomTimeSpawn": false,
            "TriggerId": "",
            "TriggerName": ""
        }];

        pmcBoss.shoreline =
        [{
            "sptId": "sptBearShorelinePortNormalSpawn",
            "BossName": "sptBear",
            "BossChance": 7,
            "BossZone": "ZonePort",
            "BossPlayer": false,
            "BossDifficult": "normal",
            "BossEscortType": "sptBear",
            "BossEscortDifficult": "normal",
            "BossEscortAmount": "2",
            "Time": -1,
            "Supports": [{
                "BossEscortType": "sptBear",
                "BossEscortDifficult": [
                    "normal"
                ],
                "BossEscortAmount": "1"
            }
            ],
            "RandomTimeSpawn": false,
            "TriggerId": "",
            "TriggerName": ""
        }, {
            "sptId": "sptUsecShorelinePortNormalSpawn",
            "BossName": "sptUsec",
            "BossChance": 7,
            "BossZone": "ZonePort",
            "BossPlayer": false,
            "BossDifficult": "normal",
            "BossEscortType": "sptUsec",
            "BossEscortDifficult": "normal",
            "BossEscortAmount": "2",
            "Time": -1,
            "Supports": [{
                "BossEscortType": "sptUsec",
                "BossEscortDifficult": [
                    "normal"
                ],
                "BossEscortAmount": "1"
            }
            ],
            "RandomTimeSpawn": false,
            "TriggerId": "",
            "TriggerName": ""
        },
        {
            "sptId": "sptUsecShorelineSanatorium1NormalSpawn",
            "BossName": "sptUsec",
            "BossChance": 7,
            "BossZone": "ZoneSanatorium1",
            "BossPlayer": false,
            "BossDifficult": "normal",
            "BossEscortType": "sptUsec",
            "BossEscortDifficult": "normal",
            "BossEscortAmount": "1",
            "Time": -1,
            "Supports": [{
                "BossEscortType": "sptUsec",
                "BossEscortDifficult": [
                    "normal"
                ],
                "BossEscortAmount": "1"
            }
            ],
            "RandomTimeSpawn": false,
            "TriggerId": "",
            "TriggerName": ""
        },
        {
            "sptId": "sptBearShorelineSanatorium1NormalSpawn",
            "BossName": "sptBear",
            "BossChance": 7,
            "BossZone": "ZoneSanatorium1",
            "BossPlayer": false,
            "BossDifficult": "normal",
            "BossEscortType": "sptBear",
            "BossEscortDifficult": "normal",
            "BossEscortAmount": "1",
            "Time": -1,
            "Supports": [{
                "BossEscortType": "sptBear",
                "BossEscortDifficult": [
                    "normal"
                ],
                "BossEscortAmount": "1"
            }
            ],
            "RandomTimeSpawn": false,
            "TriggerId": "",
            "TriggerName": ""
        },
        {
            "sptId": "sptUsecShorelineSanatorium2NormalSpawn",
            "BossName": "sptUsec",
            "BossChance": 7,
            "BossZone": "ZoneSanatorium2",
            "BossPlayer": false,
            "BossDifficult": "normal",
            "BossEscortType": "sptUsec",
            "BossEscortDifficult": "normal",
            "BossEscortAmount": "1",
            "Time": -1,
            "Supports": [{
                "BossEscortType": "sptUsec",
                "BossEscortDifficult": [
                    "normal"
                ],
                "BossEscortAmount": "1"
            }
            ],
            "RandomTimeSpawn": false,
            "TriggerId": "",
            "TriggerName": ""
        },
        {
            "sptId": "sptBearShorelineSanatorium2NormalSpawn",
            "BossName": "sptBear",
            "BossChance": 7,
            "BossZone": "ZoneSanatorium2",
            "BossPlayer": false,
            "BossDifficult": "normal",
            "BossEscortType": "sptBear",
            "BossEscortDifficult": "normal",
            "BossEscortAmount": "1",
            "Time": -1,
            "Supports": [{
                "BossEscortType": "sptBear",
                "BossEscortDifficult": [
                    "normal"
                ],
                "BossEscortAmount": "1"
            }
            ],
            "RandomTimeSpawn": false,
            "TriggerId": "",
            "TriggerName": ""
        }];
    }
}