import React, { useState } from "react";
import { Input, Button, Tooltip, Typography, Spin } from "antd";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import useApiContext from "./useApiContext";
import "./Login.scss";

const Login = () => {
  const [userName, setUserName] = useState("beautifultiger295");
  const [password, setPassword] = useState("seinfeld");
  const { loading, checkUserPass } = useApiContext();
  const handleLogin = () => {
    checkUserPass(userName, password);
  };

  return (
    <div className="login">
      <Typography.Title className="header" level={3}>
        Login
      </Typography.Title>
      <Input
        className="user-name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter your username"
        prefix={<UserOutlined className="site-form-item-icon" />}
        suffix={
          <Tooltip title="Extra information">
            <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
          </Tooltip>
        }
      />
      <Input.Password
        className="password"
        placeholder="input password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {loading ? (
        <Spin size="large" className="login-btn" />
      ) : (
        <Button className="login-btn" type="primary" onClick={handleLogin}>
          Login
        </Button>
      )}
    </div>
  );
};

export default Login;
