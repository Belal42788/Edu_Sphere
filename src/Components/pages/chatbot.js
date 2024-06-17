// src/components/Chatbot.js
import React, { useState } from 'react';
import axios from 'axios';
import "../../Styles/Chatbot.css";

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { sender: 'user', text: input };
        setMessages([...messages, userMessage]);

        try {
            const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
                prompt: input,
                max_tokens: 150,
                temperature: 0.7,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0.6,
                stop: ["\n", " Human:", " AI:"]
            }, {
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            });

            const botMessage = {
                sender: 'bot',
                text: response.data.choices[0].text.trim()
            };

            setMessages([...messages, userMessage, botMessage]);
        } catch (error) {
            console.error('Error fetching response from GPT API:', error.response || error.message);
            const errorMessage = {
                sender: 'bot',
                text: 'Sorry, something went wrong. Please try again later.'
            };
            setMessages([...messages, userMessage, errorMessage]);
        }

        setInput('');
    };

    return (
        <div className="chatbot-container">
            <div className="chatbot-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="chatbot-form">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Chatbot;
