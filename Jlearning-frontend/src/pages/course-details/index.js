import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getCourseById } from "../../redux/courseSlice";
import CourseDetails from "./CourseDetails";

const CourseDetailPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const course_id = params.get("course_id");
  const dispatch = useDispatch();

  const course = useSelector((state) => state.course.specific);

  React.useEffect(() => {
    dispatch(getCourseById({ course_id: course_id }));
  }, []);

  return <CourseDetails course={course} />;
};

export default CourseDetailPage;
