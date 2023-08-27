import { ObjectType, Field, ID, InputType, Int } from '@nestjs/graphql';
import { CarsType } from 'src/cars/cars.type';
import { RealEstatesType } from 'src/real-estates/real-estates.type';

@ObjectType()
export class UserType {
  @Field(() => ID)
  id: string;

  @Field()
  first_name: string;

  @Field()
  last_name: string;

  @Field()
  mobile_phone: number;

  @Field(() => [CarsType], { nullable: true })
  cars?: CarsType[];

  @Field(() => [RealEstatesType], { nullable: true })
  real_estates?: RealEstatesType[];
}

@InputType()
export class CreateUserInputType {
  @Field()
  first_name: string;

  @Field()
  last_name: string;

  @Field(() => Int)
  mobile_phone: number;
}

@InputType()
export class FindUserByIdInput {
  @Field()
  id: string;
}
