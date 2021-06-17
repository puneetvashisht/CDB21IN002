// workout routes

var express = require('express')
var router = express.Router()
const {protect,authorize} = require('../middleware/auth')
const {createWeightLog, findAllWeightLogs, deleteWeightLog, updateWeightLog} = require('../controller/weight-log')
const { advancedFind } = require('../middleware/advancedFind')
const WeightLog = require('../models/weightLog')

// Routes for weights
router.route('/')
.get(advancedFind(WeightLog), findAllWeightLogs)
.post(protect, authorize('user'), createWeightLog)

router.route('/:id')
.delete(deleteWeightLog)
.patch(updateWeightLog)

module.exports = router;

