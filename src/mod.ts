import { ConfigTypes } from "@spt-aki/models/enums/ConfigTypes";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { IPreAkiLoadMod } from "@spt-aki/models/external/IPreAkiLoadMod";
import { IBotConfig } from "@spt-aki/models/spt/config/IBotConfig";
import { ConfigServer } from "@spt-aki/servers/ConfigServer";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { DependencyContainer } from "tsyringe";
//import { Scavs } from "./scavs";
import { ILocationConfig } from "@spt-aki/models/spt/config/ILocationConfig";
import { IPmcConfig } from "@spt-aki/models/spt/config/IPmcConfig";
import { Boss } from "./boss";
import { PMCs } from "./pmc";
import { ValensBotLevelGen } from "./valensbotlevelgen";


class ValensProgression implements IPostDBLoadMod, IPreAkiLoadMod
{
    private configServer: ConfigServer;
    private locationConfig: ILocationConfig
    private botConfig: IBotConfig;
    private pmcConfig: IPmcConfig;
    private databaseServer: DatabaseServer;
    // private scavs: Scavs;
    private pmcs: PMCs;
    private boss: Boss;

    public preAkiLoad(container: DependencyContainer): void 
    {
        container.register("ValensBotLevelGen",ValensBotLevelGen);
        container.register("BotLevelGenerator",{useToken:"ValensBotLevelGen"})
    }

    public postDBLoad(container: DependencyContainer): void
    {
        // get database from server
        this.configServer = container.resolve<ConfigServer>("ConfigServer");
        this.locationConfig = this.configServer.getConfig<ILocationConfig>(ConfigTypes.LOCATION);
        this.botConfig = this.configServer.getConfig<IBotConfig>(ConfigTypes.BOT);
        this.pmcConfig = this.configServer.getConfig<IPmcConfig>(ConfigTypes.PMC);
        this.databaseServer = container.resolve<DatabaseServer>("DatabaseServer");


        // this.scavs = new Scavs(this.botConfig, this.databaseServer);
        // this.scavs.updateScavs();

        this.boss = new Boss(this.locationConfig);
        this.boss.updateBoss();

        this.pmcs = new PMCs(this.botConfig, this.pmcConfig, this.databaseServer);
        this.pmcs.updatePmcs();
    }
}
    
module.exports = { mod: new ValensProgression() }