// import logo from './logo.svg';
import "./App.css";
// import Hello from "./components/Hello";
// import Para from './components/Para';
import Hello from "./components/Hello";
// import Newstate from "./components/Newstate";
// import Para from './components/Para';
// import Newstate from "./components/Newstate";
import Events from "./components/Events";
import Conditionals from "./components/Conditionals";
import Myists from "./components/Mylists";
import { useState } from "react";
// import Myists  from "./components/Mylists";
import Hookex from "./components/Hookex";
import Hooks from "./components/Hooks";

function App() {
  return (
    <div className="App">
      <Events />
      <Hello />

      <Conditionals isNow={false}></Conditionals>

      <Myists />
      
      <Hookex />
      <Hooks/>
    </div>

  );
}

// const Person = (props) =>
// {
//     return (
//     <>
//         <h1> NAME:{props.name}</h1>
//         <h1> LAST NAME:{props.lastname}</h1>
//             <h1> AGE:{props.age}</h1>
//         </>
//     )
// }
// const App = () => {
//     return (
//         <div className="App">
//         <Person name={'kallu'} lastname={'sunil'} age={22}></Person>
//         <Person name={'kavu'} lastname={'sunil'} age={18}></Person>
//         </div>
//     );
// }
// const App = () => {
//   const [counter, setCounter] = useState(0); //use state is called A hook Hooks allow us to "hook" into React features such as state and lifecycle methods.
//   return (
//     <div className="App">
//       <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
//         Add
//       </button>

//       {/* () => { } is called callback function */}
//       <h1>{counter}</h1>
//       <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
//         Subtract
//       </button>
//     </div>
//   );
// };

export default App;
