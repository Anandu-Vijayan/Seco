const express = require('express')

const {createUser, getAllUsers, updateComments, updateAllData, singleUserData, updateStatus} = require('../controllers/dataControllers');
const { createFollowupdata, updataStatus,getSingleData, editAllData } = require('../controllers/followUpControllers');

const router = express.Router();

router.post('/create',createUser)
router.get('/getAll',getAllUsers)
router.put('/updateComments/:id',updateComments)
router.put('/updateUser/:id',updateAllData)
router.get('/singleUserData/:id',singleUserData)
router.put('/updateStatus',updateStatus)



///////FollowUp Routes//////

router.post('/createFollowUp',createFollowupdata)
router.put('/updateFollowUp/:id',updataStatus)
router.get('/singleFollowUp/:id',getSingleData)
router.put('/editAllData',editAllData)



module.exports = router;