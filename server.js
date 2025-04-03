require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./src/routes/authRoutes');
const productRoutes = require('./src/routes/productRoutes');
const userRoutes = require('./src/routes/userRoutes');
const cartRoutes = require('./src/routes/cartRoutes');

const app = express();
app.use(cors());
app.use(express.json());

//User Routes
app.use('/api/users', userRoutes);

//Auth Routes
app.use('/api/auth', authRoutes);

//Product Routes
app.use("/api/products", productRoutes);

//Cart Routes
app.use('/api/cart', cartRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
