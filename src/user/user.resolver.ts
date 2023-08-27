import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UsePipes } from '@nestjs/common';

import { UserService } from './user.service';
import { UserType, FindUserByIdInput } from './user.type';
import { CreateUserInputType } from './user.type';
import { ValidationPipe } from 'src/pipe/validation-pipe';

@Resolver(() => UserType)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [UserType])
  async getAllUsers(): Promise<UserType[]> {
    return this.userService.getAllUsers();
  }

  @Query(() => UserType)
  @UsePipes(new ValidationPipe())
  async findUserById(
    @Args('findUserByIdInput') findUserByIdInput: FindUserByIdInput,
  ): Promise<UserType> {
    return this.userService.findUserById(findUserByIdInput);
  }

  @Mutation(() => UserType)
  @UsePipes(new ValidationPipe())
  async createUser(
    @Args('input') input: CreateUserInputType,
  ): Promise<UserType> {
    return this.userService.createUser(input);
  }
}
