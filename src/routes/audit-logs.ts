import { Router } from "express";

import passthrough from "../passthrough";

import utils from "../utils";

const router = Router();

router.get('/guilds/:id/audit-logs', async (req, res) => {
	return utils.wrapRequest(passthrough.rest, "auditLog", "getAuditLog", res, req.params.id, req.query);
});

export = router;
