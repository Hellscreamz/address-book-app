import { z, ZodTypeAny } from 'zod';
import { UserIdValidation } from 'src/validation/global/user-id-validation';

export const CreateCarInputType = z.object({
  model: z.string().max(20),
  mark: z.string().max(20),
  engine: z.string().max(20),
  horse_power: z.number().int().positive(),
  bought_at: z.date(),
  price: z.number().positive(),
  vehicle_type: z.string().max(20),
  user_id: z.string().uuid(),
});

export const UpdateCarInputType = z.object({
  user_id: z.string().uuid(),
  car_id: z.string().uuid(),
  model: z.string().optional(),
  mark: z.string().optional(),
  engine: z.string().optional(),
  horse_power: z.number().int().positive().optional(),
  bought_at: z.date().optional(),
  price: z.number().positive().optional(),
  vehicle_type: z.string().optional(),
});

export const DeleteCarInputType = z.object({
  car_id: z.string().uuid(),
});

export const AddressCreateInputType = z.object({
  user_id: z.string().uuid(),
  address: z.string().max(255),
  city: z.string().max(30),
  country: z.string().max(30),
  email_address: z.string().max(150).email(),
  zip_code: z.number().int(),
});

export const AddressUpdateInputType = z.object({
  user_id: z.string().uuid(),
  address: z.string().max(255).optional(),
  city: z.string().max(30).optional(),
  country: z.string().max(30).optional(),
  email_address: z.string().max(150).email().optional(),
  zip_code: z.number().int().optional(),
});

export const CreateUserInputType = z.object({
  first_name: z.string(),
  last_name: z.string(),
  mobile_phone: z.number().int(),
});

export const UpdateUserInputType = z.object({
  user_id: z.string().uuid(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  mobile_phone: z.number().int().optional(),
});

const CreateRealEstateInputType = z.object({
  real_estate_type: z.string(),
  bought_at: z.date(),
  price: z.number(),
  square_meters: z.number().int(),
  city: z.string(),
  country: z.string(),
  user_id: z.string().uuid(),
});

const UpdateRealEstateInputType = z.object({
  user_id: z.string().uuid(),
  real_estate_id: z.string().uuid(),
  real_estate_type: z.string().optional(),
  bought_at: z.date().optional(),
  price: z.number().optional(),
  square_meters: z.number().int().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
});

const DeleteRealEstateInputType = z.object({
  real_estate_id: z.string(),
});

// *IMPORTANT*
//  The properties in validationSchemas MUST
//  be equal to the actual class names responsible for input types

export const validationSchemas: Record<string, ZodTypeAny> = {
  CreateCarInputType: CreateCarInputType,
  UpdateCarInputType: UpdateCarInputType,
  DeleteCarInputType: DeleteCarInputType,
  AddressCreateInputType: AddressCreateInputType,
  AddressUpdateInputType: AddressUpdateInputType,
  DeleteAddressInputType: UserIdValidation,
  CreateUserInputType: CreateUserInputType,
  FindUserByIdInput: UserIdValidation,
  FindCarsByIdInputType: UserIdValidation,
  UpdateUserInputType: UpdateUserInputType,
  CreateRealEstateInputType: CreateRealEstateInputType,
  UpdateRealEstateInputType: UpdateRealEstateInputType,
  FindRealEstateByUserIdInputType: UserIdValidation,
  DeleteRealEstateInputType: DeleteRealEstateInputType,
};
