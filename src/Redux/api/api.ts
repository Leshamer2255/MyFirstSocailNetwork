import axios from "axios"
import { ProfileType } from "../../types/types";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
    "API-KEY": "6ccf3e45-6389-4093-a87b-d65dba989677"
    }
})

export const profileAPI = {
        getProfile(userId: number) {
            return instance.get(`profile/` + userId); 
        },
        getStatus(userId: number) {
            return instance.get(`profile/status/` + userId); 
        },
        updateStatus(status: string) {
            return instance.put(`profile/status`, {status}); 
        },
        savePhoto(photoFile: any) {
            const formData = new FormData();
            formData.append("image", photoFile);
            return instance.put(`profile/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }); 
        },
        saveProfile(profile: ProfileType) {
            return instance.put(`/profile`, profile); 
        }
    }

    export const usersAPI = {
        getUser (currentPage = 1, pageSize = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(Response => {
                return Response.data;
                });
    },
        follow (userId: number) {
        return instance.post(`follow/${userId}`,)
        },
        unfollow (userId: number) {
        return instance.delete(`follow/${userId}`)
        },
        getProfile(userId: number) {
            console.warn('Use old method need to change  him profileAPI')
            return profileAPI.getProfile(userId);
        }
    }


export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10 
}

type MeResponseType = {
    data: {id: number, email: string, login: string}
    resultCode: ResultCodeEnum 
    messages: Array<string>
}
type LoginResponseType = {
    data: {userId: number} 
    resultCode: ResultCodeEnum 
    messages: Array<string>
}


export const authAPI ={
     me() {
        return instance.get<MeResponseType>(`auth/me`). then(res => res.data);
     },
     login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha})
        .then(res => res.data);
     },
     logout() {
        return instance.delete(`auth/login`);
     },
    }

export const securityAPI ={
     getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
     }
    }