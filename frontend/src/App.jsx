// src/App.jsx
import { useState, useEffect } from "react";
import { Layout, Row, Col } from "antd";
import ChatWindow from "./components/ChatWindow";
import InputBox from "./components/InputBox";
import UserList from "./components/UserList";
import socketService from "./services/socketService";

const { Header, Content, Footer } = Layout;

const App = () => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const username = prompt("Enter your name:"); // You might want to replace this with a more user-friendly input form
    setCurrentUser(username);

    // Emit 'join' event when the component mounts
    socketService.emit("join", username);

    // Listen for 'message' event from the server
    socketService.on("message", (message) => {
      setMessages([...messages, message]);
    });

    // Listen for 'updateUsers' event from the server
    socketService.on("updateUsers", (updatedUsers) => {
      setUsers(updatedUsers);
    });

    // Clean up listeners when the component unmounts
    return () => {
      socketService.emit("leave");
      socketService.disconnect();
    };
  }, [messages]);

  const sendMessage = (messageText) => {
    const message = {
      user: currentUser,
      text: messageText,
      avatar: "URL_TO_USER_AVATAR",
    };
    socketService.emit("message", message);
    setMessages([...messages, message]);
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={{ color: "white", textAlign: "center" }}>
        Public Chat App
      </Header>
      <Content>
        <Row gutter={[16, 16]} style={{ height: "80%" }}>
          <Col span={18}>
            <ChatWindow messages={messages} />
            <InputBox sendMessage={sendMessage} />
          </Col>
          <Col span={6}>
            <UserList users={users} />
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: "center" }}>© 2024 Public Chat App</Footer>
    </Layout>
  );
};

export default App;
