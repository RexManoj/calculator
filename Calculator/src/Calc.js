import {useState} from 'react' 
import './App2.css';

export default function Calc(){

    const [input,setinput]=useState("");
    const[ result,setResultet]=useState(0);
    const handle = e =>{
          setinput(e.target.value);
    }

    return(
            <div>
                <center>
        <div id='cal'>
             <h1 id='raj'>calculater</h1>
        <center>
        <input type="text" value={input} name="input" onChange={handle}/> 
        <br/>
        <button onClick={() =>setResultet(eval(input))}>Result</button>
        <h4>Result is : {result}</h4>

        <button onClick={() => setinput (input +'1')}>1</button>
        <button onClick={() => setinput (input +'2')}>2</button>
        <button onClick={() => setinput (input +'3')}>3</button>
        <button onClick={() => setinput (input +'4')}>4</button>
        <button onClick={() => setinput (input +'5')}>5</button> <br/>

        <button onClick={() => setinput (input +'6')}>6</button>
        <button onClick={() => setinput (input +'7')}>7</button>
        <button onClick={() => setinput (input +'8')}>8</button>
        <button onClick={() => setinput (input +'9')}>9</button>
        <button onClick={() => setinput (input +'9')}>0</button> <br/>

        <button onClick={() => setinput (input +'+')}>+</button>
        <button onClick={() => setinput (input +'-')}>-</button>
        <button onClick={() => setinput (input +'*')}>*</button>
        <button onClick={() => setinput (input +'/')}>/</button>
        <button onClick={() => setinput ('')}>clr</button> <br/>

        </center>
        </div>
        </center>
        </div>
    )
}
        
        



