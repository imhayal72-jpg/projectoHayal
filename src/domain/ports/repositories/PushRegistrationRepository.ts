import { PushRegistration } from "../../entities/PushRegistration";

export interface PushRegistrationRepository {
  findSubscribedDevices(idhospital: number, codPublico: string): Promise<PushRegistration[]>;
  register(registration: PushRegistration): Promise<void>;
  clearByPatientAndDevice(idhospital: number, codPublico: string, playerId: string): Promise<void>;
  invalidateExpired(idhospital: number, expirationDays: number): Promise<void>;
}