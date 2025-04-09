const express = require('express');
const router = express.Router();
const jobModel = require('../models/job');

// GET all jobs
router.get('/', (req, res) => {
  const jobs = jobModel.getAllJobs();
  res.json(jobs);
});

// POST a new job
router.post('/', (req, res) => {
  const newJob = req.body;
  const createdJob = jobModel.createJob(newJob);
  res.status(201).json(createdJob);
});

// DELETE a job by id
router.delete('/:id', (req, res) => {
  const deleted = jobModel.deleteJob(req.params.id);
  if (deleted) {
    res.json({ message: 'Job deleted' });
  } else {
    res.status(404).json({ message: 'Job not found' });
  }
});

// UPDATE a job by id
router.put('/:id', (req, res) => {
  const updatedJob = jobModel.updateJob(req.params.id, req.body);
  if (updatedJob) {
    res.json(updatedJob);
  } else {
    res.status(404).json({ message: 'Job not found' });
  }
});

module.exports = router;
