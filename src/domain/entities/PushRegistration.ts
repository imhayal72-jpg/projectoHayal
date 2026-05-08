export class PushRegistration {
    private idhospital: number;
    private codPublico: string;
    private deviceToken: string;
    private platform: string;
    private active: boolean;
    private createdAt: Date;
    private updatedAt: Date;

    constructor(
        idhospital: number,
        codPublico: string,
        deviceToken: string,
        platform: string,
        active: boolean,
        createdAt: Date,
        updatedAt: Date,
    ) {
        this.idhospital = idhospital;
        this.codPublico = codPublico;
        this.deviceToken = deviceToken;
        this.platform = platform;
        this.active = active;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    get_idhospital(): number { return this.idhospital; }
    get_codPublico(): string { return this.codPublico; }
    get_deviceToken(): string { return this.deviceToken; }
    get_platform(): string { return this.platform; }
    get_active(): boolean { return this.active; }
    get_createdAt(): Date { return this.createdAt; }
    get_updatedAt(): Date { return this.updatedAt; }

    set_active(active: boolean) { this.active = active; }
    set_updatedAt(updatedAt: Date) { this.updatedAt = updatedAt; }
}