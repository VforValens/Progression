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
                    Caliber762x54R: {},
                    Caliber762x51: {},
                    Caliber762x39: {},
                    Caliber762x35: {},
                    Caliber68x51: {},
                    Caliber366TKM: {},
                    Caliber556x45: {},
                    Caliber545x39: {},
                    Caliber57x28: {},
                    Caliber46x30: {},
                    Caliber9x18: {},
                    Caliber9x19: {},
                    Caliber9x21: {},
                    Caliber9x39: {},
                    Caliber9x33: {},
                    Caliber1143x23ACP: {},
                    Caliber12x70: {},
                    Caliber23x75: {}
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
                    Caliber762x54R: {},
                    Caliber762x51: {},
                    Caliber762x39: {},
                    Caliber762x35: {},
                    Caliber68x51: {},
                    Caliber366TKM: {},
                    Caliber556x45: {},
                    Caliber545x39: {},
                    Caliber57x28: {},
                    Caliber46x30: {},
                    Caliber9x18: {},
                    Caliber9x19: {},
                    Caliber9x21: {},
                    Caliber9x39: {},
                    Caliber9x33: {},
                    Caliber1143x23ACP: {},
                    Caliber12x70: {},
                    Caliber23x75: {}
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