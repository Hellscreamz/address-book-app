import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cars } from './cars.entity';
import { CarsService } from './cars.service';
import { CarsResolver } from './cars.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Cars])],
  providers: [CarsService, CarsResolver],
  exports: [CarsService],
})
export class CarsModule {}
