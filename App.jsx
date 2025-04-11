import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Dashboard from './components/Dashboard'
import AvatarChat from './components/AvatarChat'
import Metaverse from './components/Metaverse'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './index.css'

function App() {
  const [chatMessages, setChatMessages] = useState([
    { text: "Hello! I'm Dr. Meta, your AI health assistant. How can I help you today?", isUser: false }
  ]);

  const handleChatSend = (message) => {
    if (!message.trim()) return;
    
    // Add user message
    setChatMessages(prev => [...prev, { text: message, isUser: true }]);
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "I understand. Could you tell me more about when these symptoms started?",
        "I'll help you with that. Have you made any recent lifestyle changes?",
        "Thank you for sharing. Let me suggest some potential solutions.",
        "I'm analyzing your symptoms. Could you provide more details?"
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setChatMessages(prev => [...prev, { text: randomResponse, isUser: false }]);
    }, 1000);
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Hero />
        <Features />
        <Dashboard />
        <AvatarChat messages={chatMessages} onSend={handleChatSend} />
        <Metaverse />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;