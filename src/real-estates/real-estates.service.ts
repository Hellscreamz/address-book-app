import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RealEstates } from './real-estates.entity';
import {
  RealEstatesType,
  CreateRealEstateInputType,
  UpdateRealEstateInputType,
  DeleteRealEstateInputType,
  FindRealEstateByUserIdInputType,
  DeleteRealEstateType,
} from './real-estates.type';
import { UserValidationService } from 'src/validation/user/user-validation.service';
@Injectable()
export class RealEstatesService {
  constructor(
    @InjectRepository(RealEstates)
    private realEstatesRepository: Repository<RealEstates>,
    private userValidationService: UserValidationService,
  ) {}

  async getAllRealEstates(): Promise<RealEstatesType[]> {
    return this.realEstatesRepository.find({ relations: ['user'] });
  }

  async findRealEstateByUserId(
    findByUserIdInputType: FindRealEstateByUserIdInputType,
  ): Promise<RealEstatesType> {
    const user = await this.userValidationService.validateUser(
      findByUserIdInputType.user_id,
    );
    return this.realEstatesRepository.findOne({
      where: { user: user },
      relations: ['user'],
    });
  }

  async createRealEstate(
    createRealEstateInput: CreateRealEstateInputType,
  ): Promise<RealEstatesType> {
    const user = await this.userValidationService.validateUser(
      createRealEstateInput.user_id,
    );
    const newRealEstate = this.realEstatesRepository.create({
      ...createRealEstateInput,
      user: user,
    });
    return this.realEstatesRepository.save(newRealEstate);
  }

  async updateRealEstate(
    updateRealEstateInput: UpdateRealEstateInputType,
  ): Promise<RealEstatesType> {
    const user = await this.userValidationService.validateUser(
      updateRealEstateInput.user_id,
    );
    const updatedRealEstate = await this.realEstatesRepository.findOneOrFail({
      where: { user, id: updateRealEstateInput.real_estate_id },
    });

    Object.assign(updatedRealEstate, updateRealEstateInput);

    const savedRealEstate = await this.realEstatesRepository.save(
      updatedRealEstate,
    );

    return {
      ...savedRealEstate,
      user: user,
    };
  }

  async deleteRealEstate(
    deleteRealEstateInput: DeleteRealEstateInputType,
  ): Promise<DeleteRealEstateType> {
    const realEstate = await this.realEstatesRepository.findOneOrFail({
      where: { id: deleteRealEstateInput.real_estate_id },
    });
    await this.realEstatesRepository.remove(realEstate);
    return realEstate;
  }
}
