import { z } from 'zod';

export const UserIdValidation = z.object({
  user_id: z.string().uuid(),
});
