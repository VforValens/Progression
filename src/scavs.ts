// import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
// import { IDatabaseTables } from "@spt-aki/models/spt/server/IDatabaseTables";
// import { EquipmentFilterDetails, EquipmentFilters, IBotConfig } from "@spt-aki/models/spt/config/IBotConfig";

// export class Scavs
// {
//     private botConfig: IBotConfig;
//     private databaseServer: IDatabaseTables;


//     constructor (botConfig: IBotConfig, databaseServer: DatabaseServer)
//     {
//         this.botConfig = botConfig;
//         this.databaseServer = databaseServer.getTables();
//     }


//     public updateScavs(): void
//     {
//         this.generateScavs();
//     }

//     private generateScavs()
//     {
//         // Scav Progression Start 

//         // Scav Gear 
//         const primaryWeaponArrayScav = ["5f2a9575926fd9352339381f", "5aafa857e5b5b00018480968", "56dee2bdd2720bc8328b4567", "54491c4f4bdc2db1078b4568", "576165642459773c7a400233", "5a38e6bac4a2826c6e06d79b", "57f4c844245977379d5c14d1", "57d14d2524597714373db789", "57f3c6bd24597738e730fa2f", "59f9cabd86f7743a10721f46", "5ea03f7400685063ec28bfa8", "60339954d62c9b14ed777c06", "5c07c60e0db834002330051f", "5ac66d9b5acfc4001633997a", "5bf3e03b0db834001d2c4a9c", "5ac4cd105acfc40016339859", "5644bd2b4bdc2d3b4c8b4572", "5bf3e0490db83400196199af", "59d6088586f774275f37482f", "5a0ec13bfcdbcb00165aa685", "59ff346386f77477562ff5e2", "57dc2fa62459775949412633", "5839a40f24597726f856b511", "583990e32459771419544dd2", "5b0bbe4e5acfc40dc528a72d", "59e6687d86f77411d949b251", "59e6152586f77473dc057aa1", "587e02ff24597743df3deaeb", "574d967124597745970e7c94", "5c501a4d2e221602b412b540", "57838ad32459774a17445cd2", "5c46fbd72e2216398b5a8c9c", "5ae08f0a5acfc408fb1398a1", "5bfea6e90db834001b7347f3", "55801eed4bdc2d89578b4588", "5de652c31b7e3716273428be"];
//         const holsterArrayScav = ["576a581d2459771e7b1bc4f1", "56d59856d2720bd8418b456a", "56e0598dd2720bb5668b45a6", "5a17f98cfcdbcb0980087290", "579204f224597773d619e051", "5448bd6b4bdc2dfc2f8b4569", "571a12c42459771f627b58a0", "5cadc190ae921500103bb3b6", "5e81c3cbac2bb513793cdc75"];
//         const backpackArrayScav = ["59e763f286f7742ee57895da", "56e335e4d2720b6c058b456d", "544a5cde4bdc2d39388b456b", "5f5e45cc5021ce62144be7aa", "56e33634d2720bd8058b456b", "56e33680d2720be2748b4576", "5ab8ee7786f7742d8f33f0b9", "5ab8f04f86f774585f4237d8"];
//         const tacticalVestArrayScav = ["5d5d646386f7742797261fd9", "5c0e446786f7742013381639", "5e4abc1f86f774069619fbaa", "572b7adb24597762ae139821", "5fd4c5477a8d854fa0105061", "5fd4c4fa16cac650092f6771", "5648a69d4bdc2ded0b8b457b", "5e4abfed86f77406a2713cf7", "59e7643b86f7742cbf2c109a", "5929a2a086f7744f4b234d43", "5ab8dab586f77441cd04f2a2", "5ca20abf86f77418567a43f2", "5c0e6a1586f77404597b4965"];
//         const earpieceArrayScav = ["5c165d832e2216398b5a7e36", "5b432b965acfc47a8774094e", "6033fa48ffd42c541047f728"];
//         const headwearArrayScav = ["5ea05cf85ad9772e6624305d", "5df8a58286f77412631087ed", "5c0d2727d174af02a012cf58", "5c08f87c0db8340019124324", "59e7711e86f7746cae05fbe1", "5a7c4850e899ef00150be885", "5aa7cfc0e5b5b00015693143", "5aa7d03ae5b5b00016327db5", "5c06c6a80db834001b735491", "5c066ef40db834001966a595", "5aa2b9ede5b5b000137b758b", "59e7708286f7742cbd762753", "572b7fa124597762b472f9d2", "5bd073c986f7747f627e796c", "59e770f986f7742cbe3164ef", "572b7d8524597762b472f9d1", "5a43943586f77416ad2f06e2", "5a43957686f7742a2c2f11b0", "5aa2b8d7e5b5b00014028f4a", "5aa2ba19e5b5b00014028f4e", "5aa2a7e8e5b5b00016327c16", "5aa2b87de5b5b00016327c25", "5aa2b89be5b5b0001569311f", "5b4329075acfc400153b78ff", "5ab8f20c86f7745cdb629fb2"];
//         const armorVestArrayScav = ["5ab8e79e86f7742d8b372e78", "5e9dacf986f774054d6b89f4", "5c0e53c886f7747fa54205c7", "5c0e51be86f774598e797894", "5ab8e4ed86f7742d8e50c7fa", "5c0e5edb86f77461f55ed1f7", "5b44d22286f774172b0c9de8", "5c0e5bab86f77461f55ed1f3", "59e7635f86f7742cbf2c1095", "5df8a2ca86f7740bfe6df777", "5648a7494bdc2d9d488b4583", "62a09d79de7ac81993580530"];
//         const eyewearArrayScav = ["557ff21e4bdc2d89578b4586", "59e770b986f7742cbd762754", "5b432be65acfc433000ed01f", "5aa2b923e5b5b000137b7589", "5aa2b986e5b5b00014028f4c", "5aa2b9aee5b5b00015693121", "603409c80ca681766b6a0fb2"];
//         const faceCoverArrayScav = ["5b432b2f5acfc4771e1c6622", "5e54f79686f7744022011103", "5b432c305acfc40019478128", "5b432b6c5acfc4001a599bf0", "59e7715586f7742ee5789605", "5bd06f5d86f77427101ad47c", "5bd0716d86f774171822ef4b", "5bd071d786f7747e707b93a3", "572b7f1624597762ae139822", "5ab8f39486f7745cd93a1cca", "5ab8f4ff86f77431c60d91ba", "5b432f3d5acfc4704b4a1dfb", "572b7fa524597762b747ce82", "5b4326435acfc433000ed01d", "5bd073a586f7747e6f135799", "5e54f76986f7740366043752", "5c1a1e3f2e221602b66cc4c2"];

