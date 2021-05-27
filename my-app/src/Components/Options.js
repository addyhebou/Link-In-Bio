import '../App.scss';
import React from 'react';
import OptionsList from '../Data/Options.json';

export default function Options() {
    return (
        <div className = "Options">
        {
            Object.entries(OptionsList).map(([option, link]) => {
                console.log(link['Link']); 
                return (
                    <a href = {link['Link']} target="_blank">{option}</a>
                    )
                })
        }
        </div>
    )
}

