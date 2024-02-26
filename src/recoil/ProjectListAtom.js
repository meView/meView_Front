import { atom } from "recoil";
import ProjectItem from "../api/meview_project/projectlist";
import ProjectStrength from "../api/meview_project/projectstrength";

export const projectListState = atom({
  key: "projectListState",
  default: ProjectItem.projects,
});


export const projectStrengthState = atom({
  key: "projectStrengthState",
  default: ProjectStrength,
});