//         // Scav Ammo
//         const ammo762x54ArrayScav = ["5887431f2459777e1612938f", "5e023cf8186a883be655e54f"];
//         const ammo762x54ArrayScav2 = ammo762x54ArrayScav.concat(...["59e77a2386f7742ee578960a", "560d61e84bdc2da74d8b4571"]);
        
        
//         const ammo762x51ArrayScav = ["5e023e6e34d52a55c3304f71", "5e023e53d4353e3302577c4c"];
//         const ammo762x51ArrayScav2 = ammo762x51ArrayScav.concat(...["58dd3ad986f77403051cba8f", "5a608bf24f39f98ffc77720e", "5a6086ea4f39f99cd479502f"]);
        
        
//         const ammo762x39ArrayScav = ["5656d7c34bdc2d9d198b4587", "59e4cf5286f7741778269d8a"];
//         const ammo762x39ArrayScav2 = ammo762x39ArrayScav.concat(...["59e4d24686f7741776641ac7", "59e0d99486f7744a32234762"]);
        
        
//         const ammo762x25TTArrayScav = ["5735fdcd2459776445391d61", "5735ff5c245977640e39ba7e", "573601b42459776410737435", "573602322459776445391df1", "5736026a245977644601dc61", "573603c924597764442bd9cb"];
//         const ammo762x25TTArrayScav2 = ammo762x25TTArrayScav.concat(...["573603562459776430731618"]);
        
        
//         const ammo366TKMArrayScav = ["59e6542b86f77411dc52a77a", "59e655cb86f77411dc52a77b", "59e6658b86f77411d949b250"];
//         const ammo366TKMArrayScav2 = ammo366TKMArrayScav.concat(...["5f0596629e22f464da6bbdd9"]);
        
        
//         const ammo556x45ArrayScav = ["59e6920f86f77411d82aa167", "54527a984bdc2d4e668b4567", "59e68f6f86f7746c9f75e846", "59e6906286f7746c9f75e847"];
//         const ammo556x45ArrayScav2 = ammo556x45ArrayScav.concat(...["59e690b686f7746c9f75e848"]);
        
        
//         const ammo545x39ArrayScav = ["56dff4a2d2720bbd668b456a", "56dff3afd2720bba668b4567", "56dff2ced2720bb4668b4567", "56dff4ecd2720b5f5a8b4568"];
//         const ammo545x39ArrayScav2 = ammo545x39ArrayScav.concat(...["56dfef82d2720bbd668b4567", "56dff061d2720bb5668b4567", "56dff026d2720bb8668b4567", "5c0d5e4486f77478390952fe"]);
        
        
//         const ammo9x18ArrayScav = ["573719762459775a626ccbc1", "57371e4124597760ff7b25f1", "5737207f24597760ff7b25f2"];
//         const ammo9x18ArrayScav2 = ammo9x18ArrayScav.concat(...["573718ba2459775a75491131", "573719df2459775a626ccbc2", "57371aab2459775a77142f22", "57372140245977611f70ee91"]);

        
//         const ammo9x19ArrayScav = ["5c3df7d588a4501f290594e5", "56d59d3ad2720bdb418b4577"];
//         const ammo9x19ArrayScav2 = ammo9x19ArrayScav.concat(...["5c925fa22e221601da359b7b", "5efb0e16aeb21837e749c7ff", "5efb0da7a29a85116f6ea05f"]);
       
       
//         const ammo9x39ArrayScav = ["57a0dfb82459774d3078b56c"];
//         const ammo9x39ArrayScav2 = ammo9x39ArrayScav.concat(...["57a0e5022459774d1673f889", "5c0d688c86f77413ae3407b2", "5c0d668f86f7747ccb7f13b2"]);
       
       
//         const ammo1143x23ACPArrayScav = ["5e81f423763d9f754677bf2e", "5efb0d4f4bc50b58e81710f3"];
//         const ammo1143x23ACPArrayScav2 = ammo1143x23ACPArrayScav.concat(...["5efb0cabfb3e451d70735af5", "5efb0fc6aeb21837e749c801"]);
      
      
//         const ammo12x70ArrayScav = ["560d5e524bdc2d25448b4571", "5d6e6772a4b936088465b17c", "5d6e67fba4b9361bc73bc779", "58820d1224597753c90aeb13", "5d6e6869a4b9361c140bcfde", "5d6e6891a4b9361bd473feea","5d6e6806a4b936088465b17e", "5d6e689ca4b9361bc8618956", "5d6e68e6a4b9361c140bcfe0"];
//         const ammo12x70ArrayScav2 = ammo12x70ArrayScav.concat(...["5d6e68b3a4b9361bca7e50b5", "5d6e68dea4b9361bcc29e659", "5d6e68a8a4b9360b6c0d54e2", "5d6e6911a4b9361bd5780d52", "5d6e68c4a4b9361b93413f79", "5c0d591486f7744c505b416f"]);
      
      
//         const ammo20x70ArrayScav = ["5a38ebd9c4a282000d722a5b", "5d6e695fa4b936359b35d852", "5d6e6a42a4b9364f07165f52", "5d6e6a53a4b9361bd473feec", "5d6e69b9a4b9361bc8618958", "5d6e69c7a4b9360b6c0d54e4"];
//         const ammo20x70ArrayScav2 = ammo20x70ArrayScav.concat(...["5d6e6a05a4b93618084f58d0", "5d6e6a5fa4b93614ec501745"]);

