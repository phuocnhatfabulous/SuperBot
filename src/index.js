import express from 'express';
import viewEngine from "./config/viewEngine";
import initWebRoute from "./routes/web";
import bodyParser from 'body-parser';
require("dotenv").config();

let app = express();

//config view engine
viewEngine(app);

//parse request to json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//init web routes
initWebRoute(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Chatbot is running at: ${PORT}`);
});