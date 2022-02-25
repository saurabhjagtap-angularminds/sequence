import React,{useState} from 'react'
import { useLinkClickHandler } from 'react-router-dom';

function Input({setInput}) {
    const [number, setnumber] = useState();
    const [data,setdata]=useState({
        no:0,
        option:""
    })

    const [selecttype, setselecttype] = useState(false);
     

   
       const ClickHandler = (e) => {
        
 if(e.target.value!="")
 setdata({
     ...data,[e.target.name]:e.target.value
 })
       } 

  return (
    <div>
         <div class="card my-5 col-md-6 mx-auto">
            <div class="card-body p-4">
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <input type="number" id="N"  name="no" placeholder="How many numbers?"
                                class="form-control form-control-lg" onChange={(e) =>ClickHandler(e)}/>
                        </div>
                    </div>
                    <div class="col-12 my-3">
                        <div class="form-group">
                            <select class="form-control form-control-lg" name='option' onChange={(e) =>ClickHandler(e)}>
                                <option value="">Select Display Option</option>
                                <option value="Circle" >Circle</option>
                                <option value="Square">Square</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-12">
                        <button type="button" class="btn btn-outline-primary btn-lg me-2" onClick={()=>setInput(data)}>Submit</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Input