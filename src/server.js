// const express = require('express')
import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web"
import initApiRoute from "./route/api"
// import connection from "./configs/connectDB"

require('dotenv').config();

const cors = require('cors');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

configViewEngine(app);
initWebRoute(app);
initApiRoute(app);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})