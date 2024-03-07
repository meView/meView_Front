import { atom } from 'recoil';

// 테스트용 
/*import questionList from '../api/home/questions'
import questionDetail from '../api/home/questiondetail'
export const questionFormListState = atom({
    key: 'questionFormListState',
    default: questionList.data,
});
export const questionFormState = atom({
    key: 'questionFormState',
    default: [questionDetail.data],
});*/

/* home/질문지 리스트 */
export const questionFormListState = atom({
    key: 'questionFormListState',
    default: [],
});

/* home/질문지 수정/삭제 */
export const questionFormState = atom({
    key: 'questionFormState',
    default: {
        qustion_id: -1,
        question_title: "",
        question_type: "",
        question_target: "",
    },
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