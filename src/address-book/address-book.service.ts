import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddressBook } from './address-book.entity';
import { AddressCreateInputType, AddressBookType } from './address-book.type';
import { UserValidationService } from 'src/validation/user/user-validation.service';
@Injectable()
export class AddressBookService {
  constructor(
    @InjectRepository(AddressBook)
    private addressBookRepository: Repository<AddressBook>,
    private userValidationService: UserValidationService,
  ) {}

  async getAllAddressBookEntries(): Promise<AddressBook[]> {
    return this.addressBookRepository.find();
  }

  async createAddress(
    addressInput: AddressCreateInputType,
  ): Promise<AddressBookType> {
    const user = await this.userValidationService.validateUser(
      addressInput.user_id,
    );

    const newAddress = this.addressBookRepository.create({
      ...addressInput,
      user: user,
    });

    const savedAddress = await this.addressBookRepository.save(newAddress);
    return {
      ...savedAddress,
      user,
    };
  }
}
