import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Car extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public make: string

  @column()
  public model: string

  @column()
  public year: number

  @column()
  public version: string

  @column()
  public km: number

  @column()
  public remaingTime: number

  @column()
  public imageUrl: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
