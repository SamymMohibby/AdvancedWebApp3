"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.use(express_1.default.json());
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
app.get("/hello", (req, res) => {
    res.json({ msg: "Hello world!" });
});
app.get("/echo/:id", (req, res) => {
    res.json({ id: req.params.id });
});
let numbers = [4, 8, 7, 13, 12];
let sum = 0;
numbers.forEach(x => {
    sum += x;
});
app.post("/sum", (req, res) => {
    let numbers = req.body.numbers;
    let sum = 0;
    numbers.forEach(x => {
        sum += x;
    });
    res.json({ sum: sum });
});
const users = [];
app.post("/user", (req, res) => {
    const user = req.body;
    users.push(user);
    res.json({ message: "User added successfully", user });
});
app.get("/users", (_req, res) => {
    res.json(users);
});
//# sourceMappingURL=server.js.map