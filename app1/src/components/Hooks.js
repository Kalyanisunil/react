import React from "react";
import { useState } from "react";
function Hooks()
{
    const [car, setCar] = useState({
        model: "1999",
        brand: "mustang",
        color: "red"
    }
    );
    const changeCar = () =>
    {
        setCar(prevCar => {
            return {
                ...prevCar, color: "blue"
            }
        });
        }
    return (
        <>
            <div>
                <h1>this is a {car.brand} {car.model} {car.color}</h1>
            </div>
        <button onClick={changeCar}>Color change</button>           
        </>
    );
}
export default Hooks;