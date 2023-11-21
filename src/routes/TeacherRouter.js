const router = require("express").Router()

router.post("/teacher/new/account")
router.post("/teacher/new/login")

router.get("/teacher/find/all")
router.get("/teacher/find/arte_marcial")

router.delete("/teacher/delete/:teacher_id")

module.exports = router