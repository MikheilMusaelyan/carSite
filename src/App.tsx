import './App.css'
import Navbar from './navbar/navbar'
import Item from './item/item'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './home/home'
import {useEffect} from 'react'
import Profile from './profile/profile'
import Messages from './messages/messages'
import {useRef, useState} from 'react'
import { useSelector } from 'react-redux'
import Login from './login/login'

function App() {
  const [messageState, setMessageState] = useState('closed');
  let animationTimeoutRef = useRef(null)
  let animationCloseTimeoutRef = useRef(null)
  const message = useSelector((state: any) => state.notification.message);

  useEffect(() => {
    handleMessages(message)
  }, [message])

  function handleMessages(message: any){
    if(message?.text?.trim(' ') == '' || message?.text?.length == 0){
      return
    }

    setMessageState('closed')
    
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current);
    }
    if (animationCloseTimeoutRef.current) {
      clearTimeout(animationCloseTimeoutRef.current);
    }
  
      
    animationTimeoutRef.current = setTimeout(() => {
      setMessageState('open');
      animationCloseTimeoutRef.current = setTimeout(() => {
        console.log('closed')
        setMessageState('closed');
      }, 1200);
    }, 350)
    
  }

  useEffect(() => {
    const viewportMeta = document.createElement('meta');
    viewportMeta.name = 'viewport';
    viewportMeta.content = 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no';

    document.head.appendChild(viewportMeta);

    return () => {
      document.head.removeChild(viewportMeta);
    };
  }, []);

  return (
    <>
      <div 
      className={`n-messages ${messageState == 'closed' ? 'transLeft' : ''}`}>
        <div className="n-tag" style={message?.error ? {'background' : 'red'} : {}}></div>
        <span className="n-message-text-wrap">
          <div className="n-message-text">{message?.text}</div>
        </span>
     </div>
      <Router>
        <Navbar />
        
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/messages' element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Home />} />
          <Route path="/car/:id" element={<Item />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
