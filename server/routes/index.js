const express = require("express");
const router = express.Router();

const { auth } = require("../middleware/auth");
const { upload } = require("../middleware/upload");
const { login, register } = require("../controllers/auth");
const { getUser } = require("../controllers/user");
const {
  getOrder,
  order,
  orderUpdate,
  getOrderDetail,
  paymentProof,
  paymentIndex,
  setStatus
} = require("../controllers/payment");
const {
  ticketList,
  todayTickets,
  tomorrowTickets,
  detailTicket,
  addTicket
} = require("../controllers/ticket");

router.get("/", (req, res) => {
  res.send("<strong>Hello Ampas</strong>");
});

router.post("/login", login);
router.post("/register", register);

router.get("/user", auth, getUser);

router.get("/ticketx", ticketList);
router.get("/ticket/:id", detailTicket);
router.get("/todaytickets", todayTickets);
router.get("/tickets", auth, tomorrowTickets);
router.post("/ticket", auth, addTicket);

router.get("/orders", auth, paymentIndex);
router.get("/order", auth, getOrder);
router.post("/order", auth, order);
router.get("/order/:id", auth, getOrderDetail);
router.put("/order/:id", auth, setStatus);
router.post("/upload/:id", upload.single("payment"), paymentProof);

module.exports = router;
