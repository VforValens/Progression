/* eslint-disable @typescript-eslint/naming-convention */
import {
    EquipmentFilterDetails,
    EquipmentFilters,
    IBotConfig
} from "@spt-aki/models/spt/config/IBotConfig";
import { IPmcConfig } from "@spt-aki/models/spt/config/IPmcConfig";
import { IDatabaseTables } from "@spt-aki/models/spt/server/IDatabaseTables";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { PmcConfig } from "../config/ts/pmc";

export class PMCs 
{
    private botConfig: IBotConfig;
    private pmcConfig: IPmcConfig;
    private databaseServer: IDatabaseTables;
    private modConfig: PmcConfig = require("../config/pmc.json");

    constructor(botConfig: IBotConfig, pmcConfig: IPmcConfig, databaseServer: DatabaseServer) 
    {
        this.botConfig = botConfig;
        this.pmcConfig = pmcConfig;
        this.databaseServer = databaseServer.getTables();
    }

    public updatePmcs(): void 
    {
        this.generatePmcs();
    }

    private generatePmcs() 
    {
    // Set Bot Level Delta to 1 from Default of 10
    // Doing this fixes the issue with bots being up to 10 levels higher than character level, by default, and thus generating with gear they **should not** have.
        const botRelativeLevelDeltaMax = this.modConfig.botRelativeLevelDeltaMax;
        this.pmcConfig.botRelativeLevelDeltaMax = botRelativeLevelDeltaMax;

        // Gear Arrays
        // Primary Weapon Array
        const primaryWeaponArrayLL1 = [
            "57dc2fa62459775949412633",
            "5839a40f24597726f856b511",
            "583990e32459771419544dd2",
            "5c07c60e0db834002330051f",
            "587e02ff24597743df3deaeb",
            "574d967124597745970e7c94",
            "59e6152586f77473dc057aa1",
            "59e6687d86f77411d949b251",
            "5926bb2186f7744b1c6c6e60",
            "5e00903ae9dc277128008b87",
            "59984ab886f7743e98271174",
            "57f4c844245977379d5c14d1",
            "57d14d2524597714373db789",
            "57f3c6bd24597738e730fa2f",
            "5ea03f7400685063ec28bfa8",
            "59f9cabd86f7743a10721f46",
            "5e870397991fd70db46995c8",
            "5a7828548dc32e5a9c28b516",
            "61f7c9e189e6fb1a5e3ea78d",
            "54491c4f4bdc2db1078b4568",
            "5580223e4bdc2d1c128b457f",
            "60db29ce99594040e04c4a27",
            "5a38e6bac4a2826c6e06d79b",
            "5bfd297f0db834001a669119",
            "5de652c31b7e3716273428be"
        ];
        const primaryWeaponArrayLL2 = primaryWeaponArrayLL1.concat(
            ...[
                "5644bd2b4bdc2d3b4c8b4572",
                "59d6088586f774275f37482f",
                "59ff346386f77477562ff5e2",
                "5ab8e9fcd8ce870019439434",
                "62e7c4fba689e8c9c50dfc38",
                "623063e994fc3f7b302a9696",
                "5447a9cd4bdc2dbd208b4567",
                "628b5638ad252a16da6dd245",
                "628b9c37a733087d0d7fe84b",
                "5c501a4d2e221602b412b540",
                "58948c8e86f77409493f7266",
                "60339954d62c9b14ed777c06",
                "5fc3e272f8b6a877a729eac5",
                "6259b864ebedf17603599e88",
                "56dee2bdd2720bc8328b4567",
                "606dae0ab0e443224b421bb7",
                "576165642459773c7a400233",
                "5ae08f0a5acfc408fb1398a1",
                "55801eed4bdc2d89578b4588"
            ]
        );
        const primaryWeaponArrayLL3 = [
            "5ac66cb05acfc40198510a10",
            "5ac66d015acfc400180ae6e4",
            "5ac66d2e5acfc43b321d4b53",
            "5ac66d725acfc43b321d4b60",
            "5ac66d9b5acfc4001633997a",
            "5ac4cd105acfc40016339859",
            "5a0ec13bfcdbcb00165aa685",
            "5abcbc27d8ce8700182eceeb",
            "63171672192e68c5460cebc5",
            "5c488a752e221602b412af63",
            "5bb2475ed4351e00853264e3",
            "5447a9cd4bdc2dbd208b4567",
            "5fbcc1d9016cce60e8341ab3",
            "6184055050224f204c1da540",
            "618428466ef05c2ce828f218",
            "6410733d5dd49d77bd07847e",
            "5f2a9575926fd9352339381f",
            "643ea5b23db6f9f57107d9fd",
            "5d43021ca4b9362eab4b5e25",
            "5beed0f50db834001c062b12",
            "5ba26383d4351e00334c93d9",
            "5cc82d76e24e8d00134b4b83",
            "62e14904c2699c0ec93adc47",
            "5fb64bc92b1b027b1f50bcf2",
            "5fc3f2d5900b1d5091531e57",
            "5e848cc2988a8701445df1e8",
            "6176aca650224f204c1da3fb",
            "5aafa857e5b5b00018480968",
            "5df8ce05b11454561e39243b",
            "5c46fbd72e2216398b5a8c9c",
            "57838ad32459774a17445cd2",
            "588892092459774ac91d4b11",
            "5bfea6e90db834001b7347f3",
            "55801eed4bdc2d89578b4588",
            "5df24cf80dee1b22f862e9bc"
        ];
        const primaryWeaponArrayLL4 = primaryWeaponArrayLL3.concat([
            "6499849fc93611967b034949",
            "57c44b372459772d2b39b8ce",
            "5cadfbf7ae92152ac412eeef",
            "5dcbd56fdbd3d91b3e5468d5",
            "65290f395ae2ae97b80fdf2d",
            "606587252535c57a13424cfd",
            "628a60ae6b1d481ff772e9c8",
            "5b0bbe4e5acfc40dc528a72d",
            "6183afd850224f204c1da514",
            "6165ac306ef05c2ce828ef74",
            "644674a13d52156624001fbc",
            "64637076203536ad5600c990",
            "64ca3d3954fc657e230529cc",
            "5bd70322209c4d00d7167b8f",
            "5fc22d7c187fea44d52eda44",
            "5a367e5dc4a282000e49738f",
            "627e14b21713922ded6f2c15",
            "6275303a9f372d6ea97f9ec7"
        ]);

        // Holster Array
        const holsterArrayLL1 = [
            "5a7ae0c351dfba0017554310",
            "5e81c3cbac2bb513793cdc75",
            "5cadc190ae921500103bb3b6",
            "576a581d2459771e7b1bc4f1",
            "56d59856d2720bd8418b456a",
            "56e0598dd2720bb5668b45a6",
            "602a9740da11d6478d5a06dc",
            "579204f224597773d619e051",
            "5448bd6b4bdc2dfc2f8b4569",
            "571a12c42459771f627b58a0",
            "624c2e8614da335f1e034d8c"
        ];
        const holsterArrayLL2 = holsterArrayLL1.concat(
            ...[
                "5abccb7dd8ce87001773e277",
                "5a17f98cfcdbcb0980087290",
                "63088377b5cd696784087147",
                "6193a720f8ee7e52e42109ed",
                "61a4c8884f95bc3b2c5dc96f",
                "64748cb8de82c85eaf0a273a"
            ]
        );
        const holsterArrayLL3 = [
            "5d3eb3b0a4b93615055e84d2",
            "5d67abc1a4b93614ec50137f",
            "5b1fa9b25acfc40018633c01",
            "5f36a0e5fbf956000b716b65",
            "5cadc190ae921500103bb3b6",
            "56d59856d2720bd8418b456a",
            "602a9740da11d6478d5a06dc",
            "59f98b4986f7746f546d2cef",
            "6193a720f8ee7e52e42109ed",
            "61a4c8884f95bc3b2c5dc96f",
            "633ec7c2a6918cb895019c6c",
            "64748cb8de82c85eaf0a273a"
        ];
        const holsterArrayLL4 = holsterArrayLL3;

        // Backpack Array
        const backpackArrayLL1 = [
            "60a2828e8689911a226117f9",
            "5ab8ee7786f7742d8f33f0b9",
            "544a5cde4bdc2d39388b456b",
            "5e9dcf5986f7746c417435b3",
            "56e33680d2720be2748b4576",
            "5ab8f04f86f774585f4237d8",
            "5ca20d5986f774331e7c9602"
        ];
        const backpackArrayLL2 = backpackArrayLL1.concat(
            ...[
                "5d5d940f86f7742797262046",
                "6038d614d10cbf667352dd44",
                "618bb76513f5097c8d5aa2d5",
                "60a272cc93ef783291411d8e",
                "59e763f286f7742ee57895da"
            ]
        );
        const backpackArrayLL3 = backpackArrayLL2.concat(
            ...[
                "5c0e774286f77468413cc5b2",
                "639346cc1c8f182ad90c8972",
                "619cf0335771dd3c390269ae",
                "545cdae64bdc2d39198b4568",
                "5ab8ebf186f7742d8b372e80",
                "5f5e467b0bc58666c37e7821",
                "5f5e46b96bdad616ad46d613",
                "618cfae774bb2d036a049e7c",
                "62a1b7fbc30cfa1d366af586",
                "5df8a4d786f77412672a1e3b",
                "59e763f286f7742ee57895da"
            ]
        );
        const backpackArrayLL4 = [
            "5df8a4d786f77412672a1e3b",
            "5c0e774286f77468413cc5b2",
            "5ab8ebf186f7742d8b372e80",
            "639346cc1c8f182ad90c8972",
            "59e763f286f7742ee57895da",
            "5b44c6ae86f7742d1627baea",
            "62a1b7fbc30cfa1d366af586",
            "628e1ffc83ec92260c0f437f",
            "545cdae64bdc2d39198b4568",
            "618cfae774bb2d036a049e7c"
        ];

        // Tacvest Array
        const tacticalVestArrayLL1 = [
            "5929a2a086f7744f4b234d43",
            "59e7643b86f7742cbf2c109a",
            "5e4abc1f86f774069619fbaa",
            "6034d0230ca681766b6a0fb5",
            "64be7095047e826eae02b0c1",
            "64be7110bf597ba84a0a41ea",
            "6034cf5fffd42c541047f72e",
            "572b7adb24597762ae139821"
        ];
        const tacticalVestArrayLL2 = tacticalVestArrayLL1.concat(
            ...[
                "5c0e446786f7742013381639",
                "544a5caa4bdc2d1a388b4568",
                "5d5d646386f7742797261fd9",
                "61bc85697113f767765c7fe7",
                "5d5d8ca986f7742798716522",
                "5d5d85c586f774279a21cbdb",
                "592c2d1a86f7746dbe2af32a",
                "5fd4c60f875c30179f5d04c2",
                "5ca20abf86f77418567a43f2",
                "5b44c8ea86f7742d1627baf1",
                "603648ff5a45383c122086ac",
                "60a6220e953894617404b00a",
                "5e4abfed86f77406a2713cf7"
            ]
        );
        const tacticalVestArrayLL3 = tacticalVestArrayLL2.concat(
            ...[
                "60a3c70cde5f453f634816a3",
                "639343fce101f4caa40a4ef3",
                "5648a69d4bdc2ded0b8b457b",
                "5ab8dced86f774646209ec87",
                "5c0e722886f7740458316a57",
                "5d5d87f786f77427997cfaef",
                "628dc750b910320f4c27a732",
                "61bcc89aef0f505f0c6cd0fc",
                "628d0618d1ba6e4fa07ce5a4",
                "5df8a42886f77412640e2e75"
            ]
        );
        const tacticalVestArrayLL4 = [
            "628cd624459354321c4b7fa2",
            "609e860ebd219504d8507525",
            "5b44cad286f77402a54ae7e5",
            "5e4ac41886f77406a511c9a8",
            "628b9c7d45122232a872358f",
            "628d0618d1ba6e4fa07ce5a4",
            "61bc85697113f767765c7fe7",
            "639343fce101f4caa40a4ef3",
            "5c0e746986f7741453628fe5",
            "61bcc89aef0f505f0c6cd0fc",
            "628dc750b910320f4c27a732",
            "5df8a42886f77412640e2e75",
            "5c0e722886f7740458316a57",
            "5648a69d4bdc2ded0b8b457b",
            "592c2d1a86f7746dbe2af32a",
            "603648ff5a45383c122086ac",
            "5e9db13186f7742f845ee9d3",
            "628baf0b967de16aab5a4f36",
            "5f5f41f56760b4138443b352"
        ];

        // Earpiece Array
        const earpieceArrayLL1 = [
            "5b432b965acfc47a8774094e",
            "6033fa48ffd42c541047f728"
        ];
        const earpieceArrayLL2 = earpieceArrayLL1.concat(
            ...["5645bcc04bdc2d363b8b4572", "5aa2ba71e5b5b000137b758f"]
        );
        const earpieceArrayLL3 = earpieceArrayLL2.concat(
            ...[
                "5f60cd6cf2bcbb675b00dac6",
                "628e4e576d783146b124c64d"
            ]
        );
        const earpieceArrayLL4 = [
            "5aa2ba71e5b5b000137b758f",
            "5645bcc04bdc2d363b8b4572",
            "628e4e576d783146b124c64d",
            "5f60cd6cf2bcbb675b00dac6"
        ];

        // Headwear Array
        const headwearArrayLL1 = [
            "5a7c4850e899ef00150be885",
            "5aa7d193e5b5b000171d063f",
            "5c06c6a80db834001b735491",
            "5645bc214bdc2d363b8b4571",
            "59e7711e86f7746cae05fbe1"
        ];
        const headwearArrayLL2 = headwearArrayLL1.concat(
            ...[
                "5aa7d03ae5b5b00016327db5",
                "5d5e7d28a4b936645d161203",
                "5b432d215acfc4771e1c6624",
                "5aa7e454e5b5b0214e506fa2"
            ]
        );
        const headwearArrayLL3 = [
            "5e00c1ad86f774747333222c",
            "5ac8d6885acfc400180ae7b0",
            "5b40e3f35acfc40016388218",
            "5b40e4035acfc47a87740943",
            "5b4329f05acfc47a86086aa1",
            "5c091a4e0db834001d5addc8",
            "5d6d3716a4b9361bc8618872"
        ];
        const headwearArrayLL4 = [
            "5ca20ee186f774799474abc2",
            "5aa7e276e5b5b000171d0647",
            "5f60c74e3b85f6263c145586",
            "5ea17ca01412a1425304d1c0",
            "5a154d5cfcdbcb001a3b00da",
            "5ac8d6885acfc400180ae7b0",
            "5e00c1ad86f774747333222c",
            "5e01ef6886f77445f643baa4",
            "5c17a7ed2e2216152142459c",
            "5b40e1525acfc4771e1c6611",
            "5b40e2bc5acfc40016388216"
        ];

        // Armor Vest Array
        const armorVestArrayLL1 = [
            "59e7635f86f7742cbf2c1095",
            "5c0e5bab86f77461f55ed1f3",
            "5c0e5edb86f77461f55ed1f7",
            "5648a7494bdc2d9d488b4583",
            "5ab8e4ed86f7742d8e50c7fa",
            "5df8a2ca86f7740bfe6df777",
            "64be79c487d1510151095552"
        ];
        const armorVestArrayLL2 = armorVestArrayLL1.concat(
            ...[
                "5b44d22286f774172b0c9de8",
                "5c0e51be86f774598e797894",
                "64abd93857958b4249003418"
            ]
        );
        const armorVestArrayLL3 =[
            "5e4abb5086f77406975c9342",
            "5ca21c6986f77479963115a7",
            "5e9dacf986f774054d6b89f4",
            "63737f448b28897f2802b874",
            "5f5f41476bdad616ad46d631",
            "545cdb794bdc2d3a198b456a",
            "5ab8e79e86f7742d8b372e78",
            "5b44d0de86f774503d30cba8",
            "5ca2151486f774244a3b8d30",
            "609e8540d5c319764c2bc2e9",
            "5c0e57ba86f7747fa141986d",
            "5c0e53c886f7747fa54205c7"
        ];
        const armorVestArrayLL4 = [
            "5fd4c474dd870108a754b241",
            "5e4abb5086f77406975c9342",
            "6038b4ca92ec1c3103795a0d",
            "6038b4b292ec1c3103795a0b",
            "5c0e625a86f7742d77340f62",
            "60a283193cb70855c43a381d",
            "545cdb794bdc2d3a198b456a",
            "63737f448b28897f2802b874",
            "5f5f41476bdad616ad46d631",
            "5ca2151486f774244a3b8d30",
            "5c0e541586f7747fa54205c9",
            "5b44d0de86f774503d30cba8",
            "5e9dacf986f774054d6b89f4",
            "5ca21c6986f77479963115a7",
            "5c0e655586f774045612eeb2"
        ];

        // Eyewear Array
        const eyewearArrayLL1 = [
            "5b432be65acfc433000ed01f",
            "5aa2b986e5b5b00014028f4c",
            "557ff21e4bdc2d89578b4586"
        ];
        const eyewearArrayLL2 = eyewearArrayLL1.concat(
            ...["5d5fca1ea4b93635fd598c07"]
        );
        const eyewearArrayLL3 = eyewearArrayLL2.concat(
            ...[
                "603409c80ca681766b6a0fb2",
                "5d6d2e22a4b9361bd5780d05",
                "5c0d32fcd174af02a1659c75"
            ]
        );
        const eyewearArrayLL4 = [
            "62a61c988ec41a51b34758d5",
            "603409c80ca681766b6a0fb2",
            "62a09e410b9d3c46de5b6e78",
            "61c18d83b00456371a66814b"
        ];

        // Armband Array
        const armBandArrayLL1 = [
            "5b3f16c486f7747c327f55f7",
            "5b3f3ade86f7746b6b790d8e",
            "5b3f3af486f774679e752c1f",
            "5b3f3b0186f774021a2afef7",
            "5b3f3b0e86f7746752107cda"
        ];
        const armBandArrayLL2 = armBandArrayLL1;
        const armBandArrayLL3 = armBandArrayLL2.concat(
            ...[
                "619bdef8c9546643a67df6f6",
                "619bddc6c9546643a67df6ee",
                "619bdf9cc9546643a67df6f8",
                "619bc61e86e01e16f839a999",
                "619bdfd4c9546643a67df6fa",
                "619bdd8886e01e16f839a99c",
                "60b0f988c4449e4cb624c1da",
                "5f9949d869e2777a0e779ba5"
            ]
        );
        const armBandArrayLL4 = [
            "619bddc6c9546643a67df6ee",
            "60b0f988c4449e4cb624c1da",
            "619bc61e86e01e16f839a999",
            "619bdef8c9546643a67df6f6"
        ];

        // Face Cover Array
        const faceCoverArrayLL1 = ["572b7f1624597762ae139822"];
        const faceCoverArrayLL2 = faceCoverArrayLL1.concat(
            ...["5ab8f39486f7745cd93a1cca", "5b4325355acfc40019478126"]
        );
        const faceCoverArrayLL3 = faceCoverArrayLL2.concat(
            ...["5ab8f85d86f7745cd93a1cf5", "5b432f3d5acfc4704b4a1dfb"]
        );
        const faceCoverArrayLL4 = [
            "5e54f79686f7744022011103",
            "5fd8d28367cb5e077335170f",
            "5e54f76986f7740366043752",
            "62a09dd4621468534a797ac7",
            "5b432f3d5acfc4704b4a1dfb",
            "60a7ad3a0c5cb24b0134664a",
            "60a7ad2a2198820d95707a2e",
            "62963c18dbc8ab5f0d382d0b",
            "62a09e08de7ac81993580532"
        ];

        ///////////////////////////////////////////////////////////////////////////

        // Ammo Arrays
        // 40x46mm Grenade Array
        const ammo40x46ArrayLL4 = ["5ede475b549eed7c6d5c18fb"];

        // 12.7x55mm Ammo Arrays
        const ammo127x55ArrayLL2 = ["5cadf6e5ae921500113bb973", "5cadf6ddae9215051e1c23b2"];
        const ammo127x55ArrayLL3 = ammo127x55ArrayLL2.concat(...["5cadf6eeae921500134b2799"]);
        const ammo127x55ArrayLL4 = ammo127x55ArrayLL3;

        // 86x70 Ammo Arrays - LL4 only.
        const ammo86x70ArrayLL4 = ["5fc382b6d6fa9c00c571bbc3", "5fc382c1016cce60e8341b20", "5fc275cf85fd526b824a571a", "5fc382a9d724d907e2077dab"];

        // 7.62x54R Ammo Arrays
        const ammo762x54ArrayLL1 = ["64b8f7b5389d7ffd620ccba2", "64b8f7c241772715af0f9c3d"];
        const ammo762x54ArrayLL2 = ammo762x54ArrayLL1.concat(...["64b8f7968532cf95ee0a0dbf"]);
        const ammo762x54ArrayLL3 = ["59e77a2386f7742ee578960a", "560d61e84bdc2da74d8b4571", "5e023cf8186a883be655e54f", "5887431f2459777e1612938f"];
        const ammo762x54ArrayLL4 = ["5e023d34e8a400319a28ed44", "560d61e84bdc2da74d8b4571", "5e023d48186a883be655e551"];

        // 7.62x51mm Ammo Arrays
        const ammo762x51ArrayLL1 = ["5e023e88277cce2b522ff2b1"];
        const ammo762x51ArrayLL2 = ammo762x51ArrayLL1.concat(...["5e023e6e34d52a55c3304f71"]);
        const ammo762x51ArrayLL3 = ["5e023e53d4353e3302577c4c", "58dd3ad986f77403051cba8f", "5a6086ea4f39f99cd479502f"];
        const ammo762x51ArrayLL4 = ["5a6086ea4f39f99cd479502f", "5a608bf24f39f98ffc77720e", "58dd3ad986f77403051cba8f"];

        // 7.62x39mm Ammo Arrays
        const ammo762x39ArrayLL1 = ["59e4d3d286f774176a36250a", "64b7af734b75259c590fa895"];
        const ammo762x39ArrayLL2 = ammo762x39ArrayLL1.concat(...["64b7af5a8532cf95ee0a0dbd"]);
        const ammo762x39ArrayLL3 = ["59e4d24686f7741776641ac7", "59e4cf5286f7741778269d8a", "5656d7c34bdc2d9d198b4587"];
        const ammo762x39ArrayLL4 = ["64b7af434b75259c590fa893", "59e0d99486f7744a32234762", "601aa3d2b2bcb34913271e6d"];

        // 7.62x35mm aka .300BLKOUT Ammo Arrays
        const ammo762x35ArrayLL1 = ["6196365d58ef8c428c287da1"];
        const ammo762x35ArrayLL2 = ammo762x35ArrayLL1.concat(["6196364158ef8c428c287d9f"]);
        const ammo762x35ArrayLL3 = ["5fbe3ffdf8b6a877a729ea82", "619636be6db0f2477964e710"];
        const ammo762x35ArrayLL4 = ["619636be6db0f2477964e710", "64b8725c4b75259c590fa899", "5fd20ff893a8961fc660a954"];

        // 7.62x25mm TT Ammo Arrays
        const ammo762x25TTArrayLL1 = ["573602322459776445391df1", "573601b42459776410737435", "5735ff5c245977640e39ba7e", "5735fdcd2459776445391d61"]
        const ammo762x25TTArrayLL2 = ammo762x25TTArrayLL1.concat(...["5736026a245977644601dc61", "573603c924597764442bd9cb", "573603562459776430731618"]);

        // 6.8x51 Ammo Arrays.
        const ammo68x51ArrayLL3 = ["6529302b8c26af6326029fb7"];
        const ammo68x51ArrayLL4 = ammo68x51ArrayLL3.concat(["6529243824cbe3c74a05e5c1"]);

        // 366 TKM Ammo Arrays.
        const ammo366TKMArrayLL1 = ["59e6658b86f77411d949b250", "59e6542b86f77411dc52a77a"];
        const ammo366TKMArrayLL2 = ammo366TKMArrayLL1.concat(...["59e655cb86f77411dc52a77b"]);
        const ammo366TKMArrayLL3 = ["5f0596629e22f464da6bbdd9"];

        // 5.56 Ammo Arrays
        const ammo556x45ArrayLL1 = ["59e6927d86f77411da468256", "59e6918f86f7746c9f75e849"];
        const ammo556x45ArrayLL2 = ammo556x45ArrayLL1.concat(...["59e68f6f86f7746c9f75e846", "59e6920f86f77411d82aa167", "60194943740c5d77f6705eea"]);
        const ammo556x45ArrayLL3 = ["54527a984bdc2d4e668b4567", "59e6906286f7746c9f75e847", "54527ac44bdc2d36668b4567"];
        const ammo556x45ArrayLL4 = ["54527ac44bdc2d36668b4567", "59e6906286f7746c9f75e847", "59e690b686f7746c9f75e848", "601949593ae8f707c4608daa"];
       
        // 5.45 Ammo Arrays
        const ammo545x39ArrayLL1 = ["56dff216d2720bbd668b4568", "56dff338d2720bbd668b4569", "56dff421d2720b5f5a8b4567", "56dff0bed2720bb0668b4567"];
        const ammo545x39ArrayLL2 = ammo545x39ArrayLL1.concat(...["56dff4ecd2720b5f5a8b4568", "56dff4a2d2720bbd668b456a", "56dff2ced2720bb4668b4567"]);
        const ammo545x39ArrayLL3 = ["56dff2ced2720bb4668b4567", "56dff061d2720bb5668b4567", "56dff3afd2720bba668b4567", "61962b617c6c7b169525f168", "56dfef82d2720bbd668b4567"];
        const ammo545x39ArrayLL4 = ["56dff061d2720bb5668b4567", "61962b617c6c7b169525f168", "56dff026d2720bb8668b4567", "5c0d5e4486f77478390952fe"];

        // 5.7mm Ammo Arrays
        const ammo57x28ArrayLL2 = ["5cc80f8fe4a949033b0224a2"];
        const ammo57x28ArrayLL3 = ["5cc80f53e4a949000e1ea4f8", "5cc80f38e4a949001152b560"];
        const ammo57x28ArrayLL4 = ["5cc80f38e4a949001152b560"];

        // 4.6mm Ammo Arrays
        const ammo46x30ArrayLL3 = ["64b6979341772715af0f9c39"];
        const ammo46x30ArrayLL4 = ["5ba2678ad4351e44f824b344", "5ba26835d4351e0035628ff5"];

        // 9x18mm Ammo Arrays
        const ammo9x18ArrayLL1 = ["57371f8d24597761006c6a81"];
        const ammo9x18ArrayLL2 = ["573719df2459775a626ccbc2"];

        // 9x19mm Ammo Arrays
        const ammo9x19ArrayLL1 = ["58864a4f2459770fcc257101", "5c3df7d588a4501f290594e5"];
        const ammo9x19ArrayLL2 = ammo9x19ArrayLL1.concat(...["64b7bbb74b75259c590fa897", "56d59d3ad2720bdb418b4577"]);
        const ammo9x19ArrayLL3 = ["5c925fa22e221601da359b7b", "5efb0da7a29a85116f6ea05f", "5c0d56a986f774449d5de529"];

        // 9x21mm Ammo Arrays
        const ammo9x21ArrayLL3 = ["5a26ac06c4a282000c5a90a8", "5a26abfac4a28232980eabff", "5a269f97c4a282000b151807", "6576f93989f0062e741ba952"];
        const ammo9x21ArrayLL4 = ["5a26ac0ec4a28200741e1e18", "6576f4708ca9c4381d16cd9d"];

        // 9x39mm Ammo Arrays
        const ammo9x39ArrayLL3 = ["5c0d668f86f7747ccb7f13b2", "61962d879bb3d20b0946d385"];
        const ammo9x39ArrayLL4 = ["57a0e5022459774d1673f889", "56dfef82d2720bbd668b4567"];

        // 9x33 Revolver Ammo Arrays
        const ammo9x33RArrayLL2 = ["62330c18744e5e31df12f516", "62330b3ed4dc74626d570b95"];

        // .45 ACP Ammo Arrays
        const ammo1143x23ACPArrayLL1 = ["5efb0d4f4bc50b58e81710f3"];
        const ammo1143x23ACPArrayLL2 = ammo1143x23ACPArrayLL1.concat(...["5e81f423763d9f754677bf2e"]);
        const ammo1143x23ACPArrayLL3 = ["5e81f423763d9f754677bf2e", "5efb0fc6aeb21837e749c801"];
        const ammo1143x23ACPArrayLL4 = ["5efb0cabfb3e451d70735af5", "5ea2a8e200685063ec28c05a"];

        // 12 Gauge Ammo Arrays
        const ammo12x70ArrayLL1 = ["5d6e67fba4b9361bc73bc779", "5d6e6869a4b9361c140bcfde", "58820d1224597753c90aeb13"];
        const ammo12x70ArrayLL2 = ["5d6e6806a4b936088465b17e", "5c0d591486f7744c505b416f", "5d6e68d1a4b93622fe60e845"];
        const ammo12x70ArrayLL3 = ["5d6e68c4a4b9361b93413f79", "5d6e6806a4b936088465b17e", "5d6e6911a4b9361bd5780d52", "5d6e68a8a4b9360b6c0d54e2"];

        // 20 Gauge Ammo Arrays
        const ammo20x70ArrayLL1 = ["5d6e6a53a4b9361bd473feec", "5a38ebd9c4a282000d722a5b"];
        const ammo20x70ArrayLL2 = ["5d6e69c7a4b9360b6c0d54e4", "5d6e6a53a4b9361bd473feec"];
        const ammo20x70ArrayLL3 = ["5d6e6a5fa4b93614ec501745", "5d6e6a05a4b93618084f58d0"];

        // 23x75mm KS-23 Ammo Arrays
        const ammo23x75ArrayLL3 = ["5e85a9a6eacf8c039e4e2ac1", "5e85aa1a988a8701445df1f5"];

        // PMC Weighting Start
        const pmcEquipment = JSON.parse(
            JSON.stringify(this.databaseServer.bots.types.usec.inventory.equipment)
        );

        // PMC Armband Weighting
        pmcEquipment.ArmBand = {
            "5b3f16c486f7747c327f55f7": 5,
            "5b3f3ade86f7746b6b790d8e": 5,
            "5b3f3af486f774679e752c1f": 5,
            "5b3f3b0186f774021a2afef7": 5,
            "5b3f3b0e86f7746752107cda": 5,
            "619bdf9cc9546643a67df6f8": 4,
            "619bc61e86e01e16f839a999": 3,
            "619bdfd4c9546643a67df6fa": 5,
            "619bdd8886e01e16f839a99c": 5,
            "60b0f988c4449e4cb624c1da": 2,
            "5f9949d869e2777a0e779ba5": 3,
            "619bdef8c9546643a67df6f6": 2,
            "619bddc6c9546643a67df6ee": 1
        };

        this.databaseServer.bots.types.usec.inventory.equipment.ArmBand =
      pmcEquipment.ArmBand;
        this.databaseServer.bots.types.bear.inventory.equipment.ArmBand =
      pmcEquipment.ArmBand;

        // PMC Armor Vest Weighting
        pmcEquipment.ArmorVest = {
            "5648a7494bdc2d9d488b4583": 115,
            "59e7635f86f7742cbf2c1095": 100,
            "5df8a2ca86f7740bfe6df777": 100,
            "5ab8e4ed86f7742d8e50c7fa": 115,
            "5c0e5edb86f77461f55ed1f7": 110,
            "5c0e5bab86f77461f55ed1f3": 115,
            "5b44d22286f774172b0c9de8": 300,
            "5c0e655586f774045612eeb2": 500,
            "5c0e51be86f774598e797894": 500,
            "5c0e53c886f7747fa54205c7": 500,
            "5c0e57ba86f7747fa141986d": 500,
            "63737f448b28897f2802b874": 700,
            "5f5f41476bdad616ad46d631": 700,
            "5ca2151486f774244a3b8d30": 700,
            "5b44d0de86f774503d30cba8": 600,
            "5ab8e79e86f7742d8b372e78": 650,
            "5e9dacf986f774054d6b89f4": 700,
            "5ca21c6986f77479963115a7": 650,
            "5e4abb5086f77406975c9342": 450,
            "60a283193cb70855c43a381d": 550,
            "545cdb794bdc2d3a198b456a": 500,
            "5fd4c474dd870108a754b241": 600,
            "6038b4ca92ec1c3103795a0d": 600,
            "6038b4b292ec1c3103795a0b": 600,
            "5c0e625a86f7742d77340f62": 625,
            "5c0e541586f7747fa54205c9": 700,
            "64be79c487d1510151095552": 300,
            "64abd93857958b4249003418": 500,
            "609e8540d5c319764c2bc2e9": 650
        };

        this.databaseServer.bots.types.usec.inventory.equipment.ArmorVest =
      pmcEquipment.ArmorVest;
        this.databaseServer.bots.types.bear.inventory.equipment.ArmorVest =
      pmcEquipment.ArmorVest;

        // PMC Backpack Weighting
        pmcEquipment.Backpack = {
            "5ab8ee7786f7742d8f33f0b9": 6,
            "56e33680d2720be2748b4576": 6,
            "5ab8f04f86f774585f4237d8": 6,
            "544a5cde4bdc2d39388b456b": 10,
            "5e9dcf5986f7746c417435b3": 14,
            "60a2828e8689911a226117f9": 14,
            "5ca20d5986f774331e7c9602": 14,
            "5d5d940f86f7742797262046": 5,
            "6038d614d10cbf667352dd44": 8,
            "618bb76513f5097c8d5aa2d5": 14,
            "619cf0335771dd3c390269ae": 14,
            "545cdae64bdc2d39198b4568": 14,
            "5ab8ebf186f7742d8b372e80": 16,
            "5f5e467b0bc58666c37e7821": 14,
            "5f5e46b96bdad616ad46d613": 12,
            "618cfae774bb2d036a049e7c": 16,
            "62a1b7fbc30cfa1d366af586": 14,
            "639346cc1c8f182ad90c8972": 14,
            "5c0e774286f77468413cc5b2": 12,
            "5df8a4d786f77412672a1e3b": 12,
            "59e763f286f7742ee57895da": 14,
            "5b44c6ae86f7742d1627baea": 14,
            "628e1ffc83ec92260c0f437f": 14,
            "60a272cc93ef783291411d8e": 14
        };

        this.databaseServer.bots.types.usec.inventory.equipment.Backpack =
      pmcEquipment.Backpack;
        this.databaseServer.bots.types.bear.inventory.equipment.Backpack =
      pmcEquipment.Backpack;

        // PMC Earpiece Weighting
        pmcEquipment.Earpiece = {
            "5b432b965acfc47a8774094e": 1,
            "6033fa48ffd42c541047f728": 1,
            "5645bcc04bdc2d363b8b4572": 2,
            "5f60cd6cf2bcbb675b00dac6": 3,
            "5aa2ba71e5b5b000137b758f": 1,
            "628e4e576d783146b124c64d": 3
        };

        this.databaseServer.bots.types.usec.inventory.equipment.Earpiece =
      pmcEquipment.Earpiece;
        this.databaseServer.bots.types.bear.inventory.equipment.Earpiece =
      pmcEquipment.Earpiece;

        // PMC Eyewear Weighting
        pmcEquipment.Eyewear = {
            "5b432be65acfc433000ed01f": 1,
            "5aa2b986e5b5b00014028f4c": 1,
            "557ff21e4bdc2d89578b4586": 1,
            "5d5fca1ea4b93635fd598c07": 1,
            "603409c80ca681766b6a0fb2": 3,
            "5d6d2e22a4b9361bd5780d05": 1,
            "5c0d32fcd174af02a1659c75": 1,
            "62a61c988ec41a51b34758d5": 3,
            "62a09e410b9d3c46de5b6e78": 1,
            "61c18d83b00456371a66814b": 2
        };

        this.databaseServer.bots.types.usec.inventory.equipment.Eyewear =
      pmcEquipment.Eyewear;
        this.databaseServer.bots.types.bear.inventory.equipment.Eyewear =
      pmcEquipment.Eyewear;

        // PMC FaceCover Weighting
        pmcEquipment.FaceCover = {
            "572b7f1624597762ae139822": 2,
            "5ab8f39486f7745cd93a1cca": 10,
            "5b4325355acfc40019478126": 4,
            "5ab8f85d86f7745cd93a1cf5": 4,
            "5b432f3d5acfc4704b4a1dfb": 10,
            "5e54f79686f7744022011103": 1,
            "5fd8d28367cb5e077335170f": 1,
            "5e54f76986f7740366043752": 1,
            "62a09dd4621468534a797ac7": 1,
            "60a7ad3a0c5cb24b0134664a": 1,
            "60a7ad2a2198820d95707a2e": 1,
            "62963c18dbc8ab5f0d382d0b": 1,
            "62a09e08de7ac81993580532": 1
        };

        this.databaseServer.bots.types.usec.inventory.equipment.FaceCover =
      pmcEquipment.FaceCover;
        this.databaseServer.bots.types.bear.inventory.equipment.FaceCover =
      pmcEquipment.FaceCover;

        // PMC FirstPrimaryWeapon Weighting
        pmcEquipment.FirstPrimaryWeapon = {
            "57dc2fa62459775949412633": 10,
            "5839a40f24597726f856b511": 15,
            "583990e32459771419544dd2": 10,
            "5c07c60e0db834002330051f": 15,
            "587e02ff24597743df3deaeb": 15,
            "574d967124597745970e7c94": 15,
            "59e6152586f77473dc057aa1": 15,
            "59e6687d86f77411d949b251": 12,
            "5926bb2186f7744b1c6c6e60": 15,
            "5e00903ae9dc277128008b87": 12,
            "59984ab886f7743e98271174": 12,
            "57f4c844245977379d5c14d1": 10,
            "57d14d2524597714373db789": 10,
            "57f3c6bd24597738e730fa2f": 15,
            "5ea03f7400685063ec28bfa8": 18,
            "59f9cabd86f7743a10721f46": 10,
            "5e870397991fd70db46995c8": 12,
            "5a7828548dc32e5a9c28b516": 10,
            "61f7c9e189e6fb1a5e3ea78d": 10,
            "54491c4f4bdc2db1078b4568": 12,
            "5580223e4bdc2d1c128b457f": 14,
            "60db29ce99594040e04c4a27": 10,
            "5a38e6bac4a2826c6e06d79b": 3,
            "5bfd297f0db834001a669119": 15,
            "5de652c31b7e3716273428be": 8,
            "5644bd2b4bdc2d3b4c8b4572": 20,
            "59d6088586f774275f37482f": 25,
            "59ff346386f77477562ff5e2": 20,
            "5ab8e9fcd8ce870019439434": 20,
            "62e7c4fba689e8c9c50dfc38": 15,
            "623063e994fc3f7b302a9696": 18,
            "5447a9cd4bdc2dbd208b4567": 35,
            "628b5638ad252a16da6dd245": 30,
            "628b9c37a733087d0d7fe84b": 25,
            "5c501a4d2e221602b412b540": 22,
            "58948c8e86f77409493f7266": 25,
            "60339954d62c9b14ed777c06": 22,
            "5fc3e272f8b6a877a729eac5": 23,
            "6259b864ebedf17603599e88": 22,
            "56dee2bdd2720bc8328b4567": 20,
            "606dae0ab0e443224b421bb7": 25,
            "576165642459773c7a400233": 20,
            "5ae08f0a5acfc408fb1398a1": 25,
            "55801eed4bdc2d89578b4588": 22,
            "5ac66cb05acfc40198510a10": 30,
            "5ac66d015acfc400180ae6e4": 30,
            "5ac66d2e5acfc43b321d4b53": 30,
            "5ac66d725acfc43b321d4b60": 30,
            "5ac66d9b5acfc4001633997a": 30,
            "5ac4cd105acfc40016339859": 30,
            "5a0ec13bfcdbcb00165aa685": 30,
            "5abcbc27d8ce8700182eceeb": 30,
            "63171672192e68c5460cebc5": 30,
            "5c488a752e221602b412af63": 35,
            "5bb2475ed4351e00853264e3": 35,
            "5fbcc1d9016cce60e8341ab3": 35,
            "6184055050224f204c1da540": 30,
            "618428466ef05c2ce828f218": 30,
            "6410733d5dd49d77bd07847e": 30,
            "5f2a9575926fd9352339381f": 30,
            "643ea5b23db6f9f57107d9fd": 30,
            "5d43021ca4b9362eab4b5e25": 35,
            "5beed0f50db834001c062b12": 35,
            "5ba26383d4351e00334c93d9": 30,
            "5cc82d76e24e8d00134b4b83": 30,
            "62e14904c2699c0ec93adc47": 30,
            "5fb64bc92b1b027b1f50bcf2": 30,
            "5fc3f2d5900b1d5091531e57": 30,
            "5e848cc2988a8701445df1e8": 30,
            "6176aca650224f204c1da3fb": 30,
            "5aafa857e5b5b00018480968": 35,
            "5df8ce05b11454561e39243b": 35,
            "5c46fbd72e2216398b5a8c9c": 30,
            "57838ad32459774a17445cd2": 30,
            "588892092459774ac91d4b11": 33,
            "5bfea6e90db834001b7347f3": 33,
            "5df24cf80dee1b22f862e9bc": 30,
            "6499849fc93611967b034949": 40,
            "57c44b372459772d2b39b8ce": 40,
            "5cadfbf7ae92152ac412eeef": 40,
            "5dcbd56fdbd3d91b3e5468d5": 45,
            "65290f395ae2ae97b80fdf2d": 50,
            "606587252535c57a13424cfd": 45,
            "628a60ae6b1d481ff772e9c8": 45,
            "5b0bbe4e5acfc40dc528a72d": 40,
            "6183afd850224f204c1da514": 50,
            "6165ac306ef05c2ce828ef74": 40,
            "644674a13d52156624001fbc": 40,
            "64637076203536ad5600c990": 20,
            "64ca3d3954fc657e230529cc": 20,
            "5bd70322209c4d00d7167b8f": 40,
            "5fc22d7c187fea44d52eda44": 20,
            "5a367e5dc4a282000e49738f": 45,
            "627e14b21713922ded6f2c15": 20,
            "6275303a9f372d6ea97f9ec7": 10
        };

        this.databaseServer.bots.types.usec.inventory.equipment.FirstPrimaryWeapon =
      pmcEquipment.FirstPrimaryWeapon;
        this.databaseServer.bots.types.bear.inventory.equipment.FirstPrimaryWeapon =
      pmcEquipment.FirstPrimaryWeapon;

        // PMC Headwear Weighting
        pmcEquipment.Headwear = {
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
            "5d6d3716a4b9361bc8618872": 3,
            "5ca20ee186f774799474abc2": 3,
            "5aa7e276e5b5b000171d0647": 3,
            "5f60c74e3b85f6263c145586": 3,
            "5d5e9c74a4b9364855191c40": 3,
            "5ea17ca01412a1425304d1c0": 3,
            "5a154d5cfcdbcb001a3b00da": 3,
            "5e01ef6886f77445f643baa4": 3,
            "5c17a7ed2e2216152142459c": 3,
            "5b40e1525acfc4771e1c6611": 3,
            "5b40e2bc5acfc40016388216": 3
        };

        this.databaseServer.bots.types.usec.inventory.equipment.Headwear =
      pmcEquipment.Headwear;
        this.databaseServer.bots.types.bear.inventory.equipment.Headwear =
      pmcEquipment.Headwear;

        // PMC Holster Weighting
        pmcEquipment.Holster = {
            "5a7ae0c351dfba0017554310": 5,
            "5e81c3cbac2bb513793cdc75": 4,
            "5cadc190ae921500103bb3b6": 5,
            "576a581d2459771e7b1bc4f1": 3,
            "56d59856d2720bd8418b456a": 5,
            "56e0598dd2720bb5668b45a6": 3,
            "602a9740da11d6478d5a06dc": 4,
            "579204f224597773d619e051": 2,
            "5448bd6b4bdc2dfc2f8b4569": 3,
            "571a12c42459771f627b58a0": 2,
            "624c2e8614da335f1e034d8c": 2,
            "5abccb7dd8ce87001773e277": 3,
            "5a17f98cfcdbcb0980087290": 3,
            "63088377b5cd696784087147": 5,
            "6193a720f8ee7e52e42109ed": 5,
            "61a4c8884f95bc3b2c5dc96f": 4,
            "64748cb8de82c85eaf0a273a": 3,
            "5d3eb3b0a4b93615055e84d2": 5,
            "5d67abc1a4b93614ec50137f": 3,
            "5b1fa9b25acfc40018633c01": 5,
            "5f36a0e5fbf956000b716b65": 4,
            "59f98b4986f7746f546d2cef": 4,
            "633ec7c2a6918cb895019c6c": 4
        };

        this.databaseServer.bots.types.usec.inventory.equipment.Holster =
      pmcEquipment.Holster;
        this.databaseServer.bots.types.bear.inventory.equipment.Holster =
      pmcEquipment.Holster;

        // PMC Tactical Vest Weighting
        pmcEquipment.TacticalVest = {
            "5c0e446786f7742013381639": 6,
            "5929a2a086f7744f4b234d43": 4,
            "59e7643b86f7742cbf2c109a": 4,
            "5e4abc1f86f774069619fbaa": 2,
            "6034d0230ca681766b6a0fb5": 2,
            "64be7095047e826eae02b0c1": 4,
            "64be7110bf597ba84a0a41ea": 4,
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
            "628d0618d1ba6e4fa07ce5a4": 10,
            "5df8a42886f77412640e2e75": 8,
            "628cd624459354321c4b7fa2": 8,
            "609e860ebd219504d8507525": 8,
            "5b44cad286f77402a54ae7e5": 8,
            "5e4ac41886f77406a511c9a8": 8,
            "628b9c7d45122232a872358f": 8,
            "5c0e746986f7741453628fe5": 8,
            "5e9db13186f7742f845ee9d3": 8,
            "628baf0b967de16aab5a4f36": 8,
            "5f5f41f56760b4138443b352": 8
        };

        this.databaseServer.bots.types.usec.inventory.equipment.TacticalVest =
      pmcEquipment.TacticalVest;
        this.databaseServer.bots.types.bear.inventory.equipment.TacticalVest =
      pmcEquipment.TacticalVest;

        // PMC Ammo Weighting
        const pmcAmmo = JSON.parse(
            JSON.stringify(this.databaseServer.bots.types.usec.inventory.Ammo)
        );
        
        pmcAmmo.Caliber86x70 = {
            "5fc382b6d6fa9c00c571bbc3": 1,
            "5fc382c1016cce60e8341b20": 3,
            "5fc275cf85fd526b824a571a": 2,
            "5fc382a9d724d907e2077dab": 1
        };

        pmcAmmo.Caliber40x46 = {
            "5ede475b549eed7c6d5c18fb": 1
        };

        pmcAmmo.Caliber127x55 = {
            "5cadf6e5ae921500113bb973": 2,
            "5cadf6eeae921500134b2799": 3,
            "5cadf6ddae9215051e1c23b2": 2
        };

        pmcAmmo.Caliber762x54R = {
            "64b8f7968532cf95ee0a0dbf": 1, 
            "64b8f7b5389d7ffd620ccba2": 3, 
            "64b8f7c241772715af0f9c3d": 1,
            "5887431f2459777e1612938f": 1, 
            "5e023cf8186a883be655e54f": 3,
            "59e77a2386f7742ee578960a": 3,
            "560d61e84bdc2da74d8b4571": 3,
            "5e023d34e8a400319a28ed44": 2,
            "5e023d48186a883be655e551": 3
        };

        pmcAmmo.Caliber762x51 = {
            "5e023e88277cce2b522ff2b1": 1,
            "5e023e6e34d52a55c3304f71": 3,
            "5e023e53d4353e3302577c4c": 4,
            "58dd3ad986f77403051cba8f": 4,
            "5a6086ea4f39f99cd479502f": 4,
            "5a608bf24f39f98ffc77720e": 4
        };

        pmcAmmo.Caliber762x39 = {
            "59e4d3d286f774176a36250a": 1,
            "64b7af734b75259c590fa895": 3,
            "64b7af5a8532cf95ee0a0dbd": 6,
            "59e4d24686f7741776641ac7": 3,
            "59e4cf5286f7741778269d8a": 1,
            "5656d7c34bdc2d9d198b4587": 4,
            "64b7af434b75259c590fa893": 2,
            "59e0d99486f7744a32234762": 3,
            "601aa3d2b2bcb34913271e6d": 3
        };

        pmcAmmo.Caliber762x35 = {
            "6196365d58ef8c428c287da1": 1,
            "6196364158ef8c428c287d9f": 2,
            "5fbe3ffdf8b6a877a729ea82": 1,
            "619636be6db0f2477964e710": 2,
            "64b8725c4b75259c590fa899": 3,
            "5fd20ff893a8961fc660a954": 1
        };

        pmcAmmo.Caliber762x25TT = {
            "573602322459776445391df1": 1, 
            "573601b42459776410737435": 1, 
            "5735ff5c245977640e39ba7e": 1, 
            "5735fdcd2459776445391d61": 4,
            "5736026a245977644601dc61": 1, 
            "573603c924597764442bd9cb": 1, 
            "573603562459776430731618": 6
        };

        pmcAmmo.Caliber68x51 = {
            "6529302b8c26af6326029fb7": 1,
            "6529243824cbe3c74a05e5c1": 1
        };

        pmcAmmo.Caliber366TKM = {
            "59e6542b86f77411dc52a77a": 1,
            "59e655cb86f77411dc52a77b": 1,
            "59e6658b86f77411d949b250": 3,
            "5f0596629e22f464da6bbdd9": 3
        };

        pmcAmmo.Caliber556x45NATO = {
            "59e6927d86f77411da468256": 3,
            "59e6918f86f7746c9f75e849": 1,
            "59e68f6f86f7746c9f75e846": 1,
            "59e6920f86f77411d82aa167": 3,
            "60194943740c5d77f6705eea": 1,
            "54527a984bdc2d4e668b4567": 3,
            "59e6906286f7746c9f75e847": 3,
            "54527ac44bdc2d36668b4567": 2,
            "59e690b686f7746c9f75e848": 2,
            "601949593ae8f707c4608daa": 1
        };

        pmcAmmo.Caliber545x39 = {
            "56dff216d2720bbd668b4568": 1,
            "56dff338d2720bbd668b4569": 1,
            "56dff421d2720b5f5a8b4567": 3,
            "56dff0bed2720bb0668b4567": 2,
            "56dff4ecd2720b5f5a8b4568": 1,
            "56dff4a2d2720bbd668b456a": 1,
            "56dff2ced2720bb4668b4567": 4,
            "56dff3afd2720bba668b4567": 1,
            "61962b617c6c7b169525f168": 3,
            "56dfef82d2720bbd668b4567": 1,
            "56dff061d2720bb5668b4567": 3,
            "56dff026d2720bb8668b4567": 2,
            "5c0d5e4486f77478390952fe": 5
        };

        pmcAmmo.Caliber57x28 = {
            "5cc80f8fe4a949033b0224a2": 1,
            "5cc80f53e4a949000e1ea4f8": 1,
            "5cc80f38e4a949001152b560": 1
        };

        pmcAmmo.Caliber46x30 = {
            "64b6979341772715af0f9c39": 1,
            "5ba2678ad4351e44f824b344": 3,
            "5ba26835d4351e0035628ff5": 5
        };

        pmcAmmo.Caliber9x18PM = {
            "57371f8d24597761006c6a81": 1,
            "573719df2459775a626ccbc2": 1
        };

        pmcAmmo.Caliber9x19PARA = {
            "58864a4f2459770fcc257101": 3,
            "5c3df7d588a4501f290594e5": 1,
            "64b7bbb74b75259c590fa897": 1,
            "56d59d3ad2720bdb418b4577": 5,
            "5c925fa22e221601da359b7b": 1,
            "5efb0da7a29a85116f6ea05f": 1,
            "5c0d56a986f774449d5de529": 1
        };

        pmcAmmo.Caliber9x21 = {
            "5a26ac06c4a282000c5a90a8": 1,
            "5a26abfac4a28232980eabff": 1,
            "5a269f97c4a282000b151807": 3,
            "6576f93989f0062e741ba952": 1,
            "5a26ac0ec4a28200741e1e18": 1,
            "6576f4708ca9c4381d16cd9d": 1
        };

        pmcAmmo.Caliber9x39 = {
            "5c0d668f86f7747ccb7f13b2": 1,
            "61962d879bb3d20b0946d385": 1,
            "57a0e5022459774d1673f889": 1,
            "56dfef82d2720bbd668b4567": 1
        };

        pmcAmmo.Caliber9x33R = {
            "62330c18744e5e31df12f516": 1, 
            "62330b3ed4dc74626d570b95": 1
        };

        pmcAmmo.Caliber1143x23ACP = {
            "5efb0d4f4bc50b58e81710f3": 1,
            "5e81f423763d9f754677bf2e": 3,
            "5efb0fc6aeb21837e749c801": 3,
            "5efb0cabfb3e451d70735af5": 1,
            "5ea2a8e200685063ec28c05a": 1
        };

        pmcAmmo.Caliber12g = {
            "5d6e67fba4b9361bc73bc779": 1,
            "5d6e6869a4b9361c140bcfde": 1,
            "58820d1224597753c90aeb13": 1,
            "5d6e6806a4b936088465b17e": 1,
            "5c0d591486f7744c505b416f": 1,
            "5d6e68d1a4b93622fe60e845": 1,
            "5d6e68c4a4b9361b93413f79": 1,
            "5d6e6911a4b9361bd5780d52": 1,
            "5d6e68a8a4b9360b6c0d54e2": 1
        };

        pmcAmmo.Caliber20g = {
            "5d6e6a53a4b9361bd473feec": 1,
            "5a38ebd9c4a282000d722a5b": 1,
            "5d6e69c7a4b9360b6c0d54e4": 1,
            "5d6e6a5fa4b93614ec501745": 1,
            "5d6e6a05a4b93618084f58d0": 1
        };

        pmcAmmo.Caliber23x75 = {
            "5e85a9a6eacf8c039e4e2ac1": 1,
            "5e85aa1a988a8701445df1f5": 1
        };

        this.databaseServer.bots.types.usec.inventory.Ammo = pmcAmmo;
        this.databaseServer.bots.types.bear.inventory.Ammo = pmcAmmo;

        // Progression Loyalty Level List Start
        const levelRange = this.modConfig.levelRange;
        const pocketLoot = this.modConfig.pocketLoot;
        const backpackLoot = this.modConfig.backpackLoot;
        const vestLoot = this.modConfig.vestLoot;

        const progressionWhitelistLL1PMC: EquipmentFilters = {
            weaponModLimits: {
                scopeLimit: 1,
                lightLaserLimit: 1
            },
            weaponSightWhitelist: {
                "5447b5fc4bdc2d87278b4567": [
                    "55818ad54bdc2ddc698b4569",
                    "55818acf4bdc2dde698b456b",
                    "55818ac54bdc2d5b648b456e",
                    "55818add4bdc2d5b648b456f",
                    "55818aeb4bdc2ddc698b456a"
                ],
                "5447b5f14bdc2d61278b4567": [
                    "55818ad54bdc2ddc698b4569",
                    "55818acf4bdc2dde698b456b",
                    "55818ac54bdc2d5b648b456e",
                    "55818add4bdc2d5b648b456f",
                    "55818aeb4bdc2ddc698b456a"
                ],
                "5447bedf4bdc2d87278b4568": [
                    "55818ad54bdc2ddc698b4569",
                    "55818add4bdc2d5b648b456f",
                    "55818aeb4bdc2ddc698b456a"
                ],
                "5447bed64bdc2d97278b4568": [
                    "55818ad54bdc2ddc698b4569",
                    "55818acf4bdc2dde698b456b",
                    "55818ac54bdc2d5b648b456e",
                    "55818add4bdc2d5b648b456f",
                    "55818aeb4bdc2ddc698b456a"
                ],
                "5447b6194bdc2d67278b4567": [
                    "55818ad54bdc2ddc698b4569",
                    "55818ae44bdc2dde698b456c",
                    "55818ac54bdc2d5b648b456e",
                    "55818aeb4bdc2ddc698b456a",
                    "55818add4bdc2d5b648b456f"
                ],
                "5447b5cf4bdc2d65278b4567": [
                    "55818ad54bdc2ddc698b4569",
                    "55818acf4bdc2dde698b456b",
                    "55818ac54bdc2d5b648b456e"
                ],
                "617f1ef5e8b54b0998387733": [
                    "55818ad54bdc2ddc698b4569",
                    "55818acf4bdc2dde698b456b",
                    "55818ac54bdc2d5b648b456e"
                ],
                "5447b6094bdc2dc3278b4567": [
                    "55818ad54bdc2ddc698b4569",
                    "55818acf4bdc2dde698b456b",
                    "55818ac54bdc2d5b648b456e"
                ],
                "5447b5e04bdc2d62278b4567": [
                    "55818ad54bdc2ddc698b4569",
                    "55818acf4bdc2dde698b456b",
                    "55818ac54bdc2d5b648b456e"
                ],
                "5447b6254bdc2dc3278b4568": [
                    "55818ae44bdc2dde698b456c",
                    "55818ac54bdc2d5b648b456e",
                    "55818aeb4bdc2ddc698b456a",
                    "55818add4bdc2d5b648b456f"
                ]
            },
            nvgIsActiveChanceDayPercent: 5,
            nvgIsActiveChanceNightPercent: 95,
            faceShieldIsActiveChancePercent: 90,
            lightIsActiveDayChancePercent: 15,
            lightIsActiveNightChancePercent: 60,
            laserIsActiveChancePercent: 100,
            randomisation: [
                {
                    levelRange: {
                        min: 1,
                        max: 15
                    },
                    generation: {
                        drugs: {
                            weights: {
                                0: 1,
                                1: 1
                            },
                            whitelist: [
                                "544fb37f4bdc2dee738b4567",
                                "590c695186f7741e566b64a2"
                            ]
                        },
                        grenades: {
                            weights: {
                                0: 1,
                                1: 2,
                                2: 2
                            },
                            whitelist: [
                                "5710c24ad2720bc3458b45a3",
                                "58d3db5386f77426186285a0",
                                "5448be9a4bdc2dfd2f8b456a"
                            ]
                        },
                        healing: {
                            weights: {
                                0: 0,
                                1: 1,
                                2: 2,
                                3: 3,
                                4: 3
                            },
                            whitelist: [
                                "5e831507ea0a7c419c2f9bd9",
                                "5755356824597772cb798962",
                                "590c661e86f7741e566b646a",
                                "544fb3364bdc2d34748b456a",
                                "544fb25a4bdc2dfb738b4567",
                                "5d02778e86f774203e7dedbe"
                            ]
                        },
                        backpackLoot: {
                            weights: {
                                0: backpackLoot.weights[0],
                                1: backpackLoot.weights[1],
                                2: backpackLoot.weights[2],
                                3: backpackLoot.weights[3],
                                4: backpackLoot.weights[4],
                                5: backpackLoot.weights[5]
                            },
                            whitelist: backpackLoot.whitelist
                        },
                        pocketLoot: {
                            weights: {
                                0: pocketLoot.weights[0],
                                1: pocketLoot.weights[1],
                                2: pocketLoot.weights[2],
                                3: pocketLoot.weights[3]
                            },
                            whitelist: pocketLoot.whitelist
                        },
                        vestLoot: {
                            weights: {
                                0: vestLoot.weights[0],
                                1: vestLoot.weights[1],
                                2: vestLoot.weights[2],
                                3: vestLoot.weights[3],
                                4: vestLoot.weights[4]
                            },
                            whitelist: vestLoot.whitelist
                        },
                        magazines: {
                            weights: {
                                0: 0,
                                1: 1,
                                2: 2,
                                3: 3
                            },
                            whitelist: []
                        },
                        stims: {
                            weights: {
                                0: 1
                            },
                            whitelist: []
                        }
                    },
                    equipment: {
                        ArmBand: 100,
                        FirstPrimaryWeapon: 100,
                        Holster: 35,
                        Earpiece: 100,
                        Eyewear: 50,
                        Backpack: 69,
                        Headwear: 100,
                        FaceCover: 100,
                        clothing: 100
                    },
                    mods: {
                        mod_barrel: 85,
                        mod_bipod: 20,
                        mod_flashlight: 90,
                        mod_foregrip: 100,
                        mod_handguard: 80,
                        mod_launcher: 0,
                        mod_magazine: 75,
                        mod_mount: 50,
                        mod_mount_000: 25,
                        mod_mount_001: 25,
                        mod_mount_002: 25,
                        mod_mount_003: 25,
                        mod_mount_004: 25,
                        mod_mount_005: 25,
                        mod_mount_006: 25,
                        mod_muzzle: 60,
                        mod_muzzle_000: 20,
                        mod_muzzle_001: 20,
                        mod_equipment: 60,
                        mod_equipment_000: 20,
                        mod_equipment_001: 20,
                        mod_equipment_002: 20,
                        mod_nvg: 50,
                        mod_pistol_grip_akms: 15,
                        mod_pistol_grip: 70,
                        mod_scope: 100,
                        mod_scope_000: 25,
                        mod_scope_001: 25,
                        mod_scope_002: 25,
                        mod_scope_003: 25,
                        mod_tactical: 100,
                        mod_tactical001: 30,
                        mod_tactical002: 30,
                        mod_tactical_000: 30,
                        mod_tactical_001: 30,
                        mod_tactical_002: 30,
                        mod_tactical_003: 30,
                        mod_tactical_2: 50
                    },
                    randomisedWeaponModSlots: [
                        "mod_scope",
                        "mod_scope_000",
                        "mod_scope_001",
                        "mod_scope_002",
                        "mod_scope_003",
                        "mod_handguard",
                        "mod_magazine",
                        "mod_muzzle",
                        "mod_bipod",
                        "mod_muzzle_000",
                        "mod_charge",
                        "mod_reciever",
                        "mod_trigger",
                        "mod_gas_block",
                        "mod_pistol_grip",
                        "mod_pistol_grip_akms",
                        "mod_foregrip",
                        "mod_stock",
                        "mod_stock_000",
                        "mod_stock_001",
                        "mod_stock_akms",
                        "mod_stock_axis",
                        "mod_mount_000",
                        "mod_mount_001",
                        "mod_mount_002",
                        "mod_mount_003",
                        "mod_mount_004",
                        "mod_mount_005",
                        "mod_mount_006",
                        "mod_tactical",
                        "mod_tactical_2",
                        "mod_tactical_000",
                        "mod_tactical_001",
                        "mod_tactical_002",
                        "mod_tactical_003"
                    ],
                    randomisedArmorSlots: ["Headwear"]
                },
                {
                    levelRange: {
                        min: 16,
                        max: 33
                    },
                    generation: {
                        drugs: {
                            weights: {
                                0: 1,
                                1: 1
                            },
                            whitelist: [
                                "5755383e24597772cb798966",
                                "590c695186f7741e566b64a2"
                            ]
                        },
                        grenades: {
                            weights: {
                                0: 0,
                                1: 0,
                                2: 1,
                                3: 2,
                                4: 2
                            },
                            whitelist: [
                                "5710c24ad2720bc3458b45a3",
                                "58d3db5386f77426186285a0",
                                "5448be9a4bdc2dfd2f8b456a",
                                "617fd91e5539a84ec44ce155",
                                "618a431df1eb8e24b8741deb",
                                "5e32f56fcb6d5863cc5e5ee4",
                                "5e340dcdcb6d5863cc5e5efb"
                            ]
                        },
                        healing: {
                            weights: {
                                0: 0,
                                1: 0,
                                2: 2,
                                3: 4,
                                4: 5,
                                5: 2
                            },
                            whitelist: [
                                "60098af40accd37ef2175f27",
                                "5751a25924597722c463c472",
                                "5af0454c86f7746bf20992e8",
                                "590c678286f77426c9660122",
                                "544fb45d4bdc2dee738b4568",
                                "5d02778e86f774203e7dedbe"
                            ]
                        },
                        backpackLoot: {
                            weights: {
                                0: backpackLoot.weights[0],
                                1: backpackLoot.weights[1],
                                2: backpackLoot.weights[2],
                                3: backpackLoot.weights[3],
                                4: backpackLoot.weights[4],
                                5: backpackLoot.weights[5]
                            },
                            whitelist: backpackLoot.whitelist
                        },
                        pocketLoot: {
                            weights: {
                                0: pocketLoot.weights[0],
                                1: pocketLoot.weights[1],
                                2: pocketLoot.weights[2],
                                3: pocketLoot.weights[3]
                            },
                            whitelist: pocketLoot.whitelist
                        },
                        vestLoot: {
                            weights: {
                                0: vestLoot.weights[0],
                                1: vestLoot.weights[1],
                                2: vestLoot.weights[2],
                                3: vestLoot.weights[3],
                                4: vestLoot.weights[4]
                            },
                            whitelist: vestLoot.whitelist
                        },
                        magazines: {
                            weights: {
                                0: 0,
                                1: 0,
                                2: 2,
                                3: 3,
                                4: 1
                            },
                            whitelist: []
                        },
                        stims: {
                            weights: {
                                0: 3,
                                1: 1
                            },
                            whitelist: [
                                "544fb3f34bdc2d03748b456a",
                                "5c0e531286f7747fa54205c2",
                                "5fca138c2a7b221b2852a5c6",
                                "5c10c8fd86f7743d7d706df3",
                                "5c0e530286f7747fa1419862",
                                "5ed515f6915ec335206e4152",
                                "5ed5160a87bb8443d10680b5",
                                "5ed515c8d380ab312177c0fa",
                                "5ed5166ad380ab312177c100",
                                "637b60c3b7afa97bfc3d7001"
                            ]
                        }
                    },
                    equipment: {
                        ArmBand: 100,
                        FirstPrimaryWeapon: 100,
                        Holster: 30,
                        Earpiece: 100,
                        Eyewear: 50,
                        Backpack: 90,
                        Headwear: 100,
                        FaceCover: 100,
                        clothing: 100
                    },
                    randomisedWeaponModSlots: [
                        "mod_scope",
                        "mod_scope_000",
                        "mod_scope_001",
                        "mod_scope_002",
                        "mod_scope_003",
                        "mod_handguard",
                        "mod_magazine",
                        "mod_muzzle",
                        "mod_bipod",
                        "mod_muzzle_000",
                        "mod_charge",
                        "mod_reciever",
                        "mod_trigger",
                        "mod_gas_block",
                        "mod_pistol_grip",
                        "mod_pistol_grip_akms",
                        "mod_foregrip",
                        "mod_stock",
                        "mod_stock_000",
                        "mod_stock_001",
                        "mod_stock_akms",
                        "mod_stock_axis",
                        "mod_mount_000",
                        "mod_mount_001",
                        "mod_mount_002",
                        "mod_mount_003",
                        "mod_mount_004",
                        "mod_mount_005",
                        "mod_mount_006",
                        "mod_tactical",
                        "mod_tactical_2",
                        "mod_tactical_000",
                        "mod_tactical_001",
                        "mod_tactical_002",
                        "mod_tactical_003"
                    ],
                    randomisedArmorSlots: ["Headwear"]
                },
                {
                    levelRange: {
                        min: 34,
                        max: 42
                    },
                    generation: {
                        drugs: {
                            weights: {
                                0: 1,
                                1: 1
                            },
                            whitelist: [
                                "5af0548586f7743a532b7e99",
                                "5755383e24597772cb798966"
                            ]
                        },
                        grenades: {
                            weights: {
                                0: 0,
                                1: 0,
                                2: 2,
                                3: 3,
                                4: 3
                            },
                            whitelist: [
                                "5710c24ad2720bc3458b45a3",
                                "58d3db5386f77426186285a0",
                                "5448be9a4bdc2dfd2f8b456a",
                                "617fd91e5539a84ec44ce155",
                                "618a431df1eb8e24b8741deb",
                                "5e32f56fcb6d5863cc5e5ee4",
                                "5e340dcdcb6d5863cc5e5efb",
                                "5d02797c86f774203f38e30a"
                            ]
                        },
                        healing: {
                            weights: {
                                0: 0,
                                1: 0,
                                2: 0,
                                3: 1,
                                4: 1,
                                5: 3
                            },
                            whitelist: [
                                "5e8488fa988a8701445df1e4",
                                "5751a25924597722c463c472",
                                "5af0454c86f7746bf20992e8",
                                "590c678286f77426c9660122",
                                "544fb45d4bdc2dee738b4568",
                                "60098ad7c2240c0fe85c570a",
                                "590c657e86f77412b013051d"
                            ]
                        },
                        backpackLoot: {
                            weights: {
                                0: backpackLoot.weights[0],
                                1: backpackLoot.weights[1],
                                2: backpackLoot.weights[2],
                                3: backpackLoot.weights[3],
                                4: backpackLoot.weights[4],
                                5: backpackLoot.weights[5]
                            },
                            whitelist: backpackLoot.whitelist
                        },
                        pocketLoot: {
                            weights: {
                                0: pocketLoot.weights[0],
                                1: pocketLoot.weights[1],
                                2: pocketLoot.weights[2],
                                3: pocketLoot.weights[3]
                            },
                            whitelist: pocketLoot.whitelist
                        },
                        vestLoot: {
                            weights: {
                                0: vestLoot.weights[0],
                                1: vestLoot.weights[1],
                                2: vestLoot.weights[2],
                                3: vestLoot.weights[3],
                                4: vestLoot.weights[4]
                            },
                            whitelist: vestLoot.whitelist
                        },
                        magazines: {
                            weights: {
                                0: 0,
                                1: 0,
                                2: 0,
                                3: 1,
                                4: 3,
                                5: 3,
                                6: 2
                            },
                            whitelist: []
                        },
                        stims: {
                            weights: {
                                0: 1,
                                1: 1,
                                2: 1
                            },
                            whitelist: [
                                "544fb3f34bdc2d03748b456a",
                                "5c0e531286f7747fa54205c2",
                                "5fca138c2a7b221b2852a5c6",
                                "5c10c8fd86f7743d7d706df3",
                                "5c0e530286f7747fa1419862",
                                "5ed515f6915ec335206e4152",
                                "5ed5160a87bb8443d10680b5",
                                "5ed515c8d380ab312177c0fa",
                                "5ed5166ad380ab312177c100",
                                "637b60c3b7afa97bfc3d7001",
                                "5ed515e03a40a50460332579",
                                "637b620db7afa97bfc3d7009",
                                "5c0e534186f7747fa1419867",
                                "637b6251104668754b72f8f9",
                                "637b6179104668754b72f8f5",
                                "5ed515ece452db0eb56fc028",
                                "5c0e531d86f7747fa23f4d42",
                                "5ed51652f6c34d2cc26336a1",
                                "5fca13ca637ee0341a484f46"
                            ]
                        }
                    },
                    equipment: {
                        ArmBand: 100,
                        FirstPrimaryWeapon: 100,
                        Holster: 60,
                        Earpiece: 100,
                        Eyewear: 100,
                        Backpack: 100,
                        Headwear: 100,
                        FaceCover: 100,
                        clothing: 100
                    },
                    randomisedWeaponModSlots: [
                        "mod_scope",
                        "mod_scope_000",
                        "mod_scope_001",
                        "mod_scope_002",
                        "mod_scope_003",
                        "mod_handguard",
                        "mod_magazine",
                        "mod_muzzle",
                        "mod_bipod",
                        "mod_muzzle_000",
                        "mod_charge",
                        "mod_reciever",
                        "mod_trigger",
                        "mod_gas_block",
                        "mod_pistol_grip",
                        "mod_pistol_grip_akms",
                        "mod_foregrip",
                        "mod_stock",
                        "mod_stock_000",
                        "mod_stock_001",
                        "mod_stock_akms",
                        "mod_stock_axis",
                        "mod_mount_000",
                        "mod_mount_001",
                        "mod_mount_002",
                        "mod_mount_003",
                        "mod_mount_004",
                        "mod_mount_005",
                        "mod_mount_006",
                        "mod_tactical",
                        "mod_tactical_2",
                        "mod_tactical_000",
                        "mod_tactical_001",
                        "mod_tactical_002",
                        "mod_tactical_003"
                    ],
                    randomisedArmorSlots: ["Headwear"]
                },
                {
                    levelRange: {
                        min: 43,
                        max: 100
                    },
                    generation: {
                        drugs: {
                            weights: {
                                0: 1,
                                1: 1
                            },
                            whitelist: [
                                "5755383e24597772cb798966",
                                "5af0548586f7743a532b7e99",
                                "5751a89d24597722aa0e8db0"
                            ]
                        },
                        grenades: {
                            weights: {
                                0: 0,
                                1: 0,
                                2: 0,
                                3: 1,
                                4: 1,
                                5: 1
                            },
                            whitelist: [
                                "5710c24ad2720bc3458b45a3",
                                "58d3db5386f77426186285a0",
                                "5448be9a4bdc2dfd2f8b456a",
                                "617fd91e5539a84ec44ce155",
                                "618a431df1eb8e24b8741deb",
                                "5e32f56fcb6d5863cc5e5ee4",
                                "5e340dcdcb6d5863cc5e5efb"
                            ]
                        },
                        healing: {
                            weights: {
                                0: 0,
                                1: 0,
                                2: 0,
                                3: 1,
                                4: 1,
                                5: 1
                            },
                            whitelist: [
                                "5e8488fa988a8701445df1e4",
                                "5751a25924597722c463c472",
                                "5af0454c86f7746bf20992e8",
                                "60098ad7c2240c0fe85c570a",
                                "590c657e86f77412b013051d",
                                "5d02797c86f774203f38e30a"
                            ]
                        },
                        backpackLoot: {
                            weights: {
                                0: backpackLoot.weights[0],
                                1: backpackLoot.weights[1],
                                2: backpackLoot.weights[2],
                                3: backpackLoot.weights[3],
                                4: backpackLoot.weights[4],
                                5: backpackLoot.weights[5]
                            },
                            whitelist: backpackLoot.whitelist
                        },
                        pocketLoot: {
                            weights: {
                                0: pocketLoot.weights[0],
                                1: pocketLoot.weights[1],
                                2: pocketLoot.weights[2],
                                3: pocketLoot.weights[3]
                            },
                            whitelist: pocketLoot.whitelist
                        },
                        vestLoot: {
                            weights: {
                                0: vestLoot.weights[0],
                                1: vestLoot.weights[1],
                                2: vestLoot.weights[2],
                                3: vestLoot.weights[3],
                                4: vestLoot.weights[4]
                            },
                            whitelist: vestLoot.whitelist
                        },
                        magazines: {
                            weights: {
                                0: 0,
                                1: 0,
                                2: 0,
                                3: 0,
                                4: 1,
                                5: 2,
                                6: 2,
                                7: 2,
                                8: 1
                            },
                            whitelist: []
                        },
                        stims: {
                            weights: {
                                0: 1,
                                1: 1,
                                2: 1
                            },
                            whitelist: [
                                "544fb3f34bdc2d03748b456a",
                                "5c0e531286f7747fa54205c2",
                                "5fca138c2a7b221b2852a5c6",
                                "5c10c8fd86f7743d7d706df3",
                                "5c0e530286f7747fa1419862",
                                "5ed515f6915ec335206e4152",
                                "5ed5160a87bb8443d10680b5",
                                "5ed515c8d380ab312177c0fa",
                                "5ed5166ad380ab312177c100",
                                "637b60c3b7afa97bfc3d7001",
                                "5ed515e03a40a50460332579",
                                "637b620db7afa97bfc3d7009",
                                "5c0e534186f7747fa1419867",
                                "637b6251104668754b72f8f9",
                                "637b6179104668754b72f8f5",
                                "5ed515ece452db0eb56fc028",
                                "5c0e531d86f7747fa23f4d42",
                                "5ed51652f6c34d2cc26336a1",
                                "5fca13ca637ee0341a484f46",
                                "5c0e533786f7747fa23f4d47",
                                "637b612fb7afa97bfc3d7005"
                            ]
                        }
                    },
                    equipment: {
                        ArmBand: 100,
                        FirstPrimaryWeapon: 100,
                        Holster: 80,
                        Earpiece: 100,
                        Eyewear: 100,
                        Backpack: 100,
                        Headwear: 100,
                        FaceCover: 100,
                        clothing: 100
                    },
                    randomisedWeaponModSlots: [
                        "mod_scope",
                        "mod_scope_000",
                        "mod_scope_001",
                        "mod_scope_002",
                        "mod_scope_003",
                        "mod_handguard",
                        "mod_magazine",
                        "mod_muzzle",
                        "mod_bipod",
                        "mod_muzzle_000",
                        "mod_charge",
                        "mod_reciever",
                        "mod_trigger",
                        "mod_gas_block",
                        "mod_pistol_grip",
                        "mod_pistol_grip_akms",
                        "mod_foregrip",
                        "mod_stock",
                        "mod_stock_000",
                        "mod_stock_001",
                        "mod_stock_akms",
                        "mod_stock_axis",
                        "mod_mount_000",
                        "mod_mount_001",
                        "mod_mount_002",
                        "mod_mount_003",
                        "mod_mount_004",
                        "mod_mount_005",
                        "mod_mount_006",
                        "mod_tactical",
                        "mod_tactical_2",
                        "mod_tactical_000",
                        "mod_tactical_001",
                        "mod_tactical_002",
                        "mod_tactical_003"
                    ],
                    randomisedArmorSlots: ["Headwear"]
                }
            ],
            blacklist: [
                {
                    levelRange: {
                        min: 1,
                        max: 100
                    },
                    equipment: {},
                    cartridge: {}
                }
            ],
            weightingAdjustmentsByPlayerLevel: [],
            whitelist: [
                {
                    levelRange: {
                        min: levelRange.loyalty1.min,
                        max: levelRange.loyalty1.max
                    },
                    equipment: {
                        FirstPrimaryWeapon: [...primaryWeaponArrayLL1],
                        Holster: [...holsterArrayLL1],
                        Backpack: [...backpackArrayLL1],
                        TacticalVest: [...tacticalVestArrayLL1],
                        Earpiece: [...earpieceArrayLL1],
                        Headwear: [...headwearArrayLL1],
                        ArmorVest: [...armorVestArrayLL1],
                        Eyewear: [...eyewearArrayLL1],
                        ArmBand: [...armBandArrayLL1],
                        FaceCover: [...faceCoverArrayLL1]
                    },
                    cartridge: {
                        Caliber762x54R: [...ammo762x54ArrayLL1],
                        Caliber762x51: [...ammo762x51ArrayLL1],
                        Caliber762x39: [...ammo762x39ArrayLL1],
                        Caliber762x35: [...ammo762x35ArrayLL1],
                        Caliber762x25TT: [...ammo762x25TTArrayLL1],
                        Caliber366TKM: [...ammo366TKMArrayLL1],
                        Caliber556x45NATO: [...ammo556x45ArrayLL1],
                        Caliber545x39: [...ammo545x39ArrayLL1],
                        Caliber1143x23ACP: [...ammo1143x23ACPArrayLL1],
                        Caliber9x19PARA: [...ammo9x19ArrayLL1],
                        Caliber9x18PM: [...ammo9x18ArrayLL1],
                        Caliber12g: [...ammo12x70ArrayLL1],
                        Caliber20g: [...ammo20x70ArrayLL1]
                    }
                }
            ],
            weightingAdjustmentsByBotLevel: [],
            forceStock: false
        };

        const progressionWhitelistLL2PMC: EquipmentFilterDetails = {
            levelRange: {
                min: levelRange.loyalty2.min,
                max: levelRange.loyalty2.max
            },
            equipment: {
                FirstPrimaryWeapon: [...primaryWeaponArrayLL2],
                Holster: [...holsterArrayLL2],
                Backpack: [...backpackArrayLL2],
                TacticalVest: [...tacticalVestArrayLL2],
                Earpiece: [...earpieceArrayLL2],
                Headwear: [...headwearArrayLL2],
                ArmorVest: [...armorVestArrayLL2],
                Eyewear: [...eyewearArrayLL2],
                ArmBand: [...armBandArrayLL2],
                FaceCover: [...faceCoverArrayLL2]
            },
            cartridge: {
                Caliber127x55: [...ammo127x55ArrayLL2],
                Caliber762x54R: [...ammo762x54ArrayLL2],
                Caliber762x51: [...ammo762x51ArrayLL2],
                Caliber762x39: [...ammo762x39ArrayLL2],
                Caliber762x35: [...ammo762x35ArrayLL2],
                Caliber762x25TT: [...ammo762x25TTArrayLL2],
                Caliber366TKM: [...ammo366TKMArrayLL2],
                Caliber556x45NATO: [...ammo556x45ArrayLL2],
                Caliber545x39: [...ammo545x39ArrayLL2],
                Caliber57x28: [...ammo57x28ArrayLL2],
                Caliber1143x23ACP: [...ammo1143x23ACPArrayLL2],
                Caliber9x33R: [...ammo9x33RArrayLL2],
                Caliber9x19PARA: [...ammo9x19ArrayLL2],
                Caliber9x18PM: [...ammo9x18ArrayLL2],
                Caliber12g: [...ammo12x70ArrayLL2],
                Caliber20g: [...ammo20x70ArrayLL2]
            }
        };

        const progressionWhitelistLL3PMC: EquipmentFilterDetails = {
            levelRange: {
                min: levelRange.loyalty3.min,
                max: levelRange.loyalty3.max
            },
            equipment: {
                FirstPrimaryWeapon: [...primaryWeaponArrayLL3],
                Holster: [...holsterArrayLL3],
                Backpack: [...backpackArrayLL3],
                TacticalVest: [...tacticalVestArrayLL3],
                Earpiece: [...earpieceArrayLL3],
                Headwear: [...headwearArrayLL3],
                ArmorVest: [...armorVestArrayLL3],
                Eyewear: [...eyewearArrayLL3],
                ArmBand: [...armBandArrayLL3],
                FaceCover: [...faceCoverArrayLL3]
            },
            cartridge: {
                Caliber127x55: [...ammo127x55ArrayLL3],
                Caliber762x54R: [...ammo762x54ArrayLL3],
                Caliber762x51: [...ammo762x51ArrayLL3],
                Caliber762x39: [...ammo762x39ArrayLL3],
                Caliber762x35: [...ammo762x35ArrayLL3],
                Caliber68x51: [...ammo68x51ArrayLL3],
                Caliber366TKM: [...ammo366TKMArrayLL3],
                Caliber556x45NATO: [...ammo556x45ArrayLL3],
                Caliber545x39: [...ammo545x39ArrayLL3],
                Caliber57x28: [...ammo57x28ArrayLL3],
                Caliber46x30: [...ammo46x30ArrayLL3],
                Caliber1143x23ACP: [...ammo1143x23ACPArrayLL3],
                Caliber9x39: [...ammo9x39ArrayLL3],
                Caliber9x33R: [...ammo9x33RArrayLL2],
                Caliber9x21: [...ammo9x21ArrayLL3],
                Caliber9x19PARA: [...ammo9x19ArrayLL3],
                Caliber9x18PM: [...ammo9x18ArrayLL2],
                Caliber12g: [...ammo12x70ArrayLL3],
                Caliber20g: [...ammo20x70ArrayLL3],
                Caliber23x75: [...ammo23x75ArrayLL3]
            }
        };

        const progressionWhitelistLL4PMC: EquipmentFilterDetails = {
            levelRange: {
                min: levelRange.loyalty4.min,
                max: 100
            },
            equipment: {
                FirstPrimaryWeapon: [...primaryWeaponArrayLL4],
                Holster: [...holsterArrayLL4],
                Backpack: [...backpackArrayLL4],
                TacticalVest: [...tacticalVestArrayLL4],
                Earpiece: [...earpieceArrayLL4],
                Headwear: [...headwearArrayLL4],
                ArmorVest: [...armorVestArrayLL4],
                Eyewear: [...eyewearArrayLL4],
                ArmBand: [...armBandArrayLL4],
                FaceCover: [...faceCoverArrayLL4]
            },
            cartridge: {
                Caliber40x46: [...ammo40x46ArrayLL4],
                Caliber127x55: [...ammo127x55ArrayLL4],
                Caliber86x70: [...ammo86x70ArrayLL4],
                Caliber762x54R: [...ammo762x54ArrayLL4],
                Caliber762x51: [...ammo762x51ArrayLL4],
                Caliber762x39: [...ammo762x39ArrayLL4],
                Caliber762x35: [...ammo762x35ArrayLL4],
                Caliber68x51: [...ammo68x51ArrayLL4],
                Caliber366TKM: [...ammo366TKMArrayLL3],
                Caliber556x45NATO: [...ammo556x45ArrayLL4],
                Caliber545x39: [...ammo545x39ArrayLL4],
                Caliber57x28: [...ammo57x28ArrayLL4],
                Caliber46x30: [...ammo46x30ArrayLL4],
                Caliber1143x23ACP: [...ammo1143x23ACPArrayLL4],
                Caliber9x39: [...ammo9x39ArrayLL4],
                Caliber9x21: [...ammo9x21ArrayLL4],
                Caliber9x19PARA: [...ammo9x19ArrayLL3],
                Caliber9x18PM: [...ammo9x18ArrayLL2],
                Caliber12g: [...ammo12x70ArrayLL3],
                Caliber20g: [...ammo20x70ArrayLL3],
                Caliber23x75: [...ammo23x75ArrayLL3]
            }
        };

        const pmc = this.botConfig.equipment.pmc.whitelist;
        this.botConfig.equipment.pmc.weightingAdjustmentsByBotLevel = null;
        this.botConfig.equipment.pmc.weightingAdjustmentsByPlayerLevel = null;
        this.botConfig.equipment.pmc = null;
        this.botConfig.equipment.pmc = progressionWhitelistLL1PMC;
        pmc.push(progressionWhitelistLL2PMC);
        pmc.push(progressionWhitelistLL3PMC);
        pmc.push(progressionWhitelistLL4PMC);
    }
}
