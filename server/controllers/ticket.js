const jwt = require("jsonwebtoken");
const models = require("../models");
const Ticket = models.tickets;
const MyTickets = models.user_tickets;
const User = models.users;
const TrainType = models.trainclass;
const sequelize = require("sequelize");

exports.ticketList = async (req, res) => {
  try {
    const ticket = await Ticket.findAll({
      include: [
        { model: TrainType, as: "traintype", attributes: ["id", "name"] }
      ]
    });
    res.status(200).json({ data: ticket });
  } catch (err) {
    console.log(err);
  }
};

exports.todayTickets = async (req, res) => {
  const today = new Date();
  try {
    const ticket = await Ticket.findAll({
      where: { date_start: today },
      include: [
        { model: TrainType, as: "traintype", attributes: ["id", "name"] }
      ]
    });
    res.status(200).json({ data: ticket });
  } catch (err) {
    console.log(err);
  }
};

exports.tomorrowTickets = async (req, res) => {
  const today = new Date();
  const { date_time_gte, date_time_lte } = req.query;
  try {
    const ticket = await Ticket.findAll({
      where: {
        date_start: {
          [sequelize.Op.and]: [
            { [sequelize.Op.gte]: date_time_gte },
            { [sequelize.Op.lte]: date_time_lte }
          ]
        }
      }
    });
    res.status(200).json({ data: ticket });
  } catch (err) {
    console.log(err);
  }
};

// exports.myTickets = async (req, res) => {
//   const token = req.header("Authorization").replace("Bearer ", "");
//   const user = jwt.verify(token, process.env.SECRET_KEY);
//   try {
//     const ticket = await MyTickets.findAll({
//       where: { user_id: user.user_id },
//       include: [
//         {
//           model: Ticket,
//           as: "ticket",
//           attributes: [
//             "train_name",
//             "depart",
//             "depart_station",
//             "start_date",
//             "start_time",
//             "destination",
//             "destination_station",
//             "arrival_date",
//             "arrival_time",
//             "date_time",
//             "price",
//             "price_baby",
//             "qty"
//           ],
//           include: [
//             { model: TrainType, as: "traintype", attributes: ["id", "name"] }
//           ]
//         },
//         {
//           model: User,
//           as: "user",
//           attributes: [
//             "name",
//             "username",
//             "email",
//             "gender",
//             "phone",
//             "address",
//             "profile_pic"
//           ]
//         }
//       ]
//     });
//     if (ticket.length < 1) {
//       res
//         .status(200)
//         .json({ message: "You dont have any Ticket", data: ticket });
//     } else {
//       res.status(200).json({ data: ticket });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };
