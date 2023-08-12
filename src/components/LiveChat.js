import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // Api polling
      console.log("APi polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 2000);

    return () => clearTimeout;
  }, []);

  return (
    <>
      <div className="w-[350px] h-[515px] ml-4 p-2 border border-black rounded-lg shadow-lg bg-slate-50 overflow-y-scroll flex flex-col-reverse">
        <div>
          {ChatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>

      <form
        className="w-[350px] p-2 ml-4 border border-black rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessage({
              name: "Pandey Ji",
              message: liveMessage,
            })
          );
        }}
      >
        <input
          className="w-90"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 ml-20 bg-green-100 ">Send</button>
      </form>
    </>
  );
};

export default LiveChat;



// ***** for gettin few chats *****

// import ChatMessage from "./ChatMessage";

// const LiveChat = () => {
//   <div className="w-[350px] h-[515px] ml-4 p-2 border border-black rounded-lg shadow-lg bg-slate-50 ">
//     <ChatMessages 
//     name = "SHashu"
//     message = "This is shashu"
//     />
//      <ChatMessages 
//     name = "SHashu"
//     message = "This is shashu"
//     />
//      <ChatMessages 
//     name = "SHashu"
//     message = "This is shashu"
//     />
//   </div>
//   )
// }

// export default LiveChat ;