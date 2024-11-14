import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ListAccount from "../../../components/Account/ListAccount";
import userSlice, { getUsers } from "../../../redux/userSlice";
import { ROLE } from "../../../constants/constants";

const AdminStudentPage = () => {
  const dispatch = useDispatch();
  const accounts = useSelector((state) => state.user.data);
  const isRefreshCourse = useSelector((state) => state.user.isRefresh);

  console.log("accounts", accounts);
  const { setCurrentPage } = userSlice.actions;

  React.useEffect(() => {
    dispatch(setCurrentPage("Quản lý học viên"));
  }, [dispatch, setCurrentPage]);

  React.useEffect(() => {
    dispatch(getUsers(ROLE.USER));
  }, [dispatch, isRefreshCourse]);

  const valid = accounts?.filter((x) => x.class_member?.length > 0);

  return (
    <ListAccount data={valid ?? []} roleId={ROLE.USER} title={"học viên"} />
  );
};

export default AdminStudentPage;
