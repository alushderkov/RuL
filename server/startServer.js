const express = require("express");
const router = require("./router");
const path = require('path');

function startServer() {

    const app = express();

    app.use(express.json());
    app.use(express.static(path.join(__dirname, '../layout')));
    app.use(express.static(path.join(__dirname, '../client')));
    app.use('/api', router);

    return app;
    
}

module.exports = { startServer };