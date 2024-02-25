import { atom } from "recoil";
import ProjectItem from "../api/meview_project/projectlist";

export const projectListState = atom({
  key: "projectListState",
  default: ProjectItem.projects,
});
