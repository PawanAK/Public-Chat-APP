/* eslint-disable react/prop-types */
// components/InputBox.jsx
import { useState } from "react";
import { Input, Button } from "antd";

const InputBox = ({ sendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    sendMessage(message);
    setMessage("");
  };

  return (
    <div>
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <Button type="primary" onClick={handleSendMessage}>
        Send
      </Button>
    </div>
  );
};

export default InputBox;
