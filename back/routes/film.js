const express = require("express");
const router = express.Router();
const filmCtrl = require("../controllers/film");
const auth = require("../middlewares/auth");
const multer = require("../middleWares/multer-config");

router.get("/",filmCtrl.readAll);
router.get("/:id",filmCtrl.readOne);
router.post("/",multer,filmCtrl.createOne);
router.put("/:id",multer,filmCtrl.modifyOne); 
router.delete("/:id", filmCtrl.deleteOne);

module.exports = router; 