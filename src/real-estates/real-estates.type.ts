import { ObjectType, Field, ID } from '@nestjs/graphql';
import { UserType } from 'src/user/user.type';

@ObjectType()
export class RealEstatesType {
  @Field(() => ID)
  id: string;

  @Field()
  real_estate_type: string;

  @Field()
  buyed_at: Date;

  @Field()
  price: number;

  @Field()
  square_meters: number;

  @Field()
  city: string;

  @Field()
  country: string;

  @Field(() => UserType)
  user: UserType;
}
