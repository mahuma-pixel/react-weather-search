import React from "react";

export default function Weather(){

    return <div className="weather">
        <div className="Container">
            <div className="row">
                <div className=""><form>
            <input type="Search" placeholder="Enter city" className="form col-9"/>
            <input type="Submit" value={"Search"} className=" col-3 btn btn-primary w-20 "/>
        </form></div></div></div>
        <h1>
            Paris
        </h1>
        <ul>
            <li>Wednesday 11h00</li>
            <li>Mostly cloudy</li>
        </ul>
        <div className="container">
            <div className="row">
                <div className="col-6"> <img src="images\download.png" alt="forecast"></img> 6 <span>°C</span></div>
                <div className="col-6">
                <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 5km/h%</li>
        </ul>
                </div>
            </div>
        </div>
    </div>
}
