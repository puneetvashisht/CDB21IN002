
const Workout = require('../models/workouts')

// This method would be blocked for direct access.. needs a valid token req header
const findAllWorkouts = async (req, res, next) => {

    let workouts = await Workout.find();
    res.json({ success: true, data: workouts });
    next();
        
}
const findWorkoutByTitle = async (req, res) => {
    console.log('In findWorkoutByTitle..')
    try {
        let workout = await Workout.findOne({ title: req.params.title });
        if (!workout) res.status(404).json({ success: false, message: `Workout by title ${req.params.title} not found` })

        res.json({ success: true, data: workout });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: err.message });
    }
    // Workout.findOne({title: req.params.title},(err, docs)=>{
    //     console.log(docs);
    //     res.json(docs);
    // })
}
const createWorkout = async (req, res, next) => {
    try {
        let workout = await Workout.create(req.body);
        res.json({ success: true, data: workout });
    }
    catch (err) {
        console.log(err);
        // res.status(500).json({success:false, message: err.message});
        next(err);
    }

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


}

module.exports = { findAllWorkouts, findWorkoutByTitle, createWorkout }