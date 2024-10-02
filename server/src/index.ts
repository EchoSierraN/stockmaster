import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import dashboardRoutes from "./routes/dashboardRoutes";
import productRoute from "./routes/productRoutes";

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

//eg - http://localhost:3000/dashboard
app.use("/dashboard", dashboardRoutes)
//eg - http://localhost:3000/products
app.use("/products", productRoute)


/* SERVER */
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Process listening on port ${port}.`)
}) 