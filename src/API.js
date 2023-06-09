import axios from "axios";

const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const getDefinition = async (word) => {
  try {
    const response = await axios.get(`${BASE_URL}${word}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.title);
  }
};

export default getDefinition;
