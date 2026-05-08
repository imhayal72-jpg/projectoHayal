import { NotificationRepository } from "@domain/ports/repositories/NotificationRepository";
import { PatientNotificationResponseDto } from "@application/dtos/response/PatientNotification.dto";
import { EntityNotFoundError } from "@domain/errors/EntityNotFoundError";
import { Notification as PatientNotification } from "@domain/entities/Notification";

export class GetPatientNotifications {
    constructor(
        private readonly notificationRepository: NotificationRepository,
    ) { }

    async execute(idhospital: number, codPublicoPaciente: string): Promise<PatientNotificationResponseDto[]> {
        // 1. Obtener notificaciones activas del paciente
        const notifications = await this.notificationRepository
            .findActiveByHospitalAndPatientCode(idhospital, codPublicoPaciente);

        // 2. Si no hay notificaciones, lanzar EntityNotFoundError
        if (notifications.length === 0) {
            throw new EntityNotFoundError('Notification', codPublicoPaciente);
        }

        // 3. Mapear cada notificación a su DTO
        return notifications.map(n => toPatientNotificationDto(n));
    }
}

function toPatientNotificationDto(notification: PatientNotification): PatientNotificationResponseDto {
    const idnotificacion = notification.get_idnotificacion();

    if (idnotificacion === null) {
        throw new Error('Notification has no id');
    }

    return {
        idnotificacion: idnotificacion,
        fechahora: notification.get_fechahora().toISOString(),
        idhospital: notification.get_idhospital(),
        codPublicoPaciente: notification.get_codPublicoPaciente(),
        texto: notification.get_texto(),
    };
}