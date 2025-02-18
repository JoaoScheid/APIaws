const express = require('express');
const router = express.Router();
const s3Controller = require('../controllers/s3Controller');

router.post('/upload', s3Controller.uploadFileController);
router.post('/download', s3Controller.downloadFileController);

module.exports = router;
