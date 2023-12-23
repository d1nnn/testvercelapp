const express = require('express')
const home = require('./routes/home')
const routers = require('./routers/index')

const app = express()

app.use('/app', home);
app.use('/notapp', routers);

app.listen(4567, () => console.log("connected"))
