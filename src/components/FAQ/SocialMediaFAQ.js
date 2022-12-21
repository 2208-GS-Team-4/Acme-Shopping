import React from "react";
import { Card } from "@mui/material";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import RedditIcon from "@mui/icons-material/Reddit";
import MobileStoreIcon from "react-mobile-store-button";
import GitHubIcon from "@mui/icons-material/GitHub";

const SocialMedia = () => {
  const iconUrl =
    "https://www.youtube.com/watch?v=DuQk4PEbH68&ab_channel=%5BHK%5DDra";
  return (
    <div>
      <Card variant="outlined">
        <h2>Stay Connected with Us </h2>
        <MobileStoreIcon store="ios" url={iconUrl} />
        <MobileStoreIcon store="android" url={iconUrl} />
        <h2>Follow Us On</h2>
        <a href={iconUrl} target="_blank">
          <PinterestIcon />
        </a>
        <a href={iconUrl} target="_blank">
          <InstagramIcon />
        </a>

        <a href={iconUrl} target="_blank">
          <FacebookIcon />
        </a>

        <a href={iconUrl} target="_blank">
          <TwitterIcon />
        </a>

        <a href={iconUrl} target="_blank">
          <YouTubeIcon />
        </a>

        <a href={iconUrl} target="_blank">
          <RedditIcon />
        </a>

        <a href={iconUrl} target="_blank">
          <GitHubIcon />
        </a>
      </Card>
    </div>
  );
};

export default SocialMedia;
