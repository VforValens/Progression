import { BotLevelGenerator } from "@spt-aki/generators/BotLevelGenerator";
import { MinMax } from "@spt-aki/models/common/MinMax";
import { IRandomisedBotLevelResult } from "@spt-aki/models/eft/bot/IRandomisedBotLevelResult";
import { IExpTable } from "@spt-aki/models/eft/common/IGlobals";
import { IBotBase } from "@spt-aki/models/eft/common/tables/IBotBase";
import { BotGenerationDetails } from "@spt-aki/models/spt/bots/BotGenerationDetails";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { RandomUtil } from "@spt-aki/utils/RandomUtil";
import { inject, injectable } from "tsyringe";
import { PmcConfig } from "../config/ts/pmc";

@injectable()
export class ValensBotLevelGen extends BotLevelGenerator
{
    private modConfig: PmcConfig = require("../config/pmc.json");

    constructor(
        @inject("WinstonLogger") protected logger: ILogger,
        @inject("RandomUtil") protected randomUtil: RandomUtil,
        @inject("DatabaseServer") protected databaseServer: DatabaseServer
    )
    {
        super(logger, randomUtil,databaseServer);
                       
    }
    protected getLowestRelativeBotLevel(
        playerLevel: number,
        relativeDeltaMin: number,
        levelDetails: MinMax,
        expTable: IExpTable[]
    ): number
    {
        // Some bots have a max level of 1
        const minPossibleLevel = Math.min(levelDetails.min, expTable.length);

        let level = playerLevel - relativeDeltaMin;
        if (level < minPossibleLevel)
        {
            level = minPossibleLevel;
        }

        return level;
    }
    public override generateBotLevel(levelDetails: MinMax, botGenerationDetails: BotGenerationDetails, bot: IBotBase): IRandomisedBotLevelResult 
    {
        const expTable = this.databaseServer.getTables().globals.config.exp.level.exp_table;
        this.logger.info(`Setting botRelativeLevelDeltaMin to: ${this.modConfig.botRelativeLevelDeltaMin}`);
        const highestLevel = this.getHighestRelativeBotLevel(
            botGenerationDetails.playerLevel,
            botGenerationDetails.botRelativeLevelDeltaMax,
            levelDetails,
            expTable
        );
        const lowestLevel = this.getLowestRelativeBotLevel(
            botGenerationDetails.playerLevel,
            this.modConfig.botRelativeLevelDeltaMin,
            levelDetails,
            expTable);

        // Get random level based on the exp table.
        let exp = 0;
        const level = this.randomUtil.getInt(lowestLevel, highestLevel);

        for (let i = 0; i < level; i++)
        {
            exp += expTable[i].exp;
        }

        // Sprinkle in some random exp within the level, unless we are at max level.
        if (level < expTable.length - 1)
        {
            exp += this.randomUtil.getInt(0, expTable[level].exp - 1);
        }

        return { level, exp };
    }
}