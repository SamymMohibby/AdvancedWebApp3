"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const index_1 = __importDefault(require("./src/index"));
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.use(express_1.default.json());
app.listen(index_1.default, () => {
    console.log(`Server running on port ${index_1.default}`);
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
exports.users = [];
app.post("/users", (req, res) => {
    const user = req.body;
    exports.users.push(user);
    return res.json({ message: "User successfully added" });
});
app.get("/users", (_req, res) => {
    return res.status(201).json(exports.users);
});
//# sourceMappingURL=server.js.map