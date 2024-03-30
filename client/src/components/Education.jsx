import React from "react"
import "../index.css"

export default function Education(){


    return(<>
    <div className="aboutBody">
        <div className="aboutMe">
            <h1 style={{color:"red"}} className="aboutTitle">Education</h1>

        </div>
        <div className="educationCard">
            <img src="/assets/photos/fullSailLogo.svg" />
            <h2>Full Sail University | Winter Park, FL</h2>
            <div>
                <h2>Start: 02/04/2024</h2>
                <h2>Complete: 09/30/2024</h2>
            </div>
        </div>
    </div>
    </>)
}