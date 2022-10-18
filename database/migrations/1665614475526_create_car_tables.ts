import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Car extends BaseSchema {
  protected tableName = 'cars'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('make')
      table.string('model')
      table.integer('year')
      table.string('version')
      table.integer('km')
      table.integer('remaing_time')
      table.string('image_url')
      table.timestamp('created_at', { useTz: true }).notNullable().defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).notNullable().defaultTo(this.now())
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
