const express = require('express');
const {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob
} = require('../controllers/jobController');
const { protect, authorize } = require('../middlewares/auth');

const router = express.Router();

router.route('/')
  .get(getAllJobs)
  .post(protect, authorize('recruiter', 'admin'), createJob);

router.route('/:id')
  .get(getJobById)
  .patch(protect, authorize('recruiter', 'admin'), updateJob)
  .delete(protect, authorize('recruiter', 'admin'), deleteJob);

module.exports = router;