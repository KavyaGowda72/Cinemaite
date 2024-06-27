export const ValidateData=(email,password)=>{

    const isEmailValidate=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    // eslint-disable-next-line
    const isPasswordValidate=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    
    

    if(!isEmailValidate) return "Enter a valid Email"
    if(!isPasswordValidate) return "Password is not valid"
    
    

    return null

}