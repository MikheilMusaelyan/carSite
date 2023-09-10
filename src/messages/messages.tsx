import { useState, useEffect, useRef } from 'react';

function Messages() {

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const messageScroll = useRef(null);

  useEffect(() => {
    scrollToBottom();

    // service.gotMessage.subscribe((message: any) => {
    //   pushToMessages('them', message);
    // });

    // service.sendAll.subscribe(() => {
    //   sendToMichael();
    // });

    // setTimeout(() => {
    //   service.gotMessage.next("Hey there, I'm Lisa. \nWhat can I help you with? :)");
    // }, 7000);

    return () => {
      // Unsubscribe from observables if needed
    };
  }, []);

  const sendMessage = () => {
    if (!message) {
      return;
    }

    // service.sendMessage(message);
    pushToMessages('me', message);
    setMessage('');
  };

  const pushToMessages = (sender: any, message: any) => {
    setMessages([...messages, { sender, message }]);
    scrollToBottom();
  };

  const sendToMichael = () => {
    // service.sendToMichael(messages);
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      messageScroll.current.scrollTop = messageScroll.current.scrollHeight;
    }, 100);
  };

  return (
    <main>
      <div className="wrap-messages">
        <div className="messages" ref={messageScroll}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message-wrap ${
                message.sender === 'me'
                  ? 'message-wrap-right'
                  : message.sender === 'them'
                  ? 'message-wrap-left'
                  : ''
              } ${
                index === 0 || messages[index - 1].sender !== message.sender
                  ? 'first-message'
                  : ''
              } ${
                index < messages.length - 1 &&
                messages[index + 1].sender === message.sender &&
                messages[index - 1].sender === message.sender
                  ? 'my-middle-message'
                  : ''
              } ${
                index === messages.length - 1 ||
                messages[index - 1].sender !== message.sender
                  ? 'my-last-message'
                  : ''
              }`}
            >
              <div className="message">
                <span className="message-span">{message.message}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={sendMessage}>
        <div className="inputholder">
          <input
            className="input"
            max='200'
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message"
            required
          />
        </div>
      </form>
    </main>
  );
}

export default Messages;
