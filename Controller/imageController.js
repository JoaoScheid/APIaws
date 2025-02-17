const database = require('../database/connection');
const imageService = require("../Service/imageService.js");

class imageController {
async novaImagem(request, response) {
    try{
        const { referencia, data_criacao, titulo } = request.body;
        const result = await imageService.postImage({ referencia, data_criacao, titulo });
        return response.json(result);
    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
}

async listarImagens(request, response){
    try{
        const images = await imageService.getImages();
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