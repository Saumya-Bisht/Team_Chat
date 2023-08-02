import React, { useState } from 'react';
import { MentionsInput, Mention } from 'react-mentions';


const ChatApp = () => {
    const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"]
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
 

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
      const newMessage = {
        user: randomUser,
        text: message,
        likes: 0,
      };
      setChatMessages([...chatMessages, newMessage]);
      setMessage('');
    }
  };

  const handleLike = (index) => {
    const updatedChatMessages = [...chatMessages];
    updatedChatMessages[index].likes += 1;
    setChatMessages(updatedChatMessages);
  };




  return (
    <div>
        <h1>Team Chat</h1>
        <img width="100px" style={{marginBottom:"50px"}} src='https://www.pngkit.com/png/full/128-1284523_group-chat-icon-google-group-chat-icon.png'/>
      <div className="chat-message-container">
        {chatMessages.map((chat, index) => (
          <div key={index} className="chat-message">
            <span className='span'><strong>{`${chat.user}: `}</strong><span id='text'>{` ${chat.text}`}</span></span>
             &nbsp; &nbsp; &nbsp; &nbsp; 
              <button className="btn btn-primary fa like" onClick={() => handleLike(index)}>
           &#xf087;  ({chat.likes})
            </button>
          </div>
        ))}
      </div>
      <div className="chat-input">
      <MentionsInput id='inp' className="form-control"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Send a thought or Type @ to mention a user..."
          
        >
          <Mention
            trigger="@"
            data={user_list.map((username) => ({ id: username, display: username }))}
          />
        </MentionsInput>
        
        <button className="btn btn-success" onClick={handleSendMessage}>Send</button>
      </div>
      <footer style={{backgroundColor:"skyblue",marginBottom:0,color:"purple",fontSize:"larger",marginTop:"5%"}}>
        Made with 💖 by <strong><a style={{textDecoration:"none"}} href='https://www.linkedin.com/in/saumya-bisht-55b8b41b5/' target='_blank'>SAUMYA BISHT</a></strong>
      </footer>
    </div>
  );
};

export default ChatApp;
