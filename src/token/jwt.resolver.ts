import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { TokenService } from './jwt.service';
import { UserValidationService } from 'src/validation/user/user-validation.service';
import { LoginUserInputType } from './jwt.type';

@Resolver()
export class TokenResolver {
  constructor(
    private tokenService: TokenService,
    private userValidationService: UserValidationService,
  ) {}

  @Mutation(() => String)
  async loginUser(
    @Args('user_id') loginUserInputType: LoginUserInputType,
  ): Promise<string> {
    const user = await this.userValidationService.validateUser(
      loginUserInputType.user_id,
    );

    const jwtToken = this.tokenService.generateToken(user.id);
    return jwtToken;
  }
}
