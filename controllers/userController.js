const User = require('../models/User');

const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

const createUser = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
};

const updateUser = async (req, res) => {
  const user = await User.findById({ _id: req.params.id });
  user.name = req.body.name;
  user.email = req.body.email;
  await user.save();
  res.status(201).json(user);
};

const deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete({ _id: req.params.id });
  res.status(201).json(user);
};

module.exports = { getUsers, createUser, updateUser, deleteUser };
