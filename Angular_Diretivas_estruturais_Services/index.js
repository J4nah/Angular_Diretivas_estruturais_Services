const express = require('express');
const cors = require('cors'); // Importa o cors

const app = express();
const PORT = 3000;

app.use(cors({ origin: 'http://localhost:4200' })); 
app.use(express.json()); 


let clientes = [
  { id: 1, nome: 'Alice Silva', email: 'alice.silva@email.com' },
  { id: 2, nome: 'Bruno Costa', email: 'bruno.costa@email.com' },
  { id: 3, nome: 'Carla Mendes', email: 'carla.mendes@email.com' },
  { id: 4, nome: 'Daniel Rocha', email: 'daniel.rocha@email.com' },
  { id: 5, nome: 'Eduarda Almeida', email: 'eduarda.almeida@email.com' },
  { id: 6, nome: 'Fernando Souza', email: 'fernando.souza@email.com' },
  { id: 7, nome: 'Gabriela Santos', email: 'gabriela.santos@email.com' },
  { id: 8, nome: 'Henrique Lima', email: 'henrique.lima@email.com' },
  { id: 9, nome: 'Isabel Pereira', email: 'isabel.pereira@email.com' },
  { id: 10, nome: 'Thiago Carvalho', email: 'thiago.carvalho@email.com' }
];


app.get('/clientes', (req, res) => {
  res.json(clientes);
});

// 2. Obter um cliente pelo ID
app.get('/clientes/:id', (req, res) => {
  const cliente = clientes.find(c => c.id === parseInt(req.params.id));
  if (cliente) {
    res.json(cliente);
  } else {
    res.status(404).json({ message: 'Cliente não encontrado' });
  }
});

// 3. Adicionar um novo cliente
app.post('/clientes', (req, res) => {
  const novoCliente = {
    id: clientes.length + 1,
    nome: req.body.nome,
    email: req.body.email
  };
  clientes.push(novoCliente);
  res.status(201).json(novoCliente);
});

// 4. Atualizar um cliente existente
app.put('/clientes/:id', (req, res) => {
  const cliente = clientes.find(c => c.id === parseInt(req.params.id));
  if (cliente) {
    cliente.nome = req.body.nome;
    cliente.email = req.body.email;
    res.json(cliente);
  } else {
    res.status(404).json({ message: 'Cliente não encontrado' });
  }
});

// 5. Excluir um cliente pelo ID
app.delete('/clientes/:id', (req, res) => {
  const index = clientes.findIndex(c => c.id === parseInt(req.params.id));
  if (index !== -1) {
    clientes.splice(index, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ message: 'Cliente não encontrado' });
  }
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
