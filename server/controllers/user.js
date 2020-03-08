const jwt = require("jsonwebtoken");
const models = require("../models");
const User = models.users;
const sequelize = require("sequelize");


exports.getUser = async (req, res) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  const user = jwt.verify(token, process.env.SECRET_KEY);
  try {
    const getuser = await User.findOne({
      where: { id: user.user_id }
    });
    res.status(200).json({ data: getuser });
  } catch (err) {
    console.log(err);
  }
};
