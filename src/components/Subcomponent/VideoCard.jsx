import React from 'react';

export default function VideoCard() {
  return (
    <div className="border lg:w-[22%] md:w-[45%] w-full items-center justify-center border-white rounded-lg p-3 bg-[#1a1a1a]">
      <div className="w-full aspect-[9/16] relative"> {/* Enforces 9:16 Aspect Ratio */}
        <script src="https://fast.wistia.net/player.js" async></script>
        <iframe
          src="https://fast.wistia.net/embed/iframe/558kmm117t?web_component=true&seo=true&videoFoam=true&autoPlay=true&muted=true"
          title="Best 3 Video"
          allow="autoplay; fullscreen"
          allowTransparency="true"
          frameBorder="0"
          scrolling="no"
          className="w-full h-full rounded-md"
          name="wistia_embed"
        ></iframe>
      </div>
    </div>
  );
}
