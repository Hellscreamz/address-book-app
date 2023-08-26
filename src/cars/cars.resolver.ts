import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsePipes } from '@nestjs/common';

import { CarsService } from './cars.service';
import { CarsType } from './cars.type';
import { CarInput } from './cars.type';
import { UserType } from 'src/user/user.type';
import { ValidationPipe } from 'src/pipe/validation-pipe';
import { CarInputUpdateType } from './cars.type';

@Resolver(() => CarsType)
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query(() => [CarsType])
  async getAllCars(): Promise<CarsType[]> {
    return this.carsService.getAllCars();
  }

  @Query(() => UserType)
  async getCarsByUserID(@Args('user_id') user_id: string): Promise<UserType> {
    return this.carsService.getCarsByUserID(user_id);
  }

  @Mutation(() => CarsType)
  @UsePipes(new ValidationPipe())
  async createCar(@Args('carInput') carInput: CarInput): Promise<CarsType> {
    return this.carsService.createCar(carInput);
  }

  @Mutation(() => CarsType)
  @UsePipes(new ValidationPipe())
  async updateCarByUserIdCarId(
    @Args('carInputUpdateType') carInputUpdateType: CarInputUpdateType,
  ): Promise<CarsType> {
    return this.carsService.updateCarByUserIdCarId(carInputUpdateType);
  }
}
