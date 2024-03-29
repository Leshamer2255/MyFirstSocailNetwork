import axios from "axios"

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
    "API-KEY": "6ccf3e45-6389-4093-a87b-d65dba989677"
    }
})

export const profileAPI = {
        getProfile(userId) {
            return instance.get(`profile/` + userId); 
        },
        getStatus(userId) {
            return instance.get(`profile/status/` + userId); 
        },
        updateStatus(status) {
            return instance.put(`profile/status`, {status}); 
        },
        savePhoto(photoFile) {
            const formData = new FormData();
            formData.append("image", photoFile);
            return instance.put(`profile/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }); 
        },
        saveProfile(profile) {
            return instance.put(`/profile`, profile); 
        }
    }

    export const usersAPI = {
        getUser (currentPage, pageSize)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(Response => {
                return Response.data;
                });
    },
        follow (userId) {
        return instance.post(`follow/${userId}`,)
        },
        unfollow (userId) {
        return instance.delete(`follow/${userId}`)
        },
        getProfile(userId) {
            console.warn('Use old method need to change  him profileAPI')
            return profileAPI.getProfile(userId);
        }
    }

export const authAPI ={
     me() {
        return instance.get(`auth/me`);
     },
     login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha});
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


