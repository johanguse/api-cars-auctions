import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Car from './Car'

export default class Bid extends BaseModel {
  @column()
  public carId: number

  @belongsTo(() => Car)
  public car: BelongsTo<typeof Car>

  @column({ isPrimary: true })
  public id: number

  @column()
  public amount: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
