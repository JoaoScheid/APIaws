const AWS = require('aws-sdk');

// Configuração das credenciais AWS
AWS.config.update({
  region: 'us-west-2',  // Substitua pela sua região
  accessKeyId: 'SEU_ACCESS_KEY',
  secretAccessKey: 'SEU_SECRET_KEY'
});

// Criação da instância do S3
const s3 = new AWS.S3();
 
module.exports = s3;
