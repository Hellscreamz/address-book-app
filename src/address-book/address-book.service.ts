import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddressBook } from './address-book.entity';

@Injectable()
export class AddressBookService {
  constructor(
    @InjectRepository(AddressBook)
    private addressBookRepository: Repository<AddressBook>,
  ) {}

  async getAllAddressBookEntries(): Promise<AddressBook[]> {
    return this.addressBookRepository.find();
  }
}
