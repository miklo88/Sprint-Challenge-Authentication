const router = require("express").Router();
const usersModel = require("../users/usersModel");
const generateToken = require("./generateToken");
const bcrypt = require("bcryptjs");

const errorMessage = {
  message: "Include a valid username in your request"
};

router.post("/register", async (req, res, next) => {
  try {
    const user = req.body;

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
  try {
    const { username, password } = req.body;
    const user = await usersModel.findBy({ username }).first();

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
