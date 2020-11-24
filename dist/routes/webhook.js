"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = require("express");
const passthrough_1 = __importDefault(require("../passthrough"));
const utils_1 = __importDefault(require("../utils"));
const router = express_1.Router();
router.get("/channels/:id/webhooks", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "webhook", "getWebhooksChannel", res, req.params.id);
});
router.post("/channels/:id/webhooks", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "webhook", "createWebhook", res, req.params.id, req.body);
});
router.get("/guilds/:id/webhooks", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "webhook", "getWebhooksGuild", res, req.params.id);
});
router.get("/webhooks/:id", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "webhook", "getWebhook", res, req.params.id);
});
router.patch("/webhooks/:id", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "webhook", "updateWebhook", res, req.params.id, null, req.body);
});
router.delete("/webhooks/:id", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "webhook", "deleteWebhook", res, req.params.id);
});
router.get("/webhooks/:id/:token", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "webhook", "getWebhook", res, req.params.id, req.params.token);
});
router.patch("/webhooks/:id/:token", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "webhook", "updateWebhook", res, req.params.id, req.params.token, req.body);
});
router.delete("/webhooks/:id/:token", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "webhook", "deleteWebhook", res, req.params.id, req.params.token);
});
router.post("/webhooks/:id/:token", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "webhook", "executeWebhook", res, req.params.id, req.params.token, req.body);
});
module.exports = router;
