import { z } from 'zod';

export const RegisterDeviceRequestSchema = z.object({
    player_id: z.string().trim().min(1).max(255),
    cod_publico: z.string().trim().min(1).max(50),
    idhospital: z.number().int().positive(),
    codidioma: z.enum(['es', 'en', 'cat']),
});

export type RegisterDeviceRequestDto = z.infer<typeof RegisterDeviceRequestSchema>;