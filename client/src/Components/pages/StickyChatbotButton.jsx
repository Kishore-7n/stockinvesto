import React, { useEffect } from "react";


const StickyChatbotButton = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://s3.ap-south-1.amazonaws.com/conferbot.defaults/dist/v1/widget.min.js";
    script.id = "conferbot-js";
    script.charset = "UTF-8";
    script.onload = () => {
        window.ConferbotWidget("6648dd02bfe59abc0c9fa878", "live_chat");
    };
    document.getElementsByTagName("head")[0].appendChild(script);

    return () => {
      const scriptElement = document.getElementById("conferbot-js");
      if (scriptElement) {
        scriptElement.remove();
      }
    };
  }, []);

  return null; 
};

export default StickyChatbotButton;
