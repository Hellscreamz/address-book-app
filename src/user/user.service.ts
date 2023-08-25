import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';
import { UserType } from './user.type';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async getCarsByUserID(user_id: string): Promise<UserType> {
    return this.userRepository.findOne({
      where: { id: user_id },
      relations: ['cars'],
    });
  }
}
