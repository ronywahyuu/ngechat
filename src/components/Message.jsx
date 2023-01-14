import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import TimeAgo from "react-timeago";

// eslint-disable-next-line react/prop-types
const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  // console.log(message.senderId === currentUser.uid);
  // console.log(message.date);

  const msgRef = useRef();

  useEffect(() => {
    msgRef?.current.scrollIntoView({
      behavior: "smooth",
    });
  }, [message]);

  const dateConvert = (epoch) => {
    let utcSeconds = epoch;
    let d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(utcSeconds);

    return d;
  };

  return (
    <div
      ref={msgRef}
      className={`message ${
        message.senderId === currentUser.uid ? "owner" : ""
      }`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data?.user.photoURL
          }
          alt=""
        />
        <TimeAgo date={dateConvert(message.date?.seconds)} />
        {/* <span>
          <TimeAgo date={message.date?.nanoseconds} />
        </span> */}
      </div>
      <div className="messageContent">
        <p>{message?.text}</p>
        {/* <img
          src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default Message;
