import { NotificationRepository } from "@domain/ports/repositories/NotificationRepository";
import { PushRegistrationRepository } from "@domain/ports/repositories/PushRegistrationRepository";
import { PushNotificationService } from "@domain/ports/services/PushNotificationService";
import { Logger } from "@domain/ports/services/Logger";
import { CreateNotificationRequestDto } from "@application/dtos/request/CreateNotificationRequest.dto";
import { Notification as PatientNotification } from "@domain/entities/Notification";

export class CreateNotification {
    constructor(
        private readonly notificationRepository: NotificationRepository,
        private readonly pushRegistrationRepository: PushRegistrationRepository,
        private readonly pushNotificationService: PushNotificationService,
        private readonly logger: Logger,
    ) { }

    async execute(
        idhospital: number,
        codPublicoPaciente: string,
        dto: CreateNotificationRequestDto,
    ): Promise<void> {}
 