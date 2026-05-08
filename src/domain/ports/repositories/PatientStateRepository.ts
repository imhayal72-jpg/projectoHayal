import { PatientState} from "../../entities/PatientState";

export interface PatientStateRepository {
    findByHospitalAndPatientCode(idhospital: number, codPublico: string): Promise<PatientState[]>;
    save(state: PatientState): Promise<{ affectedRows: number }>;
    deleteExpired(idhospital: number, expirationDays: number): Promise<void>;
    getStateTextsByLanguage(idhospital: number, codEstadoPublico: string): Promise<Record<string, string>>;
}