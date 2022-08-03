const express = require('express');

// defining the Express app
const app = express();
const cors = require("cors");
var appRouter = require('./router');
var bodyParser = require('body-parser');
const { checkout } = require('./router');

app.use(bodyParser.json());
//app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', appRouter);
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
})



//server running on port 3000
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});
module.exports = app;