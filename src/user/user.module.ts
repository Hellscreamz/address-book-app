import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { UserValidationModule } from 'src/validation/user/user-validation.module';
@Module({
  imports: [TypeOrmModule.forFeature([User]), UserValidationModule],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
