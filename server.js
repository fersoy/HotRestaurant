var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var reservations = [
    {
      id: 1,
      name: "Fatih",
      email: "fatih@gmail.com",
      phone: "713-555-1234"
    },
    {
        id: 2,
        name: "Andrew",
        email: "andrew@gmail.com",
        phone: "713-555-4321"
    },
    {
        id: 3,
        name: "Patrick",
        email: "patrick@gmail.com",
        phone: "713-555-5678"
    }
  ];


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});