const express = require('express')
const home = require('./routes/home')

const app = express()

app.use('/', home);

app.listen(4567, () => console.log("connected"))
