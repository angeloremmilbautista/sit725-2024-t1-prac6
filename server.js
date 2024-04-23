const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { connectDB } = require("./models/catModel");
const catRoutes = require("./routes/catRoutes");

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", catRoutes);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
