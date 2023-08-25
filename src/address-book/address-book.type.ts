import { ObjectType, Field, ID } from '@nestjs/graphql';
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
