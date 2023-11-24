import authStorageService from "../../components/Features/user/store/authStorage";
import instance from "./axios.api";

export const fetchCurrentUser = async () => {
    const token = authStorageService.getToken();
    if(!token) return null
    const response  = await instance.get(`/users/${token}`);
    return response.data
}

export  const fetchUserById = async (id) => {
    const response = await instance.get(`/users/user/${id}`);

    return response.data
}

export const updateUser = async (user) => {
    const response = await instance.put(`/users/${user._id}`,user)

    return response.data
}

