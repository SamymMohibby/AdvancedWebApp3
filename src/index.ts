import {Express, Router, Response, Request} from "express"

const router = Router()

router.get("/hello", (req,res) => {
    res.json({msg: "Hello world!"})
})

router.get("/echo/:id", (req, res) => {
    res.json({id: req.params.id})
})

let numbers: number[] = [4, 8, 7, 13, 12]
let sum: number = 0;

numbers.forEach(x => {
    sum += x;
});

router.post("/sum", (req, res) => {
    let numbers:number[] =  req.body.numbers
    let sum: number = 0;

    numbers.forEach(x => {
        sum += x;
    });
    res.json({sum: sum})
})

type TUser = {
    name: string,
    email: string
}

const users: TUser[] = []

router.post("/users", (req, res) => {
    const user: TUser = req.body
    users.push(user)
    return res.json({ message: "User successfully added" });
})

router.get("/users", (_req: Request, res: Response) => {
  return res.status(201).json(users);
});


export default router