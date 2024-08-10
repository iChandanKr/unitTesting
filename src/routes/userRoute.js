const express = require('express');
const router = express.Router();
const {userList} = require('../controller/user');

router.get('/users',userList);


module.exports= router;