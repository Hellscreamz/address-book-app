import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressBook } from './address-book.entity';
import { AddressBookService } from './address-book.service';
import { AddressBookResolver } from './address-book.resolver';
import { UserValidationModule } from 'src/validation/user/user-validation.module';

@Module({
  imports: [TypeOrmModule.forFeature([AddressBook]), UserValidationModule],
  providers: [AddressBookService, AddressBookResolver],
  exports: [AddressBookService],
})
export class AddressBookModule {}
