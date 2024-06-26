export const ValidateData=(email,password,name)=>{

    const isEmailValidate=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    // eslint-disable-next-line
    const isPasswordValidate=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    
    const isNameValidate=/^[a-zA-Z\\s]*$/.test(name)

    if(!isEmailValidate) return "Enter a valid Email"
    if(!isPasswordValidate) return "Password is not valid"
    if(!isNameValidate) return "Enter Full Name"
    

    return null

}