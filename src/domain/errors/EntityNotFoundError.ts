import { DomainError } from "./DomainError";

export class EntityNotFoundError extends DomainError {
    readonly statusCode = 404;

    constructor(entityName: string, id: number | string) {
        super(entityName + ' with id ' + String(id) + ' not found');
    }
}