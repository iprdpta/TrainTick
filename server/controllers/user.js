const jwt = require("jsonwebtoken");
const models = require("../models");
const User = models.users;
const sequelize = require("sequelize");

exports.getUser = async (req, res) => {
  const userid = req.user;
  try {
    const getuser = await User.findOne({
      where: { id: userid }
    });
    res.status(200).json({ data: getuser });
  } catch (err) {
    console.log(err);
  }
};
