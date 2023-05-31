import bodyParser from "body-parser";
import express from "express";
import viewEngine from "./config/viewEngine";
import routerWeb from "./routes/web";
require("dotenv").config();

let app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Cache-Control", "no-store");
  next();
});

// config viewEngine
viewEngine(app);

// parser request to json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// init web router
routerWeb(app);

let port = process.env.PORT || "3101";
app.listen(port, () => {
  console.log("Chatbot đang chạy ở cổng: http://localhost:" + port);
});
