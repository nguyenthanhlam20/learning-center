import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import SmoothScrollUp from "../../../components/Common/SmoothScrollUp";
import LessonDetails from "./LessonDetails";

const LessonViewPage = () => {
  const user = useSelector((state) => state.authen.user);
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const course_id = params.get("course_id");
  const dispatch = useDispatch();

  return (
    <>
      <SmoothScrollUp />
      <LessonDetails course_id={course_id} user={user} />
    </>
  );
};

export default LessonViewPage;
