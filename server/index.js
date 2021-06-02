const express = require("express");
const cors = require("cors");
const path = require("path");
const houseRtr = require("./routes/houseRoutes");

const app = express();
const PORT = process.env.PORT || 4004;

/* Middleware */
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../public")));

/* Routes */
app.get("/", (req, res) => {
  res.sendFile("index.html");
});
app.use("/api/houses", houseRtr);

/* Server */
app.listen(PORT, () => console.log("port running"));
