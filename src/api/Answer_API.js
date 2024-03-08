import axios from "axios";

const url_getQuestionForm = `${process.env.REACT_APP_SERVER_ADDRESS}/answer`;
export const getAnswerForm = async (question_id) => {
  try {
    const response = await axios.get(`${url_getQuestionForm}/${question_id}`);
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch question detail:", error);
    throw error;
  }
};

const url_postAnswer = `${process.env.REACT_APP_SERVER_ADDRESS}/answer/create`;
export const postAnswer = async (data) => {
  try {
    if (data.response_responder.length <= 10) {
      const response = await axios.post(url_postAnswer, data);
      return response.data;
    }
  } catch (error) {
    console.error("Failed to post answer:", error);
    throw error;
  }
};
