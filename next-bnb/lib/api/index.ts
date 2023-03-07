import Axios  from "axios";

//* 회원 가입 API 사용을 위한 axios 설정
//* baseURL은 .env.local에 저장

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default axios;