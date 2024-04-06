const express = require('express')
const router = express.Router()
const EmployeeController = require('../Controller/EmployeeController')
router.get('/', EmployeeController.index)
router.post('/register', EmployeeController.registerUser)
// router.post('/sign-in', EmployeeController.signInUser)
router.get('/show/:id', EmployeeController.show)
router.patch('/update/:id', EmployeeController.update)
router.delete('/delete/:id', EmployeeController.deleteEmpolyee)
module.exports = router