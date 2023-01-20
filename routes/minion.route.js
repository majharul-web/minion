const express = require("express");
const minionController = require("../controllers/minion.controller");
const router = express.Router();

router.route("/:id").patch(minionController.updateMinion).delete(minionController.deleteMinionById);

router.route("/").get(minionController.getMinion).post(minionController.insertMinion);

module.exports = router;
