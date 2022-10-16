import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Car from 'App/Models/Car'

export default class MovieSeeder extends BaseSeeder {
  public async run() {
    await Car.createMany([
      {
        make: 'Audi',
        model: 'A4',
        year: 2019,
        version: '2.0 TDI',
        km: 10000,
        remaingTime: 10,
        imageUrl:
          'https://www.audi.com/content/dam/gbp2/experience-audi/models-and-technology/audi-a4-saloon/2019/audi-a4-saloon-2019-models-and-technology.jpg?imwidth=1920',
      },
      {
        make: 'Audi',
        model: 'A4',
        year: 2019,
        version: '2.0 TDI',
        km: 10000,
        remaingTime: 10,
        imageUrl:
          'https://www.audi.com/content/dam/gbp2/experience-audi/models-and-technology/audi-a4-saloon/2019/audi-a4-saloon-2019-models-and-technology.jpg?imwidth=1920',
      },
      {
        make: 'Audi',
        model: 'A4',
        year: 2019,
        version: '2.0 TDI',
        km: 10000,
        remaingTime: 10,
        imageUrl:
          'https://www.audi.com/content/dam/gbp2/experience-audi/models-and-technology/audi-a4-saloon/2019/audi-a4-saloon-2019-models-and-technology.jpg?imwidth=1920',
      },
      {
        make: 'Audi',
        model: 'A4',
        year: 2019,
        version: '2.0 TDI',
        km: 10000,
        remaingTime: 10,
        imageUrl:
          'https://www.audi.com/content/dam/gbp2/experience-audi/models-and-technology/audi-a4-saloon/2019/audi-a4-saloon-2019-models-and-technology.jpg?imwidth=1920',
      },
      {
        make: 'Audi',
        model: 'A4',
        year: 2019,
        version: '2.0 TDI',
        km: 10000,
        remaingTime: 10,
        imageUrl:
          'https://www.audi.com/content/dam/gbp2/experience-audi/models-and-technology/audi-a4-saloon/2019/audi-a4-saloon-2019-models-and-technology.jpg?imwidth=1920',
      },
      {
        make: 'Audi',
        model: 'A4',
        year: 2019,
        version: '2.0 TDI',
        km: 10000,
        remaingTime: 10,
        imageUrl:
          'https://www.audi.com/content/dam/gbp2/experience-audi/models-and-technology/audi-a4-saloon/2019/audi-a4-saloon-2019-models-and-technology.jpg?imwidth=1920',
      },
    ])
  }
}
