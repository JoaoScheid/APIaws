const database = require('../database/connection');
const imageService = require("../Service/imageService.js");

class awsController {
async novaReferencia(request, response) {
    try{
        const { referencia, id_imagem, id_usuario } = request.body;
        const result = await awsService.postRef({ referencia, id_imagem, id_usuario });
        return response.json(result);
    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
}

async listarReferencias(request, response){
    try{
        const refs = await awsService.getRefs();
        return response.json(images);
    }catch(error){
        return response.status(500).json({ error: error.message });
    }
}


async listarImagem(request, response){
    try {
        const { id } = request.params;
        const image = await imageService.getImage(id);
        return response.json(image);
    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
}

async atualizarImagem(request, response) {
    try {
        const { id } = request.params;
        const { titulo } = request.body;
        const result = await imageService.putImage(id, titulo);
        return response.json(result);
    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
}


async removerImagem(request, response) {
    try {
        const { id } = request.params;
        const result = await imageService.deleteImage(id);
        return response.json(result);
    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
}
}

module.exports = new imageController();