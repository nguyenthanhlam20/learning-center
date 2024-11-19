import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SmoothScrollUp from "../../components/Common/SmoothScrollUp";
import TeacherList from "./TeacherList";
import { getUsers } from "../../redux/userSlice";
import { ROLE } from "../../constants/constants";

const TeacherPage = () => {
  const dispatch = useDispatch();
  const accounts = useSelector((state) => state.user.data);
  const isRefreshCourse = useSelector((state) => state.user.isRefresh);

  console.log("accounts", accounts);

  React.useEffect(() => {
    dispatch(getUsers(ROLE.TEACHER));
  }, [dispatch, isRefreshCourse]);
  const a = accounts?.filter((x) => x.status === true) ?? [];

  return (
    <>
      <SmoothScrollUp />
      <TeacherList data={a} />
    </>
  );
};

export default TeacherPage;
