const express = require('express')

const v1Router = require('./v1')

const apiRouter = express.Router();


// if any req comes and route continues with /problems ,we map it to problem router
apiRouter.use('/v1',v1Router);

module.exports = apiRouter;
