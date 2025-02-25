
const AWS = require('aws-sdk');

// Configuração das credenciais AWS
AWS.config.update({
  region: 'us-east-2',  // Substitua pela sua região
  accessKeyId: 'AKIA5RRHCKYZSZDVDH77',
  secretAccessKey: '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'
});

// Criação da instância do S3
const s3 = new AWS.S3();

module.exports = s3;