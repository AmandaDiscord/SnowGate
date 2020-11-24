import { Router } from "express";

import passthrough from "../passthrough";

import utils from "../utils";

const router = Router();

// Get Channel Webhooks
router.get("/channels/:id/webhooks", async (req, res) => {
	return utils.wrapRequest(passthrough.rest, "webhook", "getWebhooksChannel", res, req.params.id);
});
// Create Webhook
router.post("/channels/:id/webhooks", async (req, res) => {
	return utils.wrapRequest(passthrough.rest, "webhook", "createWebhook", res, req.params.id, req.body);
});
// Get Guild Webhooks
router.get("/guilds/:id/webhooks", async (req, res) => {
	return utils.wrapRequest(passthrough.rest, "webhook", "getWebhooksGuild", res, req.params.id);
});
// Get Webhook by id
router.get("/webhooks/:id", async (req, res) => {
	return utils.wrapRequest(passthrough.rest, "webhook", "getWebhook", res, req.params.id);
});
// Update Webhook
router.patch("/webhooks/:id", async (req, res) => {
	return utils.wrapRequest(passthrough.rest, "webhook", "updateWebhook", res, req.params.id, null, req.body);
});
// Delete Webhook
router.delete("/webhooks/:id", async (req, res) => {
	return utils.wrapRequest(passthrough.rest, "webhook", "deleteWebhook", res, req.params.id);
});
// Get Webhook by id with token
router.get("/webhooks/:id/:token", async (req, res) => {
	return utils.wrapRequest(passthrough.rest, "webhook", "getWebhook", res, req.params.id, req.params.token);
});
// Update Webhook with token
router.patch("/webhooks/:id/:token", async (req, res) => {
	return utils.wrapRequest(passthrough.rest, "webhook", "updateWebhook", res, req.params.id, req.params.token, req.body);
});
// Delete Webhook with token
router.delete("/webhooks/:id/:token", async (req, res) => {
	return utils.wrapRequest(passthrough.rest, "webhook", "deleteWebhook", res, req.params.id, req.params.token);
});
// Execute Webhook
router.post("/webhooks/:id/:token", async (req, res) => {
	return utils.wrapRequest(passthrough.rest, "webhook", "executeWebhook", res, req.params.id, req.params.token, req.body);
});

export = router;
