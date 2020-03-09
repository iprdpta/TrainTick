const jwt = require("jsonwebtoken");
const models = require("../models");
const User = models.users;
const sequelize = require("sequelize");

const bcrypt = require("bcrypt");
const saltRounds = 10;
// [sequelize.Op.or]: { email : username , username : email }

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({
      where: { username }
    });
    const result = await bcrypt.compare(password, user.password);
    if (user && result) {
      const token = jwt.sign({ user_id: user.id }, process.env.SECRET_KEY);
      res.json({ message: "Login Success", username, token });
    } else {
      const message = "Invalid Login";
      res.json({ message: message });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.register = async (req, res) => {
  const {
    id_card,
    name,
    username,
    email,
    password,
    gender,
    phone,
    address
  } = req.body;
  const salt = await bcrypt.genSalt(saltRounds);
  const user = "User";

  try {
    if (
      id_card === null ||
      password === null ||
      email === null ||
      name === null ||
      username === null ||
      gender === null ||
      phone === null ||
      address === null
    ) {
      res.json({
        status: false,
        message: "fail"
      });
    } else {
      const check = await User.findOne({
        where: { [sequelize.Op.or]: { email, username } }
      });
      if (check) {
        res.json({
          status: false,
          message: "Email or Username Already Registered"
        });
      } else {
        const hash = await bcrypt.hash(password, salt);
        const regUser = await User.create({
          id_card,
          name,
          username,
          email,
          password: hash,
          gender,
          phone,
          address,
          level: user
        });
        if (regUser) {
          const token = jwt.sign(
            { user_id: regUser.id },
            process.env.SECRET_KEY
          );
          res.send({ email, token, status: true, message: "Register Success" });
        } else {
          res.json({ status: false, message: "Invalid Register" });
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
};
