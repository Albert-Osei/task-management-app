const express = require('express')
const router = express.Router()
const { signInUser, createUser } = require('../controllers/user.controller')
const { validateUserSignup, validateUserLogin } = require('../validators/user')

router.post('/login', validateUserLogin, signInUser)
router.post('/signup', validateUserSignup, createUser)

module.exports = router 