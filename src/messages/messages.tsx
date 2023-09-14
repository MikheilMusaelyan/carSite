import { useState, useEffect, useRef } from "react";
import "./messages.css";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../features/messageSlice";
import FriendsLeft from "./friends-left/friends-left";

function Messages() {
  const messages = useSelector((state: any) => state.message.messages);
  const dispatch = useDispatch();

  const [message, setMessage] = useState("");
  const messageScroll = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    scrollToBottom();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
    setIsHidden(true);

    const timeout = setTimeout(() => {
      setIsHidden(false);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
    // ... other useEffect dependencies ...
  }, [messages]);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = (event: any) => {
    event.preventDefault();
    if (!message) {
      return;
    }
    // Dispatch the action to add a message to Redux state
    pushToMessages({ sender: "me", message: message });
    setMessage("");
  };

  const pushToMessages = (message: any) => {
    dispatch(addMessage(message as any));
    scrollToBottom();
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      messageScroll.current.scrollTop = messageScroll.current.scrollHeight;
    }, 100);
  };

  return (
    <main className={`messages-main-wrap-main`}>
      {windowWidth > 800 && (
        <div className="friends-wrap-main">
          <div className="friends-wrap">
            <FriendsLeft />
          </div>
        </div>
      )}
      <div
        className="messages-main-wrap"
        style={
          windowWidth <= 800
            ? {
                width: "100%",
                ...(isHidden
                  ? { opacity: 0, transition: "" }
                  : { opacity: 1, transition: "300ms" }),
              }
            : {
                width: "calc(100% - 340px)",
                ...(isHidden
                  ? { opacity: 0, transition: "" }
                  : { opacity: 1, transition: "300ms" }),
              }
        }
      >
        <div className="wrap-messages">
          {messages?.length <= 0 && (
            <div className="nothing-div">
              <span className="nothing-span">No messages yet</span>
            </div>
          )}
          {messages?.length > 0 && (
            <div className="messages" ref={messageScroll}>
              {messages.map((message: any, index: number) => (
                <div
                  key={index}
                  className={`message-wrap ${
                    message.sender === "me"
                      ? "message-wrap-right"
                      : message.sender === "them"
                      ? "message-wrap-left"
                      : ""
                  } ${
                    messages[index - 1]?.sender != message?.sender
                      ? "first-message"
                      : ""
                  } ${
                    messages[index + 1]?.sender == message?.sender &&
                    messages[index - 1]?.sender == message.sender
                      ? "my-middle-message"
                      : ""
                  } ${
                    messages[index - 1]?.sender == message?.sender &&
                    messages[index + 1]?.sender != message?.sender
                      ? "my-last-message"
                      : ""
                  }`}
                >
                  <div className="message">
                    <span className="message-span">{message.message}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {messages?.length > 0 && (
          <form
            onSubmit={sendMessage}
            className="message-form"
            style={
              windowWidth <= 800
                ? { width: "100%" }
                : { width: "calc(100% - 340px)" }
            }
          >
            <div className="inputholder">
              <input
                typeof="submit"
                className="message-input"
                max="200"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message"
                required
              />
            </div>
          </form>
        )}
      </div>
    </main>
  );
}

export default Messages;