//         // Scav Whitelist
//         const progressionWhitelistScav1: EquipmentFilters =
//         {
//             "weaponModLimits": {},
//             "weaponSightWhitelist": {},
//             "nvgIsActiveChancePercent": 5,
//             "faceShieldIsActiveChancePercent": 85,
//             "lightLaserIsActiveChancePercent": 75,
//             "randomisation": [],
//             "blacklist": [],
//             "weightingAdjustments": [],
//             "whitelist": [{
//                 "levelRange": 
//             {
//                 "min": 1,
//                 "max": 32
//             },
//                 "equipment": 
//             {
//                 "FirstPrimaryWeapon": [...primaryWeaponArrayScav],
//                 "Holster": [...holsterArrayScav],
//                 "Backpack": [...backpackArrayScav],
//                 "TacticalVest": [...tacticalVestArrayScav],
//                 "Earpiece": [...earpieceArrayScav],
//                 "Headwear": [...headwearArrayScav],
//                 "ArmorVest": [...armorVestArrayScav],
//                 "Eyewear": [...eyewearArrayScav],
//                 "FaceCover": [...faceCoverArrayScav]
//             },
//                 "cartridge": 
//             {
//                 "Caliber762x54R": [...ammo762x54ArrayScav],
//                 "Caliber762x51": [...ammo762x51ArrayScav],
//                 "Caliber762x39": [...ammo762x39ArrayScav],
//                 "Caliber762x25TT": [...ammo762x25TTArrayScav],
//                 "Caliber366TKM": [...ammo366TKMArrayScav],
//                 "Caliber556x45NATO": [...ammo556x45ArrayScav],
//                 "Caliber545x39": [...ammo545x39ArrayScav],
//                 "Caliber1143x23ACP": [...ammo1143x23ACPArrayScav],
//                 "Caliber9x39": [...ammo9x39ArrayScav],
//                 "Caliber9x19PARA": [...ammo9x19ArrayScav],
//                 "Caliber9x18PM": [...ammo9x18ArrayScav],   
//                 "Caliber12g": [...ammo12x70ArrayScav],
//                 "Caliber20g": [...ammo20x70ArrayScav]
//             }
//             }],
//             "clothing": []
//         }

