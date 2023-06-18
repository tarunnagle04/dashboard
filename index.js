import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DashedController } from "./controllers/controller.js";

const app = express();
const router = express.Router();
dotenv.config();
app.use(router);
app.use(cors());
app.use(express.json());

router.get("/dashed", DashedController);

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the Database");
    app.listen(process.env.PORT, () => {
      console.log(
        `The server has started listening on http://localhost:${process.env.PORT}/`
      );
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
