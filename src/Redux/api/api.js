import axios from "axios"

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true
})

export const usersAPI ={
        getUser (currentPage, pageSize)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(Response => {
                return Response.data;
                });
    },
        follow (userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,)
        },
        unfollow (userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
        }
    }
export const getUsers2 = (currentPage, pageSize) => {
    return instance.get( `follow?page=${currentPage}&count=${pageSize}`)
        .then(Response => Response.data)
}

