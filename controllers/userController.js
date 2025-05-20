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

module.exports = { getUsers, createUser };
