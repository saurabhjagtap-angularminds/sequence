import React,{useState,useEffect} from 'react'
import { useNavigate, useLocation } from "react-router-dom";
//import { useNavigate, useLocation } from "react-router-dom";
function Welcome() {

    const [name, setname] = useState();

    
    let Navigate = useNavigate();
    let location = useLocation();
  
    // let handleInput = (event) => {
    //   event.preventDefault();
    //   alert(JSON.stringify(name));
    //   setname(event.target.value)
    // };
    useEffect(() => {
      let currname=localStorage.getItem('name');
        if(currname){
       Navigate("/Home", { state: { name } })
        
        }
  
    });
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
        localStorage.setItem('name', name);
        localStorage.setItem('name', name ? name : '');
       let currname=localStorage.getItem('name');
        if(currname){
       Navigate("/Home", { state: { name } })
        
        }
        else{
            Navigate("/")
        }
      }
    return (
      
      <div> <div class="container my-5 text-center">
      
      <h2 class="text-center">Hello and welcome,</h2>
      <input type="text" placeholder="Please enter your name" class="form-control form-control-lg w-50 mx-auto mt-5"  onChange={e =>setname(e.target.value)}/>
      <div class="my-5">
          <a href="generate.html" class="btn btn-primary btn-lg" onClick={handleClick} >Continue</a>
      </div>
  </div></div>
    )
  }

export default Welcome