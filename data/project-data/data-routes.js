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
    .then(pj => {
        res.status(201).json(pj);
      })
      .catch (err => {
        res.status(500).json({ message: 'Failed to create new project' });
      });
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
    .then(reso => {
        res.status(201).json(reso);
      })
      .catch (err => {
        res.status(500).json({ message: 'Failed to create new resource' });
      });
    });

// ------------------------------------------------------------------------------------------------
// getting tasks
router.get('/tasks', (req, res) => {
    data.findTask()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks' });
    });
  });
//adding/posting tasks
  router.post('/tasks', (req, res) => {
    const body = req.body;
    data.addTask(body)
    .then(tasks => {
        res.status(201).json(tasks);
      })
      .catch (err => {
        res.status(500).json({ message: 'Failed to create new task' });
      });
    });





  module.exports = router;