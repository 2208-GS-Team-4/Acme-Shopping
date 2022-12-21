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
    <Card variant="none" style={{ marginTop: "10px" }}>
      <p
        style={{
          color: "navy",
          fontSize: "15px",
          marginLeft: "20px",
          marginTop: "10px",
          fontSize: "12px",
        }}
      >
        Stay Connected with Us{" "}
      </p>
      <MobileStoreIcon
        store="ios"
        url={iconUrl}
        style={{
          width: "33%",
          float: "left",
          marginRight: "10px",
          marginLeft: "25px",
          height: "40px",
        }}
      />
      <MobileStoreIcon
        store="android"
        url={iconUrl}
        style={{
          width: "40%",
          float: "left",
          marginRight: "10px",
          marginLeft: "10px",
          marginTop: "-8px",
          height: "40px",
        }}
      />
      <p
        style={{
          color: "navy",
          fontSize: "15px",
          marginTop: "70px",
          marginLeft: "20px",
          fontSize: "12px",
        }}
      >
        Follow Us On
      </p>
      <div style={{ marginLeft: "20px", marginBottom: "20px" }}>
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
      </div>
    </Card>
  );
};

export default SocialMedia;
