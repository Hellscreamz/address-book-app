import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Args } from '@nestjs/graphql';

import { User } from './user.entity';
import {
  CreateUserInputType,
  FindUserByIdInput,
  UpdateUserInputType,
} from './user.type';
import { UserValidationService } from 'src/validation/user/user-validation.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private userValidationService: UserValidationService,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findUserById(findUserByIdInput: FindUserByIdInput): Promise<User> {
    const user = await this.userValidationService.validateUser(
      findUserByIdInput.user_id,
    );
    return this.userRepository.findOne({
      where: { id: user.id },
      relations: ['cars', 'real_estates'],
    });
  }

  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInputType,
  ): Promise<User> {
    const newUser = this.userRepository.create(createUserInput);
    return this.userRepository.save(newUser);
  }

  async updateUser(updateUserInput: UpdateUserInputType): Promise<User> {
    const user = await this.userValidationService.validateUser(
      updateUserInput.user_id,
    );
    Object.assign(user, updateUserInput);
    return this.userRepository.save(user);
  }

  async deleteUser(findUserByIdInput: FindUserByIdInput): Promise<User> {
    const user = await this.userValidationService.validateUser(
      findUserByIdInput.user_id,
    );
    await this.userRepository.remove(user);
    return user;
  }
}
