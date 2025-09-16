import React from "react";
import "./PromoVideo.css";

function PromoVideo() {
  return (
    <div className="promo-video">
      <video autoPlay loop muted>
        <source
          src="https://www.shutterstock.com/shutterstock/videos/1019705446/preview/stock-footage-exclusive-offer-word-retro-cartoon-comic-bubbles-popup-style-illustration-colored-bomb-strip.webm"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default PromoVideo;
