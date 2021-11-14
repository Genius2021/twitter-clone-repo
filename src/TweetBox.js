import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import db from "./Firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = e => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Onwuka Emmanuel",
      username: "Genius",
      verified: true,
      text: tweetMessage,
      Avatar: "./images/passport.jpg",
      image: "https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-9/80379704_2653966871538986_391883733893906432_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9gIjhn9vcwwAX_1XeRy&_nc_ht=scontent-los2-1.xx&oh=2aa7a49b51dd57786e64528939c6917c&oe=61A65921"
    })

    setTweetImage("");
    setTweetMessage("");

  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="./images/passport.jpg" />
          <input 
          onChange={(e)=> setTweetMessage(e.target.value)}
          value={tweetMessage} 
          placeholder="What's happening?" 
          type="text" 
          />

        </div>          
        <input 
        value={tweetImage}
        onChange={(e)=> setTweetImage(e.target.value)}
        className="tweetBox__imageInput" 
        placeholder="Optional: Enter image URL" 
        type="text" 
        />

        <Button 
        onClick={sendTweet}
        className="tweetBox__tweetButton"
        type="submit"
        >Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
