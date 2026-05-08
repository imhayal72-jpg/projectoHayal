import { z } from 'zod';

export const CreatePatientStateRequestSchema = z.object({
    cod_estado_publico: z.string().trim().min(1).max(10),
    cod_estado_fechahora: z.string().datetime(),
    destino: z.string().trim().max(100).nullable().optional(),
    habitacion: z.string().trim().max(50).nullable().optional(),
});

export type CreatePatientStateRequestDto = z.infer<typeof CreatePatientStateRequestSchema>;