// FloatingChatbot.js
import React, { useState } from 'react';
import '../../Styles/FloatingChatbot.css'; // Create this CSS file for styling
import icon from '../../assets/chat-icon.png'; // Add your chat icon here
const FloatingChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="floating-chatbot">
            <div className={`chatbot-button ${isOpen ? 'open' : ''}`} onClick={toggleChatbot}>
                <img src={icon} alt="chatbot-icon" />
            </div>
            {isOpen && (
                <div className="chatbot-iframe">
                    <iframe
                        src="https://docsbot.ai/iframe/iyrmXK9Z1cDblbO888bk/2m7mjSQjlQ7dT9FwQzTq"
                        width="350"
                        height="617"
                        allowTransparency="true"
                    ></iframe>
                </div>
            )}
        </div>
    );
};

export default FloatingChatbot;
