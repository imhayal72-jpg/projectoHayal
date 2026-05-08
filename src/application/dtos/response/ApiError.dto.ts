export interface ApiErrorResponseDto {
    readonly error: string;
    readonly details?: string;
    readonly timestamp: string;          // ISO 8601
    readonly path: string;
}