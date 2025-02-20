const Image = require("../Model/imageModel.js"); // Importando a classe Image
const imageRepository = require("../Repository/imageRepository.js");

async function postImage(imageData) {
    // Criando uma nova instância de Image
    const image = new Image(imageData.id, imageData.referencia, imageData.data_criacao, imageData.titulo);
    return await imageRepository.insertImage(image); // Enviando a instância para o repositório
}

async function getImages() {
    // Buscando todas as imagens e retornando
    return await imageRepository.listImages();
}

async function getImage(id) {
    // Buscando uma imagem específica pelo ID
    return await imageRepository.listImage(id);
}

async function putImage(id, titulo) {
    // Buscando a imagem existente
    const imageData = await imageRepository.listImage(id);
    
    if (!imageData) {
        throw new Error("Imagem não encontrada");
    }

    // Criando uma nova instância de Image com os dados atualizados
    const updatedImage = new Image(imageData.id, imageData.referencia, imageData.data_criacao, titulo);
    return await imageRepository.updateImage(updatedImage); // Enviando a imagem atualizada para o repositório
}

async function deleteImage(id) {
    // Removendo a imagem pelo ID
    return await imageRepository.deleteImage(id);
}

module.exports = { postImage, getImages, getImage, putImage, deleteImage };
