const database = require("../database/connection");

async function insertUser(user) {
    try {
        const { nome, data_criacao } = user;
        await database.insert({ nome, data_criacao }).table("Usuario");
        return { message: "Usuário criado com sucesso!" };
    } catch (error) {
        throw new Error("Erro ao inserir usuário: " + error.message);
    }
}

async function listUsers() {
    try {
        const users = await database.select("*").table("Usuario");
        return users;
    } catch (error) {
        throw new Error("Erro ao listar usuários: " + error.message);
    }
}

async function listUser(id) {
    try {
        const user = await database.select("*").table("Usuario").where({ id }).first();
        return user;
    } catch (error) {
        throw new Error("Erro ao buscar usuário: " + error.message);
    }
}

async function updateUser(id, nome) {
    try {
        await database.where({ id }).update({ nome }).table("Usuario");
        return { message: "Usuário atualizado com sucesso!" };
    } catch (error) {
        throw new Error("Erro ao atualizar usuário: " + error.message);
    }
}

async function deleteUser(id) {
    try {
        await database.where({ id }).del().table("Usuario");
        return { message: "Usuário removido com sucesso!" };
    } catch (error) {
        throw new Error("Erro ao remover usuário: " + error.message);
    }
}

module.exports = { insertUser, listUsers, listUser, updateUser, deleteUser };
