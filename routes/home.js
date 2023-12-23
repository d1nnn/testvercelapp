const router = require('express').Router();


router.get("/", (req, res) => {
  res.send("hello")
})

router.get("/notapp", (req, res) => {
  res.send("not hello")
})

module.exports = router
