// const axios = require("axios")
const router = require("express").Router()
// const db = require("../models")

router.get("/test", (req, res) => {
    res.send({ msg: "success" });
});

module.exports = router