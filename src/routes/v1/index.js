const express = require('express')

const ProblemRouter = require('./problem.routes')

const v1Router = express.Router();


// if any routes comes with problems we map it to the problem router
v1Router.use('/problems',ProblemRouter)

module.exports = v1Router;
