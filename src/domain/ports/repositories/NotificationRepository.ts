import { Notification } from "../../entities/Notification";

export interface NotificationRepository {
    findActiveByHospitalAndPatientCode(idhospital: number, codPublico: string): Promise<Notification[]>;
    save(notification: Notification): Promise<void>;
    invalidateExpired(idhospital: number, expirationDays: number): Promise<void>;
}