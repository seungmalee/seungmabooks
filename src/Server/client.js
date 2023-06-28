import axios from "axios";

// 이것은 모듈이오!
const KEY = 'd2004f55a5b19804f251fc1f7d0762f0'
const client = axios.create({
    method:'get',
    headers:{
        Authorization : 'KakaoAK '+KEY
    }
})

export default client;