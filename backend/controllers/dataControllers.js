const Data = require("../models/userModel");

const createUser = async (req, res) => {
    try {
      const {
        no,
        name,
        companyName,
        mobileNumber,
        whatsapp,
        amount,
        services,
        comments,
        otherDetails,
        status,
      } = req.body;
  
      const user = await Data.create({
        no,
        name,
        companyName,
        amount,
        mobileNumber,
        whatsapp,
        services,
        comments,
        otherDetails,
        status,
      });
        res.status(400).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  const singleUserData = async(req,res)=>{
    try {
        const id = req.params.id;
        const singleUserData = await Data.findById(id);
        res.status(200).json({singleUserData})
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  }
  const updateStatus =  async(req,res)=>{
    try {
      const {status} = req.body;
      const statusupdate = await Data.update({status: status})
      res.status(200).json("statusUpdated")
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
    }
  
  
const getAllUsers = async(req,res)=>{
    try {
        const allUser = await Data.find()
        res.status(200).json({allUser})
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateComments = async(req,res)=>{
    try {
        const id = req.params.id;
        const {comments} = req.body;
        const updateComments = await Data.findByIdAndUpdate(id,comments);
        res.status(200).json("Comment updated")
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateAllData = async(req,res)=>{
    try {
        const id = req.params.id;
        const updateeddata = await Data.findByIdAndUpdate(id,req.body);
        res.status(200).json("Data updated")
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { createUser,getAllUsers,updateComments,singleUserData,updateAllData,updateStatus };
