import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from 'src/user/user.entity';
import { UserValidationService } from './user-validation.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserValidationService],
  exports: [UserValidationService],
})
export class UserValidationModule {}
