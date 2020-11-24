import { Router } from "express";

import passthrough from "../passthrough";

import utils from "../utils";

const router = Router();

// Get invite
router.get("/invites/:inviteId", (req, res) => {
	return utils.wrapRequest(passthrough.rest, "invite", "getInvite", res, req.params.inviteId, req.query.with_counts);
});
// Delete invite
router.delete("/invites/:inviteId", (req, res) => {
	return utils.wrapRequest(passthrough.rest, "invite", "deleteInvite", res, req.params.inviteId);
});

export = router;
