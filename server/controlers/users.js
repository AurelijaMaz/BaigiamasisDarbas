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
      res.status(200).json({ cars: usersDocuments.map(formUserResponseModel) });
    }
    catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

const postUser =  async (req, res) => {
    res.status(200).json('')
}

const updateUser =  async (req, res) => {
    res.status(200).json('')
}

const deleteUser =  async (req, res) => {
    res.status(200).json('')
}

module.exports = {

    getUsers,
    postUser,
    updateUser,
    deleteUser
}