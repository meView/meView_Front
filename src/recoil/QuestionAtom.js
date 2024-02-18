import { atom } from 'recoil';

export const modalState = atom({
    key: 'modalState',
    default: false,
});

export const pageState = atom({
    key: 'pageState',
    default: 1,
});

export const answerState = atom({
    key: 'answerState',
    default: {
      answer1: 'project',
      anwser2: '',
      answer3: 'strength',
    },
});