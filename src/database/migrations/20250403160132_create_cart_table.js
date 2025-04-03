/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("cart", function (table) {
        table.uuid("id").primary().defaultTo(knex.raw("(lower(hex(randomblob(16))))"));
        table.uuid("user_id").references("id").inTable("users").onDelete("CASCADE");
        table.uuid("product_id").references("id").inTable("products").onDelete("CASCADE");
        table.integer("quantity").notNullable();
        table.decimal("total_price", 10, 2).notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("cart");
};
