const express = require('express');
const {
  applyToJob,
  getMyApplications,
  getApplicationsForJob,
  updateApplicationStatus,
  getApplicationById
} = require('../controllers/applicationController');
const { protect, authorize } = require('../middlewares/auth');

const router = express.Router();

router.route('/')
  .post(protect, authorize('candidate'), applyToJob);

router.get('/my', protect, authorize('candidate'), getMyApplications);
router.get('/job/:jobId', protect, authorize('recruiter', 'admin'), getApplicationsForJob);
router.get('/:id',protect, authorize('recruiter', 'admin','candidate'), getApplicationById);
router.patch('/:id', protect, authorize('recruiter', 'admin'), updateApplicationStatus);

module.exports = router;