import React,{useState,useEffect} from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import Nav from './Nav';
import Input from './Input';
import Output from './Output';


function Home() {
    const [localname, setlocalname] = useState();
    const [input,setInput]=useState();
    let Navigate = useNavigate();
    let location = useLocation();
   
   
    useEffect(() => {
      
        let currname=localStorage.getItem('name');
        if(currname){
        setlocalname(currname)
        Navigate("/Home")
        }
        else{
            Navigate("/")
        }
      },[]);
     
  return (
    <div>
         {/* <nav class="navbar navbar-dark bg-dark">
        
        <div class="container-fluid">
            <span class="navbar-brand ">
                Hello  {localname}
            </span>
        </div>
    </nav> */}
    <Nav></Nav>
    <div class="container my-5">
       <Input setInput={setInput}/>
        <div class="row justify-content-center">
          <Output data={input}/>
        </div>
    </div>
    </div>
  )
}

export default Home