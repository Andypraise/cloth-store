import React, { useState } from "react";
import "./ChatBot.css";

function ChatBot() {
  const [open, setOpen] = useState(false); // controls visibility
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋! Welcome to ShopMore Clothing." },
    { from: "bot", text: "How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (text) => {
    if (!text) return;
    setMessages([...messages, { from: "user", text }]);
    setInput("");

    // Bot replies
    let reply = "Sorry, I didn’t get that. Can you rephrase?";
    if (text.toLowerCase().includes("order")) reply = "Great! 🛍️ You can place an order from our Shop section.";
    if (text.toLowerCase().includes("promo")) reply = "🔥 Promo running now: Buy 2 get 1 free!";
    if (text.toLowerCase().includes("services")) reply = "We offer clothing sales, nationwide delivery, and seasonal promos.";

    setTimeout(() => {
      setMessages(prev => [...prev, { from: "bot", text: reply }]);
    }, 1000);
  };

  return (
    <div className="konga-chatbot">
      {/* Chat bubble button */}
      {!open && (
        <button className="chat-bubble" onClick={() => setOpen(true)}>
          💬 
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div className="chat-window">
          <div className="chat-header">
            ShopMore Clothing Chat
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>

          {/* Quick action buttons */}
          <div className="quick-buttons">
            <button onClick={() => handleSend("Place an order")}>Place Order 🛒</button>
            <button onClick={() => handleSend("Promo")}>Promo 🔥</button>
            <button onClick={() => handleSend("Services")}>Services 📋</button>
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={() => handleSend(input)}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBot;
