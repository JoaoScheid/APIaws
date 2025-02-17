const database = require("../database/connection");

  async function insertImage(image) {
    try {
        const {referencia, data_criacao, titulo } = image;
        await database.insert({ referencia, data_criacao, titulo }).table("Imagem");
        return { message: "Imagem criada com sucesso!" };
    } catch (error) {
        throw new Error("Erro ao inserir imagem: " + error.message);
    }
}

async function listImages() {
    try {
        const image = await database.select("*").table("Imagem");
        return image;
    } catch (error) {
        throw new Error("Erro ao listar imagens: " + error.message);
    }
}

async function listImage(id) {
    try {
        const image = await database.select("*").table("Imagem").where({ id }).first();
        return image;
    } catch (error) {
        throw new Error("Erro ao buscar imagem: " + error.message);
    }
}

async function updateImage(id, titulo) {
    try {
        await database.where({ id }).update({ titulo }).table("Imagem");
        return { message: "Imagem atualizada com sucesso!" };
    } catch (error) {
        throw new Error("Erro ao atualizar imagem: " + error.message);
    }
}

async function deleteImage(id) {
    try {
        await database.where({ id }).del().table("Imagem");
        return { message: "Imagem removida com sucesso!" };
    } catch (error) {
        throw new Error("Erro ao remover imagem: " + error.message);
    }
}

module.exports= {insertImage, listImage, listImages, updateImage, deleteImage}