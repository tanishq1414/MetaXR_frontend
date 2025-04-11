import { useState } from 'react';

const AvatarChat = ({ messages, onSend }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSend(message);
    setMessage('');
  };

  return (
    <section className="avatar-section">
      <h2 className="section-title">Your Virtual Health Assistant</h2>
      <div className="avatar-container">
        <div className="avatar-card">
          <div className="avatar-image">👨‍⚕️</div>
          <div className="avatar-chat">
            {messages.map((msg, index) => (
              <div key={index} className="chat-message">
                <div className={`chat-bubble ${msg.isUser ? 'user-message' : ''}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <form onSubmit={handleSubmit} className="chat-input">
              <input 
                type="text" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..." 
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvatarChat;