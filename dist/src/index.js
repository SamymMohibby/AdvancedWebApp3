"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/hello", (req, res) => {
    res.json({ msg: "Hello world!" });
});
router.get("/echo/:id", (req, res) => {
    res.json({ id: req.params.id });
});
let numbers = [4, 8, 7, 13, 12];
let sum = 0;
numbers.forEach(x => {
    sum += x;
});
router.post("/sum", (req, res) => {
    let numbers = req.body.numbers;
    let sum = 0;
    numbers.forEach(x => {
        sum += x;
    });
    res.json({ sum: sum });
});
const users = [];
router.post("/users", (req, res) => {
    const user = req.body;
    users.push(user);
    return res.json({ message: "User successfully added" });
});
router.get("/users", (_req, res) => {
    return res.status(201).json(users);
});
exports.default = router;
//# sourceMappingURL=index.js.map