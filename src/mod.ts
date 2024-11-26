import type { ProfileHelper } from "@spt/helpers/ProfileHelper";
import { ConfigTypes } from "@spt/models/enums/ConfigTypes";
import type { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import type { IBotConfig } from "@spt/models/spt/config/IBotConfig";
//import { Scavs } from "./scavs";
import type { ILocationConfig } from "@spt/models/spt/config/ILocationConfig";
import type { IPmcConfig } from "@spt/models/spt/config/IPmcConfig";
import type { ConfigServer } from "@spt/servers/ConfigServer";
import type { DatabaseServer } from "@spt/servers/DatabaseServer";
import type { DependencyContainer } from "tsyringe";
import { Boss } from "./boss";
import { PMCs } from "./pmc";

class ValensProgression implements IPostDBLoadMod {
	private configServer: ConfigServer;
	private locationConfig: ILocationConfig;
	private botConfig: IBotConfig;
	private pmcConfig: IPmcConfig;
	private databaseServer: DatabaseServer;
	private profileHelper: ProfileHelper;
	// private scavs: Scavs;
	private pmcs: PMCs;
	private boss: Boss;

	public postDBLoad(container: DependencyContainer): void {
		// get database from server
		this.configServer = container.resolve<ConfigServer>("ConfigServer");
		this.locationConfig = this.configServer.getConfig<ILocationConfig>(
			ConfigTypes.LOCATION,
		);
		this.botConfig = this.configServer.getConfig<IBotConfig>(ConfigTypes.BOT);
		this.pmcConfig = this.configServer.getConfig<IPmcConfig>(ConfigTypes.PMC);
		this.databaseServer = container.resolve<DatabaseServer>("DatabaseServer");
		this.profileHelper = container.resolve<ProfileHelper>("ProfileHelper");

		// this.scavs = new Scavs(this.botConfig, this.databaseServer);
		// this.scavs.updateScavs();

		this.boss = new Boss(this.locationConfig);
		this.boss.updateBoss();

		this.pmcs = new PMCs(
			this.botConfig,
			this.pmcConfig,
			this.databaseServer,
			this.profileHelper,
		);
		this.pmcs.updatePmcs();
	}
}

module.exports = { mod: new ValensProgression() };
