import { Router } from "express";

import passthrough from "../passthrough";

import utils from "../utils";

const router = Router();

// List Voice Regions
router.get("/voice/regions", async (req, res) => {
	return utils.wrapRequest(passthrough.rest, "voice", "getVoiceRegions", res);
});

export = router;
