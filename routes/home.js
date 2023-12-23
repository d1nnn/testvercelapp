const router = require('express').Router();
const routers = require('../routers/index')


router.get("/", (req, res) => {
  res.send("hello")
})

router.use("/notapp", routers)

module.exports = router
