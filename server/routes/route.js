const express = require("express")
const cors = require("cors")
const app = express()
const router = express.Router()
const signupcontroller = require("../controllers/signupcontroller")
const logincontroller = require("../controllers/logincontroller")
const stockcontroller = require('../controllers/stockcontroller')
const stripecontroller = require("../controllers/stripecontroller")
const ordercontroller = require("../controllers/ordercontroller")
const sellordercontroller = require('../controllers/sellordercontroller')
const usercontroller = require('../controllers/usercontroller')
router.post('/signup',signupcontroller)

router.post('/login',logincontroller)

router.get('/stocks',stockcontroller)

router.post('/create-checkout-session',stripecontroller)

router.post('/getorders',ordercontroller);

router.post('/sellorder',sellordercontroller)

router.post('/getuser',usercontroller);

module.exports = router;