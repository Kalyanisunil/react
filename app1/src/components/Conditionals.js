function Missyou() {
    return <h1>MISS YOU!!</h1>
}
function Loveyou()
{
    return <h1>LOVE YOU</h1>
}
function Conditionals(props)//here isNow is a property of Conditional compenent ie props.isNow can take values value is passed from App.js <conditional isNow={true}>
{
    const isNow = props.isNow;
    if (isNow)
    {
        return <Loveyou></Loveyou>
    }
    return <Missyou></Missyou>

}
export default Conditionals;