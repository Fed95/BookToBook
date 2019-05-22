'use strict';

//---------------------------------------------------------------
// Connection to Database
//---------------------------------------------------------------

const bodyParser = require("body-parser");
const _ = require("lodash");
const process = require("process");

require('dotenv').config()

var pg = require('knex')({
  debug: true,
  client: 'pg',
  connection: process.env.DATABASE_URL,
  ssl: true,
});

console.log(10);


// query example
let myQuery = pg("new_schema.book")
    .then(result => {
      console.log(result);
    })

//---------------------------------------------------------------
//---------------------------------------------------------------

var fs = require('fs'),
    http = require('http');

var swaggerTools = require('swagger-tools');
var jsyaml = require('js-yaml');
var serverPort = 8080;

const express = require('express');
const app = express();
const path = require('path');

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


app.get("/book", function(req, res) {

})

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


