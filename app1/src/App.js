// import logo from './logo.svg';
import "./App.css";
// import Hello from "./components/Hello";
// import Para from './components/Para';
import Hello from './components/Hello';
// import Newstate from "./components/Newstate";
// import Para from './components/Para';
// import Newstate from "./components/Newstate";
import Events from './components/Events';
import Conditionals from './components/Conditionals';
import Myists from './components/Mylists';

function App() {
  return (
    <div className="App">
      <Events />
      <Hello />
      
      <Conditionals isNow={false}></Conditionals>
      <Myists/>
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




export default App;
