import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';
import { UserType } from 'src/user/user.type';

@ObjectType()
export class AddressBookType {
  @Field(() => ID)
  id: string;

  @Field()
  address: string;

  @Field()
  city: string;

  @Field()
  country: string;

  @Field()
  email_address: string;

  @Field()
  zip_code: number;

  @Field(() => UserType)
  user: UserType;
}

@InputType()
export class AddressCreateInputType {
  @Field()
  user_id: string;

  @Field()
  address: string;

  @Field()
  city: string;

  @Field()
  country: string;

  @Field()
  email_address: string;

  @Field()
  zip_code: number;
}
