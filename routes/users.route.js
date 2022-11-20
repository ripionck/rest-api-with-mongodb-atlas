const express = require("express");
const {
  getAllUser,
  createUser,
  getSingleUser,
  deleteUser,
  updateUser,
} = require("../controllers/users.controller");

const router = express.Router();

router.get("/", getAllUser);
router.get("/:id", getSingleUser);
router.post("/", createUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

module.exports = router;
