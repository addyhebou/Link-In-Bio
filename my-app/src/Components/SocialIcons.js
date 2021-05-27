import React from 'react';
import IGIcon from '../Icons/IGIcon.png';
import TikTokIcon from "../Icons/TikTokIcon.png";
import SpotifyIcon from '../Icons/SpotifyIcon.png';
import YouTubeIcon from '../Icons/YouTubeIcon.png';

export default function SocialIcons() {
    return (
        <div className = "SocialGrid">
            <div>
                <a href = "https://www.instagram.com/iamsaintsteph/" target = "_blank">
                    <img src = {IGIcon} alt = "Instagram Icon" width = "50rem"/>
                </a>
                <a href = "https://www.tiktok.com/@saintstephmusic?lang=en" target = "_blank">
                    <img src = {TikTokIcon} alt = "Instagram Icon" width = "50rem"/>
                </a>
            </div>
            <div>
                <a href = "https://open.spotify.com/playlist/3BEcw7WkLRmutsBUqZsHQ4?si=184a965ff9354756" target = "_blank">
                    <img src = {SpotifyIcon} alt = "Instagram Icon" width = "50rem"/>
                </a>
                <a href = "https://www.youtube.com/channel/UCBRN4MnIAitKa26ygm1VJZw/" target = "_blank">
                    <img src = {YouTubeIcon} alt = "Instagram Icon" width = "50rem"/>
                </a>
            </div>
        </div>
    )
}