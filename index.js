const express = require('express')
const routers = require('./routers/index')
const BlogRoutes = require('./routers/BlogsRoute')
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const errorHandler = require("./middleware/error/errorHandler.js");

const app = express()
app.use(cors());

//use middleware
app.use(express.json({ limit: "25mb" }));
app.use(express.static("public"))

app.use(morgan("combined")); // 'combined' is one of the predefined log formats

app.use(morgan("combined")); // 'combined' is one of the predefined log formats


app.use('/api/v1/blogs', BlogRoutes)
// mongoose
//   //.connect(process.env.MONGO_URI, { dbName: process.env.DATABASE_NAME })
//   .connect(process.env.URI)
//   .then(() => {
//     //make the server listening on port 4567
//     app.listen(process.env.PORT, () => {
//       console.log("connect & listen");
//     });
//   })
//   .catch((e) => {
//     console.log(e);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

app.listen(4567, () => console.log("connected"))


