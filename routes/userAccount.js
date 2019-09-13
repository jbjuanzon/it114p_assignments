const express = require('express');
const router = express.Router();

const accountController = require('../controllers/userAccount');

router.get('/create-user', accountController.getCreateUser);

router.post('/create-user', accountController.postCreateUser);

module.exports = router;