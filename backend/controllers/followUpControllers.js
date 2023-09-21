const followUp = require("../models/followUp");

const createFollowupdata = async(req,res)=>{
    try {
        const {no,userId,message,status} = req.body;
        const followUpData = await followUp.create({no,userId,message,status})
        res.status(400).json(followUpData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const getallFollowupdata = async(req,res)=>{
    try {
        const getallFollowupdataDatas = await followUp.find() 
        res.status(200).json(getallFollowupdataDatas)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const updataStatus = async(req, res)=>{
    try {
        const id = req.params.id;
        // const {status} = req.body;
        const updateStatus = await followUp.findByIdAndUpdate(id,req.body);
        res.status(400).json({updateStatus});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const getSingleData = async(req,res)=>{
    try {
        const id = req.params.id;
        const singleData = await followUp.findById(id)
        res.status(400).json({singleData});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const editAllData = async(req,res)=>{
    try {
        const id = req.params.id;
        const {message} = req.body;
        const updating_data = await followUp.findByIdAndUpdate(id,req.body);
        res.status(200).json("Followup Updated sucessfully")
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {createFollowupdata,updataStatus,getallFollowupdata,getSingleData,editAllData} 