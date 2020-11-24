import { Router } from "express";

import passthrough from "../passthrough";

import utils from "../utils";

const router = Router();

// Get list of emojis
router.get("/guilds/:id/emojis", (req, res) => {
	return utils.wrapRequest(passthrough.rest, "emoji", "getEmojis", res, req.params.id);
});
// Get emoji
router.get("/guilds/:id/emojis/:emoji_id", (req, res) => {
	return utils.wrapRequest(passthrough.rest, "emoji", "getEmoji", res, req.params.id, req.params.emoji_id);
});
// Create emoji
router.post("/guilds/:id/emojis", (req, res) => {
	return utils.wrapRequest(passthrough.rest, "emoji", "createEmoji", res, req.params.id, req.body);
});
// Update emoji
router.patch("/guilds/:id/emojis/:emoji_id", (req, res) => {
	return utils.wrapRequest(passthrough.rest, "emoji", "updateEmoji", res, req.params.id, req.params.emoji_id, req.body);
});
// Delete emoji
router.delete("/guilds/:id/emojis/:emoji_id", (req, res) => {
	return utils.wrapRequest(passthrough.rest, "emoji", "deleteEmoji", res, req.params.id, req.params.emoji_id);
});

export = router;
