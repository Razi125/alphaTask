import React, { useState } from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState(null)
  const [numbersArr, setNumbersArr] = useState([])
  const [gridLayout, setGridLayout] = useState(value)
  const [firstIndex, setFirstIndex] = useState(null);
  const [lastIndex, setLastIndex] = useState(null);
  const [isSolved, setIsSolved] = useState(false);
  
  const createArray = () => {
    setGridLayout(value)
    const length = value * value;
    const numbersArray = [];
    Array.apply(null, { length: length }).map((num, index) => {
      numbersArray.push(parseInt(index) + 1)
    }
    )
    setNumbersArr(numbersArray.sort(function () { return Math.random() - 0.5 }))
  }

  const handleDragStart = (index) => {
    setFirstIndex(index)
  };

  const handleDragEnter = (index) => {
    setLastIndex(index)
  };
  
  const handleDrop = () => {
    if(firstIndex >= 0 && lastIndex >= 0) {
      const updateNumbersArr = [...numbersArr];
      const tmp_value = updateNumbersArr[firstIndex]
      updateNumbersArr[firstIndex] = updateNumbersArr[lastIndex];
      updateNumbersArr[lastIndex] = tmp_value;
      setNumbersArr(updateNumbersArr)
      isSorted() ? setIsSolved(true) : setIsSolved(false) 
    }
  };

  const isSorted = () => {
    //logic to verify is array sorted
   //return true/false
   for (let i = 0; i < numbersArr.length; i++) {
    if (i > 0 && numbersArr[i - 1] > numbersArr[i]) {
      return true;
    }
 }
 return false;
  }



  return (
    <div className="App">
      {
        isSolved ? 'Success :)' : null
      }
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <input
          style={{ padding: '10px', marginTop: '10px' }}
          type='number'
          placeholder='Please Enter Number'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={createArray} style={{ width: '12%', backgroundColor: 'green', color: 'white', padding: '11px', marginTop: '10px', marginLeft: '16px', border: 'none', borderRadius: '6px' }}>Submit</button>
      </div>
      <div className="grid-container"

        style={{ display: 'grid', gridTemplateColumns: `repeat(${gridLayout}, auto)` }}
      >
        {
          numbersArr.map((item, index) => (
            <div draggable={true}
              key={index}
              onDragStart={() => handleDragStart(index)}
              onDragEnter={() => handleDragEnter(index)}
              onDrop={(e) => handleDrop()}
              onDragOver={(e) => e.preventDefault()}
              className="grid-item">
              {item}
            </div>
          ))
        }

      </div>

    </div>
  );
}

export default App;
