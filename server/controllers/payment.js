const jwt = require("jsonwebtoken");
const models = require("../models");
const Ticket = models.tickets;
const MyTickets = models.user_tickets;
const User = models.users;
const Payment = models.payment;
const TrainType = models.trainclass;
const sequelize = require("sequelize");

exports.order = async (req, res) => {
  try {
    const { ticket_id, qty, qty_baby, attachment } = req.body;
    const tiket = await Ticket.findOne({ where: { id: ticket_id } });

    const adult_price = qty * tiket.price;
    const baby_price = qty_baby * tiket.price_baby;

    const total_price = adult_price + baby_price;

    const token = req.header("Authorization").replace("Bearer ", "");
    const user = jwt.verify(token, process.env.SECRET_KEY);

    const payment = await Payment.create({
      ticket_id,
      user_id: user.user_id,
      qty,
      qty_baby,
      adult_price,
      baby_price,
      total_price,
      status: "Pending",
      attachment
    });
    const detailPayment = await Payment.findOne({
      where: { id: payment.id },
      include: [
        {
          model: Ticket,
          as: "ticket",
          attributes: [
            "train_name",
            "depart",
            "depart_station",
            "start_date",
            "start_time",
            "destination",
            "destination_station",
            "arrival_date",
            "arrival_time",
            "date_time",
            "price",
            "price_baby",
            "qty"
          ],
          include: [
            { model: TrainType, as: "traintype", attributes: ["id", "name"] }
          ]
        },
        {
          model: User,
          as: "user",
          attributes: [
            "name",
            "username",
            "email",
            "gender",
            "phone",
            "address",
            "profile_pic"
          ]
        }
      ]
    });
    res.status(200).json({ data: detailPayment });
  } catch (err) {
    console.log(err);
  }
};

exports.orderUpdate = async (req, res) => {
  try {
    const id_order = req.params.id;
    const { ticket_id, qty, status, attachment } = req.body;

    const tiket = await Ticket.findOne({ where: { id: ticket_id } });
    const total_price = qty * tiket.price;

    const token = req.header("Authorization").replace("Bearer ", "");
    const user = jwt.verify(token, process.env.SECRET_KEY);

    const payment = await Payment.update(
      {
        ticket_id,
        user_id: user.user_id,
        qty,
        total_price,
        status,
        attachment
      },
      { where: { id: id_order } }
    );

    const detailPayment = await Payment.findOne({
      where: { id: id_order },
      include: [
        {
          model: Ticket,
          as: "ticket",
          attributes: [
            "train_name",
            "depart",
            "depart_station",
            "start_date",
            "start_time",
            "destination",
            "destination_station",
            "arrival_date",
            "arrival_time",
            "date_time",
            "price",
            "price_baby",
            "qty"
          ],
          include: [
            { model: TrainType, as: "train_type", attributes: ["id", "name"] }
          ]
        },
        {
          model: User,
          as: "user",
          attributes: [
            "name",
            "username",
            "email",
            "gender",
            "phone",
            "address",
            "profile_pic"
          ]
        }
      ]
    });
    res.status(200).json({ data: detailPayment });
  } catch (err) {
    console.log(err);
  }
};

exports.getOrderDetail = async (req, res) => {
  const id_order = req.params.id;
  const token = req.header("Authorization").replace("Bearer ", "");
  const user = jwt.verify(token, process.env.SECRET_KEY);
  try {
    const ticket = await Payment.findOne({
      where: { id: id_order },
      include: [
        {
          model: Ticket,
          as: "ticket",
          attributes: [
            "train_name",
            "depart",
            "depart_station",
            "start_date",
            "start_time",
            "destination",
            "destination_station",
            "arrival_date",
            "arrival_time",
            "date_time",
            "price",
            "price_baby",
            "qty"
          ],
          include: [
            { model: TrainType, as: "traintype", attributes: ["id", "name"] }
          ]
        },
        {
          model: User,
          as: "user",
          attributes: [
            "name",
            "username",
            "email",
            "gender",
            "phone",
            "address",
            "profile_pic"
          ]
        }
      ]
    });
    res.status(200).json({ data: ticket });
  } catch (err) {
    console.log(err);
  }
};

exports.getOrder = async (req, res) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  const user = jwt.verify(token, process.env.SECRET_KEY);
  try {
    const ticket = await Payment.findAll({
      where: { user_id: user.user_id },
      include: [
        {
          model: Ticket,
          as: "ticket",
          attributes: [
            "train_name",
            "depart",
            "depart_station",
            "start_date",
            "start_time",
            "destination",
            "destination_station",
            "arrival_date",
            "arrival_time",
            "date_time",
            "price",
            "price_baby",
            "qty"
          ],
          include: [
            { model: TrainType, as: "traintype", attributes: ["id", "name"] }
          ]
        },
        {
          model: User,
          as: "user",
          attributes: [
            "name",
            "username",
            "email",
            "gender",
            "phone",
            "address",
            "profile_pic"
          ]
        }
      ]
    });
    if (ticket.length < 1) {
      res
        .status(200)
        .json({ message: "You dont have any Ticket", data: ticket });
    } else {
      res.status(200).json({ data: ticket });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.paymentProof = async (req, res) => {
  try {
    const { filename } = req.file;
    const { id } = req.params;    
    if (!filename) {
      res.status(400).json({
        status: "failed",
        code: "400",
        message: "Please upload file"
      });
    } else {
      await Payment.update(
        {
          attachment: filename
        },
        { where: { id } }
      );

      res.status(200).json({
        status: "success",
        code: "200",
        message: "file uploaded successfully",
        data: filename
      });
    }
  } catch (err) {
    console.log(err);
  }
};