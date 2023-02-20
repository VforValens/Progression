/* eslint-disable @typescript-eslint/naming-convention */
import { EquipmentFilterDetails, EquipmentFilters, IBotConfig } from "@spt-aki/models/spt/config/IBotConfig";
import { ILocationConfig } from "@spt-aki/models/spt/config/ILocationConfig";
import { IDatabaseTables } from "@spt-aki/models/spt/server/IDatabaseTables";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";

export class PMCs
{
    private botConfig: IBotConfig;
    private databaseServer: IDatabaseTables;
    private locationConfig: ILocationConfig;


    constructor (locationConfig: ILocationConfig, botConfig: IBotConfig, databaseServer: DatabaseServer)
    {
        this.botConfig = botConfig;
        this.locationConfig = locationConfig;
        this.databaseServer = databaseServer.getTables();
    }


    public updatePmcs(): void
    {
        this.generatePmcs();
    }

    private generatePmcs()
    {
        // Gear Arrays
        // Primary Weapon Array
        const primaryWeaponArrayLL1 = ["5926bb2186f7744b1c6c6e60", "574d967124597745970e7c94", "57dc2fa62459775949412633", "57f3c6bd24597738e730fa2f", "5839a40f24597726f856b511", "57d14d2524597714373db789", "57f4c844245977379d5c14d1", "59984ab886f7743e98271174", "5ea03f7400685063ec28bfa8", "5a7828548dc32e5a9c28b516", "5bfd297f0db834001a669119", "59d6088586f774275f37482f", "583990e32459771419544dd2", "59e6152586f77473dc057aa1", "5c07c60e0db834002330051f", "5a38e6bac4a2826c6e06d79b", "56dee2bdd2720bc8328b4567", "5447a9cd4bdc2dbd208b4567", "5d2f0d8048f0356c925bc3b0", "5d2f0d8048f0356c925bc3b0", "5fc3e272f8b6a877a729eac5", "58948c8e86f77409493f7266", "59e6687d86f77411d949b251", "54491c4f4bdc2db1078b4568", "5ba26383d4351e00334c93d9", "587e02ff24597743df3deaeb", "5c501a4d2e221602b412b540", "60db29ce99594040e04c4a27", "5580223e4bdc2d1c128b457f", "61f7c9e189e6fb1a5e3ea78d", "5e870397991fd70db46995c8", "5de652c31b7e3716273428be"];
        const primaryWeaponArrayLL2 = primaryWeaponArrayLL1.concat(...["5644bd2b4bdc2d3b4c8b4572", "59ff346386f77477562ff5e2", "5ab8e9fcd8ce870019439434", "5ac4cd105acfc40016339859", "5bf3e03b0db834001d2c4a9c", "55801eed4bdc2d89578b4588", "5fbcc1d9016cce60e8341ab3", "628b5638ad252a16da6dd245", "628b9c37a733087d0d7fe84b", "5f2a9575926fd9352339381f", "60339954d62c9b14ed777c06", "62e7c4fba689e8c9c50dfc38", "623063e994fc3f7b302a9696", "5cc82d76e24e8d00134b4b83", "5aafa857e5b5b00018480968", "5bfea6e90db834001b7347f3", "576165642459773c7a400233", "618428466ef05c2ce828f218"]);
        const primaryWeaponArrayLL3 = primaryWeaponArrayLL2.concat(...["5ac66d725acfc43b321d4b60", "5ac4cd105acfc40016339859", "5ac66d2e5acfc43b321d4b53", "5ac66d9b5acfc4001633997a", "5beed0f50db834001c062b12", "57838ad32459774a17445cd2", "5c46fbd72e2216398b5a8c9c", "5e848cc2988a8701445df1e8", "62e14904c2699c0ec93adc47", "588892092459774ac91d4b11", "5c488a752e221602b412af63", "5b0bbe4e5acfc40dc528a72d", "6184055050224f204c1da540", "63171672192e68c5460cebc5", "5a367e5dc4a282000e49738f", "5df8ce05b11454561e39243b", "6176aca650224f204c1da3fb", "5ac66cb05acfc40198510a10", "5d43021ca4b9362eab4b5e25", "5fc3f2d5900b1d5091531e57", "5fb64bc92b1b027b1f50bcf2", "5df24cf80dee1b22f862e9bc"]);
       
        
        // Holster Array
        const holsterArrayLL1 = ["624c2e8614da335f1e034d8c", "5448bd6b4bdc2dfc2f8b4569", "56e0598dd2720bb5668b45a6", "571a12c42459771f627b58a0", "576a581d2459771e7b1bc4f1", "602a9740da11d6478d5a06dc", "5a17f98cfcdbcb0980087290", "5e81c3cbac2bb513793cdc75", "5cadc190ae921500103bb3b6", "56d59856d2720bd8418b456a", "5a7ae0c351dfba0017554310"];
        const holsterArrayLL2 = holsterArrayLL1.concat(...["59f98b4986f7746f546d2cef", "5abccb7dd8ce87001773e277", "63088377b5cd696784087147", "5d3eb3b0a4b93615055e84d2", "6193a720f8ee7e52e42109ed", "61a4c8884f95bc3b2c5dc96f"]);
        const holsterArrayLL3 = holsterArrayLL2.concat(...["633ec7c2a6918cb895019c6c"]);
        
        
        // Backpack Array
        const backpackArrayLL1 = [ "60a2828e8689911a226117f9", "5ab8ee7786f7742d8f33f0b9", "544a5cde4bdc2d39388b456b", "5e9dcf5986f7746c417435b3", "56e33680d2720be2748b4576", "5ab8f04f86f774585f4237d8", "5ca20d5986f774331e7c9602"];
        const backpackArrayLL2 = backpackArrayLL1.concat(...["5d5d940f86f7742797262046", "6038d614d10cbf667352dd44", "618bb76513f5097c8d5aa2d5"]);
        const backpackArrayLL3 = backpackArrayLL2.concat(...["5c0e774286f77468413cc5b2", "639346cc1c8f182ad90c8972", "619cf0335771dd3c390269ae", "545cdae64bdc2d39198b4568", "5ab8ebf186f7742d8b372e80", "5f5e467b0bc58666c37e7821", "5f5e46b96bdad616ad46d613", "618cfae774bb2d036a049e7c", "62a1b7fbc30cfa1d366af586", "5df8a4d786f77412672a1e3b"]);
        
        
        // Tacvest Array
        const tacticalVestArrayLL1 = ["5c0e446786f7742013381639", "5c0e446786f7742013381639", "5929a2a086f7744f4b234d43", "59e7643b86f7742cbf2c109a", "5e4abc1f86f774069619fbaa", "6034d0230ca681766b6a0fb5", "6034cf5fffd42c541047f72e", "572b7adb24597762ae139821"];
        const tacticalVestArrayLL2 = tacticalVestArrayLL1.concat(...["544a5caa4bdc2d1a388b4568", "5d5d646386f7742797261fd9", "61bc85697113f767765c7fe7", "5d5d8ca986f7742798716522", "5d5d85c586f774279a21cbdb", "592c2d1a86f7746dbe2af32a", "5fd4c60f875c30179f5d04c2", "5ca20abf86f77418567a43f2", "5b44c8ea86f7742d1627baf1", "603648ff5a45383c122086ac", "60a6220e953894617404b00a", "5e4abfed86f77406a2713cf7"]);
        const tacticalVestArrayLL3 = tacticalVestArrayLL2.concat(...["60a3c70cde5f453f634816a3", "639343fce101f4caa40a4ef3", "5648a69d4bdc2ded0b8b457b", "5ab8dced86f774646209ec87", "5ab8dced86f774646209ec87", "5c0e722886f7740458316a57", "5d5d87f786f77427997cfaef", "628dc750b910320f4c27a732", "61bcc89aef0f505f0c6cd0fc", "628d0618d1ba6e4fa07ce5a4", "5df8a42886f77412640e2e75"]);
        
        
        // Earpiece Array
        const earpieceArrayLL1 = ["5b432b965acfc47a8774094e", "6033fa48ffd42c541047f728"];
        const earpieceArrayLL2 = earpieceArrayLL1.concat(...["5645bcc04bdc2d363b8b4572", "5aa2ba71e5b5b000137b758f"]);
        const earpieceArrayLL3 = earpieceArrayLL2.concat(...["5f60cd6cf2bcbb675b00dac6", "628e4e576d783146b124c64d", "5a16b9fffcdbcb0176308b34"]);
       
        
        // Headwear Array
        const headwearArrayLL1 = ["5a7c4850e899ef00150be885", "5aa7d193e5b5b000171d063f", "5c06c6a80db834001b735491", "5645bc214bdc2d363b8b4571", "59e7711e86f7746cae05fbe1"];
        const headwearArrayLL2 = headwearArrayLL1.concat(...["5aa7d03ae5b5b00016327db5", "5d5e7d28a4b936645d161203", "5b432d215acfc4771e1c6624", "5aa7e454e5b5b0214e506fa2"]);
        const headwearArrayLL3 = headwearArrayLL2.concat(...["5e00c1ad86f774747333222c", "5ac8d6885acfc400180ae7b0", "5b40e3f35acfc40016388218", "5b40e4035acfc47a87740943", "5b4329f05acfc47a86086aa1", "5c091a4e0db834001d5addc8", "5d6d3716a4b9361bc8618872"]);
        
       
        // Armor Vest Array
        const armorVestArrayLL1 = ["5c0e5bab86f77461f55ed1f3", "5c0e5edb86f77461f55ed1f7", "5648a7494bdc2d9d488b4583", "5ab8e4ed86f7742d8e50c7fa", "5df8a2ca86f7740bfe6df777"];
        const armorVestArrayLL2 = armorVestArrayLL1.concat(...["5c0e655586f774045612eeb2", "5b44d22286f774172b0c9de8", "5c0e51be86f774598e797894"])
        const armorVestArrayLL3 = armorVestArrayLL2.concat(...["5e4abb5086f77406975c9342", "5ca21c6986f77479963115a7", "5e9dacf986f774054d6b89f4", "63737f448b28897f2802b874", "5f5f41476bdad616ad46d631", "545cdb794bdc2d3a198b456a", "5ab8e79e86f7742d8b372e78", "5b44d0de86f774503d30cba8", "5ca2151486f774244a3b8d30", "609e8540d5c319764c2bc2e9", "5c0e57ba86f7747fa141986d",  "5c0e53c886f7747fa54205c7"]);
       
        
        // Eyewear Array
        const eyewearArrayLL1 = ["5b432be65acfc433000ed01f", "5aa2b986e5b5b00014028f4c", "557ff21e4bdc2d89578b4586"];
        const eyewearArrayLL2 = eyewearArrayLL1.concat(...["5d5fca1ea4b93635fd598c07"]);
        const eyewearArrayLL3 = eyewearArrayLL2.concat(...["603409c80ca681766b6a0fb2", "5d6d2e22a4b9361bd5780d05", "5c0d32fcd174af02a1659c75"]);
       
        
        // Armband Array
        const armBandArrayLL1 = ["5b3f16c486f7747c327f55f7", "5b3f3ade86f7746b6b790d8e", "5b3f3af486f774679e752c1f", "5b3f3b0186f774021a2afef7", "5b3f3b0e86f7746752107cda"];
        const armBandArrayLL2 = armBandArrayLL1;
        const armBandArrayLL3 = armBandArrayLL2.concat(...["619bdef8c9546643a67df6f6", "619bddc6c9546643a67df6ee", "619bdf9cc9546643a67df6f8", "619bc61e86e01e16f839a999", "619bdfd4c9546643a67df6fa", "619bdd8886e01e16f839a99c", "60b0f988c4449e4cb624c1da", "5f9949d869e2777a0e779ba5"]);

        // Face Cover Array
        const faceCoverArrayLL1 = ["572b7f1624597762ae139822"];
        const faceCoverArrayLL2 = faceCoverArrayLL1.concat(...["5ab8f39486f7745cd93a1cca", "5b4325355acfc40019478126"]);
        const faceCoverArrayLL3 = faceCoverArrayLL2.concat(...["5ab8f85d86f7745cd93a1cf5", "5b432f3d5acfc4704b4a1dfb"]);
    
        

        ///////////////////////////////////////////////////////////////////////////

        
        
        // Ammo Arrays
        // 12.7x55mm Ammo Arrays
        const ammo127x55ArrayLL3 = ["5cadf6e5ae921500113bb973", "5cadf6eeae921500134b2799"];


        // 7.62x54R Ammo Arrays
        const ammo762x54ArrayLL1 = ["5887431f2459777e1612938f"];
        const ammo762x54ArrayLL2 = ammo762x54ArrayLL1.concat(...["5e023cf8186a883be655e54f"]);
        const ammo762x54ArrayLL3 = ammo762x54ArrayLL2.concat(...["59e77a2386f7742ee578960a", "560d61e84bdc2da74d8b4571"]);
        

        // 7.62x51mm Ammo Arrays
        const ammo762x51ArrayLL1 = ["5e023e6e34d52a55c3304f71"];
        const ammo762x51ArrayLL2 = ammo762x51ArrayLL1.concat(...["5e023e53d4353e3302577c4c"]);
        const ammo762x51ArrayLL3 = ammo762x51ArrayLL2.concat(...["5a6086ea4f39f99cd479502f"]);
        

        // 7.62x39mm Ammo Arrays
        const ammo762x39ArrayLL1 = ["59e4d3d286f774176a36250a"];
        const ammo762x39ArrayLL2 = ammo762x39ArrayLL1.concat(...["5656d7c34bdc2d9d198b4587", "59e4cf5286f7741778269d8a"]);
        const ammo762x39ArrayLL3 = ammo762x39ArrayLL2.concat(...["59e4d24686f7741776641ac7", "59e0d99486f7744a32234762"]);
        

        // 7.62x35mm or .300BLKOUT Ammo Arrays
        const ammo762x35ArrayLL2 = ["5fbe3ffdf8b6a877a729ea82"];
        const ammo762x35ArrayLL3 = ammo762x35ArrayLL2.concat(...["6196365d58ef8c428c287da1", "619636be6db0f2477964e710", "5fd20ff893a8961fc660a954"]);


        // 7.62x25mm TT Ammo Arrays
        const ammo762x25TTArrayLL1 = ["5735fdcd2459776445391d61", "5735ff5c245977640e39ba7e", "573601b42459776410737435", "573602322459776445391df1"];
        const ammo762x25TTArrayLL2 = ammo762x25TTArrayLL1.concat(...["5736026a245977644601dc61", "573603c924597764442bd9cb"]);
        const ammo762x25TTArrayLL3 = ammo762x25TTArrayLL2.concat(...["573603562459776430731618"]);
       

        // 366 TKM Ammo Arrays.
        const ammo366TKMArrayLL1 = ["59e6542b86f77411dc52a77a", "59e655cb86f77411dc52a77b"];
        const ammo366TKMArrayLL2 = ammo366TKMArrayLL1.concat(...["59e6658b86f77411d949b250"]);
        const ammo366TKMArrayLL3 = ammo366TKMArrayLL2.concat(...["5f0596629e22f464da6bbdd9"]);


        // 5.56 Ammo Arrays
        const ammo556x45ArrayLL1 = ["59e6920f86f77411d82aa167", "59e6918f86f7746c9f75e849"];
        const ammo556x45ArrayLL2 = ammo556x45ArrayLL1.concat(...["54527a984bdc2d4e668b4567", "59e68f6f86f7746c9f75e846"]);
        const ammo556x45ArrayLL3 = ammo556x45ArrayLL2.concat(...["60194943740c5d77f6705eea", "59e690b686f7746c9f75e848"]);
        

        // 5.45 Ammo Arrays
        const ammo545x39ArrayLL1 = ["56dff338d2720bbd668b4569", "56dff4a2d2720bbd668b456a", "56dff0bed2720bb0668b4567", "56dff216d2720bbd668b4568"];
        const ammo545x39ArrayLL2 = ammo545x39ArrayLL1.concat(...["56dff2ced2720bb4668b4567", "56dff4ecd2720b5f5a8b4568", "56dff421d2720b5f5a8b4567"]);
        const ammo545x39ArrayLL3 = ammo545x39ArrayLL2.concat(...["56dfef82d2720bbd668b4567", "56dff061d2720bb5668b4567", "56dff026d2720bb8668b4567", "5c0d5e4486f77478390952fe"]);
        

        // 5.7mm Ammo Arrays
        const ammo57x28ArrayLL2 = ["5cc80f79e4a949033c7343b2", "5cc80f8fe4a949033b0224a2"];
        const ammo57x28ArrayLL3 = ammo57x28ArrayLL2.concat(...["5cc80f53e4a949000e1ea4f8", "5cc86840d7f00c002412c56c", "5cc80f38e4a949001152b560"]);


        // 4.6mm Ammo Arrays
        const ammo46x30ArrayLL1 = ["5ba26812d4351e003201fef1"];
        const ammo46x30ArrayLL2 = ammo46x30ArrayLL1;
        const ammo46x30ArrayLL3 = ammo46x30ArrayLL2.concat(...["5ba2678ad4351e44f824b344", "5ba26844d4351e00334c9475", "5ba26835d4351e0035628ff5"]);


        // 9x18mm Ammo Arrays
        const ammo9x18ArrayLL1 = ["573719762459775a626ccbc1", "57371b192459775a9f58a5e0", "57371e4124597760ff7b25f1", "57371eb62459776125652ac1", "57371f2b24597761224311f1", "57371f8d24597761006c6a81", "5737201124597760fc4431f1", "5737207f24597760ff7b25f2"];
        const ammo9x18ArrayLL2 = [...ammo9x18ArrayLL1, ...["573718ba2459775a75491131", "57371aab2459775a77142f22", "573720e02459776143012541", "5737218f245977612125ba51", "573719df2459775a626ccbc2"]];
        const ammo9x18ArrayLL3 = [...ammo9x18ArrayLL1, ...ammo9x18ArrayLL2];
      

        // 9x19mm Ammo Arrays
        const ammo9x19ArrayLL1 = ["58864a4f2459770fcc257101", "5c3df7d588a4501f290594e5"];
        const ammo9x19ArrayLL2 = ammo9x19ArrayLL1.concat(...["56d59d3ad2720bdb418b4577"]);
        const ammo9x19ArrayLL3 = ammo9x19ArrayLL2.concat(...["5c925fa22e221601da359b7b", "5efb0e16aeb21837e749c7ff", "5efb0da7a29a85116f6ea05f"]);


        // 9x21mm Ammo Arrays
        const ammo9x21ArrayLL2 = ["5a26abfac4a28232980eabff"];
        const ammo9x21ArrayLL3 = ammo9x21ArrayLL2.concat(...["5a26ac06c4a282000c5a90a8", "5a26ac0ec4a28200741e1e18"]);
     
        
        // 9x39mm Ammo Arrays
        const ammo9x39ArrayLL2 = ["57a0dfb82459774d3078b56c"];
        const ammo9x39ArrayLL3 = ammo9x39ArrayLL2.concat(...["57a0e5022459774d1673f889"]);


        // 9x33 Revolver Ammo Arrays
        const ammo9x33RArrayLL2 = ["62330b3ed4dc74626d570b95", "62330bfadc5883093563729b", "62330c40bdd19b369e1e53d1"];
        const ammo9x33RArrayLL3 = ammo9x33RArrayLL2.concat(...["62330c18744e5e31df12f516"]);


        // .45 ACP Ammo Arrays
        const ammo1143x23ACPArrayLL1 = ["5e81f423763d9f754677bf2e"];
        const ammo1143x23ACPArrayLL2 = ammo1143x23ACPArrayLL1.concat(...["5efb0d4f4bc50b58e81710f3", "5efb0fc6aeb21837e749c801"]);
        const ammo1143x23ACPArrayLL3 = ammo1143x23ACPArrayLL2.concat(...["5efb0cabfb3e451d70735af5"]);


        // 12 Gauge Ammo Arrays
        const ammo12x70ArrayLL1 = ["560d5e524bdc2d25448b4571", "58820d1224597753c90aeb13", "5d6e67fba4b9361bc73bc779", "5d6e6869a4b9361c140bcfde", "5d6e6891a4b9361bd473feea"];
        const ammo12x70ArrayLL2 = ammo12x70ArrayLL1.concat(...["5d6e6806a4b936088465b17e", "5d6e689ca4b9361bc8618956", "5d6e68e6a4b9361c140bcfe0"]);
        const ammo12x70ArrayLL3 = ammo12x70ArrayLL2.concat(...["5d6e68b3a4b9361bca7e50b5", "5d6e68dea4b9361bcc29e659", "5d6e6911a4b9361bd5780d52", "5d6e68c4a4b9361b93413f79"]);


        // 20 Gauge Ammo Arrays
        const ammo20x70ArrayLL1 = ["5a38ebd9c4a282000d722a5b", "5d6e6772a4b936088465b17c", "5d6e695fa4b936359b35d852", "5d6e6a42a4b9364f07165f52", "5d6e6a53a4b9361bd473feec"];
        const ammo20x70ArrayLL2 = ammo20x70ArrayLL1.concat(...["5d6e69b9a4b9361bc8618958", "5d6e69c7a4b9360b6c0d54e4"]);
        const ammo20x70ArrayLL3 = ammo20x70ArrayLL2.concat(...["5d6e6a05a4b93618084f58d0", "5d6e6a5fa4b93614ec501745"]);

        
        // 23x75mm KS-23 Ammo Arrays
        const ammo23x75ArrayLL3 = ["5e85a9a6eacf8c039e4e2ac1", "5f647f31b6238e5dd066e196"];




        
        // PMC Weighting Start
        const pmcEquipment = JSON.parse(JSON.stringify(this.databaseServer.bots.types.usec.inventory.equipment));


        // PMC Armband Weighting
        pmcEquipment.ArmBand =
        {
            "5b3f16c486f7747c327f55f7": 15, 
            "5b3f3ade86f7746b6b790d8e": 15, 
            "5b3f3af486f774679e752c1f": 15, 
            "5b3f3b0186f774021a2afef7": 15, 
            "5b3f3b0e86f7746752107cda": 15,
            "619bdf9cc9546643a67df6f8": 4, 
            "619bc61e86e01e16f839a999": 3, 
            "619bdfd4c9546643a67df6fa": 5, 
            "619bdd8886e01e16f839a99c": 5, 
            "60b0f988c4449e4cb624c1da": 2, 
            "5f9949d869e2777a0e779ba5": 3,
            "619bdef8c9546643a67df6f6": 2,
            "619bddc6c9546643a67df6ee": 1
        };
        
        this.databaseServer.bots.types.usec.inventory.equipment.ArmBand = pmcEquipment.ArmBand;
        this.databaseServer.bots.types.bear.inventory.equipment.ArmBand = pmcEquipment.ArmBand;

        
        // PMC Armor Vest Weighting
        pmcEquipment.ArmorVest = 
        {
            "5648a7494bdc2d9d488b4583": 100,
            "5df8a2ca86f7740bfe6df777": 175,
            "5ab8e4ed86f7742d8e50c7fa": 200,
            "5c0e5edb86f77461f55ed1f7": 225,
            "5c0e5bab86f77461f55ed1f3": 200,
            "5b44d22286f774172b0c9de8": 300,
            "5c0e655586f774045612eeb2": 300,
            "5c0e51be86f774598e797894": 300,
            "5c0e53c886f7747fa54205c7": 300,
            "5c0e57ba86f7747fa141986d": 300,
            "63737f448b28897f2802b874": 400,
            "5f5f41476bdad616ad46d631": 400,
            "5ca2151486f774244a3b8d30": 400,
            "5b44d0de86f774503d30cba8": 350,
            "5ab8e79e86f7742d8b372e78": 400,
            "5e9dacf986f774054d6b89f4": 400,
            "5ca21c6986f77479963115a7": 400,
            "5e4abb5086f77406975c9342": 400,
            "60a283193cb70855c43a381d": 150,
            "545cdb794bdc2d3a198b456a": 160
        };

        this.databaseServer.bots.types.usec.inventory.equipment.ArmorVest = pmcEquipment.ArmorVest;
        this.databaseServer.bots.types.bear.inventory.equipment.ArmorVest = pmcEquipment.ArmorVest;


        // PMC Backpack Weighting
        pmcEquipment.Backpack =
        {
            "5ab8ee7786f7742d8f33f0b9": 6, 
            "56e33680d2720be2748b4576": 6, 
            "5ab8f04f86f774585f4237d8": 6, 
            "544a5cde4bdc2d39388b456b": 10, 
            "5e9dcf5986f7746c417435b3": 14, 
            "60a2828e8689911a226117f9": 14, 
            "5ca20d5986f774331e7c9602": 14,
            "5d5d940f86f7742797262046": 14, 
            "6038d614d10cbf667352dd44": 8, 
            "618bb76513f5097c8d5aa2d5": 14,
            "619cf0335771dd3c390269ae": 14, 
            "545cdae64bdc2d39198b4568": 14, 
            "5ab8ebf186f7742d8b372e80": 14, 
            "5f5e467b0bc58666c37e7821": 14, 
            "5f5e46b96bdad616ad46d613": 14, 
            "618cfae774bb2d036a049e7c": 14, 
            "62a1b7fbc30cfa1d366af586": 14,
            "639346cc1c8f182ad90c8972": 8,
            "5c0e774286f77468413cc5b2": 8,
            "5df8a4d786f77412672a1e3b": 10        
        };
        
        this.databaseServer.bots.types.usec.inventory.equipment.Backpack = pmcEquipment.Backpack;
        this.databaseServer.bots.types.bear.inventory.equipment.Backpack = pmcEquipment.Backpack;


        // PMC Earpiece Weighting
        pmcEquipment.Earpiece =
         {
             "5b432b965acfc47a8774094e": 1, 
             "6033fa48ffd42c541047f728": 1,
             "5645bcc04bdc2d363b8b4572": 1,
             "5f60cd6cf2bcbb675b00dac6": 1,
             "5aa2ba71e5b5b000137b758f": 1,
             "628e4e576d783146b124c64d": 1,
             "5a16b9fffcdbcb0176308b34": 1
         };
         
        this.databaseServer.bots.types.usec.inventory.equipment.Earpiece = pmcEquipment.Earpiece;
        this.databaseServer.bots.types.bear.inventory.equipment.Earpiece = pmcEquipment.Earpiece;

         
        // PMC Eyewear Weighting
        pmcEquipment.Eyewear =
        {
            "5b432be65acfc433000ed01f": 1, 
            "5aa2b986e5b5b00014028f4c": 1, 
            "557ff21e4bdc2d89578b4586": 1,
            "5d5fca1ea4b93635fd598c07": 1,
            "603409c80ca681766b6a0fb2": 3, 
            "5d6d2e22a4b9361bd5780d05": 1, 
            "5c0d32fcd174af02a1659c75": 1
        };
        
        this.databaseServer.bots.types.usec.inventory.equipment.Eyewear = pmcEquipment.Eyewear;
        this.databaseServer.bots.types.bear.inventory.equipment.Eyewear = pmcEquipment.Eyewear;


        // PMC FaceCover Weighting
        pmcEquipment.FaceCover =
        {
            "572b7f1624597762ae139822": 2,
            "5ab8f39486f7745cd93a1cca": 10, 
            "5b4325355acfc40019478126": 4,
            "5ab8f85d86f7745cd93a1cf5": 4, 
            "5b432f3d5acfc4704b4a1dfb": 10
        };
         
        this.databaseServer.bots.types.usec.inventory.equipment.FaceCover = pmcEquipment.FaceCover;
        this.databaseServer.bots.types.bear.inventory.equipment.FaceCover = pmcEquipment.FaceCover;

         
        // PMC FirstPrimaryWeapon Weighting
        pmcEquipment.FirstPrimaryWeapon =
        {
            "5926bb2186f7744b1c6c6e60": 20, 
            "574d967124597745970e7c94": 20, 
            "57dc2fa62459775949412633": 20, 
            "57f3c6bd24597738e730fa2f": 20, 
            "5839a40f24597726f856b511": 20, 
            "57d14d2524597714373db789": 20, 
            "57f4c844245977379d5c14d1": 20, 
            "59984ab886f7743e98271174": 20, 
            "5ea03f7400685063ec28bfa8": 20, 
            "5a7828548dc32e5a9c28b516": 25, 
            "5bfd297f0db834001a669119": 30, 
            "59d6088586f774275f37482f": 20, 
            "583990e32459771419544dd2": 20, 
            "59e6152586f77473dc057aa1": 20, 
            "5c07c60e0db834002330051f": 20, 
            "5a38e6bac4a2826c6e06d79b": 20, 
            "56dee2bdd2720bc8328b4567": 20, 
            "5447a9cd4bdc2dbd208b4567": 28, 
            "5d2f0d8048f0356c925bc3b0": 10, 
            "5fc3e272f8b6a877a729eac5": 30, 
            "58948c8e86f77409493f7266": 30, 
            "59e6687d86f77411d949b251": 25, 
            "54491c4f4bdc2db1078b4568": 20, 
            "5ba26383d4351e00334c93d9": 15,
            "587e02ff24597743df3deaeb": 20, 
            "5c501a4d2e221602b412b540": 25, 
            "60db29ce99594040e04c4a27": 20, 
            "5580223e4bdc2d1c128b457f": 20, 
            "61f7c9e189e6fb1a5e3ea78d": 20, 
            "5e870397991fd70db46995c8": 20, 
            "5de652c31b7e3716273428be": 25,
            "5644bd2b4bdc2d3b4c8b4572": 20, 
            "59ff346386f77477562ff5e2": 20, 
            "5ab8e9fcd8ce870019439434": 20, 
            "5ac4cd105acfc40016339859": 20, 
            "5bf3e03b0db834001d2c4a9c": 20, 
            "55801eed4bdc2d89578b4588": 20, 
            "5fbcc1d9016cce60e8341ab3": 30, 
            "628b5638ad252a16da6dd245": 30, 
            "628b9c37a733087d0d7fe84b": 20, 
            "5f2a9575926fd9352339381f": 20, 
            "60339954d62c9b14ed777c06": 5, 
            "62e7c4fba689e8c9c50dfc38": 10, 
            "623063e994fc3f7b302a9696": 20, 
            "5cc82d76e24e8d00134b4b83": 20, 
            "5aafa857e5b5b00018480968": 20, 
            "5bfea6e90db834001b7347f3": 20, 
            "576165642459773c7a400233": 10, 
            "618428466ef05c2ce828f218": 10,
            "5ac66d725acfc43b321d4b60": 10, 
            "5ac66d2e5acfc43b321d4b53": 10, 
            "5ac66d9b5acfc4001633997a": 10, 
            "5beed0f50db834001c062b12": 20, 
            "57838ad32459774a17445cd2": 20, 
            "5c46fbd72e2216398b5a8c9c": 20, 
            "5e848cc2988a8701445df1e8": 20, 
            "62e14904c2699c0ec93adc47": 20, 
            "588892092459774ac91d4b11": 20, 
            "5c488a752e221602b412af63": 20, 
            "5b0bbe4e5acfc40dc528a72d": 20, 
            "6184055050224f204c1da540": 20, 
            "63171672192e68c5460cebc5": 20, 
            "5a367e5dc4a282000e49738f": 20, 
            "5df8ce05b11454561e39243b": 20, 
            "6176aca650224f204c1da3fb": 20, 
            "5ac66cb05acfc40198510a10": 20, 
            "5d43021ca4b9362eab4b5e25": 20, 
            "5fc3f2d5900b1d5091531e57": 20, 
            "5fb64bc92b1b027b1f50bcf2": 20, 
            "5df24cf80dee1b22f862e9bc": 20
        };
        
        this.databaseServer.bots.types.usec.inventory.equipment.FirstPrimaryWeapon = pmcEquipment.FirstPrimaryWeapon;
        this.databaseServer.bots.types.bear.inventory.equipment.FirstPrimaryWeapon = pmcEquipment.FirstPrimaryWeapon;


        // PMC Headwear Weighting
        pmcEquipment.Headwear =
        {
            "5a7c4850e899ef00150be885": 6,
            "5aa7d193e5b5b000171d063f": 2,
            "5c06c6a80db834001b735491": 3,
            "5645bc214bdc2d363b8b4571": 2,
            "59e7711e86f7746cae05fbe1": 3,
            "5aa7d03ae5b5b00016327db5": 2,
            "5d5e7d28a4b936645d161203": 4,
            "5b432d215acfc4771e1c6624": 6,
            "5aa7e454e5b5b0214e506fa2": 3,
            "5e00c1ad86f774747333222c": 6,
            "5ac8d6885acfc400180ae7b0": 6,
            "5b40e3f35acfc40016388218": 3,
            "5b40e4035acfc47a87740943": 3,
            "5b4329f05acfc47a86086aa1": 3,
            "5c091a4e0db834001d5addc8": 3,
            "5d6d3716a4b9361bc8618872": 3
        };
         
        this.databaseServer.bots.types.usec.inventory.equipment.Headwear = pmcEquipment.Headwear;
        this.databaseServer.bots.types.bear.inventory.equipment.Headwear = pmcEquipment.Headwear;

         
        // PMC Holster Weighting
        pmcEquipment.Holster =
        {
            "624c2e8614da335f1e034d8c": 1, 
            "5448bd6b4bdc2dfc2f8b4569": 1, 
            "56e0598dd2720bb5668b45a6": 1, 
            "571a12c42459771f627b58a0": 1, 
            "576a581d2459771e7b1bc4f1": 1, 
            "602a9740da11d6478d5a06dc": 6, 
            "5a17f98cfcdbcb0980087290": 4, 
            "5e81c3cbac2bb513793cdc75": 4, 
            "5cadc190ae921500103bb3b6": 4, 
            "56d59856d2720bd8418b456a": 6, 
            "5a7ae0c351dfba0017554310": 6,
            "59f98b4986f7746f546d2cef": 3, 
            "5abccb7dd8ce87001773e277": 1, 
            "63088377b5cd696784087147": 4, 
            "5d3eb3b0a4b93615055e84d2": 6, 
            "6193a720f8ee7e52e42109ed": 6, 
            "61a4c8884f95bc3b2c5dc96f": 2,
            "633ec7c2a6918cb895019c6c": 6
        };
        
        this.databaseServer.bots.types.usec.inventory.equipment.Holster = pmcEquipment.Holster;
        this.databaseServer.bots.types.bear.inventory.equipment.Holster = pmcEquipment.Holster;


        // PMC Tactical Vest Weighting
        pmcEquipment.TacticalVest =
        {
            "5c0e446786f7742013381639": 6, 
            "5929a2a086f7744f4b234d43": 4, 
            "59e7643b86f7742cbf2c109a": 4, 
            "5e4abc1f86f774069619fbaa": 2, 
            "6034d0230ca681766b6a0fb5": 2, 
            "6034cf5fffd42c541047f72e": 4, 
            "572b7adb24597762ae139821": 2,
            "544a5caa4bdc2d1a388b4568": 4, 
            "5d5d646386f7742797261fd9": 8, 
            "61bc85697113f767765c7fe7": 8, 
            "5d5d8ca986f7742798716522": 2, 
            "5d5d85c586f774279a21cbdb": 6, 
            "592c2d1a86f7746dbe2af32a": 4, 
            "5fd4c60f875c30179f5d04c2": 6, 
            "5ca20abf86f77418567a43f2": 4, 
            "5b44c8ea86f7742d1627baf1": 4, 
            "603648ff5a45383c122086ac": 4, 
            "60a6220e953894617404b00a": 4, 
            "5e4abfed86f77406a2713cf7": 2,
            "60a3c70cde5f453f634816a3": 6, 
            "639343fce101f4caa40a4ef3": 8, 
            "5648a69d4bdc2ded0b8b457b": 8, 
            "5ab8dced86f774646209ec87": 6, 
            "5c0e722886f7740458316a57": 8, 
            "5d5d87f786f77427997cfaef": 5, 
            "628dc750b910320f4c27a732": 6, 
            "61bcc89aef0f505f0c6cd0fc": 6, 
            "628d0618d1ba6e4fa07ce5a4": 8, 
            "5df8a42886f77412640e2e75": 8
        };
         
        this.databaseServer.bots.types.usec.inventory.equipment.TacticalVest = pmcEquipment.TacticalVest;
        this.databaseServer.bots.types.bear.inventory.equipment.TacticalVest = pmcEquipment.TacticalVest;

         


        // PMC Ammo Weighting
        const pmcAmmo = JSON.parse(JSON.stringify(this.databaseServer.bots.types.usec.inventory.Ammo));
    
        pmcAmmo.Caliber127x55 = 
        {
            "5cadf6e5ae921500113bb973": 1,
            "5cadf6eeae921500134b2799": 2
        };

        pmcAmmo.Caliber762x54R = 
        {
            "5887431f2459777e1612938f": 1,
            "5e023cf8186a883be655e54f": 1,
            "59e77a2386f7742ee578960a": 2,
            "560d61e84bdc2da74d8b4571": 2
        };
                
        pmcAmmo.Caliber762x51 =
        {
            "5e023e6e34d52a55c3304f71": 1,
            "5e023e53d4353e3302577c4c": 1,
            "5a6086ea4f39f99cd479502f": 2  
        };

        pmcAmmo.Caliber762x39 =
        {
            "59e4d3d286f774176a36250a": 1,
            "5656d7c34bdc2d9d198b4587": 1,
            "59e4cf5286f7741778269d8a": 1,
            "59e4d24686f7741776641ac7": 2,
            "59e0d99486f7744a32234762": 2
        };

        pmcAmmo.Caliber762x35 =
        {
            "5fbe3ffdf8b6a877a729ea82": 1,
            "6196365d58ef8c428c287da1": 1,
            "619636be6db0f2477964e710": 2,
            "5fd20ff893a8961fc660a954": 2
        };
        
        pmcAmmo.Caliber762x25TT =
        {
            "5735fdcd2459776445391d61": 1,
            "5735ff5c245977640e39ba7e": 1,
            "573601b42459776410737435": 1,
            "573602322459776445391df1": 1,
            "573603c924597764442bd9cb": 2,
            "573603562459776430731618": 2
        };

        pmcAmmo.Caliber366TKM =
        {
            "59e6542b86f77411dc52a77a": 1,
            "59e655cb86f77411dc52a77b": 1,
            "59e6658b86f77411d949b250": 2,
            "5f0596629e22f464da6bbdd9": 2  
        };
        
        pmcAmmo.Caliber556x45NATO =
        {
            "59e6920f86f77411d82aa167": 1,
            "59e6918f86f7746c9f75e849": 1,
            "54527a984bdc2d4e668b4567": 1,
            "59e68f6f86f7746c9f75e846": 1,
            "60194943740c5d77f6705eea": 2,
            "59e690b686f7746c9f75e848": 2
        };
        
                
        pmcAmmo.Caliber545x39 = 
        {
            "56dff338d2720bbd668b4569": 1,
            "56dff4a2d2720bbd668b456a": 1,
            "56dff0bed2720bb0668b4567": 1,
            "56dff216d2720bbd668b4568": 1,
            "56dff2ced2720bb4668b4567": 1,
            "56dff4ecd2720b5f5a8b4568": 1,
            "56dff421d2720b5f5a8b4567": 1,
            "56dfef82d2720bbd668b4567": 1,
            "56dff061d2720bb5668b4567": 1,
            "56dff026d2720bb8668b4567": 2,
            "5c0d5e4486f77478390952fe": 2
        };

                
        pmcAmmo.Caliber57x28 =
        {
            "5cc80f79e4a949033c7343b2": 1,
            "5cc80f8fe4a949033b0224a2": 1,
            "5cc80f53e4a949000e1ea4f8": 1,
            "5cc86840d7f00c002412c56c": 2,
            "5cc80f38e4a949001152b560": 2
        };
        
        pmcAmmo.Caliber46x30 =
        {
            "5ba26812d4351e003201fef1": 1,
            "5ba2678ad4351e44f824b344": 1,
            "5ba26844d4351e00334c9475": 2,
            "5ba26835d4351e0035628ff5": 2
        };
        
        pmcAmmo.Caliber9x18PM =
        {
            "573719762459775a626ccbc1": 1,
            "57371b192459775a9f58a5e0": 1,
            "57371e4124597760ff7b25f1": 1,
            "57371eb62459776125652ac1": 1,
            "57371f2b24597761224311f1": 1,
            "57371f8d24597761006c6a81": 1,
            "5737201124597760fc4431f1": 1,
            "5737207f24597760ff7b25f2": 1,
            "573718ba2459775a75491131": 1,
            "57371aab2459775a77142f22": 1,
            "573720e02459776143012541": 1,
            "5737218f245977612125ba51": 2,
            "573719df2459775a626ccbc2": 2
        };

        
        pmcAmmo.Caliber9x19PARA =
        {
            "58864a4f2459770fcc257101": 1,
            "5c3df7d588a4501f290594e5": 1,
            "56d59d3ad2720bdb418b4577": 1,
            "5c925fa22e221601da359b7b": 1,
            "5efb0e16aeb21837e749c7ff": 2,
            "5efb0da7a29a85116f6ea05f": 2
        };
                
        pmcAmmo.Caliber9x21 =
        {
            "5a26abfac4a28232980eabff": 1,
            "5a26ac06c4a282000c5a90a8": 2,
            "5a26ac0ec4a28200741e1e18": 2
        };
             
        pmcAmmo.Caliber9x39 = 
        {
            "57a0dfb82459774d3078b56c": 1,
            "57a0e5022459774d1673f889": 2
        };

        
        pmcAmmo.Caliber9x33R = 
        {
            "62330b3ed4dc74626d570b95": 1,
            "62330bfadc5883093563729b": 1,
            "62330c40bdd19b369e1e53d1": 1,
            "62330c18744e5e31df12f516": 2
        };

        pmcAmmo.Caliber1143x23ACP =
        {
            "5e81f423763d9f754677bf2e": 1,
            "5efb0d4f4bc50b58e81710f3": 1, 
            "5efb0fc6aeb21837e749c801": 1,
            "5efb0cabfb3e451d70735af5": 2
        };
        
        pmcAmmo.Caliber12g =
        {
            "560d5e524bdc2d25448b4571": 1,
            "58820d1224597753c90aeb13": 1,
            "5d6e67fba4b9361bc73bc779": 1, 
            "5d6e6869a4b9361c140bcfde": 1, 
            "5d6e6891a4b9361bd473feea": 1, 
            "5d6e6806a4b936088465b17e": 1, 
            "5d6e689ca4b9361bc8618956": 1, 
            "5d6e68e6a4b9361c140bcfe0": 1,
            "5d6e68b3a4b9361bca7e50b5": 1, 
            "5d6e68dea4b9361bcc29e659": 1, 
            "5d6e6911a4b9361bd5780d52": 2, 
            "5d6e68c4a4b9361b93413f79": 2
        };
        
        pmcAmmo.Caliber20g = 
        {
            "5a38ebd9c4a282000d722a5b": 1, 
            "5d6e6772a4b936088465b17c": 1, 
            "5d6e695fa4b936359b35d852": 1, 
            "5d6e6a42a4b9364f07165f52": 1, 
            "5d6e6a53a4b9361bd473feec": 1, 
            "5d6e69b9a4b9361bc8618958": 1, 
            "5d6e69c7a4b9360b6c0d54e4": 1,
            "5d6e6a05a4b93618084f58d0": 2, 
            "5d6e6a5fa4b93614ec501745": 2
        };
        
        pmcAmmo.Caliber23x75 = 
        {
            "5e85a9a6eacf8c039e4e2ac1": 2, 
            "5f647f31b6238e5dd066e196": 2
        };


        this.databaseServer.bots.types.usec.inventory.Ammo = pmcAmmo;
        this.databaseServer.bots.types.bear.inventory.Ammo = pmcAmmo;







        
        // Progression Loyalty Level List Start


        const progressionWhitelistLL1PMC: EquipmentFilters =
        {
            "weaponModLimits": {
                "scopeLimit": 1,
                "lightLaserLimit": 1
            },
            "weaponSightWhitelist": {
                "5447b5fc4bdc2d87278b4567": ["55818ad54bdc2ddc698b4569", "55818acf4bdc2dde698b456b", "55818ac54bdc2d5b648b456e", "55818add4bdc2d5b648b456f", "55818aeb4bdc2ddc698b456a"],
                "5447b5f14bdc2d61278b4567": ["55818ad54bdc2ddc698b4569", "55818acf4bdc2dde698b456b", "55818ac54bdc2d5b648b456e", "55818add4bdc2d5b648b456f", "55818aeb4bdc2ddc698b456a"],
                "5447bedf4bdc2d87278b4568": ["55818ad54bdc2ddc698b4569", "55818add4bdc2d5b648b456f", "55818aeb4bdc2ddc698b456a"],
                "5447bed64bdc2d97278b4568": ["55818ad54bdc2ddc698b4569", "55818acf4bdc2dde698b456b", "55818ac54bdc2d5b648b456e", "55818add4bdc2d5b648b456f", "55818aeb4bdc2ddc698b456a"],
                "5447b6194bdc2d67278b4567": ["55818ad54bdc2ddc698b4569", "55818ae44bdc2dde698b456c", "55818ac54bdc2d5b648b456e", "55818aeb4bdc2ddc698b456a", "55818add4bdc2d5b648b456f"],
                "5447b5cf4bdc2d65278b4567": ["55818ad54bdc2ddc698b4569", "55818acf4bdc2dde698b456b", "55818ac54bdc2d5b648b456e"],
                "617f1ef5e8b54b0998387733": ["55818ad54bdc2ddc698b4569", "55818acf4bdc2dde698b456b", "55818ac54bdc2d5b648b456e"],
                "5447b6094bdc2dc3278b4567": ["55818ad54bdc2ddc698b4569", "55818acf4bdc2dde698b456b", "55818ac54bdc2d5b648b456e"],
                "5447b5e04bdc2d62278b4567": ["55818ad54bdc2ddc698b4569", "55818acf4bdc2dde698b456b", "55818ac54bdc2d5b648b456e"],
                "5447b6254bdc2dc3278b4568": ["55818ae44bdc2dde698b456c", "55818ac54bdc2d5b648b456e", "55818aeb4bdc2ddc698b456a", "55818add4bdc2d5b648b456f"]
            },
            "nvgIsActiveChancePercent": 50,
            "faceShieldIsActiveChancePercent": 85,
            "lightLaserIsActiveChancePercent": 75,
            "randomisation": [{
                "levelRange": {
                    "min": 1,
                    "max": 14
                },
                "generation": {
                    "drugs": {
                        "min": 0,
                        "max": 1
                    },
                    "grenades": {
                        "min": 0,
                        "max": 1
                    },
                    "healing": {
                        "min": 0,
                        "max": 1
                    },
                    "looseLoot": {
                        "min": 0,
                        "max": 5
                    },
                    "magazines": {
                        "min": 1,
                        "max": 2
                    },
                    "stims": {
                        "min": 0,
                        "max": 0
                    }
                },
                "equipment": {
                    "ArmBand": 90,
                    "FirstPrimaryWeapon": 80,
                    "Holster": 5,
                    "Earpiece": 35,
                    "Eyewear": 5,
                    "Backpack": 30,
                    "FaceCover": 5
                },
                "mods": {
                    "mod_barrel": 20,
                    "mod_bipod": 10,
                    "mod_flashlight": 5,
                    "mod_foregrip": 15,
                    "mod_handguard": 25,
                    "mod_launcher": 0,
                    "mod_magazine": 25,
                    "mod_mount": 15,
                    "mod_mount_000": 15,
                    "mod_mount_001": 15,
                    "mod_mount_002": 15,
                    "mod_mount_003": 15,
                    "mod_mount_004": 15,
                    "mod_mount_005": 15,
                    "mod_mount_006": 15,
                    "mod_muzzle": 10,
                    "mod_muzzle_000": 10,
                    "mod_muzzle_001": 10,
                    "mod_equipment": 5,
                    "mod_equipment_000": 10,
                    "mod_equipment_001": 5,
                    "mod_equipment_002": 0,
                    "mod_nvg": 0,
                    "mod_pistol_grip_akms": 15,
                    "mod_pistol_grip": 10,
                    "mod_scope": 15,
                    "mod_scope_000": 15,
                    "mod_scope_001": 15,
                    "mod_scope_002": 15,
                    "mod_scope_003": 15,
                    "mod_tactical": 10,
                    "mod_tactical001": 10,
                    "mod_tactical002": 10,
                    "mod_tactical_000": 10,
                    "mod_tactical_001": 10,
                    "mod_tactical_002": 10,
                    "mod_tactical_003": 10,
                    "mod_tactical_2": 10
                }
            }, 
            {
                "levelRange": {
                    "min": 15,
                    "max": 30
                },
                "generation": {
                    "drugs": {
                        "min": 0,
                        "max": 2
                    },
                    "grenades": {
                        "min": 0,
                        "max": 3
                    },
                    "healing": {
                        "min": 0,
                        "max": 2
                    },
                    "looseLoot": {
                        "min": 0,
                        "max": 8
                    },
                    "magazines": {
                        "min": 1,
                        "max": 3
                    },
                    "stims": {
                        "min": 0,
                        "max": 1
                    }
                },
                "equipment": {
                    "ArmBand": 100,
                    "FirstPrimaryWeapon": 100,
                    "Holster": 15,
                    "Earpiece": 95,
                    "Eyewear": 35,
                    "Backpack": 90,
                    "FaceCover": 100
                },                
                "randomisedWeaponModSlots": ["mod_scope", "mod_scope_000", "mod_scope_001", "mod_scope_002", "mod_scope_003",
                    "mod_handguard", "mod_magazine", "mod_muzzle", "mod_bipod",
                    "mod_muzzle_000", "mod_charge", "mod_reciever",
                    "mod_trigger", "mod_gas_block", "mod_pistol_grip", "mod_pistol_grip_akms", "mod_foregrip",
                    "mod_stock", "mod_stock_000", "mod_stock_001", "mod_stock_akms", "mod_stock_axis",
                    "mod_mount_000", "mod_mount_001", "mod_mount_002", "mod_mount_003", "mod_mount_004", "mod_mount_005", "mod_mount_006",
                    "mod_tactical", "mod_tactical_2", "mod_tactical_000", "mod_tactical_001", "mod_tactical_002", "mod_tactical_003"]
            },
            {
                "levelRange": {
                    "min": 31,
                    "max": 100
                },
                "generation": {
                    "drugs": {
                        "min": 0,
                        "max": 2
                    },
                    "grenades": {
                        "min": 0,
                        "max": 4
                    },
                    "healing": {
                        "min": 0,
                        "max": 3
                    },
                    "looseLoot": {
                        "min": 0,
                        "max": 12
                    },
                    "magazines": {
                        "min": 1,
                        "max": 4
                    },
                    "stims": {
                        "min": 0,
                        "max": 2
                    }
                },
                "equipment": {
                    "ArmBand": 100,
                    "FirstPrimaryWeapon": 100,
                    "Holster": 25,
                    "Earpiece": 100,
                    "Eyewear": 85,
                    "Backpack": 100,
                    "FaceCover": 100
                },      
                "randomisedWeaponModSlots": ["mod_scope", "mod_scope_000", "mod_scope_001", "mod_scope_002", "mod_scope_003",
                    "mod_handguard", "mod_magazine", "mod_muzzle", "mod_bipod",
                    "mod_muzzle_000", "mod_charge", "mod_reciever",
                    "mod_trigger", "mod_gas_block", "mod_pistol_grip", "mod_pistol_grip_akms", "mod_foregrip",
                    "mod_stock", "mod_stock_000", "mod_stock_001", "mod_stock_akms", "mod_stock_axis",
                    "mod_mount_000", "mod_mount_001", "mod_mount_002", "mod_mount_003", "mod_mount_004", "mod_mount_005", "mod_mount_006",
                    "mod_tactical", "mod_tactical_2", "mod_tactical_000", "mod_tactical_001", "mod_tactical_002", "mod_tactical_003"]
            }],
            "blacklist": [],
            "weightingAdjustments": [],
            "whitelist": [{
                "levelRange": 
            {
                "min": 1,
                "max": 14
            },
                "equipment": 
            {
                "FirstPrimaryWeapon": [...primaryWeaponArrayLL1],
                "Holster": [...holsterArrayLL1],
                "Backpack": [...backpackArrayLL1],
                "TacticalVest": [...tacticalVestArrayLL1],
                "Earpiece": [...earpieceArrayLL1],
                "Headwear": [...headwearArrayLL1],
                "ArmorVest": [...armorVestArrayLL1],
                "Eyewear": [...eyewearArrayLL1],
                "ArmBand": [...armBandArrayLL1],
                "FaceCover": [...faceCoverArrayLL1]
            },
                "cartridge": 
            {
                "Caliber762x54R": [...ammo762x54ArrayLL1],
                "Caliber762x51": [...ammo762x51ArrayLL1],
                "Caliber762x39": [...ammo762x39ArrayLL1],
                "Caliber762x25TT": [...ammo762x25TTArrayLL1],
                "Caliber366TKM": [...ammo366TKMArrayLL1],
                "Caliber556x45NATO": [...ammo556x45ArrayLL1],
                "Caliber545x39": [...ammo545x39ArrayLL1],
                "Caliber46x30": [...ammo46x30ArrayLL1],
                "Caliber1143x23ACP": [...ammo1143x23ACPArrayLL1],
                "Caliber9x19PARA": [...ammo9x19ArrayLL1],
                "Caliber9x18PM": [...ammo9x18ArrayLL1],
                "Caliber12g": [...ammo12x70ArrayLL1],
                "Caliber20g": [...ammo20x70ArrayLL1]
            }}],
            "clothing": []
        }
        

        const progressionWhitelistLL2PMC: EquipmentFilterDetails =
        {
            "levelRange": 
            {
                "min": 15,
                "max": 30
            },
            "equipment": 
            {
                "FirstPrimaryWeapon": [...primaryWeaponArrayLL2],
                "Holster": [...holsterArrayLL2],
                "Backpack": [...backpackArrayLL2],
                "TacticalVest": [...tacticalVestArrayLL2],
                "Earpiece": [...earpieceArrayLL2],
                "Headwear": [...headwearArrayLL2],
                "ArmorVest": [...armorVestArrayLL2],
                "Eyewear": [...eyewearArrayLL2],
                "ArmBand": [...armBandArrayLL2],
                "FaceCover": [...faceCoverArrayLL2]
            },
            "cartridge": 
            {
                "Caliber762x54R": [...ammo762x54ArrayLL2],
                "Caliber762x51": [...ammo762x51ArrayLL2],
                "Caliber762x39": [...ammo762x39ArrayLL2],
                "Caliber762x35": [...ammo762x35ArrayLL2],
                "Caliber762x25TT": [...ammo762x25TTArrayLL2],
                "Caliber366TKM": [...ammo366TKMArrayLL2],
                "Caliber556x45NATO": [...ammo556x45ArrayLL2],
                "Caliber545x39": [...ammo545x39ArrayLL2],
                "Caliber57x28": [...ammo57x28ArrayLL2],
                "Caliber46x30": [...ammo46x30ArrayLL2],
                "Caliber1143x23ACP": [...ammo1143x23ACPArrayLL2],
                "Caliber9x39": [...ammo9x39ArrayLL2],
                "Caliber9x33R": [...ammo9x33RArrayLL2],
                "Caliber9x21": [...ammo9x21ArrayLL2],
                "Caliber9x19PARA": [...ammo9x19ArrayLL2],
                "Caliber9x18PM": [...ammo9x18ArrayLL2],   
                "Caliber12g": [...ammo12x70ArrayLL2],
                "Caliber20g": [...ammo20x70ArrayLL2]
            }                  
        }


        const progressionWhitelistLL3PMC: EquipmentFilterDetails =
        {
            "levelRange": 
            {
                "min": 31,
                "max": 39
            },
            "equipment": 
            {
                "FirstPrimaryWeapon": [...primaryWeaponArrayLL3],
                "Holster": [...holsterArrayLL3],
                "Backpack": [...backpackArrayLL3],
                "TacticalVest": [...tacticalVestArrayLL3],
                "Earpiece": [...earpieceArrayLL3],
                "Headwear": [...headwearArrayLL3],
                "ArmorVest": [...armorVestArrayLL3],
                "Eyewear": [...eyewearArrayLL3],
                "ArmBand": [...armBandArrayLL3],
                "FaceCover": [...faceCoverArrayLL3]
            },
            "cartridge": 
            {
                "Caliber127x55": [...ammo127x55ArrayLL3],
                "Caliber762x54R": [...ammo762x54ArrayLL3],
                "Caliber762x51": [...ammo762x51ArrayLL3],
                "Caliber762x39": [...ammo762x39ArrayLL3],
                "Caliber762x35": [...ammo762x35ArrayLL3],
                "Caliber762x25TT": [...ammo762x25TTArrayLL3],
                "Caliber366TKM": [...ammo366TKMArrayLL3],
                "Caliber556x45NATO": [...ammo556x45ArrayLL3],
                "Caliber545x39": [...ammo545x39ArrayLL3],
                "Caliber57x28": [...ammo57x28ArrayLL3],
                "Caliber46x30": [...ammo46x30ArrayLL3],
                "Caliber1143x23ACP": [...ammo1143x23ACPArrayLL3],
                "Caliber9x39": [...ammo9x39ArrayLL3],
                "Caliber9x33R": [...ammo9x33RArrayLL3],
                "Caliber9x21": [...ammo9x21ArrayLL3],
                "Caliber9x19PARA": [...ammo9x19ArrayLL3],
                "Caliber9x18PM": [...ammo9x18ArrayLL3],
                "Caliber12g": [...ammo12x70ArrayLL3],
                "Caliber20g": [...ammo20x70ArrayLL3],
                "Caliber23x75": [...ammo23x75ArrayLL3]
            }            
        }

        const pmc = this.botConfig.equipment.pmc.whitelist;
        this.botConfig.equipment.pmc = progressionWhitelistLL1PMC;
        pmc.push(progressionWhitelistLL2PMC);
        pmc.push(progressionWhitelistLL3PMC);
    }
}