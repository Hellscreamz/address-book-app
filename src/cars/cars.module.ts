import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cars } from './cars.entity';
import { CarsService } from './cars.service';
import { CarsResolver } from './cars.resolver';
import { User } from 'src/user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cars, User])],
  providers: [CarsService, CarsResolver],
  exports: [CarsService],
})
export class CarsModule {}
