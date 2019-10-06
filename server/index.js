const express = require("express");
const bodyparser = require("body-parser");
const cowRoutes = require("./routes/routes.js");
const db = require("../database/index.js");
const app = express();
const port = 3000;

app.use(express.static("./client/dist"));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use("/api", cowRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
