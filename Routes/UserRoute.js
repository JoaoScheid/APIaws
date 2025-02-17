const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');


router.post('/novoUser', userController.novoUser);
router.get('/listarUsers', userController.listarUsers);
router.get('/listarUser/:id', userController.listarUser);
router.put('/atualizar/user/:id', userController.atualizarUser);
router.delete('/remover/user/:id', userController.removerUser);

module.exports = router; 
