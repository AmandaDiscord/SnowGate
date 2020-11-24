"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = require("express");
const passthrough_1 = __importDefault(require("../passthrough"));
const utils_1 = __importDefault(require("../utils"));
const router = express_1.Router();
router.get("/invites/:inviteId", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "invite", "getInvite", res, req.params.inviteId, req.query.with_counts);
});
router.delete("/invites/:inviteId", (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "invite", "deleteInvite", res, req.params.inviteId);
});
module.exports = router;