//         const progressionWhitelistScav2: EquipmentFilterDetails =
//         {
//             "levelRange": 
//             {
//                 "min": 33,
//                 "max": 70
//             },
//             "equipment": 
//             {
//                 "FirstPrimaryWeapon": [...primaryWeaponArrayScav],
//                 "Holster": [...holsterArrayScav],
//                 "Backpack": [...backpackArrayScav],
//                 "TacticalVest": [...tacticalVestArrayScav],
//                 "Earpiece": [...earpieceArrayScav],
//                 "Headwear": [...headwearArrayScav],
//                 "ArmorVest": [...armorVestArrayScav],
//                 "Eyewear": [...eyewearArrayScav],
//                 "FaceCover": [...faceCoverArrayScav]
//             },
//             "cartridge": 
//             {
//                 "Caliber762x54R": [...ammo762x54ArrayScav2],
//                 "Caliber762x51": [...ammo762x51ArrayScav2],
//                 "Caliber762x39": [...ammo762x39ArrayScav2],
//                 "Caliber762x25TT": [...ammo762x25TTArrayScav2],
//                 "Caliber366TKM": [...ammo366TKMArrayScav2],
//                 "Caliber556x45NATO": [...ammo556x45ArrayScav2],
//                 "Caliber545x39": [...ammo545x39ArrayScav2],
//                 "Caliber1143x23ACP": [...ammo1143x23ACPArrayScav2],
//                 "Caliber9x39": [...ammo9x39ArrayScav2],
//                 "Caliber9x19PARA": [...ammo9x19ArrayScav2],
//                 "Caliber9x18PM": [...ammo9x18ArrayScav2],   
//                 "Caliber12g": [...ammo12x70ArrayScav2],
//                 "Caliber20g": [...ammo20x70ArrayScav2]
//             }    
//         }

