import { Resolver, Query, Args } from '@nestjs/graphql';

import { UserService } from './user.service';
import { UserType } from './user.type';

@Resolver(() => UserType)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [UserType])
  async getAllUsers(): Promise<UserType[]> {
    return this.userService.getAllUsers();
  }

  @Query(() => UserType)
  async getCarsByUserID(@Args('user_id') user_id: string): Promise<UserType> {
    return this.userService.getCarsByUserID(user_id);
  }
}
