import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm h-[33px]  ">
      <img
        className="h-6"
        src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
        alt="user-icon"
      />

      <span className="font-bold px-1 text-sm ">{name}</span>
      <span className="text-sm">{message}</span>
    </div>
  );
};

export default ChatMessage;
