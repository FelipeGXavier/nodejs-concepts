const express = require("express");
const app = express();
const birds = require("./routes");
const save = require("./user");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/birds', birds);

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.get("/user/:id", save);

const firstCall = function(req, res, next) {
  console.log("C1")
  next();
}

const secondCall = function(req, res) {
  res.send("C2");
}

app.get("/call", [firstCall, secondCall]);

// Middleware to path /user/:id
app.use("/user/:id", (req, res, next) => {
  console.log(req.method);
  next();
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get("/user/:id", (req, res, next) => {
  res.send(`User ID: ${req.params.id}`);
});

app.post("/customer", (req, res) => {
  console.log(req.body);
  const {name, surname} = req.body;
  res.send(`${name} ${surname}`);
});

app.listen(3000, () => {
  console.log("Listening in port 3000");
});