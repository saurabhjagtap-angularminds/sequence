import React,{useState} from 'react'

function Output({data}) {
    const [dispalytype,setdisplaytype]=useState(false)
    //const [count, setallcount] = useState();

    
        // console.log("click")
         //let number=number

         const num=data && data.no;
         let number=num;
         let array=[];
         let value=2;   
         let sum=2;

        if(number>0){
              array=[2]
        }

         for (let i = 1; i <= number; i++) {
             for (let j =1; j<=value; j++) {
           //   console.log(arr[i][j]);
           if(array.length<number){
             array.push(sum= sum + value)
           }
              
            }
            value++;
            
          }  
          console.log("array",array)
        
         // setallcount(array)
          
  return (
    <div>  <div className="col-auto">
    <div className="card">
        <div className="card-body" id="eight_circle">
            <div className="row py-4">
            
            {array && array.map((topi,i) => { return  data.option==="Circle" ?(
                <div className="col-auto mb-3" key={i}>
                   
                    <h4 className="border border-info px-4 py-3 m-auto rounded rounded-circle">
                        
      <span key={i} value={topi._id}>{topi}</span>
    
                        
                        
                    </h4>
                </div>
            ) :(
                 <div className="col-auto mb-3" key={i}>
                    <h4 className="border border-info px-4 py-3 m-auto rounded">
                        <span key={i} >{topi}</span>
                    </h4>
                </div> )})}
               
             
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Output