import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsePipes } from '@nestjs/common';

import { AddressBookService } from './address-book.service';
import {
  AddressBookType,
  AddressUpdateInputType,
  AddressCreateInputType,
  AddressBookDeleteType,
  DeleteAddressInputType,
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
    @Args('input') addressInput: AddressCreateInputType,
  ): Promise<AddressBookType> {
    return this.addressBookService.createAddress(addressInput);
  }

  @Mutation(() => AddressBookType)
  @UsePipes(new ValidationPipe())
  async updateAddressByUserId(
    @Args('input')
    addressUpdateInputType: AddressUpdateInputType,
  ): Promise<AddressBookType> {
    return this.addressBookService.updateAddressByUserId(
      addressUpdateInputType,
    );
  }

  @Mutation(() => AddressBookDeleteType)
  @UsePipes(new ValidationPipe())
  async deleteAddressByUserId(
    @Args('input')
    deleteAddressInputType: DeleteAddressInputType,
  ): Promise<AddressBookDeleteType> {
    return this.addressBookService.deleteAddressByUserId(
      deleteAddressInputType,
    );
  }
}
