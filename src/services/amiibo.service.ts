import axios from 'axios'
const { REACT_APP_KEY } = process.env

const getAmiiboList = () => {
  const URI = `https://www.amiiboapi.com/api/amiibo`
  return axios
    .get(URI)
    .then(res => res.data)
    .catch(err => err)
}

export default getAmiiboList