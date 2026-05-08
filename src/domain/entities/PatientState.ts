import { FINAL_STATE_CODES } from "@domain/constants";

export class PatientState {

    private codPublicoPaciente: string;
    private codestadoPublico: string;
    private fechahora: string;
    private idhospital!: number;
    private destino?: string | undefined;
    private habitacion?: string | undefined;

    createdAt!: Date;
    updatedAt!: Date;

    constructor(
        codPublicoPaciente: string, 
        codestadoPublico: string, 
        fechahora: string, idhospital: number, 
        destino?: string, habitacion?: string
    ) {
        this.codPublicoPaciente= codPublicoPaciente;
        this.codestadoPublico= codestadoPublico;
        this.fechahora= fechahora;
        this.idhospital= idhospital;
        this.destino= destino;
        this.habitacion= habitacion;
    }

    get_codPublicoPaciente() {
        return this.codPublicoPaciente;
    }

    get_codestadoPublico() {
        return this.codestadoPublico;
    }

    get_fechahora() {
        return this.fechahora;
    }

    get_idhospital() {
        return this.idhospital;
    }

    get_destino() {
        return this.destino;
    }

    get_habitacion() {
        return this.habitacion;
    }



    set_codPublicoPaciente(codPublicoPaciente: string) {
        this.codPublicoPaciente= codPublicoPaciente;
    }

    set_codestadoPublico(codestadoPublico: string) {
        this.codestadoPublico= codestadoPublico;
    }

    set_fechahora(fechahora: string) {
        this.fechahora= fechahora;
    }

    set_destino(destino: string | undefined) {
        this.destino= destino;
    }

    set_habitacion(habitacion: string | undefined) {
        this.habitacion= habitacion;
    }

    isFinalState(): boolean {
        return FINAL_STATE_CODES.includes(this.codestadoPublico);
    }
}