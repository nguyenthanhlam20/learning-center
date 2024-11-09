import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SmoothScrollUp from "../../components/Common/SmoothScrollUp";
import { getCourses } from "../../redux/courseSlice";
import CourseList from "./CourseList";

const CoursePage = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.course.data);

  React.useEffect(() => {
    dispatch(getCourses());
  }, []);

  return (
    <>
      <SmoothScrollUp />
      <CourseList data={courses} />
    </>
  );
};

export default CoursePage;
