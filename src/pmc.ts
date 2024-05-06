/* eslint-disable @typescript-eslint/naming-convention */
import { EquipmentFilterDetails, EquipmentFilters, IBotConfig } from "@spt-aki/models/spt/config/IBotConfig";
import { IPmcConfig } from "@spt-aki/models/spt/config/IPmcConfig";
import { IDatabaseTables } from "@spt-aki/models/spt/server/IDatabaseTables";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { PmcConfig } from "../config/ts/pmc";
import { ProfileHelper } from "@spt-aki/helpers/ProfileHelper";

export class PMCs 
{
    private botConfig: IBotConfig;
    private pmcConfig: IPmcConfig;
    private databaseServer: IDatabaseTables;
    private profileHelper: ProfileHelper;
    private modConfig: PmcConfig = require("../config/pmc.json");

    constructor(botConfig: IBotConfig, pmcConfig: IPmcConfig, databaseServer: DatabaseServer, profileHelper: ProfileHelper) 
    {
        this.botConfig = botConfig;
        this.pmcConfig = pmcConfig;
        this.databaseServer = databaseServer.getTables();
        this.profileHelper = profileHelper;
    }

    public updatePmcs(): void 
    {
        this.generatePmcs();
    }

    private generatePmcs()
    {
    // Set Bot Level Delta to 1 from Default of 10
    // Doing this fixes the issue with bots being up to 10 levels higher than character level, by default, and thus generating with gear they **should not** have.
        this.pmcConfig.botRelativeLevelDeltaMax = this.modConfig.botRelativeLevelDeltaMax;
        this.pmcConfig.botRelativeLevelDeltaMin = this.modConfig.botRelativeLevelDeltaMin;
        
        // Gear Arrays
        // Primary Weapon Array
        const primaryWeaponLL1 = [
            "574d967124597745970e7c94",
            "57dc2fa62459775949412633",
            "583990e32459771419544dd2",
            "5839a40f24597726f856b511",
            "57d14d2524597714373db789",
            "59984ab886f7743e98271174",
            "5ea03f7400685063ec28bfa8",
            "5bfd297f0db834001a669119",
            "59e6152586f77473dc057aa1",
            "59e6687d86f77411d949b251",
            "5c07c60e0db834002330051f",
            "62e7c4fba689e8c9c50dfc38",
            "5e870397991fd70db46995c8",
            "5926bb2186f7744b1c6c6e60",
            "587e02ff24597743df3deaeb",
            "54491c4f4bdc2db1078b4568",
            "5580223e4bdc2d1c128b457f",
            "61f7c9e189e6fb1a5e3ea78d",
            "5de652c31b7e3716273428be",
            "5a7828548dc32e5a9c28b516",
            "5e00903ae9dc277128008b87"
        ];
        const primaryWeaponLL2 = [
            "5644bd2b4bdc2d3b4c8b4572",
            "59d6088586f774275f37482f",
            "59ff346386f77477562ff5e2",
            "5ab8e9fcd8ce870019439434",
            "5bf3e03b0db834001d2c4a9c",
            "57f3c6bd24597738e730fa2f",
            "5ae08f0a5acfc408fb1398a1",
            "628b5638ad252a16da6dd245",
            "628b9c37a733087d0d7fe84b",
            "60339954d62c9b14ed777c06",
            "5447a9cd4bdc2dbd208b4567",
            "623063e994fc3f7b302a9696",
            "58948c8e86f77409493f7266",
            "5fc3e272f8b6a877a729eac5",
            "5c501a4d2e221602b412b540",
            "606dae0ab0e443224b421bb7",
            "56dee2bdd2720bc8328b4567",
            "576165642459773c7a400233",
            "6259b864ebedf17603599e88"
        ];
        const primaryWeaponLL3 = [
            "5a0ec13bfcdbcb00165aa685",
            "65268d8ecb944ff1e90ea385",
            "5aafa857e5b5b00018480968",
            "5df8ce05b11454561e39243b",
            "5447a9cd4bdc2dbd208b4567",
            "58948c8e86f77409493f7266",
            "5fc3e272f8b6a877a729eac5",
            "57f3c6bd24597738e730fa2f",
            "606dae0ab0e443224b421bb7",
            "56dee2bdd2720bc8328b4567",
            "587e02ff24597743df3deaeb",
            "64637076203536ad5600c990",
            "64ca3d3954fc657e230529cc",
            "5a7828548dc32e5a9c28b516",
            "6259b864ebedf17603599e88",
            "5e848cc2988a8701445df1e8"
        ];
        const primaryWeaponLL4 = primaryWeaponLL3.concat([
            "5fb64bc92b1b027b1f50bcf2",
            "5fc3f2d5900b1d5091531e57",
            "5926bb2186f7744b1c6c6e60",
            "5bd70322209c4d00d7167b8f",
            "5beed0f50db834001c062b12",
            "6499849fc93611967b034949",
            "65290f395ae2ae97b80fdf2d",
            "628a60ae6b1d481ff772e9c8",
            "606587252535c57a13424cfd",
            "6165ac306ef05c2ce828ef74",
            "6183afd850224f204c1da514",
            "6176aca650224f204c1da3fb",
            "5a367e5dc4a282000e49738f",
            "5dcbd56fdbd3d91b3e5468d5",
            "5fc22d7c187fea44d52eda44",
            "627e14b21713922ded6f2c15",
            "645e0c6b3b381ede770e1cc9",
            "644674a13d52156624001fbc",
            "57c44b372459772d2b39b8ce",
            "5cadfbf7ae92152ac412eeef",
            "5e81ebcd8e146c7080625e15",
            "6275303a9f372d6ea97f9ec7"
        ]);
        const primaryWeaponFlea = [
            "643ea5b23db6f9f57107d9fd",
            "55801eed4bdc2d89578b4588",
            "5c46fbd72e2216398b5a8c9c",
            "5f2a9575926fd9352339381f",
            "5b0bbe4e5acfc40dc528a72d",
            "588892092459774ac91d4b11",
            "5bfea6e90db834001b7347f3",
            "5df24cf80dee1b22f862e9bc",
            "5ac66d2e5acfc43b321d4b53",
            "5ac66d725acfc43b321d4b60",
            "5abcbc27d8ce8700182eceeb",
            "5fbcc1d9016cce60e8341ab3",
            "65290f395ae2ae97b80fdf2d",
            "5d43021ca4b9362eab4b5e25",
            "5ac66cb05acfc40198510a10",
            "5ac66d015acfc400180ae6e4",
            "63171672192e68c5460cebc5",
            "5c488a752e221602b412af63",
            "5bb2475ed4351e00853264e3",
            "618428466ef05c2ce828f218",
            "6184055050224f204c1da540",
            "6499849fc93611967b034949",
            "5ac66d9b5acfc4001633997a",
            "5ac4cd105acfc40016339859",
            "5beed0f50db834001c062b12",
            "5cc82d76e24e8d00134b4b83",
            "5ba26383d4351e00334c93d9",
            "5bd70322209c4d00d7167b8f",
            "5de7bd7bfd6b4e6e2276dc25",
            "5fc3f2d5900b1d5091531e57",
            "62e14904c2699c0ec93adc47",
            "644674a13d52156624001fbc",
            "645e0c6b3b381ede770e1cc9",
            "57c44b372459772d2b39b8ce",
            "57838ad32459774a17445cd2",
            "5fb64bc92b1b027b1f50bcf2"
        ];

        // Holster Array
        const holsterLL1 = [
            "5448bd6b4bdc2dfc2f8b4569",
            "56e0598dd2720bb5668b45a6",
            "571a12c42459771f627b58a0",
            "576a581d2459771e7b1bc4f1",
            "56d59856d2720bd8418b456a",
            "5cadc190ae921500103bb3b6",
            "5e81c3cbac2bb513793cdc75",
            "579204f224597773d619e051",
            "5a7ae0c351dfba0017554310",
            "624c2e8614da335f1e034d8c",
            "602a9740da11d6478d5a06dc"
        ];
        const holsterLL2 = holsterLL1.concat(
            ...[
                "5a17f98cfcdbcb0980087290",
                "5abccb7dd8ce87001773e277",
                "63088377b5cd696784087147",
                "6193a720f8ee7e52e42109ed",
                "5f36a0e5fbf956000b716b65",
                "61a4c8884f95bc3b2c5dc96f"
            ]);
        const holsterLL3 = [
            "633ec7c2a6918cb895019c6c",
            "5580223e4bdc2d1c128b457f",
            "5a7ae0c351dfba0017554310",
            "6193a720f8ee7e52e42109ed",
            "602a9740da11d6478d5a06dc"
        ];
        const holsterLL4 = holsterLL3;
        const holsterFlea = [
            "5d67abc1a4b93614ec50137f",
            "5d3eb3b0a4b93615055e84d2",
            "59f98b4986f7746f546d2cef",
            "5b1fa9b25acfc40018633c01"
        ];

        // Backpack Array
        const backpackLL1 = [
            "5ab8ee7786f7742d8f33f0b9",
            "5ab8f04f86f774585f4237d8",
            "56e33680d2720be2748b4576",
            "5f5e45cc5021ce62144be7aa",
            "56e33634d2720bd8058b456b"
        ];
        const backpackLL2 = backpackLL1.concat(
            ...[
                "544a5cde4bdc2d39388b456b",
                "56e335e4d2720b6c058b456d",
                "5e9dcf5986f7746c417435b3",
                "5ca20d5986f774331e7c9602",
                "60a2828e8689911a226117f9",
                "6038d614d10cbf667352dd44",
                "60a272cc93ef783291411d8e",
                "656ddcf0f02d7bcea90bf395",
                "618cfae774bb2d036a049e7c"
            ]);
        const backpackLL3 = [
            "628e1ffc83ec92260c0f437f",
            "62a1b7fbc30cfa1d366af586",
            "59e763f286f7742ee57895da",
            "5f5e46b96bdad616ad46d613"
        ];
        const backpackLL4 = [
            "5df8a4d786f77412672a1e3b",
            "5c0e774286f77468413cc5b2",
            "656e0436d44a1bb4220303a0",
            "5ab8ebf186f7742d8b372e80",
            "639346cc1c8f182ad90c8972"
        ];
        const backpackFlea = [
            "618bb76513f5097c8d5aa2d5",
            "619cf0335771dd3c390269ae",
            "5b44c6ae86f7742d1627baea",
            "545cdae64bdc2d39198b4568",
            "5f5e467b0bc58666c37e7821",
            "656f198fb27298d6fd005466"
        ];

        // Armor Vest Array
        const armorVestLL1 = [
            "64be79e2bf8412471d0d9bcc",
            "5ab8e4ed86f7742d8e50c7fa",
            "62a09d79de7ac81993580530",
            "5df8a2ca86f7740bfe6df777",
            "59e7635f86f7742cbf2c1095",
            "5648a7494bdc2d9d488b4583",
            "5c0e5edb86f77461f55ed1f7"
        ];
        const armorVestLL2 = [
            "609e8540d5c319764c2bc2e9",
            "64abd93857958b4249003418",
            "5b44d22286f774172b0c9de8",
            "5c0e51be86f774598e797894",
            "5c0e5bab86f77461f55ed1f3",
            "5c0e57ba86f7747fa141986d"
        ];
        const armorVestLL4 = [
            "5c0e655586f774045612eeb2",
            "5e4abb5086f77406975c9342",
            "6038b4b292ec1c3103795a0b",
            "6038b4ca92ec1c3103795a0d",
            "5c0e625a86f7742d77340f62",
            "5e9dacf986f774054d6b89f4",
            "5c0e541586f7747fa54205c9",
            "5b44cf1486f77431723e3d05",
            "5ca2151486f774244a3b8d30",
            "5b44d0de86f774503d30cba8",
            "60a283193cb70855c43a381d",
            "5ca21c6986f77479963115a7",
            "545cdb794bdc2d3a198b456a",
            "5b44cd8b86f774503d30cba2",
            "5f5f41476bdad616ad46d631",
            "63737f448b28897f2802b874",
            "5fd4c474dd870108a754b241"
        ];
        const armorVestFlea = [
            "5b44cd8b86f774503d30cba2",
            "5b44cf1486f77431723e3d05",
            "5b44d0de86f774503d30cba8",
            "5ca2151486f774244a3b8d30",
            "5c0e655586f774045612eeb2",
            "5c0e625a86f7742d77340f62",
            "5e9dacf986f774054d6b89f4",
            "5c0e541586f7747fa54205c9",
            "5c0e53c886f7747fa54205c7",
            "5f5f41476bdad616ad46d631",
            "5ab8e79e86f7742d8b372e78"
        ];

        // Eyewear Array
        const eyewearLL1 = [
            "5b432be65acfc433000ed01f",
            "5aa2b986e5b5b00014028f4c",
            "557ff21e4bdc2d89578b4586"
        ];
        const eyewearLL2 = eyewearLL1.concat(
            ...[
                "5d5fca1ea4b93635fd598c07"
            ]);
        const eyewearLL3 = eyewearLL2.concat(
            ...[
                "603409c80ca681766b6a0fb2",
                "5c0d32fcd174af02a1659c75",
                "5d6d2e22a4b9361bd5780d05",
                "62a61c988ec41a51b34758d5",
                "61c18d83b00456371a66814b",
                "62a09e410b9d3c46de5b6e78"
            ]);
        const eyewearLL4 = [
            "603409c80ca681766b6a0fb2",
            "5c0d32fcd174af02a1659c75",
            "5d6d2e22a4b9361bd5780d05",
            "62a61c988ec41a51b34758d5",
            "61c18d83b00456371a66814b",
            "62a09e410b9d3c46de5b6e78"
        ];

        // Face Cover Array
        const faceCoverLL1 = [
            "572b7f1624597762ae139822"
        ];
        const faceCoverLL2 = faceCoverLL1.concat(
            ...[
                "5ab8f39486f7745cd93a1cca",
                "5b4325355acfc40019478126",
                "63626d904aa74b8fe30ab426",
                "62963c18dbc8ab5f0d382d0b",
                "60a7ad2a2198820d95707a2e",
                "60a7ad3a0c5cb24b0134664a",
                "635267ab3c89e2112001f826"
            ]);
        const faceCoverLL3 = faceCoverLL2.concat(
            ...[
                "5ab8f85d86f7745cd93a1cf5", 
                "5b432f3d5acfc4704b4a1dfb"
            ]);
        const faceCoverLL4 = [
            "5fd8d28367cb5e077335170f",
            "5e54f76986f7740366043752",
            "62a09dd4621468534a797ac7",
            "5b432f3d5acfc4704b4a1dfb",
            "60a7ad3a0c5cb24b0134664a",
            "60a7ad2a2198820d95707a2e",
            "62963c18dbc8ab5f0d382d0b",
            "62a09e08de7ac81993580532",
            "5b432b2f5acfc4771e1c6622",
            "6570aead4d84f81fd002a033",
            "657089638db3adca1009f4ca",
            "635267ab3c89e2112001f826",
            "63626d904aa74b8fe30ab426"
        ];

        // Headwear Array
        const headwearLL1 = [
            "59e7711e86f7746cae05fbe1",
            "5c0d2727d174af02a012cf58",
            "61bca7cda0eae612383adf57",
            "5aa7d03ae5b5b00016327db5",
            "5c06c6a80db834001b735491",
            "5645bc214bdc2d363b8b4571",
            "5aa7d193e5b5b000171d063f"
        ];
        const headwearLL2 = [
            "5b432d215acfc4771e1c6624",
            "5f60b34a41e30a4ab12a6947",
            "5a7c4850e899ef00150be885",
            "5b4329f05acfc47a86086aa1",
            "5d5e7d28a4b936645d161203",
            "5d5e9c74a4b9364855191c40",
            "5e4bfc1586f774264f7582d3",
            "5aa7e454e5b5b0214e506fa2"
        ];
        const headwearLL3 = [
            "65709d2d21b9f815e208ff95",
            "65719f0775149d62ce0a670b",
            "5b40e3f35acfc40016388218",
            "5b40e4035acfc47a87740943",
            "5aa7e4a4e5b5b000137b76f2",
            "5c091a4e0db834001d5addc8"
        ];
        const headwearLL4 = [
            "5a154d5cfcdbcb001a3b00da",
            "5ac8d6885acfc400180ae7b0",
            "5c17a7ed2e2216152142459c",
            "5e00c1ad86f774747333222c",
            "5e01ef6886f77445f643baa4",
            "5b40e1525acfc4771e1c6611",
            "5b40e2bc5acfc40016388216",
            "5d6d3716a4b9361bc8618872",
            "5aa7e276e5b5b000171d0647",
            "5f60c74e3b85f6263c145586",
            "5ca20ee186f774799474abc2"
        ];
        const headwearFlea = [
            "5b40e1525acfc4771e1c6611",
            "5b40e2bc5acfc40016388216",
            "5ea17ca01412a1425304d1c0"
        ];

        // Earpiece Array
        const earpieceLL1 = 
        [
            "6033fa48ffd42c541047f728",
            "5b432b965acfc47a8774094e"
        ];
        const earpieceLL2 = earpieceLL1.concat(
            ...[
                "5645bcc04bdc2d363b8b4572"
            ]);
        const earpieceLL3 = earpieceLL2.concat(
            ...[
                "5f60cd6cf2bcbb675b00dac6",
                "628e4e576d783146b124c64d",
                "5e4d34ca86f774264f758330",
                "5aa2ba71e5b5b000137b758f"
            ]);
        const earpieceLL4 = [
            "5f60cd6cf2bcbb675b00dac6",
            "628e4e576d783146b124c64d",
            "5c165d832e2216398b5a7e36"
        ];

        // Tacvest Array
        const tacticalVestLL1 = [
            "572b7adb24597762ae139821",
            "5fd4c5477a8d854fa0105061",
            "64be7095047e826eae02b0c1",
            "5e4abc1f86f774069619fbaa",
            "6034d0230ca681766b6a0fb5",
            "63611865ba5b90db0c0399d1",
            "6034cf5fffd42c541047f72e"
        ];
        const tacticalVestLL2 = [
            "5d5d8ca986f7742798716522",
            "64be7110bf597ba84a0a41ea",
            "59e7643b86f7742cbf2c109a",
            "5929a2a086f7744f4b234d43",
            "5e4abfed86f77406a2713cf7"
        ];
        const tacticalVestLL3 = [
            "61bc85697113f767765c7fe7"
        ];
        const tacticalVestLL4 = [
            "628cd624459354321c4b7fa2",
            "628b9784bcf6e2659e09b8a2",
            "5c0e746986f7741453628fe5",
            "5c0e722886f7740458316a57",
            "544a5caa4bdc2d1a388b4568",
            "5b44cad286f77402a54ae7e5",
            "5e4ac41886f77406a511c9a8",
            "5ab8dced86f774646209ec87",
            "628d0618d1ba6e4fa07ce5a4",
            "60a3c68c37ea821725773ef5",
            "5f5f41f56760b4138443b352",
            "5fd4c60f875c30179f5d04c2",
            "5e9db13186f7742f845ee9d3",
            "5648a69d4bdc2ded0b8b457b",
            "592c2d1a86f7746dbe2af32a",
            "5df8a42886f77412640e2e75",
            "5c0e6a1586f77404597b4965"
        ];
        const tacticalVestFlea = [
            "628b9c7d45122232a872358f",
            "60a3c68c37ea821725773ef5",
            "628d0618d1ba6e4fa07ce5a4",
            "60a3c70cde5f453f634816a3",
            "544a5caa4bdc2d1a388b4568",
            "609e860ebd219504d8507525",
            "5d5d646386f7742797261fd9",
            "5c0e746986f7741453628fe5",
            "5d5d87f786f77427997cfaef",
            "5c0e722886f7740458316a57",
            "5e4ac41886f77406a511c9a8",
            "628b9784bcf6e2659e09b8a2",
            "5e9db13186f7742f845ee9d3",
            "628dc750b910320f4c27a732",
            "5ab8dced86f774646209ec87",
            "5c0e446786f7742013381639",
            "628baf0b967de16aab5a4f36",
            "628cd624459354321c4b7fa2",
            "5df8a42886f77412640e2e75",
            "5c0e3eb886f7742015526062",
            "64a536392d2c4e6e970f4121",
            "61bcc89aef0f505f0c6cd0fc",
            "5b44cad286f77402a54ae7e5",
            "5c0e9f2c86f77432297fe0a3",
            "592c2d1a86f7746dbe2af32a",
            "639343fce101f4caa40a4ef3",
            "5648a69d4bdc2ded0b8b457b",
            "64a5366719bab53bd203bf33",
            "572b7adb24597762ae139821",
            "5ab8dab586f77441cd04f2a2",
            "5f5f41f56760b4138443b352",
            "603648ff5a45383c122086ac",
            "5c0e6a1586f77404597b4965",
            "5d5d85c586f774279a21cbdb",
            "6040dd4ddcf9592f401632d2",
            "60a6220e953894617404b00a",
            "60a621c49c197e4e8c4455e6",
            "5b44c8ea86f7742d1627baf1",
            "5ca20abf86f77418567a43f2",
            "5fd4c60f875c30179f5d04c2"
        ];
       
        // Armband Array
        const armBandLL1 = [
            "5b3f16c486f7747c327f55f7",
            "5b3f3ade86f7746b6b790d8e",
            "5b3f3af486f774679e752c1f",
            "5b3f3b0186f774021a2afef7",
            "5b3f3b0e86f7746752107cda"
        ];
        const armBandLL2 = armBandLL1;
        const armBandLL3 = armBandLL2.concat(
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
        const armBandLL4 = [
            "619bddc6c9546643a67df6ee",
            "60b0f988c4449e4cb624c1da",
            "619bc61e86e01e16f839a999",
            "619bdef8c9546643a67df6f6",
            "619bdfd4c9546643a67df6fa",
            "619bdd8886e01e16f839a99c"
        ];

        ///////////////////////////////////////////////////////////////////////////

        // Ammo Arrays
        // 40x46mm Grenade Array - LL4 only.
        const ammo40x46LL4 = ["5ede475b549eed7c6d5c18fb"];

        // 12.7x55mm Ammo Arrays - LL4 only.
        const ammo127x55LL2 = ["5cadf6ddae9215051e1c23b2", "5cadf6e5ae921500113bb973"];
        const ammo127x55LL3 = ammo127x55LL2;
        const ammo127x55LL4 = ["5cadf6e5ae921500113bb973"];

        // 86x70 Ammo Arrays - LL4 only.
        const ammo86x70LL4 = ["5fc275cf85fd526b824a571a", "5fc382a9d724d907e2077dab"];

        // 7.62x54R Ammo Arrays
        const ammo762x54LL1 = ["64b8f7c241772715af0f9c3d", "64b8f7b5389d7ffd620ccba2"];
        const ammo762x54LL2 = ["64b8f7968532cf95ee0a0dbf", "5887431f2459777e1612938f"];
        const ammo762x54LL3 = ["5e023cf8186a883be655e54f", "59e77a2386f7742ee578960a"];
        const ammo762x54LL4 = ["5e023d34e8a400319a28ed44", "560d61e84bdc2da74d8b4571", "5e023d48186a883be655e551"];
        const ammo762x54Flea = ["59e77a2386f7742ee578960a", "5e023cf8186a883be655e54f"];

        // 7.62x51mm Ammo Arrays
        const ammo762x51LL1 = ["5e023e88277cce2b522ff2b1"];
        const ammo762x51LL2 = ["5e023e6e34d52a55c3304f71"];
        const ammo762x51LL3 = ["5e023e53d4353e3302577c4c", "58dd3ad986f77403051cba8f"];
        const ammo762x51LL4 = ["58dd3ad986f77403051cba8f", "5a608bf24f39f98ffc77720e", "5a6086ea4f39f99cd479502f", "5efb0c1bd79ff02a1f5e68d9"];
        const ammo762x51Flea = ["5e023e53d4353e3302577c4c"];

        // 7.62x39mm Ammo Arrays
        const ammo762x39LL1 = ["59e4d3d286f774176a36250a", "64b7af734b75259c590fa895", "64b7af5a8532cf95ee0a0dbd"];
        const ammo762x39LL2 = ["64b7af5a8532cf95ee0a0dbd"];
        const ammo762x39LL3 = ["59e4d24686f7741776641ac7", "59e4cf5286f7741778269d8a", "5656d7c34bdc2d9d198b4587"];
        const ammo762x39LL4 = ["64b7af434b75259c590fa893", "59e0d99486f7744a32234762", "601aa3d2b2bcb34913271e6d"];
        const ammo762x39Flea = ["64b7af434b75259c590fa893", "5656d7c34bdc2d9d198b4587", "59e4cf5286f7741778269d8a", "59e4d24686f7741776641ac7"];

        // 7.62x35mm aka .300BLKOUT Ammo Arrays
        const ammo762x35LL1 = ["6196365d58ef8c428c287da1"];
        const ammo762x35LL2 = ["6196364158ef8c428c287d9f"];
        const ammo762x35LL3 = ["5fbe3ffdf8b6a877a729ea82", "619636be6db0f2477964e710"];
        const ammo762x35LL4 = ["64b8725c4b75259c590fa899", "5fd20ff893a8961fc660a954"];
        const ammo762x35Flea = ["64b8725c4b75259c590fa899", "619636be6db0f2477964e710", "5fbe3ffdf8b6a877a729ea82"];

        // 7.62x25mm TT Ammo Arrays
        const ammo762x25TTLL1 = ["573602322459776445391df1", "573601b42459776410737435", "5735ff5c245977640e39ba7e", "5735fdcd2459776445391d61"]
        const ammo762x25TTLL2 = ["5736026a245977644601dc61", "573603c924597764442bd9cb", "573603562459776430731618"];

        // 6.8x51 Ammo Arrays.
        const ammo68x51LL3 = ["6529302b8c26af6326029fb7"];
        const ammo68x51LL4 = ["6529243824cbe3c74a05e5c1"];

        // 366 TKM Ammo Arrays.
        const ammo366TKMLL1 = ["59e6658b86f77411d949b250", "59e6542b86f77411dc52a77a"];
        const ammo366TKMLL2 = ["59e655cb86f77411dc52a77b", "5f0596629e22f464da6bbdd9"];
        const ammo366TKMLL3 = ["5f0596629e22f464da6bbdd9"];

        // 5.56 Ammo Arrays
        const ammo556x45LL1 = ["59e6927d86f77411da468256", "59e6918f86f7746c9f75e849"];
        const ammo556x45LL2 = ["5c0d5ae286f7741e46554302", "59e68f6f86f7746c9f75e846", "54527a984bdc2d4e668b4567", "60194943740c5d77f6705eea"];
        const ammo556x45LL3 = ["54527ac44bdc2d36668b4567"];
        const ammo556x45LL4 = ["54527ac44bdc2d36668b4567", "59e690b686f7746c9f75e848", "601949593ae8f707c4608daa"];
       
        // 5.45 Ammo Arrays
        const ammo545x39LL1 = ["56dff216d2720bbd668b4568", "56dff338d2720bbd668b4569", "56dff421d2720b5f5a8b4567", "56dff4ecd2720b5f5a8b4568"];
        const ammo545x39LL2 = ["56dff4a2d2720bbd668b456a", "56dff0bed2720bb0668b4567", "56dff2ced2720bb4668b4567"];
        const ammo545x39LL3 = ["56dff3afd2720bba668b4567", "56dff2ced2720bb4668b4567", "56dff061d2720bb5668b4567"];
        const ammo545x39LL4 = ["56dff061d2720bb5668b4567", "61962b617c6c7b169525f168", "56dfef82d2720bbd668b4567", "56dff026d2720bb8668b4567", "5c0d5e4486f77478390952fe"];
        const ammo545x39Flea = ["56dff3afd2720bba668b4567"];

        // 5.7mm Ammo Arrays
        const ammo57x28LL2 = ["5cc86840d7f00c002412c56c", "5cc80f8fe4a949033b0224a2"];
        const ammo57x28LL3 = ["5cc86832d7f00c000d3a6e6c", "5cc80f67e4a949035e43bbba", "5cc80f53e4a949000e1ea4f8"];
        const ammo57x28LL4 = ["5cc80f38e4a949001152b560"];
        const ammo57x28Flea = ["5cc80f53e4a949000e1ea4f8"];

        // 4.6mm Ammo Arrays
        const ammo46x30LL3 = ["64b6979341772715af0f9c39"];
        const ammo46x30LL4 = ["5ba2678ad4351e44f824b344", "5ba26835d4351e0035628ff5"];
        const ammo46x30Flea = ["5ba2678ad4351e44f824b344", "64b6979341772715af0f9c39"];

        // 9x18mm Ammo Arrays
        const ammo9x18LL1 = ["57371f8d24597761006c6a81", "573720e02459776143012541"];
        const ammo9x18LL2 = ["57372140245977611f70ee91", "573719df2459775a626ccbc2"];

        // 9x19mm Ammo Arrays
        const ammo9x19LL1 = ["58864a4f2459770fcc257101", "5c3df7d588a4501f290594e5"];
        const ammo9x19LL2 = ["64b7bbb74b75259c590fa897", "56d59d3ad2720bdb418b4577"]
        const ammo9x19LL3 = ["5c0d56a986f774449d5de529", "5c925fa22e221601da359b7b", "5efb0da7a29a85116f6ea05f"];

        // 9x21mm Ammo Arrays
        const ammo9x21LL3 = ["6576f93989f0062e741ba952"];
        const ammo9x21LL4 = ["5a26ac0ec4a28200741e1e18"];
        const ammo9x21Flea = ["6576f93989f0062e741ba952"];

        // 9x39mm Ammo Arrays
        const ammo9x39LL2 = ["6576f96220d53a5b8f3e395e", "57a0dfb82459774d3078b56c"];
        const ammo9x39LL3 = ["61962d879bb3d20b0946d385"];
        const ammo9x39LL4 = ["57a0e5022459774d1673f889", "5c0d688c86f77413ae3407b2"];
        

        // 9x33 Revolver .357 Mag Ammo Arrays
        const ammo9x33RLL2 = ["62330b3ed4dc74626d570b95"];

        // .45 ACP Ammo Arrays
        const ammo1143x23ACPLL1 = ["5efb0d4f4bc50b58e81710f3"];
        const ammo1143x23ACPLL2 = ["5e81f423763d9f754677bf2e"];
        const ammo1143x23ACPLL3 = ["5efb0fc6aeb21837e749c801", "5e81f423763d9f754677bf2e"];
        const ammo1143x23ACPLL4 = ["5efb0cabfb3e451d70735af5"];

        // 12 Gauge Ammo Arrays
        const ammo12x70LL1 = ["560d5e524bdc2d25448b4571", "5d6e67fba4b9361bc73bc779", "5d6e6869a4b9361c140bcfde", "5d6e6891a4b9361bd473feea"];
        const ammo12x70LL2 = ["5d6e68e6a4b9361c140bcfe0", "64b8ee384b75259c590fa89b"];
        const ammo12x70LL3 = ["5d6e6911a4b9361bd5780d52", "5d6e68a8a4b9360b6c0d54e2"];
        const ammo12x70Flea = ["5d6e6806a4b936088465b17e", "5d6e68c4a4b9361b93413f79", "5c0d591486f7744c505b416f"];

        // 23x75mm KS-23 Ammo Arrays
        const ammo23x75LL3 = ["5f647f31b6238e5dd066e196", "5e85a9a6eacf8c039e4e2ac1", "5e85aa1a988a8701445df1f5"];

        // PMC Weighting Start
        const pmcEquipment = JSON.parse(JSON.stringify(this.databaseServer.bots.types.usec.inventory.equipment));


        // PMC FirstPrimaryWeapon Weighting
        pmcEquipment.FirstPrimaryWeapon = {
            "574d967124597745970e7c94": 10,
            "57dc2fa62459775949412633": 10,
            "583990e32459771419544dd2": 10,
            "5839a40f24597726f856b511": 10,
            "57d14d2524597714373db789": 10,
            "59984ab886f7743e98271174": 10,
            "5ea03f7400685063ec28bfa8": 10,
            "5bfd297f0db834001a669119": 10,
            "59e6152586f77473dc057aa1": 10,
            "59e6687d86f77411d949b251": 10,
            "5c07c60e0db834002330051f": 10,
            "62e7c4fba689e8c9c50dfc38": 10,
            "5e870397991fd70db46995c8": 10,
            "5926bb2186f7744b1c6c6e60": 10,
            "587e02ff24597743df3deaeb": 10,
            "54491c4f4bdc2db1078b4568": 10,
            "5580223e4bdc2d1c128b457f": 10,
            "61f7c9e189e6fb1a5e3ea78d": 10,
            "5de652c31b7e3716273428be": 10,
            "5a7828548dc32e5a9c28b516": 10,
            "5644bd2b4bdc2d3b4c8b4572": 10,
            "59d6088586f774275f37482f": 10,
            "59ff346386f77477562ff5e2": 10,
            "5ab8e9fcd8ce870019439434": 10,
            "5bf3e03b0db834001d2c4a9c": 10,
            "57f3c6bd24597738e730fa2f": 10,
            "5ae08f0a5acfc408fb1398a1": 10,
            "628b5638ad252a16da6dd245": 10,
            "628b9c37a733087d0d7fe84b": 10,
            "60339954d62c9b14ed777c06": 10,
            "5447a9cd4bdc2dbd208b4567": 10,
            "623063e994fc3f7b302a9696": 10,
            "58948c8e86f77409493f7266": 10,
            "5fc3e272f8b6a877a729eac5": 10,
            "6184055050224f204c1da540": 10,
            "618428466ef05c2ce828f218": 10,
            "5c501a4d2e221602b412b540": 10,
            "606dae0ab0e443224b421bb7": 10,
            "56dee2bdd2720bc8328b4567": 10,
            "576165642459773c7a400233": 10,
            "6259b864ebedf17603599e88": 10,
            "643ea5b23db6f9f57107d9fd": 10,
            "5abcbc27d8ce8700182eceeb": 10,
            "5a0ec13bfcdbcb00165aa685": 10,
            "5ac4cd105acfc40016339859": 10,
            "5ac66d2e5acfc43b321d4b53": 10,
            "5ac66d725acfc43b321d4b60": 10,
            "5ac66d9b5acfc4001633997a": 10,
            "65268d8ecb944ff1e90ea385": 10,
            "62e14904c2699c0ec93adc47": 10,
            "5c46fbd72e2216398b5a8c9c": 10,
            "5fbcc1d9016cce60e8341ab3": 10,
            "5f2a9575926fd9352339381f": 10,
            "5c488a752e221602b412af63": 10,
            "5b0bbe4e5acfc40dc528a72d": 10,
            "5cc82d76e24e8d00134b4b83": 10,
            "5ba26383d4351e00334c93d9": 10,
            "63171672192e68c5460cebc5": 10,
            "5aafa857e5b5b00018480968": 10,
            "5df8ce05b11454561e39243b": 10,
            "5bfea6e90db834001b7347f3": 10,
            "55801eed4bdc2d89578b4588": 10,
            "5d43021ca4b9362eab4b5e25": 10,
            "5bb2475ed4351e00853264e3": 10,
            "65290f395ae2ae97b80fdf2d": 10,
            "588892092459774ac91d4b11": 10,
            "5df24cf80dee1b22f862e9bc": 10,
            "64637076203536ad5600c990": 3,
            "64ca3d3954fc657e230529cc": 3,
            "57838ad32459774a17445cd2": 10,
            "5e848cc2988a8701445df1e8": 10,
            "5fb64bc92b1b027b1f50bcf2": 10,
            "5fc3f2d5900b1d5091531e57": 10,
            "5bd70322209c4d00d7167b8f": 10,
            "5beed0f50db834001c062b12": 10,
            "6499849fc93611967b034949": 10,
            "628a60ae6b1d481ff772e9c8": 10,
            "606587252535c57a13424cfd": 10,
            "6165ac306ef05c2ce828ef74": 10,
            "6183afd850224f204c1da514": 10,
            "6176aca650224f204c1da3fb": 10,
            "5a367e5dc4a282000e49738f": 10,
            "5dcbd56fdbd3d91b3e5468d5": 10,
            "5fc22d7c187fea44d52eda44": 10,
            "627e14b21713922ded6f2c15": 10,
            "645e0c6b3b381ede770e1cc9": 10,
            "644674a13d52156624001fbc": 10,
            "57c44b372459772d2b39b8ce": 10,
            "5cadfbf7ae92152ac412eeef": 10,
            "5e81ebcd8e146c7080625e15": 10,
            "6275303a9f372d6ea97f9ec7": 10,
            "5e00903ae9dc277128008b87": 10,
            "5de7bd7bfd6b4e6e2276dc25": 10,
            "5ac66cb05acfc40198510a10": 10,
            "5ac66d015acfc400180ae6e4": 10
        };

        this.databaseServer.bots.types.usec.inventory.equipment.FirstPrimaryWeapon = pmcEquipment.FirstPrimaryWeapon;
        this.databaseServer.bots.types.bear.inventory.equipment.FirstPrimaryWeapon = pmcEquipment.FirstPrimaryWeapon;        

        // PMC Holster Weighting
        pmcEquipment.Holster = {
            "5448bd6b4bdc2dfc2f8b4569": 10,
            "56e0598dd2720bb5668b45a6": 10,
            "571a12c42459771f627b58a0": 10,
            "576a581d2459771e7b1bc4f1": 10,
            "56d59856d2720bd8418b456a": 10,
            "5cadc190ae921500103bb3b6": 10,
            "5e81c3cbac2bb513793cdc75": 10,
            "579204f224597773d619e051": 10,
            "5a7ae0c351dfba0017554310": 10,
            "624c2e8614da335f1e034d8c": 10,
            "602a9740da11d6478d5a06dc": 10,
            "5a17f98cfcdbcb0980087290": 10,
            "5abccb7dd8ce87001773e277": 10,
            "63088377b5cd696784087147": 10,
            "6193a720f8ee7e52e42109ed": 10,
            "5f36a0e5fbf956000b716b65": 10,
            "61a4c8884f95bc3b2c5dc96f": 10,
            "5580223e4bdc2d1c128b457f": 10,
            "59f98b4986f7746f546d2cef": 10,
            "633ec7c2a6918cb895019c6c": 10,
            "5d3eb3b0a4b93615055e84d2": 10,
            "5d67abc1a4b93614ec50137f": 10,
            "5b1fa9b25acfc40018633c01": 10
        };

        this.databaseServer.bots.types.usec.inventory.equipment.Holster = pmcEquipment.Holster;
        this.databaseServer.bots.types.bear.inventory.equipment.Holster = pmcEquipment.Holster;

        // PMC Backpack Weighting
        pmcEquipment.Backpack = {
            "5ab8ee7786f7742d8f33f0b9": 10,
            "5ab8f04f86f774585f4237d8": 10,
            "56e33680d2720be2748b4576": 10,
            "5f5e45cc5021ce62144be7aa": 10,
            "56e33634d2720bd8058b456b": 10,
            "544a5cde4bdc2d39388b456b": 10,
            "56e335e4d2720b6c058b456d": 10,
            "5e9dcf5986f7746c417435b3": 20,
            "5ca20d5986f774331e7c9602": 10,
            "60a2828e8689911a226117f9": 10,
            "6038d614d10cbf667352dd44": 10,
            "60a272cc93ef783291411d8e": 15,
            "656ddcf0f02d7bcea90bf395": 10,
            "618cfae774bb2d036a049e7c": 10,
            "656f198fb27298d6fd005466": 10,
            "618bb76513f5097c8d5aa2d5": 30,
            "619cf0335771dd3c390269ae": 30,
            "5f5e467b0bc58666c37e7821": 15,
            "545cdae64bdc2d39198b4568": 15,
            "5b44c6ae86f7742d1627baea": 10,
            "628e1ffc83ec92260c0f437f": 10,
            "62a1b7fbc30cfa1d366af586": 10,
            "59e763f286f7742ee57895da": 10,
            "5f5e46b96bdad616ad46d613": 10,
            "5df8a4d786f77412672a1e3b": 10,
            "5c0e774286f77468413cc5b2": 10,
            "656e0436d44a1bb4220303a0": 10,
            "5ab8ebf186f7742d8b372e80": 10,
            "639346cc1c8f182ad90c8972": 10
        };

        this.databaseServer.bots.types.usec.inventory.equipment.Backpack = pmcEquipment.Backpack;
        this.databaseServer.bots.types.bear.inventory.equipment.Backpack = pmcEquipment.Backpack;

        // PMC Armor Vest Weighting
        pmcEquipment.ArmorVest = {
            "64be79e2bf8412471d0d9bcc": 10,
            "5ab8e4ed86f7742d8e50c7fa": 10,
            "62a09d79de7ac81993580530": 10,
            "5df8a2ca86f7740bfe6df777": 10,
            "59e7635f86f7742cbf2c1095": 10,
            "5648a7494bdc2d9d488b4583": 10,
            "5c0e5edb86f77461f55ed1f7": 10,
            "609e8540d5c319764c2bc2e9": 10,
            "64abd93857958b4249003418": 10,
            "5b44d22286f774172b0c9de8": 10,
            "5c0e51be86f774598e797894": 10,
            "5c0e5bab86f77461f55ed1f3": 10,
            "5c0e57ba86f7747fa141986d": 10,
            "5ab8e79e86f7742d8b372e78": 10,
            "5c0e625a86f7742d77340f62": 10,
            "5c0e541586f7747fa54205c9": 10,
            "5c0e53c886f7747fa54205c7": 10,
            "5c0e655586f774045612eeb2": 10,
            "5e4abb5086f77406975c9342": 10,
            "6038b4b292ec1c3103795a0b": 10,
            "6038b4ca92ec1c3103795a0d": 10,
            "5e9dacf986f774054d6b89f4": 10,
            "5b44cf1486f77431723e3d05": 10,
            "5ca2151486f774244a3b8d30": 10,
            "5b44d0de86f774503d30cba8": 10,
            "60a283193cb70855c43a381d": 10,
            "5ca21c6986f77479963115a7": 10,
            "545cdb794bdc2d3a198b456a": 10,
            "5b44cd8b86f774503d30cba2": 10,
            "5f5f41476bdad616ad46d631": 10,
            "63737f448b28897f2802b874": 10,
            "5fd4c474dd870108a754b241": 10
        };

        this.databaseServer.bots.types.usec.inventory.equipment.ArmorVest = pmcEquipment.ArmorVest;
        this.databaseServer.bots.types.bear.inventory.equipment.ArmorVest = pmcEquipment.ArmorVest;

        // PMC Eyewear Weighting
        pmcEquipment.Eyewear = {
            "5b432be65acfc433000ed01f": 10,
            "5aa2b986e5b5b00014028f4c": 10,
            "557ff21e4bdc2d89578b4586": 10,
            "5d5fca1ea4b93635fd598c07": 10,
            "603409c80ca681766b6a0fb2": 10,
            "5c0d32fcd174af02a1659c75": 10,
            "5d6d2e22a4b9361bd5780d05": 10,
            "62a61c988ec41a51b34758d5": 10,
            "61c18d83b00456371a66814b": 10,
            "62a09e410b9d3c46de5b6e78": 10
        };

        this.databaseServer.bots.types.usec.inventory.equipment.Eyewear = pmcEquipment.Eyewear;
        this.databaseServer.bots.types.bear.inventory.equipment.Eyewear = pmcEquipment.Eyewear;

        // PMC FaceCover Weighting
        pmcEquipment.FaceCover = {
            "572b7f1624597762ae139822": 10,
            "5ab8f39486f7745cd93a1cca": 10,
            "5b4325355acfc40019478126": 10,
            "5ab8f85d86f7745cd93a1cf5": 10, 
            "5b432f3d5acfc4704b4a1dfb": 10,
            "5fd8d28367cb5e077335170f": 10,
            "5e54f76986f7740366043752": 10,
            "62a09dd4621468534a797ac7": 10,
            "60a7ad3a0c5cb24b0134664a": 10,
            "60a7ad2a2198820d95707a2e": 10,
            "62963c18dbc8ab5f0d382d0b": 10,
            "62a09e08de7ac81993580532": 10,
            "5b432b2f5acfc4771e1c6622": 10,
            "6570aead4d84f81fd002a033": 10,
            "657089638db3adca1009f4ca": 10,
            "635267ab3c89e2112001f826": 10,
            "63626d904aa74b8fe30ab426": 10
        };

        this.databaseServer.bots.types.usec.inventory.equipment.FaceCover = pmcEquipment.FaceCover;
        this.databaseServer.bots.types.bear.inventory.equipment.FaceCover = pmcEquipment.FaceCover;

        // PMC Headwear Weighting
        pmcEquipment.Headwear = {
            "59e7711e86f7746cae05fbe1": 10,
            "5c0d2727d174af02a012cf58": 10,
            "61bca7cda0eae612383adf57": 10,
            "5aa7d03ae5b5b00016327db5": 10,
            "5c06c6a80db834001b735491": 10,
            "5645bc214bdc2d363b8b4571": 10,
            "5aa7d193e5b5b000171d063f": 10,
            "5b432d215acfc4771e1c6624": 10,
            "5f60b34a41e30a4ab12a6947": 10,
            "5a7c4850e899ef00150be885": 10,
            "5b4329f05acfc47a86086aa1": 10,
            "5d5e7d28a4b936645d161203": 10,
            "5d5e9c74a4b9364855191c40": 10,
            "5e4bfc1586f774264f7582d3": 10,
            "5aa7e454e5b5b0214e506fa2": 10,
            "65709d2d21b9f815e208ff95": 10,
            "65719f0775149d62ce0a670b": 10,
            "5b40e3f35acfc40016388218": 10,
            "5b40e4035acfc47a87740943": 10,
            "5ea17ca01412a1425304d1c0": 10,
            "5aa7e4a4e5b5b000137b76f2": 10,
            "5c091a4e0db834001d5addc8": 10,
            "5a154d5cfcdbcb001a3b00da": 10,
            "5ac8d6885acfc400180ae7b0": 10,
            "5c17a7ed2e2216152142459c": 10,
            "5e00c1ad86f774747333222c": 10,
            "5e01ef6886f77445f643baa4": 10,
            "5b40e1525acfc4771e1c6611": 10,
            "5b40e2bc5acfc40016388216": 10,
            "5d6d3716a4b9361bc8618872": 10,
            "5aa7e276e5b5b000171d0647": 10,
            "5f60c74e3b85f6263c145586": 10,
            "5ca20ee186f774799474abc2": 10
        };

        this.databaseServer.bots.types.usec.inventory.equipment.Headwear = pmcEquipment.Headwear;
        this.databaseServer.bots.types.bear.inventory.equipment.Headwear = pmcEquipment.Headwear;

        // PMC Earpiece Weighting
        pmcEquipment.Earpiece = {
            "6033fa48ffd42c541047f728": 10,
            "5b432b965acfc47a8774094e": 10,
            "5645bcc04bdc2d363b8b4572": 10,
            "5f60cd6cf2bcbb675b00dac6": 10,
            "628e4e576d783146b124c64d": 10,
            "5e4d34ca86f774264f758330": 10,
            "5aa2ba71e5b5b000137b758f": 10,
            "5c165d832e2216398b5a7e36": 10
        };

        this.databaseServer.bots.types.usec.inventory.equipment.Earpiece = pmcEquipment.Earpiece;
        this.databaseServer.bots.types.bear.inventory.equipment.Earpiece = pmcEquipment.Earpiece;    

        // PMC Tactical Vest Weighting
        pmcEquipment.TacticalVest = {
            "572b7adb24597762ae139821": 10,
            "5fd4c5477a8d854fa0105061": 10,
            "64be7095047e826eae02b0c1": 10,
            "5e4abc1f86f774069619fbaa": 10,
            "6034d0230ca681766b6a0fb5": 10,
            "63611865ba5b90db0c0399d1": 10,
            "6034cf5fffd42c541047f72e": 10,
            "64a536392d2c4e6e970f4121": 10,
            "5d5d87f786f77427997cfaef": 10,
            "61bcc89aef0f505f0c6cd0fc": 10,
            "5c0e3eb886f7742015526062": 10,
            "5d5d646386f7742797261fd9": 10,
            "5c0e446786f7742013381639": 10,
            "64a5366719bab53bd203bf33": 10,
            "5d5d8ca986f7742798716522": 10,
            "64be7110bf597ba84a0a41ea": 10,
            "59e7643b86f7742cbf2c109a": 10,
            "5929a2a086f7744f4b234d43": 10,
            "5e4abfed86f77406a2713cf7": 10,
            "5d5d85c586f774279a21cbdb": 10,
            "5ca20abf86f77418567a43f2": 10,
            "5b44c8ea86f7742d1627baf1": 10,
            "5fd4c60f875c30179f5d04c2": 10,
            "60a6220e953894617404b00a": 10,
            "603648ff5a45383c122086ac": 10,
            "628b9784bcf6e2659e09b8a2": 10,
            "61bc85697113f767765c7fe7": 10,
            "639343fce101f4caa40a4ef3": 10,
            "5c0e722886f7740458316a57": 10,
            "628dc750b910320f4c27a732": 10,
            "60a3c70cde5f453f634816a3": 10,
            "5b44cad286f77402a54ae7e5": 10,
            "628b9c7d45122232a872358f": 10,
            "5e4ac41886f77406a511c9a8": 10,
            "5ab8dced86f774646209ec87": 10,
            "5e9db13186f7742f845ee9d3": 10,
            "60a621c49c197e4e8c4455e6": 10,
            "5648a69d4bdc2ded0b8b457b": 10,
            "5ab8dab586f77441cd04f2a2": 10,
            "592c2d1a86f7746dbe2af32a": 10,
            "5df8a42886f77412640e2e75": 10,
            "5c0e6a1586f77404597b4965": 10,
            "628cd624459354321c4b7fa2": 10,
            "5c0e746986f7741453628fe5": 10,
            "544a5caa4bdc2d1a388b4568": 10,
            "628d0618d1ba6e4fa07ce5a4": 10,
            "60a3c68c37ea821725773ef5": 10,
            "5f5f41f56760b4138443b352": 10,
            "6040dd4ddcf9592f401632d2": 10,
            "5c0e9f2c86f77432297fe0a3": 10,
            "628baf0b967de16aab5a4f36": 10,
            "609e860ebd219504d8507525": 10
        };

        this.databaseServer.bots.types.usec.inventory.equipment.TacticalVest = pmcEquipment.TacticalVest;
        this.databaseServer.bots.types.bear.inventory.equipment.TacticalVest = pmcEquipment.TacticalVest;

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

        this.databaseServer.bots.types.usec.inventory.equipment.ArmBand = pmcEquipment.ArmBand;
        this.databaseServer.bots.types.bear.inventory.equipment.ArmBand = pmcEquipment.ArmBand;

        // PMC Ammo Weighting
        const pmcAmmo = JSON.parse(
            JSON.stringify(this.databaseServer.bots.types.usec.inventory.Ammo)
        );

        pmcAmmo.Caliber40x46 = {
            "5ede475b549eed7c6d5c18fb": 1
        };       

        pmcAmmo.Caliber127x55 = {
            "5cadf6ddae9215051e1c23b2": 800,
            "5cadf6e5ae921500113bb973": 200
        };

        pmcAmmo.Caliber86x70 = {
            "5fc275cf85fd526b824a571a": 850,
            "5fc382a9d724d907e2077dab": 150
        }; 

        pmcAmmo.Caliber762x54R = {
            "64b8f7c241772715af0f9c3d": 100, 
            "64b8f7b5389d7ffd620ccba2": 300,
            "64b8f7968532cf95ee0a0dbf": 400, 
            "5887431f2459777e1612938f": 600,
            "5e023cf8186a883be655e54f": 200, 
            "59e77a2386f7742ee578960a": 600,
            "5e023d34e8a400319a28ed44": 600,
            "560d61e84bdc2da74d8b4571": 250,
            "5e023d48186a883be655e551": 150
        };

        pmcAmmo.Caliber762x51 = {
            "5e023e88277cce2b522ff2b1": 100,
            "5e023e6e34d52a55c3304f71": 500,
            "5e023e53d4353e3302577c4c": 800, 
            "58dd3ad986f77403051cba8f": 225,
            "5a608bf24f39f98ffc77720e": 150,
            "5a6086ea4f39f99cd479502f": 75,
            "5efb0c1bd79ff02a1f5e68d9": 50
        };

        pmcAmmo.Caliber762x39 = {
            "59e4d3d286f774176a36250a": 150,
            "64b7af734b75259c590fa895": 350,
            "64b7af5a8532cf95ee0a0dbd": 500,
            "59e4d24686f7741776641ac7": 100,
            "59e4cf5286f7741778269d8a": 300,
            "5656d7c34bdc2d9d198b4587": 600,
            "64b7af434b75259c590fa893": 600,
            "59e0d99486f7744a32234762": 250,
            "601aa3d2b2bcb34913271e6d": 150
        };

        pmcAmmo.Caliber762x35 = {
            "6196365d58ef8c428c287da1": 100,
            "6196364158ef8c428c287d9f": 300,
            "5fbe3ffdf8b6a877a729ea82": 200,
            "619636be6db0f2477964e710": 400,
            "64b8725c4b75259c590fa899": 300,
            "5fd20ff893a8961fc660a954": 100
        };

        pmcAmmo.Caliber762x25TT = {
            "573602322459776445391df1": 300,
            "573601b42459776410737435": 100,
            "5735ff5c245977640e39ba7e": 100,
            "5735fdcd2459776445391d61": 500,
            "5736026a245977644601dc61": 200,
            "573603c924597764442bd9cb": 200,
            "573603562459776430731618": 600
        };

        pmcAmmo.Caliber68x51 = {
            "6529302b8c26af6326029fb7": 100,
            "6529243824cbe3c74a05e5c1": 100
        };

        pmcAmmo.Caliber366TKM = {
            "59e6658b86f77411d949b250": 100,
            "59e6542b86f77411dc52a77a": 400,
            "59e655cb86f77411dc52a77b": 800,
            "5f0596629e22f464da6bbdd9": 200
        };

        pmcAmmo.Caliber556x45NATO = {
            "59e6927d86f77411da468256": 300,
            "59e6918f86f7746c9f75e849": 100,
            "5c0d5ae286f7741e46554302": 200,
            "59e68f6f86f7746c9f75e846": 100,
            "60194943740c5d77f6705eea": 500,
            "54527ac44bdc2d36668b4567": 700,
            "59e690b686f7746c9f75e848": 200,
            "601949593ae8f707c4608daa": 100
        };

        pmcAmmo.Caliber545x39 = {
            "56dff216d2720bbd668b4568": 100,
            "56dff338d2720bbd668b4569": 150,
            "56dff421d2720b5f5a8b4567": 500,
            "56dff4ecd2720b5f5a8b4568": 250,
            "56dff4a2d2720bbd668b456a": 150,
            "56dff0bed2720bb0668b4567": 450,
            "56dff2ced2720bb4668b4567": 400,
            "56dff3afd2720bba668b4567": 400,
            "56dff061d2720bb5668b4567": 425,
            "61962b617c6c7b169525f168": 250,
            "56dfef82d2720bbd668b4567": 125,
            "56dff026d2720bb8668b4567": 125,
            "5c0d5e4486f77478390952fe": 75
        };

        pmcAmmo.Caliber57x28 = {
            "5cc86840d7f00c002412c56c": 100,
            "5cc80f8fe4a949033b0224a2": 400,
            "5cc86832d7f00c000d3a6e6c": 150,
            "5cc80f67e4a949035e43bbba": 250,
            "5cc80f53e4a949000e1ea4f8": 200,
            "5cc80f38e4a949001152b560": 100
        };

        pmcAmmo.Caliber46x30 = {
            "64b6979341772715af0f9c39": 100,
            "5ba2678ad4351e44f824b344": 300,
            "5ba26835d4351e0035628ff5": 75
        };

        pmcAmmo.Caliber9x18PM = {
            "57371f8d24597761006c6a81": 100,
            "573720e02459776143012541": 100,
            "57372140245977611f70ee91": 100,
            "573719df2459775a626ccbc2": 100
        };

        pmcAmmo.Caliber9x19PARA = {
            "58864a4f2459770fcc257101": 100,
            "5c3df7d588a4501f290594e5": 100,
            "64b7bbb74b75259c590fa897": 100,
            "56d59d3ad2720bdb418b4577": 100,
            "5c0d56a986f774449d5de529": 125,
            "5c925fa22e221601da359b7b": 125,
            "5efb0da7a29a85116f6ea05f": 50
        };

        pmcAmmo.Caliber9x21 = {
            "6576f93989f0062e741ba952": 100,
            "5a26ac0ec4a28200741e1e18": 100
        };

        pmcAmmo.Caliber9x39 = {
            "6576f96220d53a5b8f3e395e": 100,
            "57a0dfb82459774d3078b56c": 100,
            "61962d879bb3d20b0946d385": 100,
            "57a0e5022459774d1673f889": 300,
            "5c0d688c86f77413ae3407b2": 100
        };

        pmcAmmo.Caliber9x33R = {
            "62330b3ed4dc74626d570b95": 1
        };

        pmcAmmo.Caliber1143x23ACP = {
            "5efb0d4f4bc50b58e81710f3": 100,
            "5e81f423763d9f754677bf2e": 100,
            "5efb0fc6aeb21837e749c801": 100,
            "5efb0cabfb3e451d70735af5": 100
        };

        pmcAmmo.Caliber12g = {
            "560d5e524bdc2d25448b4571": 100,
            "5d6e67fba4b9361bc73bc779": 100,
            "5d6e6869a4b9361c140bcfde": 100,
            "5d6e6891a4b9361bd473feea": 100,
            "5d6e68e6a4b9361c140bcfe0": 100,
            "64b8ee384b75259c590fa89b": 100,
            "5d6e6911a4b9361bd5780d52": 100,
            "5d6e68a8a4b9360b6c0d54e2": 100,
            "5d6e6806a4b936088465b17e": 100,
            "5d6e68c4a4b9361b93413f79": 100,
            "5c0d591486f7744c505b416f": 100
        };

        pmcAmmo.Caliber23x75 = {
            "5f647f31b6238e5dd066e196": 100,
            "5e85a9a6eacf8c039e4e2ac1": 100,
            "5e85aa1a988a8701445df1f5": 100
        };

        this.databaseServer.bots.types.usec.inventory.Ammo = pmcAmmo;
        this.databaseServer.bots.types.bear.inventory.Ammo = pmcAmmo;

        // Progression Loyalty Level List Start
        const pocketLoot = this.modConfig.pocketLoot;
        const backpackLoot = this.modConfig.backpackLoot;
        const vestLoot = this.modConfig.vestLoot;
        const lvl = this.modConfig.levelRange;

        

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
            faceShieldIsActiveChancePercent: 95,
            lightIsActiveDayChancePercent: 15,
            lightIsActiveNightChancePercent: 95,
            laserIsActiveChancePercent: 100,
            forceOnlyArmoredRigWhenNoArmor: true,
            filterPlatesByLevel: true,
            weaponSlotIdsToMakeRequired: [
                "mod_reciever",
                "mod_stock",
                "mod_muzzle"
            ],
            randomisation: [
                {
                    levelRange: {
                        min: lvl.loyalty1.min,
                        max: lvl.loyalty1.max
                    },
                    generation: {
                        drugs: {
                            weights: {
                                0: 1,
                                1: 1
                            },
                            whitelist: {
                                //"544fb37f4bdc2dee738b4567" Analgin
                                //"590c695186f7741e566b64a2" Augmentin
                                "544fb37f4bdc2dee738b4567": 1,
                                "590c695186f7741e566b64a2": 3
                            }
                        },
                        grenades: {
                            weights: {
                                0: 1,
                                1: 2,
                                2: 2
                            },
                            whitelist: {
                                //"5710c24ad2720bc3458b45a3" F-1 grenade
                                "5710c24ad2720bc3458b45a3": 10
                            }
                        },
                        healing: {
                            weights: {
                                0: 0,
                                1: 1,
                                2: 2,
                                3: 3,
                                4: 3
                            },
                            whitelist: {
                                //"5e831507ea0a7c419c2f9bd9" esmarch
                                //"5755356824597772cb798962" AI-2
                                //"590c661e86f7741e566b646a" Car first aid kit
                                //"544fb3364bdc2d34748b456a" Splint
                                //"544fb25a4bdc2dfb738b4567" Bandage
                                //"5d02778e86f774203e7dedbe" CMS
                                "5e831507ea0a7c419c2f9bd9": 8,
                                "5755356824597772cb798962": 8,
                                "590c661e86f7741e566b646a": 4,
                                "544fb3364bdc2d34748b456a": 3,
                                "544fb25a4bdc2dfb738b4567": 8,
                                "5d02778e86f774203e7dedbe": 2
                            }
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
                                3: 1
                            },
                            whitelist: {}
                        },
                        stims: {
                            weights: {
                                0: 1
                            },
                            whitelist: {}
                        }
                    },
                    equipment: {
                        "ArmBand": 100,
                        "FirstPrimaryWeapon": 100,
                        "SecondPrimaryWeapon": 0,
                        "Holster": 30,
                        "Earpiece": 90,
                        "Eyewear": 20,
                        "Backpack": 69,
                        "Headwear": 85,
                        "FaceCover": 100,
                        "TacticalVest": 70,
                        "clothing": 100
                    },
                    randomisedArmorSlots: ["Headwear"],
                    randomisedWeaponModSlots: [],
                    equipmentMods: {
                        "back_plate": 70,
                        "left_side_plate": 0,
                        "right_side_plate": 0,
                        "mod_equipment": 3,
                        "mod_equipment_000": 3,
                        "mod_equipment_001": 3,
                        "mod_equipment_002": 3,
                        "mod_nvg": 3
                    },
                    weaponMods: {
                        "mod_barrel": 5,
                        "mod_bipod": 10,
                        "mod_flashlight": 10,
                        "mod_foregrip": 10,
                        "mod_handguard": 10,
                        "mod_launcher": 0,
                        "mod_reciever": 10,
                        "mod_magazine": 10,
                        "mod_mount": 15,
                        "mod_mount_000": 10,
                        "mod_mount_001": 10,
                        "mod_mount_002": 10,
                        "mod_mount_003": 10,
                        "mod_mount_004": 10,
                        "mod_mount_005": 10,
                        "mod_mount_006": 10,
                        "mod_muzzle": 10,
                        "mod_muzzle_000": 10,
                        "mod_muzzle_001": 10,
                        "mod_equipment": 5,
                        "mod_equipment_000": 10,
                        "mod_equipment_001": 5,
                        "mod_equipment_002": 0,
                        "mod_nvg": 0,
                        "mod_pistol_grip_akms": 10,
                        "mod_pistol_grip": 10,
                        "mod_sight": 40,
                        "mod_scope": 10,
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
                    levelRange: {
                        min: lvl.loyalty2.min,
                        max: lvl.loyalty2.max
                    },
                    generation: {
                        drugs: {
                            weights: {
                                0: 1,
                                1: 1
                            },
                            whitelist: {
                                //"590c695186f7741e566b64a2" Augmentin
                                //"5755383e24597772cb798966" Vaseline
                                "590c695186f7741e566b64a2": 3,
                                "5755383e24597772cb798966": 1                                
                            }
                        },
                        grenades: {
                            weights: {
                                0: 0,
                                1: 0,
                                2: 1,
                                3: 2,
                                4: 2
                            },
                            whitelist: {
                                //"5710c24ad2720bc3458b45a3" F-1 Hand grenade
                                "5710c24ad2720bc3458b45a3": 10
                            }
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
                            whitelist: {
                                //"60098af40accd37ef2175f27" CAT tourniquet
                                //"5751a25924597722c463c472" Army bandage
                                //"5af0454c86f7746bf20992e8" Aluminum splint
                                //"590c678286f77426c9660122" IFAK
                                //"544fb45d4bdc2dee738b4568" Salewa
                                //"5d02778e86f774203e7dedbe" CMS
                                "60098af40accd37ef2175f27": 50,
                                "5751a25924597722c463c472": 50,
                                "5af0454c86f7746bf20992e8": 20,
                                "590c678286f77426c9660122": 30,
                                "544fb45d4bdc2dee738b4568": 60,
                                "5d02778e86f774203e7dedbe": 30
                            }
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
                            whitelist: {}
                        },
                        stims: {
                            weights: {
                                0: 3,
                                1: 1
                            },
                            whitelist: {
                                //"544fb3f34bdc2d03748b456a" Morphine
                                //"5c0e531286f7747fa54205c2" SJ1
                                //"5fca138c2a7b221b2852a5c6" x-TG-12 antidote
                                //"5c10c8fd86f7743d7d706df3" Adrenaline
                                //"5c0e530286f7747fa1419862" Propital
                                //"5ed515f6915ec335206e4152" AHF1-M
                                //"5ed5160a87bb8443d10680b5" Meldonin
                                //"5ed515c8d380ab312177c0fa" 3b-TG
                                //"5ed5166ad380ab312177c100" Obdolbos
                                //"637b60c3b7afa97bfc3d7001" Obdolbos 2
                                "544fb3f34bdc2d03748b456a": 1,
                                "5c0e531286f7747fa54205c2": 1,
                                "5fca138c2a7b221b2852a5c6": 1,
                                "5c10c8fd86f7743d7d706df3": 1,
                                "5c0e530286f7747fa1419862": 1,
                                "5ed515f6915ec335206e4152": 1,
                                "5ed5160a87bb8443d10680b5": 1,
                                "5ed515c8d380ab312177c0fa": 1,
                                "5ed5166ad380ab312177c100": 1,
                                "637b60c3b7afa97bfc3d7001": 1
                            }
                        }
                    },
                    equipment: {
                        "ArmBand": 100,
                        "FirstPrimaryWeapon": 100,
                        "SecondPrimaryWeapon": 10,
                        "Holster": 30,
                        "Earpiece": 100,
                        "Eyewear": 50,
                        "Backpack": 90,
                        "Headwear": 100,
                        "FaceCover": 100,
                        "Scabbard": 100,
                        "TacticalVest": 90,
                        "clothing": 100
                    },
                    randomisedArmorSlots: ["Headwear"],
                    randomisedWeaponModSlots: [
                        "mod_sight",
                        "mod_sight_rear",
                        "mod_sight_front",
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
                    equipmentMods: {
                        "back_plate": 100,
                        "left_side_plate": 20,
                        "right_side_plate": 20,
                        "mod_equipment": 10,
                        "mod_equipment_000": 10,
                        "mod_equipment_001": 10,
                        "mod_equipment_002": 5,
                        "mod_nvg": 15
                    },
                    weaponMods: {
                        "mod_barrel": 50,
                        "mod_bipod": 15,
                        "mod_flashlight": 35,
                        "mod_foregrip": 45,
                        "mod_handguard": 25,
                        "mod_launcher": 5,
                        "mod_magazine": 50,
                        "mod_mount": 45,
                        "mod_mount_000": 35,
                        "mod_mount_001": 35,
                        "mod_mount_002": 35,
                        "mod_mount_003": 35,
                        "mod_mount_004": 35,
                        "mod_mount_005": 35,
                        "mod_mount_006": 35,
                        "mod_muzzle": 20,
                        "mod_muzzle_000": 20,
                        "mod_muzzle_001": 20,
                        "mod_pistol_grip_akms": 35,
                        "mod_pistol_grip": 40,
                        "mod_reciever": 20,
                        "mod_sight": 75,
                        "mod_scope": 15,
                        "mod_scope_000": 45,
                        "mod_scope_001": 35,
                        "mod_scope_002": 35,
                        "mod_scope_003": 25,
                        "mod_tactical": 15,
                        "mod_tactical001": 40,
                        "mod_tactical002": 30,
                        "mod_tactical_000": 40,
                        "mod_tactical_001": 30,
                        "mod_tactical_002": 30,
                        "mod_tactical_003": 30,
                        "mod_tactical_2": 15
                    }
                },
                {
                    levelRange: {
                        min: lvl.loyalty3.min,
                        max: lvl.loyalty3.max
                    },
                    generation: {
                        drugs: {
                            weights: {
                                0: 1,
                                1: 1
                            },
                            whitelist: {
                                //"5af0548586f7743a532b7e99" Ibuprofen
                                //"5755383e24597772cb798966" Vaseline
                                //"5751a89d24597722aa0e8db0" Golden star
                                "5af0548586f7743a532b7e99": 50,
                                "5755383e24597772cb798966": 30,
                                "5751a89d24597722aa0e8db0": 20
                            }
                        },
                        grenades: {
                            weights: {
                                0: 0,
                                1: 0,
                                2: 2,
                                3: 3,
                                4: 3
                            },
                            whitelist: {
                                //"5710c24ad2720bc3458b45a3" F1 Grenade
                                //"58d3db5386f77426186285a0" M67 Grenade
                                //"5448be9a4bdc2dfd2f8b456a" RGD-5
                                //"617fd91e5539a84ec44ce155" RGN Impact
                                //"618a431df1eb8e24b8741deb" RGO Impact
                                //"5e32f56fcb6d5863cc5e5ee4" VOG17
                                //"5e340dcdcb6d5863cc5e5efb" VOG25
                                "5710c24ad2720bc3458b45a3": 5,
                                "58d3db5386f77426186285a0": 5,
                                "5448be9a4bdc2dfd2f8b456a": 20,
                                "617fd91e5539a84ec44ce155": 30,
                                "618a431df1eb8e24b8741deb": 30,
                                "5e32f56fcb6d5863cc5e5ee4": 30,
                                "5e340dcdcb6d5863cc5e5efb": 30
                            }
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
                            whitelist: {
                                //"5e8488fa988a8701445df1e4" CALOK-B
                                //"5751a25924597722c463c472" Army bandage
                                //"5af0454c86f7746bf20992e8" Aluminum splint
                                //"590c678286f77426c9660122" IFAK
                                //"544fb45d4bdc2dee738b4568" Salewa
                                //"60098ad7c2240c0fe85c570a" AFAK
                                //"590c657e86f77412b013051d" Grizzly
                                "5e8488fa988a8701445df1e4": 50,
                                "5751a25924597722c463c472": 50,
                                "5af0454c86f7746bf20992e8": 20,
                                "590c678286f77426c9660122": 100,
                                "544fb45d4bdc2dee738b4568": 30,
                                "60098ad7c2240c0fe85c570a": 35,
                                "590c657e86f77412b013051d": 30
                            }
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
                            whitelist: {}
                        },
                        stims: {
                            weights: {
                                0: 1,
                                1: 1,
                                2: 1
                            },
                            whitelist: {
                                //"5c0e531286f7747fa54205c2" SJ1
                                //"5fca138c2a7b221b2852a5c6" x-TG-12 antidote
                                //"5c10c8fd86f7743d7d706df3" Adrenaline
                                //"5c0e530286f7747fa1419862" Propital
                                //"5ed515f6915ec335206e4152" AHF1-M
                                //"5ed5160a87bb8443d10680b5" Meldonin
                                //"5ed515c8d380ab312177c0fa" 3b-TG
                                //"5ed5166ad380ab312177c100" Obdolbos
                                //"637b60c3b7afa97bfc3d7001" Obdolbos 2
                                //"5ed515e03a40a50460332579" L1
                                //"637b620db7afa97bfc3d7009" Trimadol
                                //"5c0e534186f7747fa1419867" eTG
                                //"637b6251104668754b72f8f9" Perfotoran
                                //"637b6179104668754b72f8f5" PNB
                                //"5ed515ece452db0eb56fc028" P22
                                //"5c0e531d86f7747fa23f4d42" SJ6
                                //"5ed51652f6c34d2cc26336a1" MULE
                                //"5fca13ca637ee0341a484f46" SJ9
                                "5c0e531286f7747fa54205c2": 1,
                                "5fca138c2a7b221b2852a5c6": 1,
                                "5c10c8fd86f7743d7d706df3": 1,
                                "5c0e530286f7747fa1419862": 1,
                                "5ed515f6915ec335206e4152": 1,
                                "5ed5160a87bb8443d10680b5": 1,
                                "5ed515c8d380ab312177c0fa": 1,
                                "5ed5166ad380ab312177c100": 1,
                                "637b60c3b7afa97bfc3d7001": 1,
                                "5ed515e03a40a50460332579": 1,
                                "637b620db7afa97bfc3d7009": 1,
                                "5c0e534186f7747fa1419867": 1,
                                "637b6251104668754b72f8f9": 1,
                                "637b6179104668754b72f8f5": 1,
                                "5ed515ece452db0eb56fc028": 1,
                                "5c0e531d86f7747fa23f4d42": 1,
                                "5ed51652f6c34d2cc26336a1": 1,
                                "5fca13ca637ee0341a484f46": 1
                            }
                        }
                    },
                    equipment: {
                        "ArmBand": 100,
                        "FirstPrimaryWeapon": 100,
                        "SecondPrimaryWeapon": 50,
                        "Holster": 60,
                        "Earpiece": 100,
                        "Eyewear": 100,
                        "Backpack": 100,
                        "Headwear": 100,
                        "FaceCover": 100,
                        "Scabbard": 100,
                        "TacticalVest": 90,
                        "clothing": 100
                    },
                    equipmentMods: {
                        "back_plate": 100,
                        "left_side_plate": 100,
                        "right_side_plate": 100,
                        "mod_equipment": 75,
                        "mod_equipment_000": 80,
                        "mod_equipment_001": 75,
                        "mod_equipment_002": 90,
                        "mod_nvg": 60
                    },
                    weaponMods: {
                        "mod_barrel": 50,
                        "mod_bipod": 15,
                        "mod_flashlight": 35,
                        "mod_foregrip": 45,
                        "mod_handguard": 25,
                        "mod_launcher": 5,
                        "mod_magazine": 50,
                        "mod_mount": 45,
                        "mod_mount_000": 35,
                        "mod_mount_001": 35,
                        "mod_mount_002": 35,
                        "mod_mount_003": 35,
                        "mod_mount_004": 35,
                        "mod_mount_005": 35,
                        "mod_mount_006": 35,
                        "mod_muzzle": 20,
                        "mod_muzzle_000": 20,
                        "mod_muzzle_001": 20,
                        "mod_pistol_grip_akms": 35,
                        "mod_pistol_grip": 40,
                        "mod_reciever": 20,
                        "mod_sight": 75,
                        "mod_scope": 15,
                        "mod_scope_000": 45,
                        "mod_scope_001": 35,
                        "mod_scope_002": 35,
                        "mod_scope_003": 25,
                        "mod_tactical": 15,
                        "mod_tactical001": 40,
                        "mod_tactical002": 30,
                        "mod_tactical_000": 40,
                        "mod_tactical_001": 30,
                        "mod_tactical_002": 30,
                        "mod_tactical_003": 30,
                        "mod_tactical_2": 15
                    },
                    randomisedArmorSlots: ["Headwear"],
                    randomisedWeaponModSlots: [
                        "mod_sight",
                        "mod_sight_rear",
                        "mod_sight_front",
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
                        "mod_muzzle_001",
                        "mod_charge",
                        "mod_gas_block",
                        "mod_pistol_grip",
                        "mod_pistolgrip",
                        "mod_pistol_grip_akms",
                        "mod_pistolgrip_000",
                        "mod_foregrip",
                        "mod_trigger",
                        "mod_reciever",
                        "mod_hammer",
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
                    ]
                },
                {
                    levelRange: {
                        min: lvl.loyalty4.min,
                        max: 100
                    },
                    generation: {
                        drugs: {
                            weights: {
                                0: 1,
                                1: 1
                            },
                            whitelist: {
                                //"5755383e24597772cb798966" Vaseline
                                //"5af0548586f7743a532b7e99" Ibuprofen
                                //"5751a89d24597722aa0e8db0" Golden star
                                "5755383e24597772cb798966": 1,
                                "5af0548586f7743a532b7e99": 1,
                                "5751a89d24597722aa0e8db0": 1
                            }
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
                            whitelist: {
                                //"5710c24ad2720bc3458b45a3" F1 grenade
                                //"58d3db5386f77426186285a0" M67 grenade
                                //"5448be9a4bdc2dfd2f8b456a" RGD-5
                                //"617fd91e5539a84ec44ce155" RGN
                                //"618a431df1eb8e24b8741deb" RGO
                                //"5e32f56fcb6d5863cc5e5ee4" VOG17
                                //"5e340dcdcb6d5863cc5e5efb" VOG25
                                "5710c24ad2720bc3458b45a3": 1,
                                "58d3db5386f77426186285a0": 1,
                                "5448be9a4bdc2dfd2f8b456a": 1,
                                "617fd91e5539a84ec44ce155": 7,
                                "618a431df1eb8e24b8741deb": 7,
                                "5e32f56fcb6d5863cc5e5ee4": 2,
                                "5e340dcdcb6d5863cc5e5efb": 2
                            }
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
                            whitelist: {
                                //"5e8488fa988a8701445df1e4" CALOK-B
                                //"5751a25924597722c463c472" Army bandage
                                //"5af0454c86f7746bf20992e8" Aluminum splint
                                //"60098ad7c2240c0fe85c570a" AFAK
                                //"590c657e86f77412b013051d" Grizzly
                                //"5d02797c86f774203f38e30a" Surv12
                                "5e8488fa988a8701445df1e4": 2,
                                "5751a25924597722c463c472": 2,
                                "5af0454c86f7746bf20992e8": 1,
                                "60098ad7c2240c0fe85c570a": 2,
                                "590c657e86f77412b013051d": 2,
                                "5d02797c86f774203f38e30a": 2
                            }
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
                            whitelist: {}
                        },
                        stims: {
                            weights: {
                                0: 1,
                                1: 1,
                                2: 1
                            },
                            whitelist: {
                                //"544fb3f34bdc2d03748b456a" Morphine
                                //"5c0e531286f7747fa54205c2" SJ1
                                //"5fca138c2a7b221b2852a5c6" x-TG-12 antidote
                                //"5c10c8fd86f7743d7d706df3" Adrenaline
                                //"5c0e530286f7747fa1419862" Propital
                                //"5ed515f6915ec335206e4152" AHF1-M
                                //"5ed5160a87bb8443d10680b5" Meldonin
                                //"5ed515c8d380ab312177c0fa" 3b-TG
                                //"5ed5166ad380ab312177c100" Obdolbos
                                //"637b60c3b7afa97bfc3d7001" Obdolbos 2
                                //"5ed515e03a40a50460332579" L1
                                //"637b620db7afa97bfc3d7009" Trimadol
                                //"5c0e534186f7747fa1419867" eTG
                                //"637b6251104668754b72f8f9" Perfotoran
                                //"637b6179104668754b72f8f5" PNB
                                //"5ed515ece452db0eb56fc028" P22
                                //"5c0e531d86f7747fa23f4d42" SJ6
                                //"5ed51652f6c34d2cc26336a1" MULE
                                //"5fca13ca637ee0341a484f46" SJ9
                                //"5c0e533786f7747fa23f4d47" Zagustin
                                //"637b612fb7afa97bfc3d7005" SJ12
                                "544fb3f34bdc2d03748b456a": 1,
                                "5c0e531286f7747fa54205c2": 1,
                                "5fca138c2a7b221b2852a5c6": 1,
                                "5c10c8fd86f7743d7d706df3": 1,
                                "5c0e530286f7747fa1419862": 1,
                                "5ed515f6915ec335206e4152": 1,
                                "5ed5160a87bb8443d10680b5": 1,
                                "5ed515c8d380ab312177c0fa": 1,
                                "5ed5166ad380ab312177c100": 1,
                                "637b60c3b7afa97bfc3d7001": 1,
                                "5ed515e03a40a50460332579": 1,
                                "637b620db7afa97bfc3d7009": 1,
                                "5c0e534186f7747fa1419867": 1,
                                "637b6251104668754b72f8f9": 1,
                                "637b6179104668754b72f8f5": 1,
                                "5ed515ece452db0eb56fc028": 1,
                                "5c0e531d86f7747fa23f4d42": 1,
                                "5ed51652f6c34d2cc26336a1": 1,
                                "5fca13ca637ee0341a484f46": 1,
                                "5c0e533786f7747fa23f4d47": 1,
                                "637b612fb7afa97bfc3d7005": 1
                            }
                        }
                    },
                    equipment: {
                        "ArmBand": 100,
                        "FirstPrimaryWeapon": 100,
                        "SecondPrimaryWeapon": 60,
                        "Holster": 80,
                        "Earpiece": 100,
                        "Eyewear": 100,
                        "Backpack": 100,
                        "Headwear": 100,
                        "FaceCover": 100,
                        "Scabbard": 100,
                        "TacticalVest": 100,
                        "clothing": 100
                    },
                    equipmentMods: {
                        "back_plate": 100,
                        "left_side_plate": 100,
                        "right_side_plate": 100,
                        "mod_equipment": 75,
                        "mod_equipment_000": 80,
                        "mod_equipment_001": 75,
                        "mod_equipment_002": 90,
                        "mod_nvg": 60
                    },
                    weaponMods: {
                        "mod_barrel": 50,
                        "mod_bipod": 15,
                        "mod_flashlight": 35,
                        "mod_foregrip": 45,
                        "mod_handguard": 25,
                        "mod_launcher": 5,
                        "mod_magazine": 50,
                        "mod_mount": 45,
                        "mod_mount_000": 35,
                        "mod_mount_001": 35,
                        "mod_mount_002": 35,
                        "mod_mount_003": 35,
                        "mod_mount_004": 35,
                        "mod_mount_005": 35,
                        "mod_mount_006": 35,
                        "mod_muzzle": 75,
                        "mod_muzzle_000": 95,
                        "mod_muzzle_001": 95,
                        "mod_pistol_grip_akms": 35,
                        "mod_pistol_grip": 40,
                        "mod_reciever": 20,
                        "mod_sight": 100,
                        "mod_scope": 80,
                        "mod_scope_000": 45,
                        "mod_scope_001": 35,
                        "mod_scope_002": 35,
                        "mod_scope_003": 25,
                        "mod_tactical": 15,
                        "mod_tactical001": 40,
                        "mod_tactical002": 30,
                        "mod_tactical_000": 40,
                        "mod_tactical_001": 30,
                        "mod_tactical_002": 30,
                        "mod_tactical_003": 30,
                        "mod_tactical_2": 15
                    },                    
                    randomisedArmorSlots: ["Headwear"],
                    randomisedWeaponModSlots: [
                        "mod_sight",
                        "mod_sight_rear",
                        "mod_sight_front",
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
                        "mod_muzzle_001",
                        "mod_charge",
                        "mod_gas_block",
                        "mod_pistol_grip",
                        "mod_pistolgrip",
                        "mod_pistol_grip_akms",
                        "mod_pistolgrip_000",
                        "mod_foregrip",
                        "mod_trigger",
                        "mod_reciever",
                        "mod_hammer",
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
                    ]
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
            armorPlateWeighting: [{
                levelRange: {
                    min: lvl.loyalty1.min,
                    max: lvl.loyalty1.max
                },
                front_plate: {
                    2: 15,
                    3: 85,
                    4: 0,
                    5: 0,
                    6: 0
                },
                back_plate: {
                    2: 15,
                    3: 85,
                    4: 0,
                    5: 0,
                    6: 0
                },
                side_plate: {
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0
                },
                left_side_plate: {
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0
                },
                right_side_plate: {
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0
                }
            },
            {
                levelRange: {
                    min: lvl.loyalty2.min,
                    max: lvl.loyalty2.max
                },
                front_plate: {
                    2: 0,
                    3: 94,
                    4: 6,
                    5: 0,
                    6: 0
                },
                back_plate: {
                    2: 0,
                    3: 94,
                    4: 6,
                    5: 0,
                    6: 0
                },
                side_plate: {
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 90,
                    6: 10
                },
                left_side_plate: {
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 90,
                    6: 10
                },
                right_side_plate: {
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 90,
                    6: 10
                }
            },
            {
                levelRange: {
                    min: lvl.loyalty3.min,
                    max: lvl.loyalty3.max
                },
                front_plate: {
                    2: 0,
                    3: 0,
                    4: 85,
                    5: 10,
                    6: 5
                },
                back_plate: {
                    2: 0,
                    3: 0,
                    4: 85,
                    5: 10,
                    6: 5
                },
                side_plate: {
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 80,
                    6: 20
                },
                left_side_plate: {
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 80,
                    6: 20
                },
                right_side_plate: {
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 80,
                    6: 20
                }
            },
            {
                levelRange: {
                    min: lvl.loyalty4.min,
                    max: 100
                },
                front_plate: {
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 50,
                    6: 50
                },
                back_plate: {
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 50,
                    6: 50
                },
                side_plate: {
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 50,
                    6: 50
                },
                left_side_plate: {
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 50,
                    6: 50
                },
                right_side_plate: {
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 50,
                    6: 50
                }
            }
            ],
            whitelist: [
                {
                    levelRange: {
                        min: lvl.loyalty1.min,
                        max: lvl.loyalty1.max
                    },
                    equipment: {
                        FirstPrimaryWeapon: [...primaryWeaponLL1],
                        SecondPrimaryWeapon: [...primaryWeaponLL1],
                        Holster: [...holsterLL1],
                        Backpack: [...backpackLL1],
                        TacticalVest: [...tacticalVestLL1],
                        Earpiece: [...earpieceLL1],
                        Headwear: [...headwearLL1],
                        ArmorVest: [...armorVestLL1],
                        Eyewear: [...eyewearLL1],
                        ArmBand: [...armBandLL1],
                        FaceCover: [...faceCoverLL1]
                    },
                    cartridge: {
                        Caliber762x54R: [...ammo762x54LL1],
                        Caliber762x51: [...ammo762x51LL1],
                        Caliber762x39: [...ammo762x39LL1],
                        Caliber762x35: [...ammo762x35LL1],
                        Caliber762x25TT: [...ammo762x25TTLL1],
                        Caliber366TKM: [...ammo366TKMLL1],
                        Caliber556x45NATO: [...ammo556x45LL1],
                        Caliber545x39: [...ammo545x39LL1],
                        Caliber1143x23ACP: [...ammo1143x23ACPLL1],
                        Caliber9x19PARA: [...ammo9x19LL1],
                        Caliber9x18PM: [...ammo9x18LL1],
                        Caliber12g: [...ammo12x70LL1]
                    }
                }
            ],
            weightingAdjustmentsByBotLevel: [],
            forceStock: true
        };

        const progressionWhitelistLL2PMC: EquipmentFilterDetails = {
            levelRange: {
                min: lvl.loyalty2.min,
                max: lvl.loyalty2.max
            },
            equipment: {
                FirstPrimaryWeapon: [...primaryWeaponLL2 && primaryWeaponFlea],
                SecondPrimaryWeapon: [...primaryWeaponLL2 && primaryWeaponFlea],
                Holster: [...holsterLL2 && holsterFlea],
                Backpack: [...backpackLL2 && backpackFlea],
                TacticalVest: [...tacticalVestLL2 && tacticalVestFlea],
                Earpiece: [...earpieceLL2],
                Headwear: [...headwearLL2 && headwearFlea],
                ArmorVest: [...armorVestLL2 && armorVestFlea],
                Eyewear: [...eyewearLL2],
                ArmBand: [...armBandLL2],
                FaceCover: [...faceCoverLL2]
            },
            cartridge: {
                Caliber127x55: [...ammo127x55LL2],
                Caliber762x54R: [...ammo762x54LL2 && ammo762x54Flea],
                Caliber762x51: [...ammo762x51LL2 && ammo762x51Flea],
                Caliber762x39: [...ammo762x39LL2 && ammo762x39Flea],
                Caliber762x35: [...ammo762x35LL2 && ammo762x35Flea],
                Caliber762x25TT: [...ammo762x25TTLL2],
                Caliber366TKM: [...ammo366TKMLL2],
                Caliber556x45NATO: [...ammo556x45LL2],
                Caliber545x39: [...ammo545x39LL2 && ammo545x39Flea],
                Caliber57x28: [...ammo57x28LL2 && ammo57x28Flea],
                Caliber46x30: [...ammo46x30Flea],
                Caliber1143x23ACP: [...ammo1143x23ACPLL2],
                Caliber9x39: [...ammo9x39LL2],
                Caliber9x33R: [...ammo9x33RLL2],
                Caliber9x21: [...ammo9x21Flea],
                Caliber9x19PARA: [...ammo9x19LL2],
                Caliber9x18PM: [...ammo9x18LL2],
                Caliber12g: [...ammo12x70LL2 && ammo12x70Flea]
            }
        };

        const progressionWhitelistLL3PMC: EquipmentFilterDetails = {
            levelRange: {
                min: lvl.loyalty3.min,
                max: lvl.loyalty3.max
            },
            equipment: {
                FirstPrimaryWeapon: [...primaryWeaponLL3 && primaryWeaponFlea],
                SecondPrimaryWeapon: [...primaryWeaponLL3 && primaryWeaponFlea],
                Holster: [...holsterLL3 && holsterFlea],
                Backpack: [...backpackLL3 && backpackFlea],
                TacticalVest: [...tacticalVestLL3 && tacticalVestFlea],
                Earpiece: [...earpieceLL3],
                Headwear: [...headwearLL3 && headwearFlea],
                ArmorVest: [...armorVestFlea],
                Eyewear: [...eyewearLL3],
                ArmBand: [...armBandLL3],
                FaceCover: [...faceCoverLL3]
            },
            cartridge: {
                Caliber127x55: [...ammo127x55LL3],
                Caliber762x54R: [...ammo762x54LL3],
                Caliber762x51: [...ammo762x51LL3],
                Caliber762x39: [...ammo762x39LL3],
                Caliber762x35: [...ammo762x35LL3],
                Caliber68x51: [...ammo68x51LL3],
                Caliber366TKM: [...ammo366TKMLL3],
                Caliber556x45NATO: [...ammo556x45LL3],
                Caliber545x39: [...ammo545x39LL3],
                Caliber57x28: [...ammo57x28LL3],
                Caliber46x30: [...ammo46x30LL3],
                Caliber1143x23ACP: [...ammo1143x23ACPLL3],
                Caliber9x39: [...ammo9x39LL3],
                Caliber9x33R: [...ammo9x33RLL2],
                Caliber9x21: [...ammo9x21LL3],
                Caliber9x19PARA: [...ammo9x19LL3],
                Caliber9x18PM: [...ammo9x18LL2],
                Caliber12g: [...ammo12x70LL3],
                Caliber23x75: [...ammo23x75LL3]
            }
        };

        const progressionWhitelistLL4PMC: EquipmentFilterDetails = {
            levelRange: {
                min: lvl.loyalty4.min,
                max: 100
            },
            equipment: {
                FirstPrimaryWeapon: [...primaryWeaponLL4],
                SecondPrimaryWeapon: [...primaryWeaponLL4],
                Holster: [...holsterLL4],
                Backpack: [...backpackLL4],
                TacticalVest: [...tacticalVestLL4],
                Earpiece: [...earpieceLL4],
                Headwear: [...headwearLL4],
                ArmorVest: [...armorVestLL4],
                Eyewear: [...eyewearLL4],
                ArmBand: [...armBandLL4],
                FaceCover: [...faceCoverLL4]
            },
            cartridge: {
                Caliber40x46: [...ammo40x46LL4],
                Caliber127x55: [...ammo127x55LL4],
                Caliber86x70: [...ammo86x70LL4],
                Caliber762x54R: [...ammo762x54LL4],
                Caliber762x51: [...ammo762x51LL4],
                Caliber762x39: [...ammo762x39LL4],
                Caliber762x35: [...ammo762x35LL4],
                Caliber68x51: [...ammo68x51LL4],
                Caliber366TKM: [...ammo366TKMLL3],
                Caliber556x45NATO: [...ammo556x45LL4],
                Caliber545x39: [...ammo545x39LL4],
                Caliber57x28: [...ammo57x28LL4],
                Caliber46x30: [...ammo46x30LL4],
                Caliber1143x23ACP: [...ammo1143x23ACPLL4],
                Caliber9x39: [...ammo9x39LL4],
                Caliber9x21: [...ammo9x21LL4],
                Caliber9x19PARA: [...ammo9x19LL3],
                Caliber9x18PM: [...ammo9x18LL2],
                Caliber12g: [...ammo12x70LL3],
                Caliber23x75: [...ammo23x75LL3]
            }
        };

        this.botConfig.equipment.pmc = progressionWhitelistLL1PMC;

        const whitelist = this.botConfig.equipment.pmc.whitelist;
        whitelist.push(progressionWhitelistLL2PMC);
        whitelist.push(progressionWhitelistLL3PMC);
        whitelist.push(progressionWhitelistLL4PMC);
    }
}