const express = require("express");
const {
  register,
  verify,
  login,
  loginAdmin,
  logout,
  getMyProfile,
  fetchUsers,
  deleteUser,
  usersNumbers
} = require("../controllers/user.js");
// const { isAuthenticated } = require("../middlewares/auth.js");
const { isLoginData, isRegisterData } = require("../validation/users_Validation.js");

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.post("/login_admin", loginAdmin);

router.delete("/delete/:userId", deleteUser);

router.get("/verify/:id/:key", verify);

router.get("/logout", logout);

router.get("/me", getMyProfile);

router.get("/counts", usersNumbers);

router.get("/getusers/:adminType", fetchUsers);

module.exports = router;
