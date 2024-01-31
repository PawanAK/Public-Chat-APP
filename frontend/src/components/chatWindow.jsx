/* eslint-disable react/prop-types */
// components/ChatWindow.jsx

import { List, Avatar } from "antd";

const ChatWindow = ({ messages }) => {
  return (
    <List
      dataSource={messages}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={item.user}
            description={item.text}
          />
        </List.Item>
      )}
    />
  );
};

export default ChatWindow;
