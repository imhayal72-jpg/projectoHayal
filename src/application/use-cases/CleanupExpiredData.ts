import { PushRegistrationRepository } from "@domain/ports/repositories/PushRegistrationRepository";
import { NotificationRepository } from "@domain/ports/repositories/NotificationRepository";
import { PatientStateRepository } from "@domain/ports/repositories/PatientStateRepository";
import { Logger } from "@domain/ports/services/Logger";
export class CleanupExpiredData {
    constructor(
        private readonly pushRegistrationRepository: PushRegistrationRepository,
        private readonly notificationRepository: NotificationRepository,
        private readonly patientStateRepository: PatientStateRepository,
        private readonly logger: Logger,
    ) { }

    async execute(idhospital: number, expirationDays: number): Promise<void> {
        // Cada paso es independiente; si uno falla, logear el error y continuar
        try {
            await this.pushRegistrationRepository.invalidateExpired(idhospital, expirationDays);
        } catch (err) {
            this.logger.error('Failed to invalidate push registrations', err, { idhospital });
        }

        try {
            await this.notificationRepository.invalidateExpired(idhospital, expirationDays);
        } catch (err) {
            this.logger.error('Failed to invalidate notifications', err, { idhospital });
        }

        try {
            await this.patientStateRepository.deleteExpired(idhospital, expirationDays);
        } catch (err) {
            this.logger.error('Failed to delete expired patient states', err, { idhospital });
        }

        this.logger.info('Cleanup completed', { idhospital, expirationDays });
    }
}