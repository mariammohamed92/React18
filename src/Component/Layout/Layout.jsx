/* eslint-disable react/prop-types */
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet, useNavigate} from 'react-router-dom'

export default function Layout({logindata,setLoginData}) {
    let navigate=useNavigate();

    function Logout(){
        localStorage.removeItem('token');
        setLoginData(null)
        navigate("/")
    }
return <>
<Navbar logindata={logindata} Logout={Logout} />
<Outlet></Outlet>
<Footer/>
</>
}
