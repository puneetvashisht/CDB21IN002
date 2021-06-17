const WeightLog = require("../models/weightLog");
const asyncHandler = require('../middleware/async')

const createWeightLog = asyncHandler(async (req, res, next) => {
        let weightLog = await WeightLog.create(req.body);
        res.json({ success: true, data: weightLog });
})

const findAllWeightLogs = asyncHandler(async (req, res, next) => {
        // let weightLogs = await WeightLog.find();
        res.json(res.advancedResults);
})

const deleteWeightLog = asyncHandler(async (req, res, next) => {
    let result = await WeightLog.findByIdAndDelete(req.params.id);
    console.log(result);
    res.json({ success: true});
})


const updateWeightLog = asyncHandler(async (req, res, next) => {
        let result = await WeightLog.findByIdAndUpdate(req.params.id, req.body);
        console.log(result);
        res.json({ success: true});
    })

module.exports = {createWeightLog, findAllWeightLogs, deleteWeightLog, updateWeightLog}