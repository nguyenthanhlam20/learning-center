import React, { useEffect } from "react";
import Dashboard from "../admin/dashboard";
import UserHomePage from "../user/home";
import PublicHomePage from "../public/home";
import { ROLE } from "../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { deactivateClasses, getUserCourses } from "../../redux/courseSlice";
import EditAccount from "../account/edit";

const HomePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authen.user);
  const isRefreshUserCourses = useSelector((state) => state.course.isRefresh);

  React.useEffect(() => {
    if (user !== null) {
      dispatch(getUserCourses({ email: user.email }));
    }
  }, [isRefreshUserCourses]);

  useEffect(() => {
    console.count("deactivate-classess");
    dispatch(deactivateClasses());
  }, []);

  return (
    <>
      {user !== null ? (
        user.role_id === ROLE.USER ? (
          <UserHomePage />
        ) : user.role_id === ROLE.ADMIN ? (
          <Dashboard />
        ) : (
          <EditAccount />
        )
      ) : (
        <PublicHomePage />
      )}
    </>
  );
};

export default HomePage;
