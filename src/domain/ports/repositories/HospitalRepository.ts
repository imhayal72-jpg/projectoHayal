import { Hospital } from "../../entities/Hospital";
import { HospitalStyle } from "../../entities/HospitalStyle";
import { PublicState } from "../../entities/PublicState";
import { MenuItem } from "../../entities/MenuItem";
import { Language } from "../../entities/Language";

export interface HospitalRepository {
    getHospitalInfo(idhospital: number): Promise<Hospital | null>;
    getStyle(idhospital: number): Promise<HospitalStyle | null>;
    getPublicStates(idhospital: number): Promise<PublicState[]>;
    getMenuItems(idhospital: number): Promise<MenuItem[]>;
    getLanguages(idhospital: number): Promise<Language[]>;
}