const express = require('express');
const router = express.Router();
const imageController = require('../Controller/imageController'); 

router.post('/novaImagem', imageController.novaImagem);
router.get('/listarImagens', imageController.listarImagens);
router.get('/listarImagem/:id', imageController.listarImagem);
router.put('/atualizar/image/:id', imageController.atualizarImagem);
router.delete('/remover/image/:id', imageController.removerImagem);

module.exports = router; 
