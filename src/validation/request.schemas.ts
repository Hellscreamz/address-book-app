import { z, ZodTypeAny } from 'zod';

export const CarsValidationSchema = z.object({
  model: z.string().max(20),
  mark: z.string().max(20),
  engine: z.string().max(20),
  horse_power: z.number().int(),
  bought_at: z.date(),
  price: z.number().positive(),
  vehicle_type: z.string().max(20),
  user_id: z.string().uuid(),
});

export const RealEstatesValidationSchema = z.object({
  real_estate_type: z.string().max(20),
  bought_at: z.date(),
  price: z.number().positive(),
  square_meters: z.number().int(),
  city: z.string().max(30),
  country: z.string().max(30),
  user_id: z.string().uuid(),
});

export const UserValidationSchema = z.object({
  first_name: z.string().max(100),
  last_name: z.string().max(100),
  mobile_phone: z.bigint(),
  cars: z.array(CarsValidationSchema),
  real_estates: z.array(RealEstatesValidationSchema),
});

export const AddressBookValidationSchema = z.object({
  address: z.string().max(255),
  city: z.string().max(30),
  country: z.string().max(30),
  email_address: z.string().max(150).email(),
  zip_code: z.number().int(),
  user_id: z.string().uuid(),
});

// *IMPORTANT*
//  The properties in validationSchemas MUST
//  be equal to the actual class names responsible for input types

export const validationSchemas: Record<string, ZodTypeAny> = {
  CarInput: CarsValidationSchema,
  UserInput: UserValidationSchema,
  RealEstatesInput: RealEstatesValidationSchema,
  AddressBookInput: AddressBookValidationSchema,
};
