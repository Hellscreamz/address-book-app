import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';
import { UserType } from 'src/user/user.type';

@ObjectType()
export class CarsType {
  @Field(() => ID)
  id: string;

  @Field()
  model: string;

  @Field()
  mark: string;

  @Field()
  engine: string;

  @Field()
  horse_power: number;

  @Field()
  buyed_at: Date;

  @Field()
  price: number;

  @Field()
  vehicle_type: string;

  @Field(() => UserType)
  user: UserType;
}

@InputType()
export class CarInput {
  @Field()
  user_id: string;

  @Field()
  model: string;

  @Field()
  mark: string;

  @Field()
  engine: string;

  @Field()
  horse_power: number;

  @Field()
  buyed_at: Date;

  @Field()
  price: number;

  @Field()
  vehicle_type: string;
}
