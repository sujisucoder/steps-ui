


import React, { useState } from "react";

const ChatPopup = ({ onClose }) => {
  const [isChatStarted, setIsChatStarted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [queryError, setQueryError] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let valid = true;

    if (name.trim() === "") {
      setNameError("Please enter your name.");
      valid = false;
    } else {
      setNameError("");
    }

    if (email.trim() === "") {
      setEmailError("Please enter your email.");
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    } else {
      setEmailError("");
    }

    if (query.trim() === "") {
      setQueryError("Please enter your query.");
      valid = false;
    } else {
      setQueryError("");
    }

    if (valid) {
      setIsChatStarted(true);
      setMessages([{ sender: "bot", text: `Hi ${name}! Welcome to our chat. How can I assist you today?` }]);
    }
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, { sender: "user", text: message }]);
      setMessage("");

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: getBotResponse(message) }
        ]);
      }, 500);
    }
  };

  const getBotResponse = (input) => {
    const responses = {
      hello: "Hello there! How can I help you today?",
      hi: "Hi! How can I assist you?",
      help: "Sure, I am here to help. Please tell me what you need assistance with.",
      "how are you": "I am just a bot, but I am functioning as expected!",
      bye: "Goodbye! Have a great day!",
      default: "I am sorry, I do not understand. Can you please rephrase?"
    };
    const normalizedInput = input.trim().toLowerCase();
    return responses[normalizedInput] || responses["default"];
  };

  return (
    <div className="fixed   bottom-20 right-4 w-80 h-auto bg-white shadow-lg rounded-lg p-4">
      <div className="flex  items-center justify-between border-b bg-black p-3 rounded-xl text-white">
        <h2 className="text-lg font-semibold ">
          Hi there <span role="img" aria-label="waving hand">👋</span>
        </h2>
        <h2 className="text-lg font-semibold">
          -Online <span className="text-sm" role="img" aria-label="green circle">🟢</span>
        </h2>
        <button onClick={onClose} className="text-gray-500 text-3xl pl-8 hover:text-gray-700">
          &times;
        </button>
      </div>
      {isChatStarted ? (
        <div className="flex flex-col h-full mt-2 overflow-auto border border-red-600">
          <div className="flex-grow p-2   rounded-lg">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.sender === "user" ? "bg-black text-white float-right" : "bg-gray-200 text-black float-left"} p-2 my-1 rounded-lg clear-both`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex mt-2">
            <input
              type="text"
              className="flex-grow p-2 border rounded-l-lg focus:outline-none"
              placeholder="Type a message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button onClick={handleSendMessage} className="p-2 bg-black text-white rounded-r-lg hover:bg-gray-800">
              Send
            </button>
          </div>
        </div>
      ) : (
        <form className="mt-2" onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="block w-full p-2 border mb-2 rounded focus:outline-none"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="text-red-500 text-sm">{nameError}</span>
          <input
            type="email"
            className="block w-full p-2 border mb-2 rounded focus:outline-none"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="text-red-500 text-sm">{emailError}</span>
          <input
            type="text"
            className="block w-full p-2 border mb-2 rounded focus:outline-none"
            placeholder="Enter your queries"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <span className="text-red-500 text-sm">{queryError}</span>
          <button type="submit" className="w-full p-2 bg-black text-white rounded-2xl mt-2 hover:bg-gray-800">
            Start Chat
          </button>
        </form>
      )}
    </div>
  );
};

export default ChatPopup;
