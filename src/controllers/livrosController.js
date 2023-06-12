import livros from '../models/livro.js';

class LivroController {

    static listarLivros = (req, res) => {
        livros.find()
      .then(livros => {
        res.status(200).json(livros);
      })
      .catch(err => {
        console.error(err);
        res.status(500).send('Erro ao buscar os livros.');
      })
    }

    static listarLivroPorId = (req, res) => {
      const id = req.params.id;
    
      livros.findById(id)
        .then(livro => {
          if (!livro) {
            res.status(404).send('Livro não encontrado.');
          } else {
            res.status(200).json(livro);
          }
        })
        .catch(err => {
          console.error(err);
          res.status(500).send('Erro ao buscar o livro.');
        });
    }
    
    static async cadastrarLivro(req, res) {
      try {
        let livro = new livros(req.body);
        
        livro.save();
        res.status(201).json({ message: 'Livro cadastrado com sucesso' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro ao cadastrar o livro' });
      }
    }

    static async atualizarLivro(req, res) {
      const id = req.params.id;
    
      try {
        await livros.findByIdAndUpdate(id, {$set: req.body });
        res.status(200).send({ message: 'Livro atualizado com sucesso!' });
      } catch (err) {
        res.status(500).send({ message: err.message });
      }
    }

    static async excluirLivro(req, res) {
      const id = req.params.id;
    
      try {
        await livros.findByIdAndDelete(id, {$set: req.body });
        res.status(200).send({ message: 'Livro removido com sucesso!' });
      } catch (err) {
        res.status(500).send({ message: err.message });
      }
    }
    }
    
 export default LivroController;
