import { atom, selector } from "recoil";
import ProjectItem from "../api/meview_project/projectlist";
import ProjectStrength from "../api/meview_project/projectstrength";
import ProjectWeakness from "../api/meview_project/projectweakness";
import NicknameReview from "../api/meview_project/nicknamereview";

export const projectListState = atom({
  key: "projectListState",
  default: ProjectItem.data,
});

export const projectStrengthState = atom({
  key: "projectStrengthState",
  default: ProjectStrength.data,
});

export const projectWeaknessState = atom({
  key: "projectWeaknessState",
  default: ProjectWeakness.data,
});

// 강점인지 약점인지 구분
export const selectedStrengthState = atom({
  key: "selectedStrengthState",
  default: "Strength",
});

// 닉네임별 자세한 리뷰
export const nicknameReviewState = atom({
  key: "nicknameReviewState",
  default: NicknameReview.data,
});
