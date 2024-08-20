require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Conectar ao MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.error('MongoDB connection error:', err));

// Definir o esquema e o modelo para feedbacks
const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  rating: Number,
  message: String,
  created_at: { type: Date, default: Date.now }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

// Rota para obter todos os feedbacks
app.get('/api/feedbacks', async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ created_at: -1 });
    res.json(feedbacks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro ao obter feedbacks');
  }
});

// Rota para enviar um feedback
app.post('/api/feedbacks', async (req, res) => {
  const { name, email, rating, message } = req.body;
  try {
    const newFeedback = new Feedback({ name, email, rating, message });
    const savedFeedback = await newFeedback.save();
    res.json(savedFeedback);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro ao enviar feedback');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
