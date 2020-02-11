const express = require('express');
const data = require('./data-model');

const router = express.Router();

router.get('/projects', (req, res) => {
    data.find()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
  });

router.post("/projects", (req, res) => {
    const body = req.body;
    data.addProject(body)
    if(body != true){
      res.status(400).json({error: 'Please provide __for the post.'})
    } else {
        data.addProject(body)
        .then((complete) => {
          res.status(201).json(complete)
        }) .catch(err=>{
          console.log(err)
          res.status(500).json({error: "There was an error while saving the post to the database", error:err})
      })
    }
  });
// ------------------------------------------------------------------------------------------------
// getting resources
router.get('/resources', (req, res) => {
    data.findResource()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
  });
// posting resources
  router.post('/resources', (req, res) => {
    const body = req.body;
    data.addResource(body)
    if(body != true){
      res.status(400).json({error: 'Please provide __for the resource.'})
    } else {
        data.addResource(body)
        .then((complete) => {
          res.status(201).json(complete)
        }) .catch(err=>{
          console.log(err)
          res.status(500).json({error: "There was an error while saving the resource to the database", error:err})
      })
    }
  });

// ------------------------------------------------------------------------------------------------
// adding/posting tasks
router.get('/tasks', (req, res) => {
    data.findTask()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks' });
    });
  });
// getting tasks
  router.post('/tasks', (req, res) => {
    const body = req.body;
    data.addTask(body)
    if(body != true){
      res.status(400).json({error: 'Please provide __for the task.'})
    } else {
        data.addTask(body)
        .then((complete) => {
          res.status(201).json(complete)
        }) .catch(err=>{
          console.log(err)
          res.status(500).json({error: "There was an error while saving the task to the database", error:err})
      })
    }
  });





  module.exports = router;