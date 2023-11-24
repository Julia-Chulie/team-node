const URL = "http://localhost:9000/api/register"

const register = async (user) => {
    return await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })

}

export default register;