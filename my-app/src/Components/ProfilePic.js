import React from 'react'
import Picture from "../Icons/Profile.png";
import {ReactComponent as IGIcon} from "../Icons/IG White Logo.svg";

export default function ProfilePic() {
    return (
        <div>
            <img src = {Picture} width = "250rem"/>
            <h1>Saint Steph</h1>
            <div className = "Subtitle">
                <IGIcon />
                <h2>iamsaintsteph</h2>
            </div>
        </div>
    )
}

