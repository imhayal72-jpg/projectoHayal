export class Hospital {

    private idhospital!: number; //ids solo get
    private direccion: string;
    private telefono: string;
    private web: string;
    private email: string;

    createdAt!: Date; //! = undefined (optativo)
    updatedAt!: Date;

    constructor(
        direccion: string, 
        telefono: string, 
        web: string, 
        email: string
    ) {
        this.direccion = direccion;
        this.telefono = telefono;
        this.web = web;
        this.email = email;
    }

    get_idhospital(): number {
        return this.idhospital;
    }
    get_direccion(): string {
        return this.direccion;
    }
    get_telefono(): string {
        return this.telefono;
    }
    get_web(): string {
        return this.web;
    }
    get_email(): string {
        return this.email;
    }

    set_direccion(direccion : string) {
        this.direccion = direccion;
    }

    set_telefono(telefono : string) {
        this.telefono = telefono;
    }

    set_web(web : string) {
        this.web = web;
    }

    set_email(email : string) {
        this.email = email;
    }
    set_updatedAt(updatedAt : Date) {
        this.updatedAt = updatedAt;
    }
}