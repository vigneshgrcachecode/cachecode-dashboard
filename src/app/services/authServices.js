import axios from "axios";
let Base_URL;

if (process.env.NODE_ENV === "production") {
  // Base_URL = process.env.REACT_APP_API_URL;
  Base_URL = "https://app.cachecode.in";
} else {
  // Base_URL = process.env.REACT_APP_API_URL;
  Base_URL = "https://app.cachecode.in";
}

// export const getAllItems = async () => {
//   const result = await axios.get(`${Base_URL}/cafe/getAllItems`);
//   return result;
// };

export const loginCheck = async (params) => {
  const result = await axios.get(`${Base_URL}/cacheCode/login/checkPassword`, {
    params: params,
  });
  return result;
};
