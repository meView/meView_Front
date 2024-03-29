import axios from "axios";

const url_postQuestion = `${process.env.REACT_APP_SERVER_ADDRESS}/question/create`;
export const postQuestion = async (data, access_token) => {
  if (data.answer1 !== "" && data.answer2 !== "" && data.answer3 !== "") {
    const response = await axios.post(url_postQuestion, data, {
      headers : {
        'Authorization' : `Bearer ${access_token}`
      }
    });
    return response.data;
  }
};
