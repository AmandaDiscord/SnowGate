import { Router } from "express";

import passthrough from "../passthrough";

import utils from "../utils";

const router = Router();

// Get gateway
router.get("/gateway", (req, res) => {
	return utils.wrapRequest(passthrough.rest, "bot", "getGateway", res, req.params.inviteId);
});
// Get bot gateway
router.delete("/gateway/bot", (req, res) => {
	return utils.wrapRequest(passthrough.rest, "bot", "getGatewayBot", res, req.params.inviteId);
});

export = router;
