// In-memory job list (this resets every time the server restarts)
let jobs = [];

// Get all jobs
function getAllJobs() {
  return jobs;
}

// Create a new job
function createJob(jobData) {
  const newJob = {
    id: Date.now().toString(), // simple unique ID
    ...jobData,
  };
  jobs.push(newJob);
  return newJob;
}

// Delete a job by ID
function deleteJob(id) {
  const index = jobs.findIndex(job => job.id === id);
  if (index !== -1) {
    jobs.splice(index, 1);
    return true;
  }
  return false;
}

// Update a job by ID
function updateJob(id, updatedData) {
  const index = jobs.findIndex(job => job.id === id);
  if (index !== -1) {
    jobs[index] = { ...jobs[index], ...updatedData };
    return jobs[index];
  }
  return null;
}

module.exports = {
  getAllJobs,
  createJob,
  deleteJob,
  updateJob,
};
