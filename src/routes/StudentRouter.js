const router = require("express").Router()

router.post("/students/new/account")
router.post("/students/new/login")

router.get("/students/find/all")
router.get("/students/find/:student_id")
router.get("/students/find/name")

router.delete("/students/delete/:student_id")

module.exports = router