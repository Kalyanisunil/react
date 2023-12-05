function Hello(props) {
    console.log(props);
    return (< h1 > Hello { props.name } { props.last }
        {props.children}</h1 >)
   

}

export default Hello;