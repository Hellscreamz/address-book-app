import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsePipes } from '@nestjs/common';

import { CarsService } from './cars.service';
import {
  CarsType,
  CreateCarInputType,
  UpdateCarInputType,
  DeleteCarInputType,
  CarDeleteType,
  GetCarsByIdInputType,
} from './cars.type';
import { UserType } from 'src/user/user.type';
import { ValidationPipe } from 'src/pipe/validation-pipe';

@Resolver(() => CarsType)
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query(() => [CarsType])
  async getAllCars(): Promise<CarsType[]> {
    return this.carsService.getAllCars();
  }

  @Query(() => UserType)
  @UsePipes(new ValidationPipe())
  async getCarsByUserID(
    @Args('getCarsByIdInputType') getCarsByIdInputType: GetCarsByIdInputType,
  ): Promise<UserType> {
    return this.carsService.getCarsByUserID(getCarsByIdInputType);
  }

  @Mutation(() => CarsType)
  @UsePipes(new ValidationPipe())
  async createCar(
    @Args('createCarInputType') carInput: CreateCarInputType,
  ): Promise<CarsType> {
    return this.carsService.createCar(carInput);
  }

  @Mutation(() => CarsType)
  @UsePipes(new ValidationPipe())
  async updateCarByUserIdCarId(
    @Args('updateCarInputType') carInputUpdateType: UpdateCarInputType,
  ): Promise<CarsType> {
    return this.carsService.updateCarByUserIdCarId(carInputUpdateType);
  }

  @Mutation(() => CarDeleteType)
  @UsePipes(new ValidationPipe())
  async deleteCarById(
    @Args('deleteCarInputType') carInputDeleteType: DeleteCarInputType,
  ): Promise<CarDeleteType> {
    return this.carsService.deleteCarById(carInputDeleteType);
  }
}
