import axios from "axios";
const BASE_URL = "https://deezerdevs-deezer.p.rapidapi.com";
const TYPES = {
  filter: `/charts/tracks/`,
  search: `/search?q=`,
  music: `/track/`,
};

const fetchData = async (type, payload) => {
  let url = `${BASE_URL}${TYPES[type]}${payload}`;
  const options = {
    method: "GET",
    url: url,
    headers: {
      "X-RapidAPI-Key": "48b940a4e1msh4bcba91b0e1213ap1cf5ddjsn3f810053818c",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };
  return axios.request(options);
};

export default fetchData;
