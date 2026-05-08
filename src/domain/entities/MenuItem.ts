export class MenuItem {
    private idopcionMenu: number;
    private texto: string;
    private codidioma: string;
    private url: string | null;
    private color: string | null;
    private icon: string | null;
    private visibleHome: boolean;
    private visibleMenu: boolean;
    private visibleMenuSalaEspera: boolean;
    private idtipoFuncionalidad: number;

    createdAt!: Date;
    updatedAt!: Date;

    constructor(
        idopcionMenu: number,
        texto: string,
        codidioma: string,
        url: string | null,
        color: string | null,
        icon: string | null,
        visibleHome: boolean,
        visibleMenu: boolean,
        visibleMenuSalaEspera: boolean,
        idtipoFuncionalidad: number,
    ) {
        this.idopcionMenu = idopcionMenu;
        this.texto= texto;
        this.codidioma= codidioma;
        this.url= url;
        this.color= color;
        this.icon= icon;
        this.visibleHome= visibleHome;
        this.visibleMenu= visibleMenu;
        this.visibleMenuSalaEspera= visibleMenuSalaEspera;
        this.idtipoFuncionalidad= idtipoFuncionalidad;
    }

    get_idopcionMenu() {
        return this.idopcionMenu;
    }
    get_texto() {
        return this.texto;
    }
    get_codidioma() {
        return this.codidioma;
    }
    get_url() {
        return this.url;
    }
    get_color() {
        return this.color;
    }
    get_icon() {
        return this.icon;
    }
    get_visibleHome() {
        return this.visibleHome;
    }
    get_visibleMenu() {
        return this.visibleMenu;
    }
    get_visibleMenuSalaEspera() {
        return this.visibleMenuSalaEspera;
    }
    get_idtipoFuncionalidad() {
        return this.idtipoFuncionalidad;
    }

    set_texto(texto: string) {
        this.texto= this.texto;
    }
    set_codidioma(codidioma: string) {
        this.codidioma= codidioma;
    }
    set_url(url: string) {
        this.url= url;
    }
    set_color(color: string) {
        this.color= color;
    }
    set_icon(icon: string) {
        this.icon= icon;
    }
    set_visibleHome(visibleHole: boolean) {
        this.visibleHome= this.visibleHome;
    }
    set_visibleMenu(visibleMenu: boolean) {
        this.visibleMenu= visibleMenu;
    }
    set_visibleMenuSalaEspera(visibleMenuSalaEspera: boolean) {
        this.visibleMenuSalaEspera= visibleMenuSalaEspera;
    }
    set_updatedAt(updatedAt: Date) {
        this.updatedAt= updatedAt
    }
}