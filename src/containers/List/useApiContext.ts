import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store/randomUser";
import { RandomUserResponse } from "../../api/randomUser";
import { randomUserSelectors } from "../../store/randomUser";
import randomUser from "../../api/randomUser";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const fetchData = async ({ pageNumber = 1, pageSize = 10 }) => {
    dispatch(actions.randomUsersRequested());
    try {
      const data = await randomUser.getRandomUser({
        page: pageNumber,
        results: pageSize,
      });
      dispatch(actions.randomUsersSuccess({ randomUser: data.results }));
    } catch (err) {
      dispatch(actions.randomUsersfailed({ error: (err as any).message }));
    }
  };

  const changePageSize = (pageSize: number) => {
    setPageSize(pageSize);
  };

  const changePage = (pageNumber: number) => {
    setPageNumber(pageNumber);
  };

  useEffect(() => {
    fetchData({ pageNumber, pageSize });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber, pageSize]);

  const loading = useSelector(randomUserSelectors.loading);
  const error = useSelector(randomUserSelectors.error);
  const data: RandomUserResponse[] = useSelector(
    randomUserSelectors.randomUser
  );

  return {
    fetchData,
    changePageSize,
    changePage,
    pageNumber,
    pageSize,
    loading,
    error,
    data,
  };
}
