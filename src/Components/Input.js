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
         <div className="card my-5 col-md-6 mx-auto">
            <div className="card-body p-4">
                <div className="row">
                    <div className="col-12">
                        <div className="form-group">
                            <input type="number" id="N"  name="no" placeholder="How many numbers?"
                                className="form-control form-control-lg" onChange={(e) =>ClickHandler(e)}/>
                        </div>
                    </div>
                    <div className="col-12 my-3">
                        <div className="form-group">
                            <select className="form-control form-control-lg" name='option' onChange={(e) =>ClickHandler(e)}>
                                <option value="">Select Display Option</option>
                                <option value="Circle" >Circle</option>
                                <option value="Square">Square</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="button" className="btn btn-outline-primary btn-lg me-2" onClick={()=>setInput(data)}>Submit</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Input