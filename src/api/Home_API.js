import axios from "axios";

// 홈/질문지 불러오기
const url_getQuestions = "http://localhost:3001/questions";
export const getQuestions = async () => {
  const response = await axios.get(url_getQuestions);
  return response.data.data;
};

// 질문지 상세보기
const url_getQuestionDetail = "http://localhost:3001/question";
export const getQuestionDetail = async () => {
  try {
    const response = await axios.get(`${url_getQuestionDetail}`);
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch question detail:", error);
    throw error;
  }
};

// 질문지 삭제하기
const url_getDelete = "http://localhost:3001/question";
export const getQuestionDelete = async () => {
  try {
    const response = await axios.put(`${url_getDelete}`, {
      is_used : false
    });
  } catch (error) {
    console.error("Failed to fetch question detail:", error);
    throw error;
  }
};
// 질문지 수정하기
const url_getUpdate = "http://localhost:3001/question";
export const getQuestionUpdate = async (data) => {
  try {
    const response = await axios.put(`${url_getUpdate}`, {
        id: data.id,
        success: true,
        code: "OK",
        data: {
          question_id: data.id,
          question_title: data.title,
          question_type: data.type,
          question_target: data.target
        },
        statusCode: 200
      }
    )
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch question detail:", error);
    throw error;
  }
};