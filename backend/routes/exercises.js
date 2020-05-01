// More docs in ./users.js
const router = require('express').Router();
let Exercise = require('../models/exercise.model');

// router for GET method at /exercises/
router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error ' + err));
});

// router for POST requests at /exercises/add
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);  // in the request everithing is text. If any data is not stored as a string (according to the schemas) then it need to be transformed to the right data type here.
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  newExercise.save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error ' + err));
});

/* GET by ID method
'/:id' is a parameter that will be passed in the URL of the request.
the param will be accessible at req.params.id
That id will be given to findById method to tell MongoDB to only find the
exercise with that ID
the request will be GET /exercises/<id>
*/
router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

// The same as before, but for the DELETE request. Will delete the exercise
router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted."))
    .catch(err => res.status(400).json('Error: ' + err));
});

/* Updates an old exercise with new data.
the request will be POST /exercises/update/<id>
*/
router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise.save()  // save the existing exercise with the updated information
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
