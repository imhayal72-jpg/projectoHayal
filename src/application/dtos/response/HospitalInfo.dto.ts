export interface HospitalContactDto {
    readonly idhospital: number;
    readonly direccion: string;
    readonly telefono: string;
    readonly web: string;
    readonly email: string;
}

export interface HospitalStyleDto {
    readonly colorPrimario: string;
    readonly colorSecundario: string;
    readonly colorTerciario: string;
    readonly imagen1: string;
    readonly imagen2: string;
}

export interface LanguageDto {
    readonly ididioma: number;
    readonly codidioma: string;
    readonly porDefecto: boolean;
}

export interface PublicStateDto {
    readonly codestadoPublico: string;
    readonly texto: string;
    readonly codidioma: string;
}

export interface MenuItemDto {
    readonly idopcionMenu: number;
    readonly texto: string;
    readonly codidioma: string;
    readonly url: string | null;
    readonly color: string | null;
    readonly icon: string | null;
    readonly visibleHome: boolean;
    readonly visibleMenu: boolean;
    readonly visibleMenuSalaEspera: boolean;
    readonly idtipoFuncionalidad: number;
}

export interface HospitalInfoResponseDto {
    readonly contact: HospitalContactDto;
    readonly style: HospitalStyleDto;
    readonly publicStates: PublicStateDto[];
    readonly menuItems: MenuItemDto[];
    readonly languages: LanguageDto[];
}