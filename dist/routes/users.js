"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = require("express");
const passthrough_1 = __importDefault(require("../passthrough"));
const utils_1 = __importDefault(require("../utils"));
const router = express_1.Router();
router.get("/users/:id", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "user", "getUser", res, req.params.id);
});
router.patch("/users/@me", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "user", "updateSelf", res, req.body);
});
router.get("/users/@me/guilds", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "user", "getGuilds", res);
});
router.delete("/users/@me/guilds/:guild_id", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "user", "leaveGuild", res, req.params.guild_id);
});
router.get("/users/@me/channels", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "user", "getDirectMessages", res);
});
router.post("/users/@me/channels", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "user", "createDirectMessageChannel", res, req.body.recipient_id);
});
module.exports = router;