//         // Scav Gear Weighting Changes
//         const scavEquipment = this.databaseServer.bots.types.assault.inventory.equipment;
//         const scavChances = this.databaseServer.bots.types.assault.chances;
//         const scavAmmo = this.databaseServer.bots.types.assault.inventory.Ammo;

//         // Scav Primary Weapon Weighting && Chance Edits
//         scavChances.mods.mod_foregrip = 15;
//         scavEquipment.FirstPrimaryWeapon= {
//             "56dee2bdd2720bc8328b4567": 23,
//             "54491c4f4bdc2db1078b4568": 25,
//             "576165642459773c7a400233": 23,
//             "5a38e6bac4a2826c6e06d79b": 23,
//             "57f4c844245977379d5c14d1": 25,
//             "57d14d2524597714373db789": 25,
//             "59f9cabd86f7743a10721f46": 23,
//             "5ea03f7400685063ec28bfa8": 23,
//             "60339954d62c9b14ed777c06": 23,
//             "5c07c60e0db834002330051f": 25,
//             "5ac66d9b5acfc4001633997a": 23,
//             "5bf3e03b0db834001d2c4a9c": 23,
//             "5ac4cd105acfc40016339859": 23,
//             "5644bd2b4bdc2d3b4c8b4572": 23,
//             "5bf3e0490db83400196199af": 23,
//             "59d6088586f774275f37482f": 23,
//             "5a0ec13bfcdbcb00165aa685": 23,
//             "59ff346386f77477562ff5e2": 23,
//             "57dc2fa62459775949412633": 25,
//             "5839a40f24597726f856b511": 25,
//             "583990e32459771419544dd2": 25,
//             "5b0bbe4e5acfc40dc528a72d": 5,
//             "59e6687d86f77411d949b251": 41,
//             "59e6152586f77473dc057aa1": 41,
//             "587e02ff24597743df3deaeb": 11,
//             "574d967124597745970e7c94": 27,
//             "5c501a4d2e221602b412b540": 5,
//             "57838ad32459774a17445cd2": 5,
//             "5c46fbd72e2216398b5a8c9c": 5,
//             "5ae08f0a5acfc408fb1398a1": 23,
//             "5bfea6e90db834001b7347f3": 5,
//             "55801eed4bdc2d89578b4588": 5,
//             "5de652c31b7e3716273428be": 23,
//             "5f2a9575926fd9352339381f": 7,
//             "5aafa857e5b5b00018480968": 7
//         }

//         // Scav Holster (Secondary Weapon) Weighting
//         scavChances.equipment.Holster = 12;
//         scavEquipment.Holster = {
//             "576a581d2459771e7b1bc4f1": 25,
//             "56d59856d2720bd8418b456a": 17,
//             "56e0598dd2720bb5668b45a6": 12,
//             "5a17f98cfcdbcb0980087290": 17,
//             "579204f224597773d619e051": 27,
//             "5448bd6b4bdc2dfc2f8b4569": 31,
//             "571a12c42459771f627b58a0": 31,
//             "5cadc190ae921500103bb3b6": 17,
//             "5e81c3cbac2bb513793cdc75": 12
//         }


