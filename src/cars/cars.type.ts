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
  bought_at: Date;

  @Field()
  price: number;

  @Field()
  vehicle_type: string;

  @Field(() => UserType)
  user: UserType;
}

@InputType()
export class CreateCarInputType {
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
  bought_at: Date;

  @Field()
  price: number;

  @Field()
  vehicle_type: string;
}

@InputType()
export class UpdateCarInputType {
  @Field()
  user_id: string;

  @Field()
  car_id: string;

  @Field({ nullable: true })
  model: string;

  @Field({ nullable: true })
  mark: string;

  @Field({ nullable: true })
  engine: string;

  @Field({ nullable: true })
  horse_power: number;

  @Field({ nullable: true })
  bought_at: Date;

  @Field({ nullable: true })
  price: number;

  @Field({ nullable: true })
  vehicle_type: string;
}

@InputType()
export class DeleteCarInputType {
  @Field()
  car_id: string;
}

@ObjectType()
export class CarDeleteType {
  @Field()
  model: string;

  @Field()
  mark: string;

  @Field()
  engine: string;

  @Field()
  horse_power: number;

  @Field()
  bought_at: Date;

  @Field()
  price: number;

  @Field()
  vehicle_type: string;
}

@InputType()
export class FindCarsByIdInputType {
  @Field()
  user_id: string;
}
