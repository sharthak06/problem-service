const BaseError = require('./base.error');
const {StatusCodes} = require('http-status-codes');

class  NotImplemented extends BaseError {
    constructor(methodname){
        super("NotImplementedError",StatusCodes.NOT_IMPLEMENTED,`${methodname} Not Implemented`,details);
    }
}

module.exports = NotImplemented;