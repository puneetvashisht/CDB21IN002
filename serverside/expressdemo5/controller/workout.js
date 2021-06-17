
const Workout = require('../models/workouts')
const asyncHandler = require('../middleware/async')

// This method would be blocked for direct access.. needs a valid token req header
const findAllWorkouts = asyncHandler(async (req, res, next) => {
    res.json(res.advancedResults);
    // let workouts = await Workout.find().select(req.query.select).sort(req.query.sort);;
    // res.json({ success: true, data: workouts });
})
const findWorkoutByTitle = asyncHandler(async (req, res) => {
    console.log('In findWorkoutByTitle..')
    // try {
        let workout = await Workout.findOne({ title: req.params.title });
        if (!workout) res.status(404).json({ success: false, message: `Workout by title ${req.params.title} not found` })

        res.json({ success: true, data: workout });
    // }
    // catch (err) {
    //     console.log(err);
    //     res.status(500).json({ success: false, message: err.message });
    // }
    // Workout.findOne({title: req.params.title},(err, docs)=>{
    //     console.log(docs);
    //     res.json(docs);
    // })
})
const createWorkout = asyncHandler(async (req, res, next) => {
    // try {
        let workout = await Workout.create(req.body);
        res.json({ success: true, data: workout });
    // }
    // catch(err) {
    //     console.log(err);
    //     // res.status(500).json({success:false, message: err.message});
    //     next(err);
    // }

    //logic to insert
    //    console.log(req.body)
    //    Workout.create(req.body, function (err, small) {
    //        if (err) throw err;
    //        // saved!
    //        console.log('record saved ...')
    //        res.json({success:true})
    //      });

    //      // promises
    //      Workout.create(req.body).
    //      then((data))
    //      .catch(err => )

    // await


})


const updateStartTime = asyncHandler(async (req, res, next) => {
    let result = await Workout.findByIdAndUpdate(req.params.id, {startTime: new Date()});
    console.log(result);
    res.json({ success: true});
})



module.exports = { findAllWorkouts, findWorkoutByTitle, createWorkout, updateStartTime }