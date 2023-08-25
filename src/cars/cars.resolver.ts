import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CarsService } from './cars.service';
import { CarsType } from './cars.type';
import { CarInput } from './cars.type';

@Resolver(() => CarsType)
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query(() => [CarsType])
  async getAllCars(): Promise<CarsType[]> {
    return this.carsService.getAllCars();
  }

  @Mutation(() => CarsType)
  async createCar(@Args('carInput') carInput: CarInput): Promise<CarsType> {
    return this.carsService.createCar(carInput);
  }
}
