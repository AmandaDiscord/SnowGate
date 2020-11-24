"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = require("express");
const passthrough_1 = __importDefault(require("../passthrough"));
const utils_1 = __importDefault(require("../utils"));
const router = express_1.Router();
router.post("/guilds", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "guild", "createGuild", res, req.body);
});
router.get("/guilds/:id", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "guild", "getGuild", res, req.params.id);
});
router.patch("/guilds/:id", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "guild", "updateGuild", res, req.params.id, req.body);
});
router.delete("/guilds/:id", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "guild", "deleteGuild", res, req.params.id);
});
router.get("/guilds/:id/channels", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "guild", "getGuildChannels", res, req.params.id);
});
router.post("/guilds/:id/channels", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "guild", "createGuildChannel", res, req.params.id, req.body);
});
router.patch("/guilds/:id/channels", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "guild", "updateChannelPositions", res, req.params.id, req.body);
});
router.get("/guilds/:id/members/:user_id", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "guild", "getGuildMember", res, req.params.id, req.params.user_id);
});
router.get("/guilds/:id/members", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "guild", "getGuildMembers", res, req.params.id, req.query);
});
router.put("/guilds/:id/members/:user_id", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "guild", "addGuildMember", res, req.params.id, req.params.user_id, req.body);
});
router.patch("/guilds/:id/members/:user_id", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "guild", "updateGuildMember", res, req.params.id, req.params.user_id, req.body);
});
router.patch("/guilds/:id/members/@me/nick", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "guild", "updateSelf", res, req.params.id, req.body);
});
router.put("/guilds/:id/members/:user_id/roles/:role_id", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "guild", "addGuildMemberRole", res, req.params.id, req.params.id, req.params.user_id, req.params.role_id);
});
router.delete("/guilds/:id/members/:user_id/roles/:role_id", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "guild", "removeGuildMemberRole", res, req.params.id, req.params.id, req.params.user_id, req.params.role_id);
});
router.delete("/guilds/:id/members/:user_id", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "guild", "removeGuildMember", res, req.params.id, req.params.id, req.params.user_id);
});
router.get("/guilds/:id/bans", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "guild", "getGuildBans", res, req.params.id);
});
router.put("/guilds/:id/bans/:user_id", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "guild", "createGuildBan", res, req.params.id, req.params.user_id, req.query);
});
router.delete("/guilds/:id/bans/:user_id", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "guild", "removeGuildBan", res, req.params.id, req.params.user_id);
});
router.get("/guilds/:id/roles", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "guild", "getGuildRoles", res, req.params.id);
});
router.put("/guilds/:id/roles", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "guild", "createGuildRole", res, req.params.id, req.body);
});
router.patch("/guilds/:id/roles/:role_id", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "guild", "updateGuildRole", res, req.params.id, req.params.role_id, req.body);
});
router.delete("/guilds/:id/roles/:role_id", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "guild", "removeGuildRole", res, req.params.id, req.params.role_id);
});
router.get("/guilds/:id/prune", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "guild", "getGuildPruneCount", res, req.params.id, req.query);
});
router.get("/guilds/:id/prune", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "guild", "startGuildPrune", res, req.params.id, req.query);
});
router.get("/guilds/:id/regions", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "guild", "getGuildVoiceRegions", res, req.params.id);
});
router.get("/guilds/:id/invites", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "guild", "getGuildInvites", res, req.params.id);
});
router.get("/guilds/:id/integrations", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "guild", "getGuildIntegrations", res, req.params.id);
});
router.post("/guilds/:id/integrations", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "guild", "createGuildIntegration", res, req.params.id, req.body);
});
router.patch("/guilds/:id/integrations/:integration_id", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "guild", "updateGuildIntegration", res, req.params.id, req.params.integration_id, req.body);
});
router.delete("/guilds/:id/integrations/:integration_id", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "guild", "removeGuildIntegration", res, req.params.id, req.params.integration_id);
});
router.post("/guilds/:id/integrations/:integration_id", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "guild", "syncGuildIntegration", res, req.params.id, req.params.integration_id);
});
router.get("/guilds/:id/embed", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "guild", "getGuildEmbed", res, req.params.id);
});
router.patch("/guilds/:id/embed", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "guild", "updateGuildEmbed", res, req.params.id, req.body);
});
module.exports = router;
