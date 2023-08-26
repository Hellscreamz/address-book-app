import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cars } from './cars.entity';
import { CarInput, CarsType } from './cars.type';
import { User } from 'src/user/user.entity';
import { UserType } from 'src/user/user.type';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Cars)
    private carsRepository: Repository<Cars>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getAllCars(): Promise<Cars[]> {
    return this.carsRepository.find();
  }

  async createCar(carInput: CarInput): Promise<CarsType> {
    const user = await this.userRepository.findOne({
      where: { id: carInput.user_id },
    });

    if (!user) {
      throw new Error('User not found');
    }

    const newCar = this.carsRepository.create({
      ...carInput,
      user: user,
    });

    const savedCar = await this.carsRepository.save(newCar);
    return {
      ...savedCar,
      user: user,
    };
  }

  async getCarsByUserID(user_id: string): Promise<UserType> {
    return this.userRepository.findOne({
      where: { id: user_id },
      relations: ['cars'],
    });
  }
}
