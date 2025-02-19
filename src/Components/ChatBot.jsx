import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ChatBotComponent = () => {
  const [messages, setMessages] = useState([]); // Store the chat messages
  const [userInput, setUserInput] = useState(''); // Store the user input
  const [showChatBot, setShowChatBot] = useState(false); // Toggle visibility of the chat bot

  // Function to send the user's message to the server
  const sendMessage = async () => {
    if (!userInput) return; // Don't send empty messages

    // Add the user's message to the chat history
    const newMessages = [...messages, { sender: 'user', text: userInput }];
    setMessages(newMessages); // Update chat history
    setUserInput(''); // Clear the input field

    try {
      // Send the message to the backend API
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: newMessages }), // Send the current chat messages
      });

      if (!response.ok) {
        const errorDetails = await response.text(); // Get error details from the server
        throw new Error(`HTTP error! status: ${response.status}, details: ${errorDetails}`);
      }

      const data = await response.json();
      setMessages([...newMessages, { sender: 'assistant', text: data.reply }]); // Update with assistant's reply
    } catch (error) {
      console.error('Error sending message:', error.message); // Log the error message
      setMessages([
        ...newMessages,
        { sender: 'assistant', text: 'Error: Something went wrong.' }, // Display error message
      ]);
    }
  };

  // Toggle chat bot visibility
  const toggleChatBot = () => {
    setShowChatBot(prevState => !prevState);
  };

  // Close chat bot
  const closeChatBot = () => {
    setShowChatBot(false); // Hide the chat bot
  };

  return (
    <div>
      <button onClick={toggleChatBot}>
        <img src="/assets/ChatBot.gif" alt="Chat Bot" className="chatbot-img" />
      </button>

      {showChatBot && (
        <div className="chat-container" style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
          <div style={{ textAlign: 'right' }}>
            <button onClick={closeChatBot} style={{ background: 'none', border: 'none', fontSize: '20px', color: '#007bff', cursor: 'pointer' }}>
              X
            </button>
          </div>
          <div className="chat-history" style={{ maxHeight: '300px', overflowY: 'auto', marginBottom: '20px' }}>
            {messages.map((msg, index) => (
              <div key={index} className={msg.sender} style={{ margin: '10px 0', textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
                <strong>{msg.sender === 'user' ? 'You' : 'Assistant'}: </strong>{msg.text}
              </div>
            ))}
          </div>
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)} // Update user input as they type
              placeholder="Type your message..."
              style={{
                width: '100%',
                padding: '10px 40px 10px 10px', // Add padding to leave space for the icon
                borderRadius: '5px',
                border: '1px solid #ccc',
                position: 'relative',
              }}
            />
            <button onClick={sendMessage} style={{
              position: 'absolute',
              right: '10px', // Position the icon inside the input
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}>
              <FontAwesomeIcon icon={faPaperPlane} style={{ fontSize: '18px', color: '#007bff' }} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBotComponent;
