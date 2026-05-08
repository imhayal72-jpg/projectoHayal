import { DomainError } from "./DomainError";

export class UnsupportedLanguageError extends DomainError {
    readonly statusCode = 400;
    constructor(language: string) {
        super("Language" + language + "is not supported");
    }
}