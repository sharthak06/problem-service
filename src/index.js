const express = require('express');
const bodyParser = require('body-parser');


const {PORT} = require('./config/server.config');
const apiRouter = require('./routes');
const errorHandler = require('./utils/errorHandler');
const connectToDB = require('./config/db.config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());


// if any request comes and rouyes starts with /api, we map it to apiRouter
app.use('/api',apiRouter);


app.get('/ping', (req,res) => {
    return res.json({message:'Problem service is alive'});
});


// last middleware if anything happens
app.use(errorHandler);

app.listen(PORT, async () => {
    console.log(`Server started at PORT : ${PORT}`);
    await connectToDB();
    console.log("Succesfully connected to DB")
  
    
});