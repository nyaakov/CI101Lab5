/**
 * Do not change this file
 */
const express = require("express");
const app = express();

app.use(express.static('.'));
app.use(express.json());

app.listen('8080', function(){console.log("listening at port 8080...")});