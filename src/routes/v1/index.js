const express = require('express')

const problemRouter = require('./problem.routes')

const v1Router = express.Router();


// if any routes comes with problems we map it to the problem router
v1Router.use('/problems',problemRouter)

module.exports = v1Router;
