import { FINAL_STATE_CODES } from "@domain/constants";

export class PublicState {

    private codestadoPublico: string;
    private texto: string;
    private codidioma: string;

    createdAt!: Date;
    updatedAt!: Date;

    constructor(
        codestadoPublico: string, 
        texto: string, 
        codidioma: string
    ) {
        this.codestadoPublico=codestadoPublico;
        this.texto= texto;
        this.codidioma= codidioma;
    }
    
    get_codPublicoPaciente() {
        return this.codestadoPublico;
    }
    get_texto() {
        return this.texto;
    }
    get_codidioma() {
        return this.codidioma;
    }

    set_codestadoPublico(codestadoPublico: string) {
        this.codestadoPublico= codestadoPublico;
    }
    set_texto(texto: string) {
        this.texto= texto;
    }
    set_codidioma(codidioma: string) {
        this.codidioma= codidioma;
    }
    set_updatedAt(updatedAt: Date) {
        this.updatedAt= updatedAt;
}

    isFinalState(): boolean {
        return FINAL_STATE_CODES.includes(this.codestadoPublico);
    }
}