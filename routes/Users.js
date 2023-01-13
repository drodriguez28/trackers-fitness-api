const router = require("express").Router();
let User = require("../models/user.model");

// get all
router.route("/").get((req, res) => {
  User.find()
    .then((Users) => res.json(Users))
    .catch((err) => res.status(400).json("Error" + err));
});

//add
router.route("/add").post((req, res) => {
  const name = req.body.name;
  const age = req.body.age;

  const newUser = new User({ name, age });
  newUser
    .save()
    .then(() => res.json("User Added"))
    .catch((err) => res.status(400).json("Error" + err));
});

//delete

router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User was deleted"))
    .catch((err) => res.status(400).json("Error" + err));
});

//update
router.route("/update/:id").post((req, res) => {
  User.findById(req.params.id)
    .then((User) => {
      User.name = req.body.name;
      User.age = req.body.age;

      User.save()
        .then(() => res.json("User Updated"))
        .catch((err) => res.status(400).json("Error" + err));
    })

    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;