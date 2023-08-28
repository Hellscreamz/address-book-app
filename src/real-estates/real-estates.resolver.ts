import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UsePipes } from '@nestjs/common';

import { ValidationPipe } from 'src/pipe/validation-pipe';
import { RealEstatesService } from './real-estates.service';
import { RealEstatesType } from './real-estates.type';
import {
  CreateRealEstateInputType,
  UpdateRealEstateInputType,
  DeleteRealEstateInputType,
  FindRealEstateByUserIdInputType,
  DeleteRealEstateType,
} from './real-estates.type';

@Resolver(() => RealEstatesType)
export class RealEstatesResolver {
  constructor(private realEstatesService: RealEstatesService) {}

  @Query(() => [RealEstatesType])
  async getAllRealEstates(): Promise<RealEstatesType[]> {
    const realEstates = await this.realEstatesService.getAllRealEstates();
    return realEstates;
  }

  @Query(() => RealEstatesType)
  @UsePipes(new ValidationPipe())
  async findRealEstateByUserId(
    @Args('input') findByUserIdInputType: FindRealEstateByUserIdInputType,
  ): Promise<RealEstatesType> {
    return this.realEstatesService.findRealEstateByUserId(
      findByUserIdInputType,
    );
  }

  @Mutation(() => RealEstatesType)
  @UsePipes(new ValidationPipe())
  async createRealEstate(
    @Args('input') createRealEstateInput: CreateRealEstateInputType,
  ): Promise<RealEstatesType> {
    return this.realEstatesService.createRealEstate(createRealEstateInput);
  }

  @Mutation(() => RealEstatesType)
  @UsePipes(new ValidationPipe())
  async updateRealEstate(
    @Args('input') updateRealEstateInput: UpdateRealEstateInputType,
  ): Promise<RealEstatesType> {
    return this.realEstatesService.updateRealEstate(updateRealEstateInput);
  }

  @Mutation(() => RealEstatesType)
  async deleteRealEstate(
    @Args('input') deleteRealEstateInput: DeleteRealEstateInputType,
  ): Promise<DeleteRealEstateType> {
    return this.realEstatesService.deleteRealEstate(deleteRealEstateInput);
  }
}
