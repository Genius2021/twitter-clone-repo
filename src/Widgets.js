import React from 'react'
import './Widgets.css';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon  className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening?</h2>

                <TwitterTweetEmbed tweetId={"1454520394581483525"} />
                <TwitterTimelineEmbed  sourceType="profile"  screenName="tech" options={{height:400}} />
                <TwitterShareButton url={"https://www.linkedin.com/in/emmanuel-onwuka-azu/"} options={{text: "#reactjs is awesome", via: "Tech"}} />


            </div>
        </div>
    )
}

export default Widgets
