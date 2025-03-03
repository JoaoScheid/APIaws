const imageRepository = require("../repository/imageRepository.js");

class ImageService {
    async postImage(image) {
        return await imageRepository.insertImage(image);
    }

    async getImages() {
        return await imageRepository.listImages();
    }

    async getImage(id) {
        return await imageRepository.listImage(id);
    }

    async putImage(id, titulo) {
        return await imageRepository.updateImage(id, titulo);
    }

    async deleteImage(id) {
        return await imageRepository.deleteImage(id);
    }
}

module.exports = new ImageService();