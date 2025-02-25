const express = require('express');
const router = express.Router();
const AwsController = require('../Controller/awsController');

router.post('/upload', AwsController.uploadArquivo);
router.get('/download', AwsController.baixarArquivo);

module.exports = router;