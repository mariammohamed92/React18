import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Component/Layout/Layout"
import Home from "./Component/Home/Home"
import Movie from "./Component/Movie/Movie"
import Tv from "./Component/Tv/Tv"
import Login from "./Component/Login/Login"
import Register from "./Component/Register/Register"
import Coffe from "./Component/Coffe/Coffe"
import DetailesMovie from "./Component/Detailes/DetailesMovie"
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react"

export default function App() {
let  [logindata,setLoginData]=useState(null)

  function saveLoginData(){
    let encodedToken=localStorage.getItem('token');
    let decodedToken=jwtDecode(encodedToken);
    setLoginData(decodedToken)
    console.log(decodedToken);
    
  }

  useEffect(() => {
  if (localStorage.getItem('token')){
    saveLoginData()
  }
  }, [])
  let routers= createBrowserRouter([
    {path:"",element:<Layout  logindata={logindata} setLoginData={setLoginData}/>,children:[
    {path:"home",element:<Home/>},
    {path:"movie",element:<Movie/>},
    {path:"tv",element:<Tv/>},
    {path:"coffe",element:<Coffe/>},
    {path:"detailsmovie/:id",element:<DetailesMovie/>},
    {index:true,element:<Login/>},
    {path:"login",element:<Login saveLoginData={saveLoginData}/>},
    {path:"register",element:<Register/>},
  
    ]}
  ])
  
  return <>
<RouterProvider router={routers}></RouterProvider>
  
  </>
}
