const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const tasks = [];

app.get('/tasks', (req, res) => res.json(tasks));

app.post('/tasks', (req, res) => {
  const { id, title } = req.body;
  tasks.push({ id, title });
  res.status(201).json({ message: 'Task created successfully' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
