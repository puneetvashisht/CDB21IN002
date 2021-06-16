// workout routes

var express = require('express')
var router = express.Router()
const {protect,authorize} = require('../middleware/auth')
const {createWeightLog, findAllWeightLogs, deleteWeightLog} = require('../controller/weight-log')

// Routes for weights
router.route('/')
.get(findAllWeightLogs)
.post(protect, authorize('user'), createWeightLog)

router.route('/:id')
.delete(deleteWeightLog)

module.exports = router;

