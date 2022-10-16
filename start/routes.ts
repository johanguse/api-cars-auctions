import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', async () => {
    return { hello: 'world' }
  })
  Route.get('/cars', 'CarsController.index')
}).prefix('/api/v1')
