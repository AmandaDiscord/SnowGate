"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = require("express");
const passthrough_1 = __importDefault(require("../passthrough"));
const utils_1 = __importDefault(require("../utils"));
const router = express_1.Router();
router.get("/voice/regions", async (req, res) => {
    return utils_1.default.wrapRequest(passthrough_1.default.rest, "voice", "getVoiceRegions", res);
});
module.exports = router;
