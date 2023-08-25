import { Resolver, Query } from '@nestjs/graphql';
import { CarsService } from './cars.service';
import { CarsType } from './cars.type';

@Resolver(() => CarsType)
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query(() => [CarsType])
  async getAllCars(): Promise<CarsType[]> {
    return this.carsService.getAllCars();
  }
}
