import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import chipstrength from "../api/meview_capability/chipstrength";
import chipweakness from "../api/meview_capability/chipweakness";

// 새로 고침 방지 -> localStorage에 저장
const { persistAtom } = recoilPersist({
  key: "localStorage", //원하는 key 값 입력
  storage: localStorage,
});
// 강점 + 약점
export const selectedChipInfoState = atom({
  key: "selectedChipInfoState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

// 이미지 로딩 처리
export const imageLoadingState = atom({
  key: "imageLoadingState",
  default: false,
});
