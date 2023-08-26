import { Module } from '@nestjs/common';

import { CarsModule } from 'src/cars/cars.module';
import { RealEstatesModule } from 'src/real-estates/real-estates.module';
import { UserModule } from 'src/user/user.module';
import { AddressBookModule } from 'src/address-book/address-book.module';
import { DatabaseModule } from 'src/database/database.module';
import { UserValidationModule } from 'src/validation/user/user-validation.module';

@Module({
  imports: [
    DatabaseModule,
    CarsModule,
    RealEstatesModule,
    UserModule,
    AddressBookModule,
    UserValidationModule,
  ],
})
export class SharedModule {}
