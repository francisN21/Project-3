// const axios = require("axios")
const router = require("express").Router()
const db = require("../models")

router.get("/test", (req, res) => {
    res.send({ msg: "success" });
});

router.get("/saved", (req, res) => {
    db.Saved.find({})
        .then(dbSaved => {
            res.json(dbSaved);
        })
        .catch(err => {
            console.log(err)
        })
})

router.post("/saved", (req, res) => {
    const savedEvent = req.body
    db.Saved.create(savedEvent)
        .then(dbSaved => {
            console.log("Event Saved"),
                res.json(dbSaved)
        })
        .catch(err => {
            res.json(err)
        })
})

module.exports = router