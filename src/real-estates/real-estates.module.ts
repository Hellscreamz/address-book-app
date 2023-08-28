import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RealEstates } from './real-estates.entity';
import { RealEstatesService } from './real-estates.service';
import { RealEstatesResolver } from './real-estates.resolver';
import { UserValidationModule } from 'src/validation/user/user-validation.module';
@Module({
  imports: [TypeOrmModule.forFeature([RealEstates]), UserValidationModule],
  providers: [RealEstatesService, RealEstatesResolver],
  exports: [RealEstatesService],
})
export class RealEstatesModule {}
