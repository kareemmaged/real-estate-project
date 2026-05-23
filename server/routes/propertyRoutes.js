const router = require("express").Router();

const {
  getProperties,
  addProperty,
} = require("../controllers/propertyController");

router.get("/", getProperties);

router.post("/", addProperty);

module.exports = router;
