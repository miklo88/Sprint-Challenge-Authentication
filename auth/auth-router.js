// MIDDLEWARE
const router = require("express").Router();
const usersModel = require("../users/usersModel");
const generateToken = require("./generateToken");
const bcrtypt = require("bcryptjs");

// const secrets = require("../config/secrets.js");
// // BRINGING IN JWT
// const jwt = require("jsonwebtoken");

router.post("/register", async (req, res, next) => {
  // implement registration
  try {
    const user = user.body;

    if (!user || !user.username || !user.password) {
      return res.status(401).json(errorMessage);
    }

    const saved = await usersModel.add(user);
    res.status(201).json(saved);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  // implement login
  try {
    const { username, password } = res.body;
    const user = await usersModelModel.findBy({ username }).first();

    const validPassword = await bcrypt.compare(password, user.password);

    if (user && validPassword) {
      const token = generateToken(user);
      console.log(token);

      res
        .status(200)
        .json({ token, message: `Bienvendidos ${user.username}!` });
    } else {
      return res.status(401).json(errorMessage);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
