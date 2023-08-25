import { Resolver, Query } from '@nestjs/graphql';
import { AddressBookService } from './address-book.service';
import { AddressBookType } from './address-book.type';
@Resolver(() => AddressBookType)
export class AddressBookResolver {
  constructor(private addressBookService: AddressBookService) {}

  @Query(() => [AddressBookType])
  async getAllAddressBookEntries(): Promise<AddressBookType[]> {
    return this.addressBookService.getAllAddressBookEntries();
  }
}
