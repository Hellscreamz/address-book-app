import { Resolver, Query } from '@nestjs/graphql';
import { RealEstatesService } from './real-estates.service';
import { RealEstatesType } from './real-estates.type';
@Resolver(() => RealEstatesType)
export class RealEstatesResolver {
  constructor(private realEstatesService: RealEstatesService) {}

  @Query(() => [RealEstatesType])
  async getAllRealEstates(): Promise<RealEstatesType[]> {
    return this.realEstatesService.getAllRealEstates();
  }
}
