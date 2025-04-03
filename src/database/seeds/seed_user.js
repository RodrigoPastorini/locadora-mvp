const bcryptjs = require("bcryptjs");

exports.seed = async function (knex) {

  await knex("users").del();

  const hashedPassword = await bcryptjs.hash("123Fred", 10);

  await knex("users").insert([
    {
      id: knex.raw("LOWER(HEX(RANDOMBLOB(16)))"),
      name: "Fred",
      email: "fredx@sisloc.com.br",
      password: hashedPassword,
      created_at: knex.fn.now(),
    },
  ]);
};
