import express, { Request, Response, Express } from "express";
import path from "path"
import morgan from "morgan";

const port = 3000;
import router from "./src/index"

const app: Express = express();

app.use(express.static(path.join(__dirname, "../public")))
app.use(express.json())
app.use("/", router)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

