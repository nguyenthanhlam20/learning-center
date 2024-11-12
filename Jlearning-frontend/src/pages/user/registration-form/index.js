import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRegistrationForms,
  getRegistrationFormsByUser,
} from "../../../redux/registrationFormSlice";
import ListRegistration from "./ListRegistration";

export default function RegistrationFormPage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.registrationForm.data);
  const isRefresh = useSelector((state) => state.registrationForm.isRefresh);
  const user = useSelector((state) => state.authen.user);

  React.useEffect(() => {
    dispatch(getRegistrationFormsByUser(user?.email));
  }, [dispatch, isRefresh]);

  return <ListRegistration data={data} />;
}
