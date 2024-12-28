/* eslint-disable react/prop-types */
// Formik Yup Api
//Token
import axios from 'axios';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export default function Login({saveLoginData}) {
  let navigate=useNavigate();

async  function loginData(values){
  let {data}=await axios.post(`https://note-sigma-black.vercel.app/api/v1/users/signIn`,values)
console.log(data);
localStorage.setItem('token',data.token)
saveLoginData()
navigate("/home")
}

  let VaildationSchema=Yup.object({
    email:Yup.string().email('Invalid email address').required('email is Required'),
    password:Yup.string().matches(/^[A-z][a-z0-9]{5,8}$/,"Password should start with capital").required('Password is Required'),
  
  })

  let formik=useFormik({
    initialValues:{
     email:"",
     password:"",
    } ,
    validationSchema: VaildationSchema,
    onSubmit:(values)=>loginData(values)
   
   })
  


  return<>
  <div className="w-75 mx-auto text-white">

  <form onSubmit={formik.handleSubmit}>

{/* Email */}
<div className="form-group">
  <label htmlFor="email" className="h3 mt-3 mb-2">Email</label>
  <input type="email" id="email" name="email"
   className="form-control mb-3"
   value={formik.values.email}
   onChange={formik.handleChange}
    />
{formik.errors.email&&formik.touched.email?<div className=' alert alert-danger'>{formik.errors.email}</div>:""}

</div>

{/* Password */}
<div className="form-group">
  <label htmlFor="password" className="h3 mt-3 mb-2">Password</label>
  <input type="password" id="password" name="password" className="form-control mb-3"
   value={formik.values.password}
   onChange={formik.handleChange}

  />
{formik.errors.password&&formik.touched.password?<div className=' alert alert-danger'>{formik.errors.password}</div>:""}

</div>

<div className="d-flex justify-content-center">
<button type="submit" className=" btn btn-outline-info mb-3 mt-3">Login</button>
</div>
  </form>

  </div>
  </>
}
