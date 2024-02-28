import axios from "axios";


// export const postQuestion = async (data, accessToken) => {
//   const response = await axios.post(url, data, {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//   });
//   return response.data;
// };


const url_postQuestion = "http://localhost:3001/create";

export const postQuestion = async (data) => {
  const response = await axios.post(url_postQuestion, data);
  return response.data;
};
