export class Language {
    
    private ididioma: number;
    private codidioma: string;
    private porDefecto: boolean;


    constructor(
        ididioma: number,
        codidioma: string,
        porDefecto: boolean
    ) {
        this.ididioma= ididioma;
        this.codidioma= codidioma;
        this.porDefecto= porDefecto;
    }

    get_ididioma() {
        return this.ididioma;
    }
    get_codidioma() {
        return this.codidioma;
    }
    get_porDefecto() {
        return this.porDefecto;
    }

    set_codidioma(codidioma: string){
        this.codidioma= codidioma;
    }
    set_porDefecto(porDefecto: boolean) {
        this.porDefecto= porDefecto;
    }
}