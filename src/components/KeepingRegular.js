import React, {useState, useEffect} from 'react';

const KeepingRegular = () => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let id = setInterval(() => {
      setCount(count + 1);    
    }, 1000);    
    
    return () => clearInterval(id);
  });

  // useEffect(() => {
  //   const id = setTimeout(() => {
  //       setCount(count + 1);
  //     }, 1000);
  //     // return () => {
  //     //   clearTimeout(id);
  //     // };
  //   }
  // );

  return (
    <div>
      <h4>Count: {count}</h4>
    </div>
  );
};

// // doing it the class way:

// class KeepingRegular extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     }
//     setInterval(() => { this.setState({count: this.state.count + 1 })}, 1000);
//   }

//   // setInterval(updateCount(count + 1), 1000);

//   render() {
//     return (
//       <div>
//         <h4>Count: {this.state.count}</h4>
//       </div>
//     )
//   }
// }


export default KeepingRegular;