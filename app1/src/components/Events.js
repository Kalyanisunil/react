function Events()
{
    const good = (a) =>
    {
        alert(a);
    }
    return (
        <button onClick={()=>good("Hello You have a message  from Santa")}></button>
    );
}
export default Events;