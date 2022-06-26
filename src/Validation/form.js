import * as Yup from "yup"

const formValidation = Yup.object({
    email:Yup.string()
    .email("email is invalid")
    .required("email is required"),
    password:Yup.string()
    .min(6, "Password must be at least 6 charaters")
    .required("Password is required"),
})

export default formValidation