/* Surprise! You probably thought you could just forget
the line of code you just learned! Nope, not on my watch!

Try to write that 1-liner of React code again! This time,
see if you can figure out how to render an <ul> with 2+ <li>s inside*/
// function Maincontent()
// {
//   return (
//     <p>Helllo everyone iam kallu!</p>
//   )
// }
// ReactDOM.render(
//   <div>
//     {/* <Maincontent></Maincontent> */}
//     <h1>Hello this is div parent's children</h1><p>This too </p>

//   </div>
// ,
//   document.getElementById("root")
// );

// const h1 = document.createElement("h1");
// h1.textContent = "this is me am kallu";
// h1.className = "header";
// document.getElementById("root").append(h1);
const page = (
  <nav>
    <h1>React</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);
ReactDOM.render(page, document.getElementById("root"));
