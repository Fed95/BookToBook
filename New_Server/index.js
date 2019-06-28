'use strict';

//postgres://dxqvcntsnoifob:6265ac257abc9b67761fb960763182bac62aafa880f965d640d0a57dd64cc3f3@ec2-54-228-207-163.eu-west-1.compute.amazonaws.com:5432/dfn69dv2qvmdlk

//postgres://dxqvcntsnoifob:6265ac257abc9b67761fb960763182bac62aafa880f965d640d0a57dd64cc3f3@ec2-54-228-207-163.eu-west-1.compute.amazonaws.com:5432/dfn69dv2qvmdlk

var exports = module.exports = {};

var fs = require('fs');
var http = require('http');
var swaggerTools = require('swagger-tools');
var jsyaml = require('js-yaml');
var serverPort = 8080;

const express = require('express');
const app = express();
const path = require('path');
//var cors = require('cors');

var cookieSession = require('cookie-session');
var cookieParser = require('cookie-parser')


//---------------------------------------------------------------
// Connection to Database
//---------------------------------------------------------------

/*const bodyParser = require("body-parser");
const _ = require("lodash");*/

const process = require("process");

require('dotenv').config();


var knex = require('knex')({
  debug: true,
  client: 'pg',
  connection: process.env.DATABASE_URL,
  ssl: true,
});

exports.knex = knex;

//---------------------------------------------------------------
//---------------------------------------------------------------


//app.use(cookieParser())


app.set('trust proxy', 1) // trust first proxy

// Use cookie Session
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
  resave: false,
  saveUninitialized: true
}));



//app.use(cors());

// get html homepage
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.use(express.static(__dirname+'/..'));

app.listen(process.env.PORT || 4000, function(){
  console.log('Your node js server is running');
});

// swaggerRouter configuration
var options = {
  swaggerUi: path.join(__dirname, '/swagger.json'),
  controllers: path.join(__dirname, './controllers'),
  useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec = fs.readFileSync(path.join(__dirname,'api/swagger.yaml'), 'utf8');
var swaggerDoc = jsyaml.safeLoad(spec);


// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  // Validate Swagger requests
  app.use(middleware.swaggerValidator());

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());




  // Start the server
  http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
  });
});
