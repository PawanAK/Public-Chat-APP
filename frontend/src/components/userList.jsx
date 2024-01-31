/* eslint-disable react/prop-types */
import { List, Avatar } from "antd";

const UserList = ({ users }) => {
  return (
    <List
      dataSource={users}
      renderItem={(user) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={user.avatar} />}
            title={user.username}
          />
        </List.Item>
      )}
    />
  );
};

export default UserList;
