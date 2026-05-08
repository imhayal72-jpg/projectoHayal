import { PushNotificationService } from "@domain/ports/services/PushNotificationService";
import { PushRegistrationRepository } from "@domain/ports/repositories/PushRegistrationRepository";
import { PatientStateRepository } from "@domain/ports/repositories/PatientStateRepository";
import { CreatePatientStateRequestDto } from "@application/dtos/request/CreatePatientStateRequest.dto";
import { Logger } from "@domain/ports/services/Logger";
import { PatientState } from "@domain/entities/PatientState";

export class CreatePatientState {
    constructor(
        private readonly patientStateRepository: PatientStateRepository,
        private readonly pushRegistrationRepository: PushRegistrationRepository,
        private readonly pushNotificationService: PushNotificationService,
        private readonly logger: Logger,
    ) { }

    async execute(
        idhospital: number,
        codPublicoPaciente: string,
        dto: CreatePatientStateRequestDto,
    ): Promise<void> {
        // 1. Obtener estados actuales del paciente
        const currentStates = await this.patientStateRepository
            .findByHospitalAndPatientCode(idhospital, codPublicoPaciente);

        // 2. Verificar que el paciente no está en estado final (19, 31)
        const isInFinalState = currentStates.some(s => s.isFinalState());
        if (isInFinalState) {
            this.logger.info('Patient already in final state, skipping', { idhospital, codPublicoPaciente });
            return;
        }

        // 3. Construir entidad PatientState y persistir con INSERT IGNORE
        const newState = new PatientState({});
        const result = await this.patientStateRepository.save(newState);

        // 4. Si se insertó (affectedRows === 1), enviar push
        if (result.affectedRows === 1) {
            const devices = await this.pushRegistrationRepository
                .findSubscribedDevices(idhospital, codPublicoPaciente);
            // Agrupar por idioma, obtener textos, enviar multicast por grupo
        }
    }
}