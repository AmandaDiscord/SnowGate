"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
const express_1 = __importDefault(require("express"));
const snowtransfer_1 = __importDefault(require("snowtransfer"));
const passthrough_1 = __importDefault(require("./passthrough"));
class SnowGate {
    constructor(config, snowtransfer) {
        this.started = false;
        this.config = config;
        if (!snowtransfer)
            this.snowtransfer = new snowtransfer_1.default(config.token, config.options);
        else
            this.snowtransfer = snowtransfer;
        Object.assign(passthrough_1.default, { rest: this.snowtransfer });
        this.app = express_1.default();
    }
    async start() {
        if (this.started)
            throw new Error("Server already started");
        const apiVer = this.config.apiVersion || 8;
        const apiRoute = `/api/v${apiVer}`;
        this.app.disable("x-powered-by");
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((req, res, next) => {
            if (req.headers["X-Audit-Log-Reason"]) {
                if (req.method === "GET" || req.path.includes("/bans") || req.path.includes("/prune")) {
                    req.query.reason = req.headers["X-Audit-Log-Reason"];
                }
                else {
                    req.body.reason = req.headers["X-Audit-Log-Reason"];
                }
            }
            next();
        });
        const [bots, channels, emojis, guilds, invites, users, voice, webhook] = await Promise.all([
            Promise.resolve().then(() => __importStar(require("./routes/bots"))),
            Promise.resolve().then(() => __importStar(require("./routes/channels"))),
            Promise.resolve().then(() => __importStar(require("./routes/emojis"))),
            Promise.resolve().then(() => __importStar(require("./routes/guilds"))),
            Promise.resolve().then(() => __importStar(require("./routes/invites"))),
            Promise.resolve().then(() => __importStar(require("./routes/users"))),
            Promise.resolve().then(() => __importStar(require("./routes/voice"))),
            Promise.resolve().then(() => __importStar(require("./routes/webhook")))
        ]);
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
module.exports = SnowGate;
