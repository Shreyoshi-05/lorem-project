import { useState } from "react";
import Data from "./Data";
import "./App.css";

function Lorem(){
    const[num, setNum] = useState(0);
    const[para, setPara] = useState([])

    function handelChange(e){
        e.preventDefault();

       let num2 = parseInt(num);
       if(num2 > 12) num2=12;
       setPara(Data.slice(0,num2));
       return;
   
    };

    return(
        <div className="main">
            <h1>TIRED OF BORING LOREM IPSUM?</h1>
            <form onSubmit={handelChange}>
                <label htmlFor="">Paragraphs</label>
                <input type="number" value={num} onChange={(e)=>setNum(e.target.value)}/>
                <button type="submit">GENERATE</button>
            </form>

           <article>
                {
                    para.map((info, index)=>(
                       <p className="innerP" key={index}>{info}</p>
                    ))
                }
           </article>

        </div>
    )
    
}
export default Lorem;