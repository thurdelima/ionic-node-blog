'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostsSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.increments()
      table.string('title', 255).notNullable().unique()
      table.text('content', 255).notNullable().unique()
      table.text('imagem', 255).notNullable().unique()
      table.integer('usuarioid').unsigned()

      table.foreign('usuarioid').references('id').inTable('users')

      table.timestamps()
    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostsSchema
