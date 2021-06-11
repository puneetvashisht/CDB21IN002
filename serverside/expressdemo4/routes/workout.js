// workout routes
const Workout = require('../models/workouts')
var express = require('express')
var router = express.Router()

const {findAllWorkouts, findWorkoutByTitle, createWorkout} = require('../controller/workout')

router.route('/')
.get(findAllWorkouts)
.post(createWorkout)

router.route('/:title')
.get(findWorkoutByTitle)


// // fetching a resource from server
// router.get('/',  (req, res) => {
   
// })

// // fetching a resource from server
// router.get('/:title',  (req, res) => {
//     Workout.findOne({title: req.params.title},(err, docs)=>{
//         console.log(docs);
//         res.json(docs);
//     } )
// })

// // url to map to functions
// router.post('/', (req, res) => {
//     //logic to insert
//     console.log(req.body)
//     Workout.create(req.body, function (err, small) {
//         if (err) throw err;
//         // saved!
//         console.log('record saved ...')
//         res.json({success:true})
//       }); 
// })

module.exports = router;

