import axios from "axios";

// 홈/질문지 불러오기
const url_getQuestions = `${process.env.REACT_APP_SERVER_ADDRESS}/home/questions`;
export const getQuestions = async (access_token) => {
  const response = await axios.get(url_getQuestions, {
    headers : {
        'Authorization' : `Bearer ${access_token}`
    }
  });
  response.data.data.sort((a, b) => b.question_id - a.question_id);
  return response.data.data;
};

// 질문지 상세보기
const url_getQuestionDetail = `${process.env.REACT_APP_SERVER_ADDRESS}/home/question`;
export const getQuestionDetail = async (question_id, access_token) => {
  try {
    const response = await axios.get(`${url_getQuestionDetail}/${question_id}`, {
      headers : {
        'Authorization' : `Bearer ${access_token}`
      }
    });
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch question detail:", error);
    throw error;
  }
};

// 질문지 수정하기
const url_getUpdate = `${process.env.REACT_APP_SERVER_ADDRESS}/home/question/update`;
export const getQuestionUpdate = async (data, question_id, access_token) => {
  try {
    const response = await axios.put(`${url_getUpdate}/${question_id}`, data, {
      headers : {
        'Authorization' : `Bearer ${access_token}`
      }
    })
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch question detail:", error);
    throw error;
  }
};

// 질문지 삭제하기
const url_getDelete = `${process.env.REACT_APP_SERVER_ADDRESS}/home/question/delete`;
export const getQuestionDelete = async (question_id, access_token) => {
  try {
    const response = await axios.put(`${url_getDelete}/${question_id}`, {
      is_used: false
    }, {
      headers : {
        'Authorization' : `Bearer ${access_token}`
      }
    });
    return response.data.data
  } catch (error) {
    console.error("Failed to fetch question detail:", error);
    throw error;
  }
};