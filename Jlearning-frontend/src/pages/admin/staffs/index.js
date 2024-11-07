import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ListAccount from "../../../components/Account/ListAccount";
import userSlice, { getUsers } from "../../../redux/userSlice";
import { ROLE } from "../../../constants/constants";

const AdminStaffPage = () => {
  const dispatch = useDispatch();
  const accounts = useSelector((state) => state.user.data);
  const isRefreshCourse = useSelector((state) => state.user.isRefresh);

  console.log("accounts", accounts);
  const { setCurrentPage } = userSlice.actions;

  React.useEffect(() => {
    dispatch(setCurrentPage("Quản lý nhân viên"));
  }, [dispatch, setCurrentPage]);

  React.useEffect(() => {
    dispatch(getUsers(ROLE.STAFF));
  }, [dispatch, isRefreshCourse]);

  return <ListAccount data={accounts ?? []} />;
};

export default AdminStaffPage;
