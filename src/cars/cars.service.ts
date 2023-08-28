import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Cars } from './cars.entity';
import {
  CreateCarInputType,
  CarsType,
  CarDeleteType,
  UpdateCarInputType,
  DeleteCarInputType,
  FindCarsByIdInputType,
} from './cars.type';
import { User } from 'src/user/user.entity';
import { UserType } from 'src/user/user.type';
import { UserValidationService } from 'src/validation/user/user-validation.service';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Cars)
    private carsRepository: Repository<Cars>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private userValidationService: UserValidationService,
  ) {}

  async getAllCars(): Promise<Cars[]> {
    return this.carsRepository.find();
  }

  async createCar(createCarInputType: CreateCarInputType): Promise<CarsType> {
    const { user_id, ...restCarInput } = createCarInputType;
    const user = await this.userValidationService.validateUser(user_id);
    const newCar = this.carsRepository.create({
      ...restCarInput,
      user,
    });
    return this.carsRepository.save(newCar);
  }

  async findCarsByUserID(
    findCarsByIdInputType: FindCarsByIdInputType,
  ): Promise<UserType> {
    const user = await this.userValidationService.validateUser(
      findCarsByIdInputType.user_id,
    );
    return this.userRepository.findOne({
      where: { id: user.id },
      relations: ['cars'],
    });
  }

  async updateCarByUserIdCarId(
    updateCarInputType: UpdateCarInputType,
  ): Promise<CarsType> {
    const user = await this.userValidationService.validateUser(
      updateCarInputType.user_id,
    );

    const updatedCar = await this.carsRepository.findOneOrFail({
      where: { user, id: updateCarInputType.car_id },
    });
    Object.assign(updatedCar, updateCarInputType);

    const savedCar = await this.carsRepository.save(updatedCar);
    return {
      ...savedCar,
      user: user,
    };
  }

  async deleteCarById(
    deleteCarInputType: DeleteCarInputType,
  ): Promise<CarDeleteType> {
    const car = await this.carsRepository.findOneOrFail({
      where: { id: deleteCarInputType.car_id },
    });
    await this.carsRepository.remove(car);
    return car;
  }
}
