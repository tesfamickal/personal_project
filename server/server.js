const express = require("express");
const cors = require("cors");
const app = express();
// require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./config/mongoose.config");
require("./routes/events.routes")(app);

app.listen(8000, () => {
  console.log("Listening at Port 8000");
});
