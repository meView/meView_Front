import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

// 새로 고침 방지 -> localStorage에 저장
const { persistAtom } = recoilPersist({
  key: "localStorage", //원하는 key 값 입력
  storage: localStorage,
});


export const userAccessTokenState = atom({
  key: "userAccessTokenState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const userInfoState = atom({
  key: "userInfoState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});