import { PatientStateRepository } from "@domain/ports/repositories/PatientStateRepository";
import { PatientStateResponseDto } from "@application/dtos/response/PatientState.dto";
import { EntityNotFoundError } from "@domain/errors/EntityNotFoundError";
import { PatientState } from "@domain/entities/PatientState";

export class GetPatientStates {
    constructor(
        private readonly patientStateRepository: PatientStateRepository,
    ) { }

    async execute(idhospital: number, codPublicoPaciente: string): Promise<PatientStateResponseDto[]> {
        // 1. Obtener estados del paciente
        const states = await this.patientStateRepository
            .findByHospitalAndPatientCode(idhospital, codPublicoPaciente);

        // 2. Si no hay estados, lanzar EntityNotFoundError
        if (states.length === 0) {
            throw new EntityNotFoundError('PatientState', codPublicoPaciente);
        }

        // 3. Mapear cada estado a su DTO
        return states.map(s => toPatientStateDto(s));
    }
}

function toPatientStateDto(state: PatientState): PatientStateResponseDto {
    return {
        codPublicoPaciente: state.get_codPublicoPaciente.toString(),
        codestadoPublico: state.get_codestadoPublico.toString(),
        fechahora: state.get_fechahora.toString(),
        idhospital: state.get_idhospital(),
        destino: state.get_destino.toString() ?? null,
        habitacion: state.get_habitacion.toString() ?? null,
    };
}