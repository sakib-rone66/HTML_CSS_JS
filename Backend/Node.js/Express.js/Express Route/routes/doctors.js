const express = require ("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.send("Doctors List");
});
module.exports = router;