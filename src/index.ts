import express from "express";
import SnowTransfer from "snowtransfer";

import passthrough from "./passthrough";

interface Config {
	token: string;
	host: string;
	port: number;
	apiVersion?: number;
	options?: {
		baseHost?: string;
		disableEveryone?: boolean
	}
}

class SnowGate {
	public config: Config;
	public snowtransfer: SnowTransfer;
	public app: import("express").Application;
	public started: boolean;

	public constructor(config: Config, snowtransfer?: SnowTransfer) {
		this.started = false;
		this.config = config;
		if (!snowtransfer) this.snowtransfer = new SnowTransfer(config.token, config.options);
		else this.snowtransfer = snowtransfer;

		Object.assign(passthrough, { rest: this.snowtransfer });

		this.app = express();
	}

	public async start() {
		if (this.started) throw new Error("Server already started");

		const apiVer = this.config.apiVersion || 8
		const apiRoute = `/api/v${apiVer}`;

		this.app.disable("x-powered-by");

		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));

		this.app.use((req, res, next) => {
			if (!req.headers.authorization) return res.status(404).send(JSON.stringify({ message: "404: Not found", code: 0 }))
			else if (!req.headers.authorization?.includes(this.config.token)) return res.status(404).send(JSON.stringify({ message: "404:Not found", code: 0 }))

			if (req.headers["X-Audit-Log-Reason"]) {
				if (req.method === "GET" || req.path.includes("/bans") || req.path.includes("/prune")) {
					req.query.reason = req.headers["X-Audit-Log-Reason"];
				} else {
					req.body.reason = req.headers["X-Audit-Log-Reason"];
				}
			}
			next();
		});

		const [bots, channels, emojis, guilds, invites, users, voice, webhook] = await Promise.all([
			import("./routes/bots"),
			import("./routes/channels"),
			import("./routes/emojis"),
			import("./routes/guilds"),
			import("./routes/invites"),
			import("./routes/users"),
			import("./routes/voice"),
			import("./routes/webhook")
		])

		this.app.use(apiRoute, bots.default);
		this.app.use(apiRoute, channels.default);
		this.app.use(apiRoute, emojis.default);
		this.app.use(apiRoute, guilds.default);
		this.app.use(apiRoute, invites.default);
		this.app.use(apiRoute, users.default);
		this.app.use(apiRoute, voice.default);
		this.app.use(apiRoute, webhook.default);

		this.app.listen(this.config.port, this.config.host);
		this.started = true;
	}
}

export = SnowGate;
