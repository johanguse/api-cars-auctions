import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Car from 'App/Models/Car'

export default class CarsController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const page = request.input('page', 1)
      const limit = request.input('limit', 15)

      const cars = await Car.query()
        .preload('bids', (query) =>
          query.orderBy([
            { column: 'amount', order: 'desc' },
            {
              column: 'createdAt',
              order: 'desc',
            },
            {
              column: 'updatedAt',
              order: 'desc',
            },
          ])
        )
        .paginate(page, limit)

      return {
        data: cars,
      }
    } catch (err) {
      return response.status(err.status).send({
        message: {
          error: 'Something went wrong while find cars',
        },
      })
    }
  }
}
