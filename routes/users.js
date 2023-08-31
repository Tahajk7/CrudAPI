import express from "express";
const router = express.Router();
import { v4 as uuidv4 } from "uuid";

const users = [
  //   {
  //     Firstname: "Taha",
  //     LastName: "Çelik",
  //     age: 17,
  //   },
  //   {
  //     Firstname: "Emre",
  //     LastName: "Koç",
  //     age: 18,
  //   },
];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;

  console.log(users, user);

  users.push({ ...user, id: uuidv4() });

  res.send(`User with the name ${user.Firstname} added to the database!`);
});

router.get("/:id", (req, res) => {
  res.send("Henüz bir ıd almadınız");
});

export default router;
