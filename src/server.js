import express from "express";
import viewEngine from "./config/viewEngine";
import initWebRouter from "./routes/web";
import bodyParser from "body-parser";
require("dotenv").config();

let app = express();

// config viewEngine
viewEngine(app);

// parser request to json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// init web router
initWebRouter(app);
let port = process.env.PORT || "3101";
app.listen(port, () => {
  console.log("Chatbot đang chạy ở cổng: http://localhost:" + port);
});
