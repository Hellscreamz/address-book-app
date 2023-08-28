import { ObjectType, Field, ID, InputType, Float, Int } from '@nestjs/graphql';
import { UserType } from 'src/user/user.type';

@ObjectType()
export class RealEstatesType {
  @Field(() => ID)
  id: string;

  @Field()
  real_estate_type: string;

  @Field()
  bought_at: Date;

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

@ObjectType()
export class DeleteRealEstateType {
  @Field()
  real_estate_type: string;

  @Field()
  bought_at: Date;

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

@InputType()
export class CreateRealEstateInputType {
  @Field()
  real_estate_type: string;

  @Field()
  bought_at: Date;

  @Field(() => Float)
  price: number;

  @Field(() => Int)
  square_meters: number;

  @Field()
  city: string;

  @Field()
  country: string;

  @Field()
  user_id: string;
}

@InputType()
export class UpdateRealEstateInputType {
  @Field()
  user_id: string;

  @Field()
  real_estate_id: string;

  @Field({ nullable: true })
  real_estate_type?: string;

  @Field({ nullable: true })
  bought_at: Date;

  @Field(() => Float, { nullable: true })
  price: number;

  @Field(() => Int, { nullable: true })
  square_meters: number;

  @Field({ nullable: true })
  city: string;

  @Field({ nullable: true })
  country: string;
}

@InputType()
export class FindRealEstateByUserIdInputType {
  @Field()
  user_id: string;
}

@InputType()
export class DeleteRealEstateInputType {
  @Field()
  real_estate_id: string;
}
