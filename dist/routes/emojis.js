"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = require("express");
const passthrough_1 = __importDefault(require("../passthrough"));
const utils_1 = __importDefault(require("../utils"));
const router = express_1.Router();
router.get("/guilds/:id/emojis", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "emoji", "getEmojis", res, req.params.id);
});
router.get("/guilds/:id/emojis/:emoji_id", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "emoji", "getEmoji", res, req.params.id, req.params.emoji_id);
});
router.post("/guilds/:id/emojis", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "emoji", "createEmoji", res, req.params.id, req.body);
});
router.patch("/guilds/:id/emojis/:emoji_id", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "emoji", "updateEmoji", res, req.params.id, req.params.emoji_id, req.body);
});
router.delete("/guilds/:id/emojis/:emoji_id", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "emoji", "deleteEmoji", res, req.params.id, req.params.emoji_id);
});
module.exports = router;
