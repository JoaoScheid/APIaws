const awsService = require("../service/awsService.js");
const imageController = require("./imageController.js");

class AwsController {
    async uploadArquivo(request, response) {
        try {
            const { filePath, bucketName, keyName } = request.body;
            const fileUrl = await awsService.uploadFile(filePath, bucketName, keyName);
    
            const data_criacao = new Date().toISOString(); 
            await imageController.novaImagem({
                body: { referencia: keyName, data_criacao, titulo: "Imagem AWS" }
            }, response);
    
        
            if (!response.headersSent) { 
                response.json({ message: "Upload e registro realizados com sucesso!", fileUrl, keyName });
            }
        } catch (error) {
            if (!response.headersSent) { 
                response.status(500).json({ error: error.message });
            }
        }
    }
    

    async baixarArquivo(request, response) {
        try {
            await awsService.downloadFile(request, response);
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }
}

module.exports = new AwsController();