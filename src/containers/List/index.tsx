import React, { useState } from "react";
import useApiContext from "./useApiContext";
import Card from "./Card";
import "./List.scss";
import { message, Spin, Pagination, Modal, Button } from "antd";
import { RandomUserResponse } from "../../api/randomUser";
import { useDispatch } from "react-redux";

interface Props {}

const List: React.FC<Props> = () => {
  const [moreInfoModalVisible, setMoreInfoModalVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState<RandomUserResponse>();

  const dispatch = useDispatch();

  const { changePage, changePageSize, loading, error, data } = useApiContext();

  const handleUserCardClick = (user: RandomUserResponse) => {
    setMoreInfoModalVisible(true);
    setCurrentUser(user);
  };

  const handleLogoutClick = () => {
    dispatch({ type: "login/logout" });
  };

  if (error) {
    message.warn(error);
  }
  return (
    <div>
      <Modal
        title="More Info"
        visible={moreInfoModalVisible}
        onOk={() => setMoreInfoModalVisible(false)}
        onCancel={() => setMoreInfoModalVisible(false)}
      >
        {currentUser && <Card user={currentUser} />}
      </Modal>
      <div className="pagination-layout">
        <div className="logout">
          <Button type="primary" onClick={handleLogoutClick}>
            Logout
          </Button>
        </div>

        <Pagination
          total={500}
          showSizeChanger
          showQuickJumper
          onChange={(page, pageSize) => {
            console.log(page, pageSize);
            changePage(page);
            changePageSize(pageSize);
          }}
        />
      </div>
      {loading ? (
        <Spin size="large" className="spinner-layout" />
      ) : (
        <div className="list">
          {data.map((user) => (
            <Card user={user} onClick={handleUserCardClick} />
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
