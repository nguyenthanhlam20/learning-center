import * as React from "react";
import ListRegistration from "./ListRegistration";
import { useDispatch, useSelector } from "react-redux";
import { getRegistrationForms } from "../../../redux/registrationFormSlice";
import userSlice from "../../../redux/userSlice";

const ListRegistrationPage = () => {
  console.log("ok");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.registrationForm.data);
  const isRefresh = useSelector((state) => state.registrationForm.isRefresh);

  const { setCurrentPage } = userSlice.actions;

  React.useEffect(() => {
    dispatch(setCurrentPage("Quản lý phiếu đăng ký"));
  }, [dispatch, setCurrentPage]);

  React.useEffect(() => {
    dispatch(getRegistrationForms());
  }, [dispatch, isRefresh]);

  return <ListRegistration data={data} />;
};
export default ListRegistrationPage;
