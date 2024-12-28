import axios from "axios";
import { useFormik } from "formik"
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';

export default function Register() {

let navigate=useNavigate();

async  function registerData(values){
let {data}= await axios.post(`https://note-sigma-black.vercel.app/api/v1/users/signUp`,values)
  console.log(data);
  navigate("/")
  
}
  
  let VaildationSchema=Yup.object({
    name:Yup.string().max(15,"name should be less that 15").required("name is Required"),
    email:Yup.string().email('Invalid email address').required('email is Required'),
    password:Yup.string().matches(/^[A-z][a-z0-9]{5,8}$/,"Password should start with capital").required('Password is Required'),
    age:Yup.number().required('Age is Required'),
    phone:Yup.string().matches(/^01[0125][0-9]{8}$/,"Phone is invaild").required('Phone is Required'),
  
  })
  let formik= useFormik({
    initialValues:{
      name:"",
      email:"",
      password:"",
      age:"",
      phone:""
  },
  validationSchema: VaildationSchema,
  onSubmit:(values)=>registerData(values)

  
  })
  return <>
   <div className="w-75 mx-auto text-white">
  <form  onSubmit={formik.handleSubmit}>
    {/* Name */}
<div className="form-group">
  <label htmlFor="name" className="h3 mt-3 mb-2">Name</label>
  <input type="text" id="name" name="name"
   className="form-control mb-3"
   value={formik.values.name}
   onChange={formik.handleChange}
    
  />
  {formik.errors.name&&formik.touched.name?<div className=' alert alert-danger'>{formik.errors.name}</div>:""}

</div>
{/* Email */}
<div className="form-group">
  <label htmlFor="email" className="h3 mt-3 mb-2">Email</label>
  <input type="email" id="email" name="email" className="form-control mb-3"
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

{/* Age */}
<div className="form-group">
  <label htmlFor="age" className="h3 mt-3 mb-2">Age</label>
  <input type="number" id="age" name="age" className="form-control mb-3"
   value={formik.values.age}
   onChange={formik.handleChange}
  />
{formik.errors.age&&formik.touched.age?<div className=' alert alert-danger'>{formik.errors.age}</div>:""}

</div>
{/* Phone */}
<div className="form-group">
  <label htmlFor="phone" className="h3 mt-3 mb-2">Phone</label>
  <input type="tel" id="phone" name="phone" className="form-control mb-3"
   value={formik.values.phone}
   onChange={formik.handleChange}
      
  />
{formik.errors.phone&&formik.touched.phone?<div className=' alert alert-danger'>{formik.errors.phone}</div>:""}

</div>
<div className="d-flex justify-content-center">
<button type="submit" className=" btn btn-outline-info mb-3 mt-3">Register</button>
</div>
  </form>

  </div>
    </>
}

