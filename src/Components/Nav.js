import React,{useEffect,useState} from 'react'
import { useNavigate, useLocation } from "react-router-dom";

function Nav() {
    const [localname, setlocalname] = useState();
    let Navigate = useNavigate();
    let location = useLocation();
    useEffect(() => {
      
        // Update the document title using the browser API
        let currname=localStorage.getItem('name');
        if(currname){
        setlocalname(currname)
        }
        else{
            Navigate("/")
        }
      },[]);
  return (
    <div>
         <nav className="navbar navbar-dark bg-dark">
         
        <div className="container-fluid">
            <span className="navbar-brand ">
                Hello  {localname}
            </span>
        </div>
    </nav>
    </div>
  )
}

export default Nav