//         // Scav Backpack Weighting && Chance Edit
//         scavChances.equipment.Backpack = 55;
//         scavEquipment.Backpack = {
//             "59e763f286f7742ee57895da": 11,
//             "56e335e4d2720b6c058b456d": 16,
//             "544a5cde4bdc2d39388b456b": 25,
//             "5f5e45cc5021ce62144be7aa": 29,
//             "56e33634d2720bd8058b456b": 29,
//             "56e33680d2720be2748b4576": 30,
//             "5ab8ee7786f7742d8f33f0b9": 30,
//             "5ab8f04f86f774585f4237d8": 30,
//             "628e1ffc83ec92260c0f437f": 6,
//             "5df8a4d786f77412672a1e3b": 2
//         }

//         // Scav Tac Vest Weighting
//         scavEquipment.TacticalVest = {
//             "5d5d646386f7742797261fd9": 14,
//             "5c0e446786f7742013381639": 14,
//             "5e4abc1f86f774069619fbaa": 20,
//             "572b7adb24597762ae139821": 20,
//             "5fd4c5477a8d854fa0105061": 20,
//             "5fd4c4fa16cac650092f6771": 20,
//             "5648a69d4bdc2ded0b8b457b": 6,
//             "5e4abfed86f77406a2713cf7": 20,
//             "59e7643b86f7742cbf2c109a": 20,
//             "5929a2a086f7744f4b234d43": 20,
//             "5ab8dab586f77441cd04f2a2": 8,
//             "5ca20abf86f77418567a43f2": 10,
//             "5c0e6a1586f77404597b4965": 8
//         }

//         // Scav Headset/Earpiece Weighting && Chance Edit
//         scavChances.equipment.Earpiece = 30;
//         scavEquipment.Earpiece = {
//             "5c165d832e2216398b5a7e36": 32,
//             "5b432b965acfc47a8774094e": 34,
//             "6033fa48ffd42c541047f728": 34
//         }

//         // Scav Headwear/Helmet Weighting
//         scavChances.mods.mod_nvg = 10;
//         scavEquipment.Headwear = {
//             "5ea05cf85ad9772e6624305d": 16,
//             "5df8a58286f77412631087ed": 16,
//             "5c0d2727d174af02a012cf58": 16,
//             "5c08f87c0db8340019124324": 16,
//             "59e7711e86f7746cae05fbe1": 16,
//             "5a7c4850e899ef00150be885": 16,
//             "5aa7cfc0e5b5b00015693143": 16,
//             "5aa7d03ae5b5b00016327db5": 16,
//             "5c06c6a80db834001b735491": 16,
//             "5c066ef40db834001966a595": 16,
//             "5aa2b9ede5b5b000137b758b": 16,
//             "59e7708286f7742cbd762753": 16,
//             "572b7fa124597762b472f9d2": 16,
//             "5bd073c986f7747f627e796c": 16,
//             "59e770f986f7742cbe3164ef": 16,
//             "572b7d8524597762b472f9d1": 16,
//             "5a43943586f77416ad2f06e2": 16,
//             "5a43957686f7742a2c2f11b0": 16,
//             "5aa2b8d7e5b5b00014028f4a": 16,
//             "5aa2ba19e5b5b00014028f4e": 16,
//             "5aa2a7e8e5b5b00016327c16": 16,
//             "5aa2b87de5b5b00016327c25": 16,
//             "5aa2b89be5b5b0001569311f": 16,
//             "5b4329075acfc400153b78ff": 16,
//             "5ab8f20c86f7745cdb629fb2": 16
//         }

//         // Scav Armor Vest Weighting
//         scavEquipment.ArmorVest = {
//             "5ab8e79e86f7742d8b372e78": 3,
//             "5e9dacf986f774054d6b89f4": 3,
//             "5c0e53c886f7747fa54205c7": 16,
//             "5c0e51be86f774598e797894": 16,
//             "5ab8e4ed86f7742d8e50c7fa": 22,
//             "5c0e5edb86f77461f55ed1f7": 22,
//             "5b44d22286f774172b0c9de8": 22,
//             "5c0e5bab86f77461f55ed1f3": 22,
//             "59e7635f86f7742cbf2c1095": 22,
//             "5df8a2ca86f7740bfe6df777": 22,
//             "5648a7494bdc2d9d488b4583": 22,
//             "62a09d79de7ac81993580530": 8
//         }
        
