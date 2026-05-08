export class Notification {
    private idnotificacion: number | null;  // null si aún no persistida
    private fechahora: Date;
    private idhospital: number;
    private codPublicoPaciente: string;
    private texto: string;

    createdAt!: Date;
    updatedAt!: Date;

    
    constructor(props: {
        idnotificacion: number | null;
        fechahora: Date;
        idhospital: number;
        codPublicoPaciente: string;
        texto: string;
    }) {
        this.idnotificacion = props.idnotificacion;
        this.fechahora = props.fechahora;
        this.idhospital = props.idhospital;
        this.codPublicoPaciente = props.codPublicoPaciente;
        this.texto = props.texto;
    }

    get_idnotificacion() {
        return this.idnotificacion;
    }
    get_fechahora() {
        return this.fechahora;
    }
    get_idhospital() {
        return this.idhospital;
    }
    get_codPublicoPaciente() {
        return this.codPublicoPaciente;
    }
    get_texto() {
        return this.texto;
    }

    set_idnotification(idnotificacion: number | null) {
        this.idnotificacion= idnotificacion;
    }
    set_fechahora(fechahora: Date) {
        this.fechahora= fechahora;
    }
    set_idhospital(idhospital: number) {
        this.idhospital= idhospital;
    }
    set_codPublicoPaciente(codPublicoPaciente: string) {
        this.codPublicoPaciente= codPublicoPaciente;
    }
    set_texto(texto: string) {
        this.texto= texto;
    }
    set_updatedAt(updatedAt: Date) {
        this.updatedAt= updatedAt;
    }
}