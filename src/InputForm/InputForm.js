import { useState } from "react";
import "./InputForm.css";
import {apiKeys} from '../api_store.js';
import zipcodes from 'zipcodes';


export default function InputForm() {
    const [zipCode, setZipCode] = useState("");

    const handleChange = (event) => {
        setZipCode(event.target.value);
    };

    const fetchHikingData = () => {
        let zipData = zipcodes.lookup(zipCode);
        let long = zipData.longitude;
        let lat = zipData.latitude;
        fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/hiking.json?country=us&proximity=' + long + '%2C' + lat + '&types=poi&language=en&access_token=' + apiKeys["mapbox"])
            .then(response => response.json())
            .then(data => console.log(data));
    };

    return (
        <div className="inputForm">
            <form>
                <input className="zipInput" placeholder="Please enter your zip code" type="text" name="zipCode" value={zipCode} onChange={handleChange} required />

                <input className="zipSubmit" onClick={fetchHikingData} type="button" value="Submit" />

            </form>
        </div>
    )
};