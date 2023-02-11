const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

const { signIn, welcome, refresh } = require("./handlers");

app.post("/signin", signIn);
app.get("/welcome", welcome);
app.post("/refresh", refresh);

app.listen(8000);