import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsePipes } from '@nestjs/common';

import { AddressBookService } from './address-book.service';
import {
  AddressBookType,
  AddressUpdateInputType,
  AddressCreateInputType,
} from './address-book.type';
import { ValidationPipe } from 'src/pipe/validation-pipe';

@Resolver(() => AddressBookType)
export class AddressBookResolver {
  constructor(private addressBookService: AddressBookService) {}

  @Query(() => [AddressBookType])
  async getAllAddressBookEntries(): Promise<AddressBookType[]> {
    return this.addressBookService.getAllAddressBookEntries();
  }

  @Mutation(() => AddressBookType)
  @UsePipes(new ValidationPipe())
  async createAddress(
    @Args('addressInput') addressInput: AddressCreateInputType,
  ): Promise<AddressBookType> {
    return this.addressBookService.createAddress(addressInput);
  }

  @Mutation(() => AddressBookType)
  @UsePipes(new ValidationPipe())
  async updateAddressByUserId(
    @Args('addressUpdateInputType')
    addressUpdateInputType: AddressUpdateInputType,
  ): Promise<AddressBookType> {
    return this.addressBookService.updateAddressByUserId(
      addressUpdateInputType,
    );
  }
}
