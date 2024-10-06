import { useState, useEffect } from "react";
import "./VirtualConference.css";


const VirtualConference = () => {
  const [question, setQuestion] = useState("");
  const [questions, setQuestions] = useState([]);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  // Handle Q&A submission
  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    if (question) {
      setQuestions([...questions, question]);
      setQuestion("");
    }
  };

  // Handle chat message submission
  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (message) {
      setChat([...chat, { user: "You", text: message }]);
      setMessage("");
    }
  };

  // Simulate bot replies
  useEffect(() => {
    if (chat.length > 0) {
      const lastMessage = chat[chat.length - 1];
      if (lastMessage.user === "You") {
        setTimeout(() => {
          setChat((prevChat) => [
            ...prevChat,
            {
              user: "Conference Bot",
              text: "Thanks for your message. We’ll respond shortly.",
            },
          ]);
        }, 1500);
      }
    }
  }, [chat]);

  return (
    <section className="virtual-conference-section">
      {/* <img
        src={conference}
        alt="Virtual Conference Banner"
        className="banner-image"
      /> */}
      <h1 className="virtual-conference-title">
        Welcome to the Virtual Conference
      </h1>
      <p className="virtual-conference-description">
        Join us for a truly interactive and immersive virtual experience, where
        you can watch live sessions, access recorded content, and participate in
        real-time discussions—all from the comfort of your home.
      </p>

      {/* Live Streaming Section */}
      <div className="live-stream">
        <h2 className="live-stream-title">Live Streaming</h2>
        <div className="live-stream-video">
          {/* Example YouTube iframe - replace the src with your own video provider */}
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&mute=1"
            title="Live Streaming"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
        <a href="#" className="virtual-conference-button">
          Watch Live Now
        </a>
      </div>

      {/* Q&A Section */}
      <div className="qa-section">
        <h2 className="qa-title">Interactive Q&A</h2>
        <form onSubmit={handleQuestionSubmit} className="qa-form">
          <input
            type="text"
            placeholder="Ask a question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="qa-input"
          />
          <button type="submit" className="qa-submit-button">
            Submit
          </button>
        </form>
        <div className="qa-list">
          {questions.map((q, index) => (
            <p key={index} className="qa-question">
              Q: {q}
            </p>
          ))}
        </div>
      </div>

      {/* Chat Section */}
      <div className="chat-section">
        <h2 className="chat-title">Live Chat</h2>
        <form onSubmit={handleChatSubmit} className="chat-form">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="chat-input"
          />
          <button type="submit" className="chat-submit-button">
            Send
          </button>
        </form>
        <div className="chat-messages">
          {chat.map((msg, index) => (
            <p
              key={index}
              className={`chat-message ${
                msg.user === "You" ? "user-message" : "bot-message"
              }`}>
              <strong>{msg.user}:</strong> {msg.text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VirtualConference;
