import { atom } from "recoil";
import ProjectItem from "../api/meview_project/projectlist";
import ProjectStrength from "../api/meview_project/projectstrength";
import ProjectWeakness from "../api/meview_project/projectweakness";

export const projectListState = atom({
  key: "projectListState",
  default: ProjectItem.projects,
});


export const projectStrengthState = atom({
  key: "projectStrengthState",
  default: ProjectStrength,
});

export const projectWeaknessState = atom({
  key: "projectWeaknessState",
  default: ProjectWeakness,
});

// 강점인지 약점인지 구분
export const selectedStrengthState = atom({
  key: "selectedStrengthState",
  default: "Strength",
});