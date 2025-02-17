const database = require('../database/connection');
const userService = require("../Service/userService.js");


class userController {
    async novoUser(request, response) {
        try {
            const { nome, data_criacao } = request.body;
            const result = await userService.postUser({ nome, data_criacao });
            return response.json(result);
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }

    async listarUsers(request, response) {
        try{
            const users = await userService.getUsers();
            return response.json(users);
        }catch(error){
            return response.status(500).json({ error: error.message });
        }
    }

    async listarUser(request, response) {
        try {
            const { id } = request.params;
            const user = await userService.getUser(id);
            return response.json(user);
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }


    async atualizarUser(request, response) {
        try {
            const { id } = request.params;
            const { nome } = request.body;
            const result = await userService.putUser(id, nome);
            return response.json(result);
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }

    async removerUser(request, response) {
        try {
            const { id } = request.params;
            const result = await userService.deleteUser(id);
            return response.json(result);
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }


  
  
}

module.exports = new userController();
