import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Bid extends BaseSchema {
  protected tableName = 'bids'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('car_id').unsigned().references('cars.id').onDelete('CASCADE')
      table.integer('amount')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
