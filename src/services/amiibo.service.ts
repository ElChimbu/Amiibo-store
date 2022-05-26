import axios from 'axios'
const { REACT_APP_KEY } = process.env

const getAmiiboList = () => {
  const URI = `https://www.amiiboapi.com/api/amiibo`
  return axios
    .get(URI)
    .then(res => res.data)
    .catch(err => err)
}

export const getAmiiboByHeadTail = (headtail: string) => {
  const URI = `https://www.amiiboapi.com/api/amiibo/?id=${headtail}`
  return axios
    .get(URI)
    .then(res => res.data)
    .catch(err => err)
}

export default getAmiiboList