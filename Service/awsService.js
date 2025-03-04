const fs = require('fs');
const path = require('path');
const s3 = require('../conf/aws'); 
const { v4: uuidv4 } = require('uuid'); 

const uploadFile = (filePath, bucketName) => {
  const fileContent = fs.readFileSync(filePath);
  

  const extname = path.extname(filePath);  
  
//aaa
  const keyName = uuidv4() + extname; 

  const params = {
    Bucket: bucketName,   // Nome do seu bucket S3
    Key: keyName,         // Usando UUID + extensão como chave
    Body: fileContent     // Conteúdo do arquivo
  };

  return s3.upload(params).promise()
    .then(data => {
      console.log('Arquivo carregado com sucesso:', data.Location);
      return { location: data.Location, keyName }; 
    })
    .catch(err => {
      console.error('Erro ao fazer o upload:', err);
      throw err;
    });
};


const downloadFile = async (req, res) => {
  try {
      const fileName = req.body.fileName;

      const params = {
          Bucket: 'bucketmi75',
          Key: fileName
      };

      s3.getObject(params, (err, data) => {
          if (err) {
              console.error("Download Error:", err);
              return res.status(500).json({ error: "Error downloading file" });
          }

          const directoryPath = path.join('C:', 'Users', 'joao_p_scheid', 'Documents', 'Github', 'aulaIago', 'images');

          if (!fs.existsSync(directoryPath)) {
              fs.mkdirSync(directoryPath, { recursive: true });
          }

          const filePath = path.join(directoryPath, fileName);

          fs.writeFileSync(filePath, data.Body);

          console.log(`File saved to: ${filePath}`);

          res.status(200).json({ message: "File downloaded and saved successfully!", filePath });
      });
  } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Failed to retrieve or save the image." });
  }
};

module.exports = {
  uploadFile,
  downloadFile
};
