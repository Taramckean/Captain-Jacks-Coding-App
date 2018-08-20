var express = require('express')
var lessonRouter = new express.Router();

var lessons = ["lesson1", "lesson2", "lesson3"]; //NEW

lessonRouter.get('/', function (req, res) {
  // const db = req.app.get("db");
  // const lessons = db.collection("lessons");
  // lessons.find().toArray(function(err, lessonObjects){
  //     if(err) {
  //         console.log(err);
  //         res.status(500)
  //         res.send();
  //     }
      res.json(lessons);
  // });
});

lessonRouter.get('/:id', function (req, res){
  // const db = req.app.get("db");
  // const lessons = db.collection("lessons");
  // lessons.find().toArray(function(err, lessonObjects){
  //     if(err) {
  //         console.log(err);
  //         res.status(500)
  //         res.send();
  //     }
      res.json({data: lessons[req.params.id]});
  // });
});

// lessonRouter.get('/:id/complete', function (req, res){
//   const db = req.app.get("db");
//   const lessons = db.collection("lessons");
//   lessons.find().toArray(function(err, lessonObjects){
//       if(err) {
//           console.log(err);
//           res.status(500)
//           res.send();
//       }
//       res.json({lessons[req.params.id]});
//   });
// });

// EXTENSIONS:
// ----------------------------------------------------
// lessonRouter.put('/:id', function (req, res) {
//   lessons[req.params.id] = req.body.lesson;
//   res.json({data: lessons});
// });

// lessonRouter.post('/', function (req, res) {
//   lessons.push(req.body.lesson);
//   res.json({data: lessons});
// });


lessonRouter.post('/', function(req, res){
  const db = req.app.get("db");
  const lessonsCollection = db.collection('lessons');
  const lessonToSave = req.body;
  lessonsCollection.save(lessonToSave, function(err, result){
    if (err) {
      console.log(err);
      res.status(500)
      res.send();
    }
    console.log('saved to database');
  });
});

// lessonRouter.delete('/:id', function (req, res) {
//   lessons.splice(req.params.id, 1);
//   res.json({data: lessons});
// });
// ----------------------------------------------------

module.exports = lessonRouter;
