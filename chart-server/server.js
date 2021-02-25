var cors = require("cors");
var express = require("express"),
  app = express(),
  port = process.env.PORT || 3003,
  mongoose = require("mongoose"),
  Record = require("./api/models/managed-recordsModel"), //created model loading here
  bodyParser = require("body-parser");

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost/RecordDoctordb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var routes = require("./api/routes/managed-recordsRoutes"); //importing route
routes(app); //register the route

app.listen(port);

console.log("Manage Record API server started on: " + port);
