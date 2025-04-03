const knex = require('../database/knex');

const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const { userId } = req.user;

    const product = await knex('products').where({ id: productId }).first();

    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado!' });
    }

    const existingCartItem = await knex('cart')
      .where({ user_id: userId, product_id: productId })
      .first();

    if (existingCartItem) {
      await knex('cart')
        .where({ user_id: userId, product_id: productId })
        .update({
          quantity: existingCartItem.quantity + quantity
        });
    } else {
      await knex('cart').insert({
        user_id: userId,
        product_id: productId,
        quantity
      });
    }

    return res.status(201).json({ message: 'Produto adicionado ao carrinho!' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Erro ao adicionar produto ao carrinho' });
  }
};

const getCart = async (req, res) => {
    try {
      const { userId } = req.user;
  
      const cartItems = await knex('cart')
        .join('products', 'cart.product_id', '=', 'products.id')
        .where({ user_id: userId })
        .select('products.id', 'products.name', 'products.price', 'cart.quantity');
  
      if (cartItems.length === 0) {
        return res.status(404).json({ error: 'Carrinho vazio!' });
      }
  
      return res.status(200).json(cartItems);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Erro ao buscar o carrinho de compras.' });
    }
  };


  const removeFromCart = async (req, res) => {
    try {
      const { productId } = req.params;
      const { userId } = req.user;
  
      const productInCart = await knex('cart')
        .where({ user_id: userId, product_id: productId })
        .first();
  
      if (!productInCart) {
        return res.status(404).json({ error: 'Produto não encontrado no carrinho!' });
      }
  
      await knex('cart')
        .where({ user_id: userId, product_id: productId })
        .del();
  
      return res.status(200).json({ message: 'Produto removido do carrinho!' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Erro ao remover o produto do carrinho.' });
    }
  };

module.exports = { addToCart, getCart, removeFromCart };
