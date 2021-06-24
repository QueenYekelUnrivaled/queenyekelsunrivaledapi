const express = require('express');
const router = express.Router();

const { addSubscriber, getSubscriberById, getAllSubscribers, requestRegistration, getRequestById, getAllRequests } = require('../controller');

router.post('/subscribe', addSubscriber);
router.get('/subscriber/:id', getSubscriberById);
router.get('/subscribers', getAllSubscribers);

// request registrations
router.post('/request_registration', requestRegistration);
router.get('/request/:id', getRequestById);
router.get('/requests', getAllRequests);

module.exports = router;
