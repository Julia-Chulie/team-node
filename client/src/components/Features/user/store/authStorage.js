import jwtDecode from "jwt-decode"


const key = "token";
 const saveToken = (token) => {
    try {
        window.localStorage.setItem(key,token)
    } catch (error) {
        console.log();
    }
}

 const getToken = () => {
    const token = window.localStorage.getItem(key);
    if (typeof token === 'undefined' && token === null) return null;
    return token;
}

const isAuthValide = () => {
    const token = window.localStorage.getItem(key);
    if (token ) {
        // const { exp: expiration } = jwtDecode(token);
        // return expiration * 1000 > new Date().getTime();
    }
    return false;
}

const getUser = () => {
    const token = getToken()
    console.log('Token');
    return (token) ? jwtDecode(token) : null;
}

  const removeToken = () => {
    const token = window.localStorage.getItem(key);
    if (typeof token === 'undefined' && token === null) return null;
    try {
            window.localStorage.removeItem(key)
            console.log('token remove');
            
    } catch (error) {
        console.log(error);
        console.log('Erreur lors de la suppression du token');
    }
}   

const authStorageService = {
    saveToken,getUser,getToken,removeToken,isAuthValide
}

export default authStorageService;