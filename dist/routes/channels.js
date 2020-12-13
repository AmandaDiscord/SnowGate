"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const passthrough_1 = __importDefault(require("../passthrough"));
const utils_1 = __importDefault(require("../utils"));
const upload = multer_1.default({ storage: multer_1.default.memoryStorage() });
const router = express_1.Router();
router.get("/channels/:id", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "channel", "getChannel", res, req.params.id);
});
router.patch("/channels/:id", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "channel", "updateChannel", res, req.params.id, req.body);
});
router.delete("/channels/:id", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "channel", "deleteChannel", res, req.params.id);
});
router.get("/channels/:id/messages", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "channel", "getChannelMessages", res, req.params.id, req.query);
});
router.get("/channels/:id/messages/:message_id", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "channel", "getChannelMessage", res, req.params.id, req.params.message_id);
});
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
    }
    catch (e) {
        return res.status(400).json({ code: 80000, message: "Failed to parse body", error: e.toString() });
    }
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "channel", "createMessage", res, req.params.id, body);
});
router.put("/channels/:id/messages/:message_id/reactions/:emoji/@me", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "channel", "createReaction", res, req.params.id, req.params.message_id, encodeURIComponent(req.params.emoji));
});
router.delete("/channels/:id/messages/:message_id/reactions/:emoji/:user_id", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "channel", "deleteReaction", res, req.params.id, req.params.message_id, encodeURIComponent(req.params.emoji), req.params.user_id);
});
router.get("/channels/:id/messages/:message_id/reactions/:emoji", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "channel", "getReactions", res, req.params.id, req.params.message_id, encodeURIComponent(req.params.emoji));
});
router.delete("/channels/:id/messages/:message_id/reactions", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "channel", "deleteAllReactions", res, req.params.id, req.params.message_id);
});
router.patch("/channels/:id/messages/:message_id", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "channel", "editMessage", res, req.params.id, req.params.message_id, req.body);
});
router.delete("/channels/:id/messages/:message_id", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "channel", "deleteMessage", res, req.params.id, req.params.message_id);
});
router.post("/channels/:id/messages/bulk-delete", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "channel", "bulkDeleteMessages", res, req.params.id, req.body);
});
router.put("/channels/:id/permissions/:permission_id", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "channel", "editChannelPermission", res, req.params.id, req.params.permission_id, req.body);
});
router.get("/channels/:id/invites", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "channel", "getChannelInvites", res, req.params.id);
});
router.post("/channels/:id/invites", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "channel", "createChannelInvite", res, req.params.id, req.body);
});
router.delete("/channels/:id/permissions/:permission_id", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "channel", "deleteChannelPermission", res, req.params.id, req.params.permission_id);
});
router.post("/channels/:id/typing", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "channel", "startChannelTyping", res, req.params.id);
});
router.get("/channels/:id/pins", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "channel", "getChannelPinnedMessages", res, req.params.id);
});
router.put("/channels/:id/pins/:message_id", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "channel", "addChannelPinnedMessage", res, req.params.id, req.params.message_id);
});
router.delete("/channels/:id/pins/:message_id", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "channel", "removeChannelPinnedMessage", res, req.params.id, req.params.message_id);
});
router.put("/channels/:id/recipients/:user_id", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "channel", "addDmChannelRecipient", res, req.params.id, req.params.user_id);
});
router.delete("/channels/:id/recipients/:user_id", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "channel", "removeDmChannelRecipient", res, req.params.id, req.params.user_id);
});
module.exports = router;
