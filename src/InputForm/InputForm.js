import { useState } from "react";
import "./InputForm.css";

export default function InputForm() {
    const [zipCode, setZipCode] = useState("");

    const handleChange = (event) => {
        console.log(event);
        setZipCode(event.target.value);
    };

    const handleSubmit = () => {
        console.log("make api call here.");
    };

    return (
        <div className="inputForm">
            <form onSubmit={handleSubmit}>
                <input className="zipInput" placeholder="Please enter your zip code" type="text" name="zipCode" value={zipCode} onChange={handleChange} required />

                <input className="zipSubmit" type="submit" value="Submit" />
            </form>
        </div>
    )
};