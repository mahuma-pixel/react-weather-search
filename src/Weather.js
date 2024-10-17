import React from "react";

export default function Weather(){

    return <div className="weather">
        <form>
            <input type="Search" placeholder="Enter city"/>
            <input type="Submit" value={"Search"}/>
        </form>
        <h2>
            Paris
        </h2>
        <ul>
            <li>Wednesday 11h00</li>
            <li>Mostly cloudy</li>
        </ul>
    </div>
}
