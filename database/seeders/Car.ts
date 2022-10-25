import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Car from 'App/Models/Car'

export default class MovieSeeder extends BaseSeeder {
  public async run() {
    await Car.createMany([
      {
        make: 'Audi',
        model: 'Q3',
        year: 2021,
        version: '1.4 35 TFSI',
        km: 10000,
        remaingTime: 100,
        imageUrl:
          'https://res.cloudinary.com/dvcywi3uf/image/upload/v1666649456/api-cars-auctions/audi-q3.jpg',
      },
      {
        make: 'BMW',
        model: 'Z4',
        year: 2020,
        version: '3.0 TWINPOWER',
        km: 6000,
        remaingTime: 15870,
        imageUrl:
          'https://res.cloudinary.com/dvcywi3uf/image/upload/v1666649906/api-cars-auctions/bmw-z4.jpg',
      },
      {
        make: 'Volvo',
        model: 'XC90',
        year: 2017,
        version: '2.0 D5 MOMENTUM',
        km: 140000,
        remaingTime: 9500,
        imageUrl:
          'https://res.cloudinary.com/dvcywi3uf/image/upload/v1666649999/api-cars-auctions/volvo-xc-90.jpg',
      },
      {
        make: 'Porsche',
        model: 'Panamera',
        year: 2017,
        version: '2.9 V6 E-HYBRID',
        km: 10000,
        remaingTime: 800,
        imageUrl:
          'https://res.cloudinary.com/dvcywi3uf/image/upload/v1666649456/api-cars-auctions/audi-q3.jpg',
      },
      {
        make: 'Chery',
        model: 'Tiggo 8 Pro',
        year: 2022,
        version: '1.5 TCI PLUG-IN HYBRID',
        km: 10000,
        remaingTime: 65851,
        imageUrl:
          'https://res.cloudinary.com/dvcywi3uf/image/upload/v1666649456/api-cars-auctions/audi-q3.jpg',
      },
      {
        make: 'Mclaren',
        model: '540 C',
        year: 2020,
        version: '3.8 V8 TURBO SSG',
        km: 10000,
        remaingTime: 61,
        imageUrl:
          'https://res.cloudinary.com/dvcywi3uf/image/upload/v1666649456/api-cars-auctions/audi-q3.jpg',
      },
    ])
  }
}
