import { atom, selector } from "recoil";
import weaknessData from "../api/meview_capability/weakness";

export const weaknessState = atom({
  key: "weaknessState",
  default: weaknessData, // 초기 상태 -> weakness.json
});

// 총 약점 개수 return 선택자
export const totalWeaknessSelector = selector({
  key: "totalWeaknessSelector",
  get: ({ get }) => {
    const weakness = get(weaknessState);
    return Object.values(weakness).reduce(
      (total, currentValue) => total + currentValue,
      0
    );
  },
});