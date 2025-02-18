const fs = require('fs');
const s3 = require('../aws/aws.js');

// Função para fazer upload de um arquivo
const uploadFile = (filePath, bucketName, keyName) => {
  const fileContent = fs.readFileSync(filePath);

  const params = {
    Bucket: bucketName,
    Key: keyName,
    Body: fileContent
  };

  return s3.upload(params).promise();
};

// Função para baixar um arquivo do S3
const downloadFile = (bucketName, keyName, downloadPath) => {
  const params = {
    Bucket: bucketName,
    Key: keyName
  };

  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(downloadPath);
    s3.getObject(params).createReadStream().pipe(file);

    file.on('close', () => resolve(downloadPath));
    file.on('error', reject);
  });
};

module.exports = { uploadFile, downloadFile };
