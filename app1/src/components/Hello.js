function Hello(props)
{
    console.log(props);
    return <h1>Hello {props.name} {props.last}
        {props.children}</h1>
}

// const Hello = (props) => {
//     console.log(props);
//    return <h1>To my dear dearest</h1>
// }
export default Hello;