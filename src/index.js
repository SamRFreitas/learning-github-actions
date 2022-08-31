"use strict";
exports.__esModule = true;
var sum_1 = require("./sum/sum");
var result = (0, sum_1.sum)(2, 2);
console.log(result);
var express = require("express");
var app = express();
var port = 3000;
app.get('/', function (req, res) {
    res.send('Express + TypeScript Server');
});
app.listen(port, function () {
    console.log("[server]: Server is running at https://localhost:".concat(port));
});
