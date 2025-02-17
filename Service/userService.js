  
  
  const user = require("../Model/userModel.js")
  const userRepository = require("../Repository/userRepository.js")
  async function postUser(user){
    return await  userRepository.insertUser(user);
  }

  async function getUsers(){
    return await userRepository.listUsers();
  }
  async function getUser(id) {
    return await userRepository.listUser(id);
}

async function putUser(id, nome) {
    return await userRepository.updateUser(id, nome);
}

async function deleteUser(id) {
    return await userRepository.deleteUser(id);
}

module.exports = { postUser, getUsers, getUser, putUser, deleteUser };