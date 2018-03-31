const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");
const db = require("../models");

router.get("/", (req, res) => {
    db.burger.findAll({}).then( (burgers) => {
        res.render("index", {burgers})})
});

router.post("/addBurger", (req, res) => {
    const burgerToAdd = req.body.addedBurger
    db.burger.create({
        name: burgerToAdd
    }).then( (dbBurger) => {
        res.json(dbBurger);
    })
})

router.put("/updateBurger", (req, res) => {
    db.burger.update(
        {devoured: true},
        {
            where: {
                id: req.body.eatenBurger
            }
        }
).then( (eatenBurger) => {
        res.json(eatenBurger);
    })
})

module.exports = router;
