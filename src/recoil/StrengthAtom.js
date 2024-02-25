import { atom, selector } from "recoil";
import strengthData from "../api/meview_capability/strength";

export const strengthState = atom({
  key: "strengthState",
  default: strengthData, // 초기 상태 -> strength.json
});

// 총 강점 개수 return 선택자
export const totalStrengthSelector = selector({
  key: "totalStrengthSelector",
  get: ({ get }) => {
    const strength = get(strengthState);
    return Object.values(strength).reduce(
      (total, currentValue) => total + currentValue,
      0
    );
  },
});
