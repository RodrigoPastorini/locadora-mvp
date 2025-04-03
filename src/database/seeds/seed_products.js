/**
 * @param {import("knex").Knex} knex
 * @returns {Promise<void>}
 */
exports.seed = async function (knex) {
  await knex("products").del(); // Remove os dados antes de inserir

  await knex("products").insert([
    {
      id: knex.raw("lower(hex(randomblob(16)))"),
      name: "Câmera DSLR",
      description: "Câmera profissional para fotos e vídeos",
      image_url: "https://example.com/camera.jpg",
      price: 120,
      stock: 5,
      daily_price: 15,
      weekly_price: 80,
      biweekly_price: 140,
      monthly_price: 250,
    },
    {
      id: knex.raw("lower(hex(randomblob(16)))"),
      name: "Notebook Gamer",
      description: "Notebook potente para jogos e edição",
      image_url: "https://example.com/notebook.jpg",
      price: 300,
      stock: 3,
      daily_price: 40,
      weekly_price: 220,
      biweekly_price: 400,
      monthly_price: 700,
    },
    {
      id: knex.raw("lower(hex(randomblob(16)))"),
      name: "Projetor Full HD",
      description: "Projetor para apresentações e home theater",
      image_url: "https://example.com/projetor.jpg",
      price: 90,
      stock: 7,
      daily_price: 10,
      weekly_price: 55,
      biweekly_price: 100,
      monthly_price: 180,
    },
    {
      id: knex.raw("lower(hex(randomblob(16)))"),
      name: "Microfone Profissional",
      description: "Microfone para gravação de áudio de alta qualidade",
      image_url: "https://example.com/microfone.jpg",
      price: 50,
      stock: 10,
      daily_price: 5,
      weekly_price: 30,
      biweekly_price: 50,
      monthly_price: 90,
    },
  ]);
};
