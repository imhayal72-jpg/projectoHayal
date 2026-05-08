import { z } from 'zod';

export const CreateNotificationRequestSchema = z.object({
    texto: z.string().trim().min(1).max(1000),
    fechahora: z.string().datetime(),
});

export type CreateNotificationRequestDto = z.infer<typeof CreateNotificationRequestSchema>;