import express from 'express';
import livrosController from '../controllers/livrosController.js'

const router = express.Router();

router.get('/livros', livrosController.listarLivros);
router.get('/livros/:id', livrosController.listarLivroPorId);
router.post('/livros', livrosController.cadastrarLivro);
router.put('/livros/:id', livrosController.atualizarLivro);
router.delete('/livros/:id', livrosController.excluirLivro);

export default router;