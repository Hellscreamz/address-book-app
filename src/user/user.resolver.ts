import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UsePipes } from '@nestjs/common';

import { UserService } from './user.service';
import { UserType, FindUserByIdInput, UpdateUserInputType } from './user.type';
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

  @Mutation(() => UserType)
  @UsePipes(new ValidationPipe())
  async updateUser(
    @Args('updateUserInput') updateUserInput: UpdateUserInputType,
  ): Promise<UserType> {
    return this.userService.updateUser(updateUserInput);
  }

  @Mutation(() => UserType)
  @UsePipes(new ValidationPipe())
  async deleteUser(
    @Args('user_id') findUserByIdInput: FindUserByIdInput,
  ): Promise<UserType> {
    const deletedUser = await this.userService.deleteUser(findUserByIdInput);
    return deletedUser;
  }
}
