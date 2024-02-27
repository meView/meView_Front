import { atom } from 'recoil';
import questionList from '../api/home/questions'
import questionDetail from '../api/home/questiondetail'
/* home/질문지 리스트 */
export const questionFormListState = atom({
    key: 'questionFormListState',
    default: questionList.data,
});

/* home/질문지 수정/삭제 */
export const questionFormState = atom({
    key: 'questionFormState',
    default: questionDetail.data,
});

export const linkToastState = atom({
    key: 'linkToastState',
    default: false,
});

export const bottomSheetState = atom({
    key: 'bottomSheetState',
    default: false,
});

export const questionIdState = atom({
    key: 'questionIdState',
    default: -1,
});

export const modifiedToastState = atom({
    key: 'modifiedToastState',
    default: false,
});

export const backModalState = atom({
    key: 'backModalState',
    default: false,
});

export const deleteModalState = atom({
    key: 'deleteModalState',
    default: false,
});