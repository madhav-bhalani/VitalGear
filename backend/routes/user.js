const express = require("express");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const  User  = require("../db");
const { JWT_SECRETS } = require("../config");

const router = express.Router();

const signupBody = zod.object({
  username: zod.string().email(),
  fisrtname: zod.string(),
  lastname: zod.string(),
  password: zod.string(),
});

router.post("/signup", async (req, res) => {
  // const { success } = signupBody.safeParse(req.body);

  // if (!success) {
  //   return res.json({
  //     userId: "userId of newly added user",
  //   });
  // }

  const userExists = await User.findOne({
    username: req.body.username,
  });
  
  if (userExists) {
    return res.json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  const user = await User.create({
    username: req.body.username,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: req.body.password,
  });

  const userId = user._id;

  const token = jwt.sign({ userId }, JWT_SECRETS);

  return res.json({
    message: "User created successfully",
    token: token,
  });
});

const signinBody = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

router.post("/signin", async (req, res) => {
  // const { success } = signinBody.safeParse(req.body);

  // if (!success) {
  //   return res.json({
  //     message: "Incorrect inputs",
  //   });
  // }

  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (!user) {
    return res.json({
      message: "Error while logging in",
    });
  }

  const token = jwt.sign(
    {
      userId: user._id,
    },
    JWT_SECRETS
  );

  return res.json(user);
});

module.exports = router;
