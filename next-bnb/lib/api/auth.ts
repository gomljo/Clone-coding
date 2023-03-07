import axios from "axios";
import { UserType } from "../../types/user";
//* 사용자 인증에 관련된 API를 모아놓은 스크립트

//* 회원가입 body
interface SignUpAPIBody {
    email: string;
    firstname: string;
    lastname: string;
    password: string;
    birthday: string;
}

//* 회원가입 API
export const SignUpAPI = (body: SignUpAPIBody) => 
    axios.post<UserType>("/api/auth/signup", body);
