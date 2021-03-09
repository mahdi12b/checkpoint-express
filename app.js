const express = require("express");
const app = express();
const port = 5000;


//middleware
function logger(req, res, next) {
  var date = new Date();
  const day = date.getDay();
  const hour = date.getHours();
  if (!(day >= 1 && day <= 5 && hour >= 9 && hour <= 17
    )) {
    res.send("we are outservice");
  } else {
    next();
  }
}

// app level middleware
app.use(logger);

//global middleware
app.use(express.static("public"));

//creating server
app.listen(port, (error) => {
  error
    ? console.log(error)
    : console.log(`the server is running on port http://localhost:${port}`);
});