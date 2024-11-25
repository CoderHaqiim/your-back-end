const express = require('express')
const router = express.Router();
const {verifyToken} = require('./auth')
const {deleteUser} = require('../controllers/userController')

router.delete('/user/delete',verifyToken,deleteUser)

module.exports = router