const mongoose = require('mongoose');
const UserModel = require('../models/UserModel');



const formUserResponseModel = (userDocument) => ({
    id: userDocument._id,
    name: userDocument.name,
    age: userDocument.age,
    email: userDocument.email,
    password: userDocument.password
  });

const getUsers = async (req, res) => {
    try {
      const usersDocuments = await UserModel.find();
      res.status(200).json({ users: usersDocuments.map(formUserResponseModel) });
    }
    catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  const postUser = async (req, res) => {
    const { name, age, email, password } = req.body;
    try {
      const newUser = await UserModel.create({ name, age, email, password  });
      res.status(200).json({ user: formUserResponseModel(newUser) });
    }
    catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  const updateUser = async (req, res) => {
    const { id } = req.params;
    try {
      if (!mongoose.Types.ObjectId.isValid(id))
        throw new Error(`Error id '${id}' `);
      const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
      if (updatedUser === null)
        throw new Error(`Not found user with id '${id}'`);
      res.status(200).json({ user: formUserResponseModel(updatedUser) });
    }
    catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
      if (!mongoose.Types.ObjectId.isValid(id))
        throw new Error(`Error id '${id}' `);
      const deletedUser = await UserModel.findByIdAndDelete(id);
      if (deletedUser === null)
        throw new Error(`Do not deleted id '${id}'`);
      res.status(200).json({ car: formUserResponseModel(deletedUser) });
    }
    catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

module.exports = {

    getUsers,
    postUser,
    updateUser,
    deleteUser
}