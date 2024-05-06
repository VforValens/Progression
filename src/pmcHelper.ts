import { WeightingAdjustmentDetails } from "@spt-aki/models/spt/config/IBotConfig"
import { levelRange } from "../config/ts/pmc";

export class PmcHelper
{
    public getPmcWeightsLL1(levelRange: levelRange): WeightingAdjustmentDetails
    {
        return {
            levelRange: {
                min: levelRange.loyalty1.min,
                max: levelRange.loyalty1.max
            },
            ammo: {
                add: {
                    Caliber762x54R: {
                        "64b8f7c241772715af0f9c3d": 30,
                        "64b8f7b5389d7ffd620ccba2": 70
                    },
                    Caliber762x51: {
                        "5e023e88277cce2b522ff2b1": 100
                    },
                    Caliber762x39: {
                        "59e4d3d286f774176a36250a": 20,
                        "64b7af734b75259c590fa895": 65,
                        "64b7af5a8532cf95ee0a0dbd": 15
                    },
                    Caliber762x35: {
                        "6196365d58ef8c428c287da1": 100
                    },
                    Caliber762x25: {
                        "573602322459776445391df1": 15,
                        "573601b42459776410737435": 5,
                        "5735ff5c245977640e39ba7e": 5,
                        "5735fdcd2459776445391d61": 75
                    },
                    Caliber366TKM: {
                        "59e6658b86f77411d949b250": 15,
                        "59e6542b86f77411dc52a77a": 85
                    },
                    Caliber556x45: {
                        "59e6927d86f77411da468256": 90,
                        "59e6918f86f7746c9f75e849": 10
                    },
                    Caliber545x39: {
                        "56dff216d2720bbd668b4568": 5,
                        "56dff338d2720bbd668b4569": 5,
                        "56dff421d2720b5f5a8b4567": 15,
                        "56dff4ecd2720b5f5a8b4568": 75
                    },
                    Caliber9x18: {
                        "57371f8d24597761006c6a81": 20,
                        "57371b192459775a9f58a5e0": 40,
                        "573720e02459776143012541": 40
                    },
                    Caliber9x19: {
                        "58864a4f2459770fcc257101": 60,
                        "5c3df7d588a4501f290594e5": 40
                    },
                    Caliber1143x23ACP: {
                        "5efb0d4f4bc50b58e81710f3": 100
                    },
                    Caliber12x70: {
                        "560d5e524bdc2d25448b4571": 60,
                        "5d6e67fba4b9361bc73bc779": 5,
                        "5d6e6869a4b9361c140bcfde": 5,
                        "5d6e6891a4b9361bd473feea": 30
                    }
                },
                edit: {}
            },
            equipment: {
                add: {},
                edit: {}
            },
            clothing: {
                add: {
                    body: {
                        "5cc0858d14c02e000c6bea66": 20,
                        "5cde95d97d6c8b647a3769b0": 20
                    },
                    feet: {
                        "5cc085bb14c02e000e67a5c5": 20,
                        "5cde95ef7d6c8b04713c4f2d": 20
                    }
                },
                edit: {}
            }
        }
    }

