const router = require("express").Router();

router.post("/subscription", async (req, res) => {
  console.log(req.body);
  res.send("ok");
});

module.exports = router;
