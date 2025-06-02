const express = require('express');
const {
  applyToJob,
  getMyApplications,
  getApplicationsForJob,
  updateApplicationStatus
} = require('../controllers/applicationController');
const { protect, authorize } = require('../middlewares/auth');

const router = express.Router();

router.route('/')
  .post(protect, authorize('candidate'), applyToJob);

router.get('/my', protect, authorize('candidate'), getMyApplications);
router.get('/job/:jobId', protect, authorize('recruiter', 'admin'), getApplicationsForJob);
router.put('/:id', protect, authorize('recruiter', 'admin'), updateApplicationStatus);

module.exports = router;