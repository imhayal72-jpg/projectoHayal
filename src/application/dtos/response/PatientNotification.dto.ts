export interface PatientNotificationResponseDto {
    readonly idnotificacion: number;
    readonly fechahora: string;          // ISO 8601
    readonly idhospital: number;
    readonly codPublicoPaciente: string;
    readonly texto: string;
}