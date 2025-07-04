const {StatusCodes} = require('http-status-codes');
const NotImplemented = require('../errors/notimplemented.error');
const BadRequest = require('../errors/badrequest.error');


function pingProblemController(req,res){
    return res.json({message:'Ping Controller is up'});
}

function addProblem(req,res,next) {
    try {
        // nothing implemented
        throw new BadRequest(`Problem Name`, {missing: ["Problem Name"]});
    } catch(error){
        next(error);

    }
}

function getProblem(req,res){
      return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not Implemented"
    });


}

function getProblems(req,res){
      return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not Implemented"
    });


}

function deleteProblem(req,res){

      return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not Implemented"
    });

}

function updateProblem(req,res){
      return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not Implemented"
    });


}


module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController

}