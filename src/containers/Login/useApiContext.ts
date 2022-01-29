import { useEffect } from "react";
import loginApi, { LogiResponse } from "../../api/login";
import { useDispatch, useSelector } from "react-redux";
import { actions, LoginSelectors } from "../../store/login";
import { message } from "antd";
import { useHistory } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const dispatch = useDispatch();
  const history = useHistory();
  const checkUserPass = async (username: string, password: string) => {
    try {
      dispatch(actions.loginRequested());
      const data = await loginApi.login();
      if (username !== data.login.username) {
        message.warn("Invalid credential");
        throw new Error("Invalid credential");
      }
      if (password !== data.login.password) {
        message.warn("Invalid credential");
        throw new Error("Invalid credential");
      }
      dispatch(actions.loginSuccess({ ...data }));
      history.push("/");
    } catch (err) {
      dispatch(actions.loginFailed({ error: (err as any).message }));
    }
  };

  const loading = useSelector(LoginSelectors.loading);
  const error = useSelector(LoginSelectors.error);
  const data: LogiResponse = useSelector(LoginSelectors.login);

  useEffect(() => {}, []);

  return {
    loading,
    error,
    data,
    checkUserPass,
  };
}
