const image = require("../Model/imageModel.js");
const imageRepository = require("../Repository/imageRepository.js");

async function postRef(ref){
    return await  imageRepository.insertImage(image);
  }

  async function getImages(){
    return await imageRepository.listImages();
  }
  async function getImage(id) {
    return await imageRepository.listImage(id);
}   

async function putImage(id, titulo) {
    return await imageRepository.updateImage(id, titulo);
}

async function deleteImage(id) {
    return await imageRepository.deleteImage(id);
}

module.exports = { postImage, getImages, getImage, putImage, deleteImage };