import React, {useState, useEffect} from 'react';
import Error from './Error';
import axios from 'axios';

const GettingTheFacts = () => {
  const [data, setData] = useState("start with this");
  const [count, setCount] = useState(0);
  const [error, setError] = useState('');
  const [stopTimer, setStopTimer] = useState(false);

  const TIMER = 2500;
  //increment count every few seconds
  useEffect(() => {
    if (stopTimer) {
      //pause
    } else {
      const id = setTimeout(() => {
        setCount(count + 1);
      }, TIMER);
      return () => {
        clearTimeout(id);
      };
    }
  });

  useEffect( () => {
    axios.get(`http://numbersapi.com/${count}/trivia`)
      .then((response) => {
        setData(response.data);
      }).catch((error) => {
        setError(error);
      });
    }, [count, error] 
  );

  const reset = () => {
    setCount(0);
  };

  const random = () => {
    const randomNum = Math.floor(Math.random() * 1000);
    setCount(randomNum);
  };

  const pause = () => {
    setStopTimer(true);
  };

  const continueOk = () => {
    setStopTimer(false);
  };

  const restart = () => {
    setStopTimer(false);
    setCount(0);
  }

  return (
    <div>
      <h4>Count: {count}</h4>
      <button onClick={pause}>Pause</button>
      <button onClick={continueOk}>Continue</button>
      <button onClick={restart}>Restart</button>
      <hr />
      <button onClick={reset}>Reset</button>
      <button onClick={random}>Random</button>
      <p>{error ? <Error error={error}/> : data }</p>
    </div>
  );
};

// const GettingTheFacts = () => {
//   const [count, setCount] = useState(0);
//   const TIMER = 10000
//   //increment count every 10 seconds
//   useEffect(() => {
//     const id = setTimeout(() => {
//         setCount(count + 1);
//       }, TIMER);
//       return () => {
//         clearTimeout(id);
//       };
//     }
//   );
//   //display data based on count
//   const displayData = async() => {
//     let response = await axios.get(`http://numbersapi.com/${count}/trivia`);
//     // console.log(response.data);
//     const data = response.data;

//     const triviaParentDiv = document.querySelector(".trivia-here");
//     triviaParentDiv.innerHTML = '';
//     let triviaData = document.createElement("div");
//     triviaData.innerHTML = `
//       <p>${data}</p>
//     `;//needs to be another component

//     triviaParentDiv.appendChild(triviaData);
//   }
//   displayData();

//   return (
//     <div className="trivia-here">
//     </div>
//   );
// };

export default GettingTheFacts; 