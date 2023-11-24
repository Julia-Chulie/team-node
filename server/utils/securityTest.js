const testEmail = (email) => {
    const RegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return RegEx.test(email)
}
const testPassword = (password) => {
    console.log(password);
    const RegEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])(?=.{8,})/;
    return RegEx.test(password)
}
const testNames = (name) => {
    const RegEx = /^[A-Za-z]{3,}$/;
    return RegEx.test(name)
}

const testRegister = {
    testNames ,testEmail,testPassword
}

export default testRegister;