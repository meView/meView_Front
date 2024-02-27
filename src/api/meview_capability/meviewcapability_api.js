// api.js
import axios from "axios";

// 나중에 accessToken 받으면 코드 처리
// export const fetchStrengths = async (accessToken) => {
//   const url = "http://localhost:4000/meview/capability/strength";
//   try {
//     const response = await axios.get(url, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     });
//     return response.data; // 요청 성공 시 데이터 반환
//   } catch (error) {
//     console.error("fetchStrengths error:", error);
//     throw error; // 요청 실패 시 에러를 throw
//   }
// };

// accessToken 없을 때
export const fetchStrengths = async () => {
  const url = "http://localhost:3001/strength";
  try {
    const response = await axios.get(url);
    return response.data; // 요청 성공 시 데이터 반환
  } catch (error) {
    console.error("fetchStrengths error:", error);
    throw error; // 요청 실패 시 에러를 throw
  }
};

export const fetchWeaknesses = async () => {
  const url = "http://localhost:3001/weakness";
  try {
    const response = await axios.get(url);
    return response.data; // 요청 성공 시 데이터 반환
  } catch (error) {
    console.error("fetchWeaknesses error:", error);
    throw error; // 요청 실패 시 에러를 throw
  }
}