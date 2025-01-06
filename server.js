// express server
const express = require('express');
const app = express();
const mongodb = require("./db/connect");

const port = 3000;
 
app.use("/", require("./routes"));

mongodb.initDb((err) => {
  if(err) {
    console.log(err);
  }
  else {
    app.listen(process.env.PORT || port, () => {
      console.log('Web Server is listening at port ' + (process.env.PORT || port));
    });
  };
});