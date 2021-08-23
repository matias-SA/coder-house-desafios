const express = require("express");
const handlebars = require('express-handlebars')
const http = require('http');
const socketio = require('socket.io')
const moment = require('moment')

const router = express.Router();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

module.exports = app;