import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCourses from "./UserCourses";
import { getUserCourses } from "../../../redux/courseSlice";

const MyCoursePage = () => {
  const userCourses = useSelector((state) => state.course.userCourses);
  const user = useSelector((state) => state.authen.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserCourses({ email: user.email }));
  }, []);

  return <UserCourses userCourses={userCourses} />;
};

export default MyCoursePage;
