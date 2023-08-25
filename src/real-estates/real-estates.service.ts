import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RealEstates } from './real-estates.entity';

@Injectable()
export class RealEstatesService {
  constructor(
    @InjectRepository(RealEstates)
    private realEstatesRepository: Repository<RealEstates>,
  ) {}

  async getAllRealEstates(): Promise<RealEstates[]> {
    return this.realEstatesRepository.find();
  }
}
