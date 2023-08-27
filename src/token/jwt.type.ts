import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class LoginUserInputType {
  @Field()
  user_id: string;
}
