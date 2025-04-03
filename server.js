require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./src/routes/authRoutes');
const productRoutes = require('./src/routes/productRoutes');
const userRoutes = require('./src/routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());

//User Routes
app.use('/api/users', userRoutes);

//Auth Routes
app.use('/api/auth', authRoutes);

//Product Routes
app.use("/api/produtos", productRoutes);

// Usando o valor da variável PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
