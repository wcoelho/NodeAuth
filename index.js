
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const basicAuth = require('./src/helpers/basicAuth');
const errorHandler = require('./src/helpers/errorHandler');

const engines = require('consolidate');
const path = require('path');
const config = require('config');

app.use(cors());
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(basicAuth);
// global error handler
app.use(errorHandler);

//Import Routes
const paymentsRoute = require('./src/routes/paymentsRoute');
const sellersRoute = require('./src/routes/sellersRoute');
const usersRoute = require('./src/routes/usersRoute');

//For render views
app.engine("ejs", engines.ejs);
app.set('views', path.join(__dirname, './src/views'));
app.set("view engine", "ejs");

//Routes
app.use('/payments',paymentsRoute);
app.use('/sellers',sellersRoute);
app.use('/users',usersRoute);

//Start server
let appPort = config.get('app.port');
console.log(`Application port: ${appPort}`);

app.listen(appPort, function(err){
    if(err) console.error(err);
    console.log(`Server listening on port ${appPort}`) 
});