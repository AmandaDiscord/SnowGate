import { Router } from "express";
import multer from "multer";

import passthrough from "../passthrough";

import utils from "../utils";

const upload = multer({ storage: multer.memoryStorage() });
const router = Router();

// Get Channel
router.get("/channels/:id", async (req, res) => {
	return utils.wrapRequest(passthrough.rest, "channel", "getChannel", res, req.params.id);
});
// Modify Channel
router.patch("/channels/:id", async (req, res) => {
	return utils.wrapRequest(passthrough.rest, "channel", "updateChannel", res, req.params.id, req.body);
});
// Delete/Close Channel
router.delete("/channels/:id", async (req, res) => {
	return utils.wrapRequest(passthrough.rest, "channel", "deleteChannel", res, req.params.id);
});
// Get Channel Messages
router.get("/channels/:id/messages", async (req, res) => {
	return utils.wrapRequest(passthrough.rest, "channel", "getChannelMessages", res, req.params.id, req.query);
});
// Get Channel Message
router.get("/channels/:id/messages/:message_id", async (req, res) => {
	return utils.wrapRequest(passthrough.rest, "channel", "getChannelMessage", res, req.params.id, req.params.message_id);
});
// Create Message
router.post("/channels/:id/messages", upload.single("file"), async (req, res) => {
	let body = req.body;
	try {
		if (req.body.payload_json) {
			body = JSON.parse(req.body.payload_json);
			if (body.file && req.file) {
				body.file.file = req.file.buffer;
				if (!body.file.name) {
					body.file.name = req.file;
				}
			}
		}
	} catch (e) {
		return res.status(400).json({ code: 80000, message: "Failed to parse body", error: e.toString() });
	}
	return utils.wrapRequest(passthrough.rest, "channel", "createMessage", res, req.params.id, body);
});
// Create Reaction
router.put("/channels/:id/messages/:message_id/reactions/:emoji/@me", async (req, res) => {
	return utils.wrapRequest(passthrough.rest, "channel", "createReaction", res, req.params.id, req.params.message_id, encodeURIComponent(req.params.emoji));
});
// Delete Reaction
router.delete("/channels/:id/messages/:message_id/reactions/:emoji/:user_id", async (req, res) => {
	return utils.wrapRequest(passthrough.rest, "channel", "deleteReaction", res, req.params.id, req.params.message_id, encodeURIComponent(req.params.emoji), req.params.user_id);
});
// Get Reactions
router.get("/channels/:id/messages/:message_id/reactions/:emoji", async (req, res) => {
	return utils.wrapRequest(passthrough.rest, "channel", "getReactions", res, req.params.id, req.params.message_id, encodeURIComponent(req.params.emoji));
});
// Delete All Reactions
router.delete("/channels/:id/messages/:message_id/reactions", async (req, res) => {
	return utils.wrapRequest(passthrough.rest, "channel", "deleteAllReactions", res, req.params.id, req.params.message_id);
});
// Edit Message
router.patch("/channels/:id/messages/:message_id", async (req, res) => {
	return utils.wrapRequest(passthrough.rest, "channel", "editMessage", res, req.params.id, req.params.message_id, req.body);
});
// Delete Message
router.delete("/channels/:id/messages/:message_id", async (req, res) => {
	return utils.wrapRequest(passthrough.rest, "channel", "deleteMessage", res, req.params.id, req.params.message_id);
});
// Bulk Delete Messages
router.post("/channels/:id/messages/bulk-delete", async (req, res) => {
	return utils.wrapRequest(passthrough.rest, "channel", "bulkDeleteMessages", res, req.params.id, req.body);
});
// Edit Channel Permissions
router.put("/channels/:id/permissions/:permission_id", async (req, res) => {
	return utils.wrapRequest(passthrough.rest, "channel", "editChannelPermission", res, req.params.id, req.params.permission_id, req.body);
});
// Get Channel Invites
router.get("/channels/:id/invites", async (req, res) => {
	return utils.wrapRequest(passthrough.rest, "channel", "getChannelInvites", res, req.params.id);
});
// Create Channel Invite
router.post("/channels/:id/invites", async (req, res) => {
	return utils.wrapRequest(passthrough.rest, "channel", "createChannelInvite", res, req.params.id, req.body);
});
// Delete Channel Permission
router.delete("/channels/:id/permissions/:permission_id", async (req, res) => {
	return utils.wrapRequest(passthrough.rest, "channel", "deleteChannelPermission", res, req.params.id, req.params.permission_id);
});
// Trigger Typing Indicator
router.post("/channels/:id/typing", async (req, res) => {
	return utils.wrapRequest(passthrough.rest, "channel", "startChannelTyping", res, req.params.id);
});
// Get Pinned Messages
router.get("/channels/:id/pins", async (req, res) => {
	return utils.wrapRequest(passthrough.rest, "channel", "getChannelPinnedMessages", res, req.params.id);
});
// Add Pinned Channel Message
router.put("/channels/:id/pins/:message_id", async (req, res) => {
	return utils.wrapRequest(passthrough.rest, "channel", "addChannelPinnedMessage", res, req.params.id, req.params.message_id);
});
// Delete Pinned Channel Message
router.delete("/channels/:id/pins/:message_id", async (req, res) => {
	return utils.wrapRequest(passthrough.rest, "channel", "removeChannelPinnedMessage", res, req.params.id, req.params.message_id);
});
// Group DM Add Recipient
router.put("/channels/:id/recipients/:user_id", async (req, res) => {
	return utils.wrapRequest(passthrough.rest, "channel", "addDmChannelRecipient", res, req.params.id, req.params.user_id);
});
router.delete("/channels/:id/recipients/:user_id", async (req, res) => {
	return utils.wrapRequest(passthrough.rest, "channel", "removeDmChannelRecipient", res, req.params.id, req.params.user_id);
});

export = router;
