import { ObjectType, Field, ID } from '@nestjs/graphql';
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