//         // Scav Eyewear Weighting
//         scavEquipment.Eyewear = {
//             "557ff21e4bdc2d89578b4586": 22,
//             "59e770b986f7742cbd762754": 23,
//             "5b432be65acfc433000ed01f": 23,
//             "5aa2b923e5b5b000137b7589": 9,
//             "5aa2b986e5b5b00014028f4c": 23,
//             "5aa2b9aee5b5b00015693121": 14,
//             "603409c80ca681766b6a0fb2": 7
//         }

//         // Scav Facecover Weighting
//         scavEquipment.FaceCover = {
//             "5b432b2f5acfc4771e1c6622": 21,
//             "5e54f79686f7744022011103": 15,
//             "5b432c305acfc40019478128": 21,
//             "5b432b6c5acfc4001a599bf0": 21,
//             "59e7715586f7742ee5789605": 24,
//             "5bd06f5d86f77427101ad47c": 21,
//             "5bd0716d86f774171822ef4b": 21,
//             "5bd071d786f7747e707b93a3": 21,
//             "572b7f1624597762ae139822": 21,
//             "5ab8f39486f7745cd93a1cca": 21,
//             "5ab8f4ff86f77431c60d91ba": 21,
//             "5b432f3d5acfc4704b4a1dfb": 25,
//             "572b7fa524597762b747ce82": 30,
//             "5b4326435acfc433000ed01d": 30,
//             "5bd073a586f7747e6f135799": 20,
//             "5e54f76986f7740366043752": 15,
//             "5c1a1e3f2e221602b66cc4c2": 20
//         }

//         // Scav Ammo Weighting

//         // 762x54R Weighting
//         scavAmmo.Caliber762x54R = {
//             "5887431f2459777e1612938f": 45,
//             "5e023cf8186a883be655e54f": 45,
//             "59e77a2386f7742ee578960a": 60,
//             "560d61e84bdc2da74d8b4571": 50
//         }

//         // 762x51 Weighting
//         scavAmmo.Caliber762x51 = {
//             "5e023e6e34d52a55c3304f71": 25,
//             "5e023e53d4353e3302577c4c": 25,
//             "58dd3ad986f77403051cba8f": 100,
//             "5a608bf24f39f98ffc77720e": 100,
//             "5a6086ea4f39f99cd479502f": 50
//         }

//         // 762x39 Weighting
//         scavAmmo.Caliber762x39 = {
//             "5656d7c34bdc2d9d198b4587": 30,
//             "59e4cf5286f7741778269d8a": 30,
//             "59e4d24686f7741776641ac7": 30,
//             "59e0d99486f7744a32234762": 10
//         }

//         // 762x25 Weighting
//         scavAmmo.Caliber762x25TT = {
//             "5735fdcd2459776445391d61": 7,
//             "5735ff5c245977640e39ba7e": 20,
//             "573601b42459776410737435": 20,
//             "573602322459776445391df1": 20,
//             "5736026a245977644601dc61": 7,
//             "573603c924597764442bd9cb": 6,
//             "573603562459776430731618": 20
//         }

//         // 366TKM Weighting
//         scavAmmo.Caliber366TKM = {
//             "59e6542b86f77411dc52a77a": 30,
//             "59e655cb86f77411dc52a77b": 80,
//             "59e6658b86f77411d949b250": 10,
//             "5f0596629e22f464da6bbdd9": 80
//         }

//         // 5.56x45 Weighting
//         scavAmmo.Caliber556x45NATO = {
//             "59e6920f86f77411d82aa167": 20,
//             "54527a984bdc2d4e668b4567": 40,
//             "59e68f6f86f7746c9f75e846": 40,
//             "59e6906286f7746c9f75e847": 40,
//             "59e690b686f7746c9f75e848": 40
//         }

