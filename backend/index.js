const express = require("express");
const methodOverride = require("method-override");
const path = require("path");

const app = express();
const port = 8080;

// View engine setup
app.set("views", path.join(__dirname, "../views")); // where Sign_Up.ejs is
app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "../public"))); // for CSS or images

// MongoDB & models (commented out for now)
// const mongoose = require("mongoose");
// const User = require("./models/user");
// mongoose.connect("mongodb://127.0.0.1:27017/silentqueue", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log("MongoDB connected"))
//   .catch(err => console.log("MongoDB error:", err));

//render the landing page
app.get("/", (req, res) => {
  res.render("landing_page");
});

// Render the login page
app.get("/login", (req, res) => {
  res.render("login");
});

// Render the signup form
app.get("/signup", (req, res) => {
  res.render("Sign_Up");
});

// Render the queue-status page
app.get("/queue-status", (req, res) => {
  res.render("queueStatus");
});

// Handle form submission and log input
app.post("/register", (req, res) => {
  console.log("Form submitted:");
  console.log(req.body); 
  let {username, password, role} = req.body;
  if (role === "patient"){
    res.redirect("/join-queue");
  } else {
    res.redirect("/queue-overview");
  }
});

// Add routes for join queue and queue overview
app.get("/join-queue", (req, res) => {
  res.render("joinQueue");
});

app.get("/queue-overview", (req, res) => {
  res.render("queueOverview");
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});



