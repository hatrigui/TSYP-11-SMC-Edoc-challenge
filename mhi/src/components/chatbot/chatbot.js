import { FiSend } from "react-icons/fi";
import { BsEmojiSmile } from "react-icons/bs";
import React, { useState } from "react";
import Footer from "../footer/Footer";
import axios from "axios";

function Chatbot() {
  const API_key = "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";
  const [inputValue, setInputValue] = useState("");
  const [chatLog, setChatLog] = useState([
    {
      message: "Hello, how are you feeling today?",
      sender: "Therapist,AI",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: inputValue },
    ]);

    sendMessage(inputValue);

    setInputValue("");
  };

  const sendMessage = (message) => {
    const url = "https://api.openai.com/v1/chat/completions";
    const headers = {
      "Content-type": "application/json",
      Authorization: `Bearer ${API_key}`,
    };

    const data = {
      model: "gpt-3.5-turbo-0301",
      messages: [{ role: "user", content: message }],
    };

    setIsLoading(true);

    axios
      .post(url, data)
      .then((response) => {
        console.log(response);
        setChatLog((prevChatLog) => [
          ...prevChatLog,
          { type: "bot", message: response.data.choices[0].message.content },
        ]);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  return (
    <div className="h-screen">
      <section class="flex flex-col flex-auto h-full p-6">
        <div class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-600 h-full p-4">
          <div class="flex flex-col h-full overflow-x-auto mb-4">
            {chatLog.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`${
                    message.type === "user" ? "bg-blue-700" : "bg-gray-800"
                  } rounded-lg p-4 text-white max-w-sm`}
                >
                  {message.message}
                </div>
              </div>
            ))}
          </div>
          <div class="flex flex-row items-center h-16 rounded-xl bg-white w-full pr-4">
            <div class="flex-grow ml-4">
              <form onSubmit={handleSubmit} class="relative w-full">
                <input
                  type="text"
                  placeholder="Type your message here!"
                  className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button
                  type="submit"
                  class="text-xl absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
                >
                  <BsEmojiSmile />
                </button>
              </form>
            </div>
            <div class="ml-4">
              <button class="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0">
                <span>Send</span>
                <span class="ml-2">
                  <FiSend />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Chatbot;
