import express from "express";
import errorHandler from "./modules/core/errorHandler";
import logger from "./modules/core/logger";
import parseHandler from "./modules/core/parseResponse";
import cors from "./modules/core/cors";

import routes from "./modules/core/routes";
import dbConnect from "./modules/core/db";


const app = express();
const PORT = 5000;

dbConnect(); // database connection
logger(app); // should be at the top
parseHandler(app); // body parser
cors(app);


routes(app); // call the routes

errorHandler(app); // handle errors

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});