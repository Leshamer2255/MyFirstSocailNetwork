import axios from "axios"

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true
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
        return instance.get(`auth/me`)
     }
    }

export const getUsers2 = (currentPage, pageSize) => {
    return instance.get( `follow?page=${currentPage}&count=${pageSize}`)
        .then(Response => Response.data)
}

