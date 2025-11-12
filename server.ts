import express, { Request, Response, Express } from "express";
import path from "path"

const app: Express = express();
import port from "./src/index"

app.use(express.static(path.join(__dirname, "../public")))
app.use(express.json())

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get("/hello", (req,res) => {
    res.json({msg: "Hello world!"})
})

app.get("/echo/:id", (req, res) => {
    res.json({id: req.params.id})
})

let numbers: number[] = [4, 8, 7, 13, 12]
let sum: number = 0;

numbers.forEach(x => {
    sum += x;
});

app.post("/sum", (req, res) => {
    let numbers:number[] =  req.body.numbers
    let sum: number = 0;

    numbers.forEach(x => {
        sum += x;
    });
    res.json({sum: sum})
})

export type TUser = {
    name: string,
    email: string
}

export const users: TUser[] = []

app.post("/users", (req, res) => {
    const user: TUser = req.body
    users.push(user)
    return res.json({ message: "User successfully added" });
})

app.get("/users", (_req: Request, res: Response) => {
  return res.status(201).json(users);
});