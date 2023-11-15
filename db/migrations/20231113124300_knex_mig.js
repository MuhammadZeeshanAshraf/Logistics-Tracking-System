const { table } = require('../postgredb');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema

    .createTable('product_skus', (table) => {
      table.increments('id').primary().notNullable();
      table.string('name', 255).notNullable();
      table.string('region', 255).notNullable();
      table.timestamp('deleted_At');
    })
    .createTable('containers', (table) => {
      table.increments('id').primary().notNullable();

      table.string('container_number').notNullable();
      table.integer('quantity', 255).notNullable();
      table.string('vendor').notNullable();
      table
        .integer('product_skus_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('product_skus')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .index();
      table.timestamp('deleted_At');
    })
    .createTable('customers', (table) => {
      table.increments('id').primary().notNullable();
      table.string('name').notNullable();
      table.string('mobile').notNullable();
      table.string('account_number').notNullable();
      table.string('address').notNullable();
      table.string('identification_number').notNullable();
      table.timestamp('deleted_At');
    })
    .createTable('sale_agents', (table) => {
      table.increments('id').primary().notNullable();
      table.string('name').notNullable();
      table.string('password').notNullable();

      table.timestamp('deleted_At');
    })
    .createTable('orders', (table) => {
      table.increments('id').primary().notNullable();
      table
        .integer('container_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('containers')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .index();
      table
        .integer('customer_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('customers')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .index();
      table
        .integer('sale_agent_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('sale_agents')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .index();
      table.timestamp('deleted_At');
      table.timestamp('created_At');
    });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('product')
    .dropTableIfExists('container');
};
