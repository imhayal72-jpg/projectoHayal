import { EntityNotFoundError } from "@domain/errors/EntityNotFoundError";
import { HospitalRepository } from "@domain/ports/repositories/HospitalRepository";
import { HospitalInfoResponseDto } from "@application/dtos/response/HospitalInfo.dto";
import { Hospital } from "@domain/entities/Hospital";
import { HospitalStyle } from "@domain/entities/HospitalStyle";
import { PublicState } from "@domain/entities/PublicState";
import { MenuItem } from "@domain/entities/MenuItem";
import { Language } from "@domain/entities/Language";
import { toLowerCase } from "zod";

export class GetHospitalInfo {
    constructor(
        private readonly hospitalRepository: HospitalRepository,
    ) { }

    async execute(idhospital: number): Promise<HospitalInfoResponseDto> {
        // 1. Obtener en paralelo: datos hospital, estilo, estados públicos, menú, idiomas
        const [hospital, style, publicStates, menuItems, languages] = await Promise.all([
            this.hospitalRepository.getHospitalInfo(idhospital),
            this.hospitalRepository.getStyle(idhospital),
            this.hospitalRepository.getPublicStates(idhospital),
            this.hospitalRepository.getMenuItems(idhospital),
            this.hospitalRepository.getLanguages(idhospital),
        ]);

        // 2. Si alguno está vacío, lanzar EntityNotFoundError
        if (!hospital || !style || publicStates.length === 0) {
            throw new EntityNotFoundError('Hospital', idhospital);
        }

        // 3. Mapear cada resultado a su DTO y componer HospitalInfoResponseDto
        return { contact: toContactDto(hospital),
                 style: toStyleDto(style),
                 publicStates: publicStates.map(s => toPublicStateDto(s)),
                 menuItems: menuItems.map(s => toMenuItemsDto(s)),
                 languages: languages.map(s => toLanguagesDto(s)),
                };
    }
}

function toContactDto(hospital: Hospital) {
    return {
        idhospital: hospital.get_idhospital(),
        direccion: hospital.get_direccion(),
        telefono: hospital.get_telefono(),
        web: hospital.get_web(),
        email: hospital.get_email(),
    };
}

function toStyleDto(style: HospitalStyle) {
    return {
        colorPrimario: style.get_colorPrimario(),
        colorSecundario: style.get_colorSecundario(),
        colorTerciario: style.get_colorTercario(),
        imagen1: style.get_imagen1(),
        imagen2: style.get_imagen2(),
    };
}

function toPublicStateDto(publicStates: PublicState) {
    return {
        codestadoPublico: publicStates.get_codPublicoPaciente(),
        texto: publicStates.get_texto(),
        codidioma: publicStates.get_codidioma(),
    };
}

function toMenuItemsDto(menuItems: MenuItem) {
    return {
        idopcionMenu: menuItems.get_idopcionMenu(),
        texto: menuItems.get_texto(),
        codidioma: menuItems.get_codidioma(),
        url: menuItems.get_url(),
        color: menuItems.get_color(),
        icon: menuItems.get_icon(),
        visibleHome: menuItems.get_visibleHome(),
        visibleMenu: menuItems.get_visibleMenu(),
        visibleMenuSalaEspera: menuItems.get_visibleMenuSalaEspera(),
        idtipoFuncionalidad: menuItems.get_idtipoFuncionalidad(),
    };
}

function toLanguagesDto(languages: Language) {
    return {
    ididioma: languages.get_ididioma(),
    codidioma: languages.get_codidioma(),
    porDefecto: languages.get_porDefecto(),
    };
}

