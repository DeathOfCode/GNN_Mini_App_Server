const express = require("express");
const app = express();
const homeRouter = require('./routes/homeRouter');

app.use(function (req, res, next) {
    console.log(req);
    // const allowedOrigins = ["http://localhost:3001", "https://h5.zdn.vn", "zbrowser://h5.zdn.vn"];
    // const origin = req.headers.origin;
    // if (allowedOrigins.includes(origin)) {
    //      res.setHeader('Access-Control-Allow-Origin', origin);
    // }
  res.header('Access-Control-Allow-Origin', "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api/v1',homeRouter);
module.exports = app;