class BaseError extends Error {

    constructor(name,StatusCodes,description,details){
        super(description);
        this.name = name;
        this.statusCode = StatusCodes;
        this.details = details;

        

    }
}
module.exports = BaseError;