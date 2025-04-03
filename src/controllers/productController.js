const knex = require("../database/knex");

const getAllProducts = async (req, res) => {
  try {
    const products = await knex("products").select("*");
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar os produtos" });
  }
};

module.exports = { getAllProducts };
