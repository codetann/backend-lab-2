const express = require("express");
const router = express.Router();
const houseCtrl = require("../controllers/houseController");

router.get("/", houseCtrl.getHouses);
router.post("/", houseCtrl.createHouse);
router.delete("/:id", houseCtrl.deleteHouse);
router.put("/:id", houseCtrl.updateHouse);

module.exports = router;
