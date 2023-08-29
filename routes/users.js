import express from "express";

const router = express.Router();

const users = [
  {
    Firstname: "Taha",
    LastName: "Çelik",
    age: 17,
  },
];

router.get("/", (req, res) => {
  res.send("Hello");
  console.log(users);
});

export default router;
