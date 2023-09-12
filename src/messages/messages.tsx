import { useState, useEffect, useRef } from 'react';
import './messages.css'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../features/messages/messageSlice';

function Messages() {
  const messages = useSelector((state: any) => state.messages);
  const dispatch = useDispatch();

  const [message, setMessage] = useState('');
  const messageScroll = useRef(null);

  useEffect(() => {
    scrollToBottom();
    // service.gotMessage.subscribe((message: any) => {
    //   pushToMessages('them', message);
    // });

    return () => {
      // Unsubscribe from observables if needed
    };
  }, []);

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = (event: any) => {
    event.preventDefault();
    if (!message) {
      return;
    }
    // Dispatch the action to add a message to Redux state
    pushToMessages({sender: 'me', message: message})
    setMessage('');
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
    <main className='messages-main-wrap'>
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
                messages[index-1]?.sender != message?.sender
                  ? 'first-message'
                  : ''
              } ${
                messages[index + 1]?.sender == message?.sender && messages[index-1]?.sender == message.sender
                  ? 'my-middle-message'
                  : ''
              } ${
                messages[index-1]?.sender == message?.sender && messages[index+1]?.sender != message?.sender 
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
      <form onSubmit={sendMessage} className='message-form'>
        <div className="inputholder">
          <input
            typeof='submit'
            className="message-input"
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