//         // 5.45x39 Weighting
//         scavAmmo.Caliber545x39 = {
//             "56dff4a2d2720bbd668b456a": 15,
//             "56dff3afd2720bba668b4567": 15,
//             "56dff2ced2720bb4668b4567": 15,
//             "56dff4ecd2720b5f5a8b4568": 15,
//             "56dfef82d2720bbd668b4567": 20,
//             "56dff061d2720bb5668b4567": 25,
//             "56dff026d2720bb8668b4567": 25,
//             "5c0d5e4486f77478390952fe": 25
//         }

//         // 9x18 Weighting
//         scavAmmo.Caliber9x18PM = { 
//             "573719762459775a626ccbc1": 20,
//             "57371e4124597760ff7b25f1": 30,
//             "5737207f24597760ff7b25f2": 50,
//             "573718ba2459775a75491131": 30,
//             "573719df2459775a626ccbc2": 80,
//             "57371aab2459775a77142f22": 60,
//             "57372140245977611f70ee91": 70
//         }

//         // 9x19 Weighting
//         scavAmmo.Caliber9x19PARA = {
//             "5c3df7d588a4501f290594e5": 30,
//             "56d59d3ad2720bdb418b4577": 30,
//             "5c925fa22e221601da359b7b": 80,
//             "5efb0e16aeb21837e749c7ff": 80,
//             "5efb0da7a29a85116f6ea05f": 80
//         }

//         // 9x39 Weighting
//         scavAmmo.Caliber9x39 = {
//             "57a0dfb82459774d3078b56c": 60,
//             "57a0e5022459774d1673f889": 80,
//             "5c0d688c86f77413ae3407b2": 80,
//             "5c0d668f86f7747ccb7f13b2": 40
//         }

//         // 1143x23 ACP Weighting
//         scavAmmo.Caliber1143x23ACP = {
//             "5e81f423763d9f754677bf2e": 60,
//             "5efb0d4f4bc50b58e81710f3": 60,
//             "5efb0cabfb3e451d70735af5": 100,
//             "5efb0fc6aeb21837e749c801": 100
//         }

//         // 12 Gauge Weighting
//         scavAmmo.Caliber12g = {
//             "560d5e524bdc2d25448b4571": 60,
//             "5d6e6772a4b936088465b17c": 60,
//             "5d6e67fba4b9361bc73bc779": 60,
//             "58820d1224597753c90aeb13": 60,
//             "5d6e6869a4b9361c140bcfde": 100,
//             "5d6e6891a4b9361bd473feea": 100,
//             "5d6e6806a4b936088465b17e": 100,
//             "5d6e689ca4b9361bc8618956": 100,
//             "5d6e68e6a4b9361c140bcfe0": 100,
//             "5d6e68b3a4b9361bca7e50b5": 100,
//             "5d6e68dea4b9361bcc29e659": 100,
//             "5d6e68a8a4b9360b6c0d54e2": 100,
//             "5d6e6911a4b9361bd5780d52": 100,
//             "5d6e68c4a4b9361b93413f79": 100,
//             "5c0d591486f7744c505b416f": 100
//         }

//         // 20 Gauge Weighting
//         scavAmmo.Caliber20g = {
//             "5a38ebd9c4a282000d722a5b": 60,
//             "5d6e695fa4b936359b35d852": 60,
//             "5d6e6a42a4b9364f07165f52": 100,
//             "5d6e6a53a4b9361bd473feec": 100,
//             "5d6e69b9a4b9361bc8618958": 60,
//             "5d6e69c7a4b9360b6c0d54e4": 60,
//             "5d6e6a05a4b93618084f58d0": 100,
//             "5d6e6a5fa4b93614ec501745": 100
//         }

//         this.botConfig.equipment.assault = progressionWhitelistScav1;
//         this.botConfig.equipment.assault.whitelist.push(progressionWhitelistScav2);
//     }
// }
