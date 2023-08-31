import express from "express";
const router = express.Router();
import { v4 as uuidv4 } from "uuid";

const users = [];

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
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`User with the id  ${id} deleted from database `);
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;

  const { Firstname, LastName, age } = req.body;

  const userToBeUpdated = users.find((user) => user.id === id);

  if (Firstname) user.Firstname = Firstname;
  if (LastName) user.LastName = LastName;
  if (age) user.age = age;

  res.send(`User withe the id ${id} patched from database`);
});

export default router;
