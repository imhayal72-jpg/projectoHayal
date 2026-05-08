export class HospitalStyle {

    private colorPrimario: string;
    private colorSecundario: string;
    private colorTercario: string;
    private imagen1: string;
    private imagen2: string;

    createdAt!: Date;
    updatedAt!: Date;

    constructor(
        colorPrimario: string, 
        colorSecundario: string, 
        colorTercario: string, 
        imagen1: string, 
        imagen2: string
    ) {
        this.colorPrimario= colorPrimario;
        this.colorSecundario= colorSecundario;
        this.colorTercario= colorTercario;
        this.imagen1= imagen1;
        this.imagen2= imagen2;
    }

    get_colorPrimario() {
        return this.colorPrimario;
    }
    get_colorSecundario() {
        return this.colorSecundario;
    }
    get_colorTercario() {
        return this.colorTercario;
    }
    get_imagen1() {
        return this.imagen1;
    }
    get_imagen2() {
        return this.imagen2;
    }

    set_colorPrimario(colorprimario: string) {
        this.colorPrimario= colorprimario;
    }

    set_colorSecundario(colorSecundario: string) {
        this.colorSecundario= colorSecundario;
    }

    set_colorTercario(colorTercario: string) {
        this.colorTercario= colorTercario;
    }

    set_updatedAt(updatedAt: Date) {
        this.updatedAt= updatedAt;
    }

}

