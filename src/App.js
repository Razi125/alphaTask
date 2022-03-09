import React,{useState} from 'react';
import './App.css';

function App() {

  const [value , setValue] = useState(null)
  const [numbersArr, setNumbersArr] = useState([])
  console.log("::numbersArr...",numbersArr);

  const createArray = () => {
    const numbersArray = [];
    const length =  value * value;
    Array.apply(null, { length: length }).map((num , index) => {
      numbersArray.push(parseInt(index) + 1)
    }
    )
    setNumbersArr(numbersArray.sort(function(){ return Math.random() - 0.5}))
  }

  const handleChange = () =>{
    createArray()
  }

  return (
    <div className="App">
     <p>Alpha Task</p>
     <div>
       <input
       type='number'
       placeholder='Please Enter Number'
       value={value}
       onChange={e =>setValue(e.target.value)}
       />
       <button onClick={handleChange}>Submit</button>
       {
         value ? (
           <div style={{height: '30px', width: '30px', display:'flex', backgroundColor: 'gray'}}>
             {
               Array.apply(null, { length: value }).map((r) => (
                 <>
                  <div key={r}>
                    {
                      Array.apply(null, { length: value }).map((c) => (
                        <div key={c} style={{height: '30px', width: '30px', backgroundColor: 'gray'}}>
                          {numbersArr}
                        </div>
                      ))
                    }
                  </div>
                  <br />
                </>
              ))
             }
           </div>
         ): null
       }
     </div>
    </div>
  );
}

export default App;
