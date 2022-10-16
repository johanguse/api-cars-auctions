import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Car from 'App/Models/Car'

export default class CarsController {
  public async index({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = 10

    const cars = await Car.query().preload('bids').paginate(page, limit)

    return {
      data: cars,
    }
  }
}
