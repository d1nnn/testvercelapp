const router = require('express').Router()


router.get("/haha", (req, res) => {
  res.send('haha')
})

module.exports = router
