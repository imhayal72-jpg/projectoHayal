export interface PatientStateResponseDto {
    readonly codPublicoPaciente: string;
    readonly codestadoPublico: string;
    readonly fechahora: string;        // ISO 8601
    readonly idhospital: number;
    readonly destino: string | null;
    readonly habitacion: string | null;
}