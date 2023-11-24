import instance from "./axios.api";


const login =  async (user) => {
    return await instance.post("/login",user)
}


export default login;