    public getPmcWeightsLL2(levelRange: levelRange): WeightingAdjustmentDetails
    {
        return {
            levelRange: {
                min: levelRange.loyalty2.min,
                max: levelRange.loyalty2.max
            },
            ammo: {
                add: {
                    Caliber127x55: {
                        "5cadf6ddae9215051e1c23b2": 40,
                        "5cadf6e5ae921500113bb973": 10
                    },
                    Caliber762x54R: {
                        "64b8f7968532cf95ee0a0dbf": 70,
                        "5e023cf8186a883be655e54f": 15,
                        "5887431f2459777e1612938f": 8,
                        "59e77a2386f7742ee578960a": 7
                    },
                    Caliber762x51: {
                        "5e023e6e34d52a55c3304f71": ,
                        "5e023e53d4353e3302577c4c": 
                    },
                    Caliber762x39: {
                        "64b7af5a8532cf95ee0a0dbd": ,
                        "59e4d24686f7741776641ac7": ,
                        "59e4cf5286f7741778269d8a": ,
                        "5656d7c34bdc2d9d198b4587": ,
                        "64b7af434b75259c590fa893": 
                    },
                    Caliber762x35: {
                        "6196364158ef8c428c287d9f": ,
                        "5fbe3ffdf8b6a877a729ea82": ,
                        "619636be6db0f2477964e710": ,
                        "64b8725c4b75259c590fa899": 
                    },
                    Caliber762x25: {
                        "5736026a245977644601dc61": ,
                        "573603c924597764442bd9cb": ,
                        "573603562459776430731618": 
                    },
                    Caliber68x51: {
                        "6529302b8c26af6326029fb7": 1
                    },
                    Caliber366TKM: {
                        "59e655cb86f77411dc52a77b": ,
                        "5f0596629e22f464da6bbdd9": 
                    },
                    Caliber556x45: {
                        "5c0d5ae286f7741e46554302": ,
                        "59e68f6f86f7746c9f75e846": ,
                        "54527a984bdc2d4e668b4567": ,
                        "60194943740c5d77f6705eea": 
                    },
                    Caliber545x39: {
                        "56dff4a2d2720bbd668b456a": ,
                        "56dff0bed2720bb0668b4567": ,
                        "56dff2ced2720bb4668b4567": ,
                        "56dff3afd2720bba668b4567": 
                    },
                    Caliber57x28: {
                        "5cc86840d7f00c002412c56c": ,
                        "5cc80f8fe4a949033b0224a2": , 
                        "5cc80f53e4a949000e1ea4f8": 
                    },
                    Caliber46x30: {
                        "5ba2678ad4351e44f824b344": ,
                        "64b6979341772715af0f9c39": 
                    },
                    Caliber9x18: {
                        "57372140245977611f70ee91": ,
                        "573719df2459775a626ccbc2": 
                    },
                    Caliber9x19: {
                        "64b7bbb74b75259c590fa897": ,
                        "56d59d3ad2720bdb418b4577": 
                    },
                    Caliber9x21: {
                        "6576f93989f0062e741ba952": 1
                    },
                    Caliber9x39: {
                        "6576f96220d53a5b8f3e395e": ,
                        "57a0dfb82459774d3078b56c": ,
                        "61962d879bb3d20b0946d385": 
                    },
                    Caliber9x33: {
                        "62330b3ed4dc74626d570b95": 
                    },
                    Caliber1143x23ACP: {
                        "5e81f423763d9f754677bf2e": 
                    },
                    Caliber12x70: {
                        "5d6e68e6a4b9361c140bcfe0": ,
                        "64b8ee384b75259c590fa89b": ,
                        "5d6e6806a4b936088465b17e": ,
                        "5d6e68c4a4b9361b93413f79": ,
                        "5c0d591486f7744c505b416f": 
                    }
                },
                edit: {}
            },
            equipment: {
                add: {},
                edit: {}
            },
            clothing: {
                add: {},
                edit: {
                    body: {
                        "5cc0858d14c02e000c6bea66": 20,
                        "5cde95d97d6c8b647a3769b0": 20
                    },
                    feet: {
                        "5cc085bb14c02e000e67a5c5": 20,
                        "5cde95ef7d6c8b04713c4f2d": 20
                    }
                }
            }
        } 
    }

    public getPmcWeightsLL3(levelRange: levelRange): WeightingAdjustmentDetails
    {
        return {
            levelRange: {
                min: levelRange.loyalty3.min,
                max: levelRange.loyalty3.max
            },
            ammo: {
                add: {
                    Caliber127x55: {
                        "5cadf6ddae9215051e1c23b2": 40,
                        "adf6e5ae921500113bb973": 10
                    },
                    Caliber762x54R: {
                        "5e023cf8186a883be655e54f": ,
                        "59e77a2386f7742ee578960a": 
                    },
                    Caliber762x51: {
                        "5e023e53d4353e3302577c4c": ,
                        "58dd3ad986f77403051cba8f": 
                    },
                    Caliber762x39: {
                        "59e4d24686f7741776641ac7": ,
                        "59e4cf5286f7741778269d8a": ,
                        "5656d7c34bdc2d9d198b4587": ,
                        "64b7af434b75259c590fa893": 
                    },
                    Caliber762x35: {
                        "5fbe3ffdf8b6a877a729ea82": ,
                        "619636be6db0f2477964e710": 
                    },
                    Caliber68x51: {
                        "6529302b8c26af6326029fb7": 
                    },
                    Caliber366TKM: {
                        "5f0596629e22f464da6bbdd9": 1
                    },
                    Caliber556x45: {
                        "54527ac44bdc2d36668b4567": 1
                    },
                    Caliber545x39: {
                        "56dff3afd2720bba668b4567": ,
                        "56dff2ced2720bb4668b4567": ,
                        "56dff061d2720bb5668b4567": 
                    },
                    Caliber57x28: {
                        "5cc86832d7f00c000d3a6e6c": ,
                        "5cc80f67e4a949035e43bbba": ,
                        "5cc80f53e4a949000e1ea4f8": 
                    },
                    Caliber46x30: {
                        "64b6979341772715af0f9c39": 1
                    },
                    Caliber9x19: {
                        "5c0d56a986f774449d5de529": ,
                        "5c925fa22e221601da359b7b": ,
                        "5efb0da7a29a85116f6ea05f": 
                    },
                    Caliber9x21: {
                        "5a26ac06c4a282000c5a90a8": 1,
                        "5a26abfac4a28232980eabff": 1,
                        "5a269f97c4a282000b151807": 1,
                        "6576f93989f0062e741ba952": 1
                    },
                    Caliber9x39: {
                        "61962d879bb3d20b0946d385": 1
                    },
                    Caliber1143x23ACP: {
                        "5efb0fc6aeb21837e749c801": ,
                        "5e81f423763d9f754677bf2e": 
                    },
                    Caliber12x70: {
                        "5d6e6911a4b9361bd5780d52": 35,
                        "5d6e68a8a4b9360b6c0d54e2": 35,
                        "5d6e6806a4b936088465b17e": 20,
                        "5c0d591486f7744c505b416f": 10
                    },
                    Caliber23x75: {
                        "5f647f31b6238e5dd066e196": 33,
                        "5e85a9a6eacf8c039e4e2ac1": 33,
                        "5e85aa1a988a8701445df1f5": 33
                    }
                },
                edit: {}
            },
            equipment: {
                add: {},
                edit: {}
            },
            clothing: {
                add: {},
                edit: {
                    body: {
                        "5cc0858d14c02e000c6bea66": 20,
                        "5cde95d97d6c8b647a3769b0": 20
                    },
                    feet: {
                        "5cc085bb14c02e000e67a5c5": 20,
                        "5cde95ef7d6c8b04713c4f2d": 20
                    }
                }
            }
        } 
    }

