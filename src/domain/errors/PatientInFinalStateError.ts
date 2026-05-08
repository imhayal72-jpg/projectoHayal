import { DomainError } from "./DomainError";

export class PatientInFinalStateError extends DomainError {
    readonly statusCode = 409;

    constructor(codPublicoPaciente: string) {
        super('Patient ' + codPublicoPaciente + ' is already in a final state');
    }
}