import { DomainError } from "./DomainError";

export class ValidationError extends DomainError {
    readonly statusCode = 422;
    constructor() {
        super();
    }
}