
const login =  async (user) => {
    return await fetch('http://localhost:9000/api/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
}


export default login;


