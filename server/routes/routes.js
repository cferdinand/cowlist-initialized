const router = require("express").Router();
const controllers = require("../controllers/controllers.js");

router.get("/cows", controllers.getAllCows);
router.post("/cows", controllers.addOneCow);
router.put("/cows", controllers.updateOneCow);
router.delete("/cows", controllers.deleteOneCow);
module.exports = router;
