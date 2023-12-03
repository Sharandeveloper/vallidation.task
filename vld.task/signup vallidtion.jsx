import * as yup from 'yup'


export const signupvalidation = yup.object( {
     name: yup.string().min(3).required("please enter name"),
     email: yup.string().email("please enter valid email"). requied("please enter the email"),
     password: yup.string().min(5).required("please enter the password"),
     cpassword: yup.string().oneof([yup.ref("password")], "password not matched").requied("please enter c password")
})
