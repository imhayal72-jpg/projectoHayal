// domain/constants.ts

/**
 * Códigos de estado final del paciente.
 * Un paciente en estos estados no debe recibir más notificaciones push.
 */
export const FINAL_STATE_CODES: string[] = ['19', '31'];

/**
 * Idiomas soportados por la aplicación.
 * Definidos en RegisterDeviceRequest.dto.ts como z.enum(['es', 'en', 'cat'])
 */
export const SUPPORTED_LANGUAGES = ['es', 'en', 'cat'] as const;
export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];
// → 'es' | 'en' | 'cat'