    public getPmcWeightsLL4(levelRange: levelRange): WeightingAdjustmentDetails
    {
        return {
            levelRange: {
                min: levelRange.loyalty4.min,
                max: 100
            },
            ammo: {
                add: {
                    Caliber40x46: {
                        "5ede475b549eed7c6d5c18fb": 94,
                        "5ede4739e0350d05467f73e8": 1,
                        "5ede47405b097655935d7d16": 1,
                        "5f0c892565703e5c461894e9": 1,
                        "5ede474b0c226a66f5402622": 1,
                        "5ede475339ee016e8c534742": 1
                    },
                    Caliber127x55: {
                        "5cadf6eeae921500134b2799": 1
                    },
                    Caliber86x70: {
                        "5fc275cf85fd526b824a571a": 85,
                        "5fc382a9d724d907e2077dab": 15
                    },
                    Caliber762x54R: {
                        "5e023d34e8a400319a28ed44": 20,
                        "560d61e84bdc2da74d8b4571": 70,
                        "5e023d48186a883be655e551": 10
                    },
                    Caliber762x51: {
                        "58dd3ad986f77403051cba8f": ,
                        "5a608bf24f39f98ffc77720e": ,
                        "5a6086ea4f39f99cd479502f": ,
                        "5efb0c1bd79ff02a1f5e68d9":
                    },
                    Caliber762x39: {
                        "64b7af434b75259c590fa893": ,
                        "59e0d99486f7744a32234762": ,
                        "601aa3d2b2bcb34913271e6d":
                    },
                    Caliber762x35: {
                        "64b8725c4b75259c590fa899": ,
                        "5fd20ff893a8961fc660a954": 
                    },
                    Caliber68x51: {
                        "6529243824cbe3c74a05e5c1": 
                    },
                    Caliber556x45: {
                        "54527ac44bdc2d36668b4567": ,
                        "59e690b686f7746c9f75e848": ,
                        "601949593ae8f707c4608daa": 
                    },
                    Caliber545x39: {
                        "56dff061d2720bb5668b4567": ,
                        "61962b617c6c7b169525f168": ,
                        "56dfef82d2720bbd668b4567": ,
                        "56dff026d2720bb8668b4567": ,
                        "5c0d5e4486f77478390952fe":
                    },
                    Caliber57x28: {
                        "5cc80f38e4a949001152b560": 
                    },
                    Caliber46x30: {
                        "5ba2678ad4351e44f824b344": ,
                        "5ba26835d4351e0035628ff5": 
                    },
                    Caliber9x21: {
                        "5a26ac0ec4a28200741e1e18": 
                    },
                    Caliber9x39: {
                        "57a0e5022459774d1673f889": ,
                        "5c0d688c86f77413ae3407b2": 
                    },
                    Caliber1143x23ACP: {
                        "5efb0cabfb3e451d70735af5": 
                    }
                },
                edit: {}
            },
            equipment: {
                add: {},
                edit: {}
            },
            clothing: {
                add: {},
                edit: {
                    body: {
                        "5cc0858d14c02e000c6bea66": 20,
                        "5cde95d97d6c8b647a3769b0": 20
                    },
                    feet: {
                        "5cc085bb14c02e000e67a5c5": 20,
                        "5cde95ef7d6c8b04713c4f2d": 20
                    }
                }
            }
        } 
    }
}