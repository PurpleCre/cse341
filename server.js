// express server
const express = require('express');
const { default: connect } = require('./db/connect');
const app = express();
const mongoConnect = require("./db/connect");


const port = 3000;
 
app.use("/", require("./routes/index"));
app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});

mongoConnect();