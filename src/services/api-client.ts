import axios from "axios";

export default axios.create({
  baseURL:'https://api.rawg.io/api',
  params:{
    key: '21dd81d8f8984b1abde689c0b03c6385'
  }
})