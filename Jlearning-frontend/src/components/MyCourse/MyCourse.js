import React from "react";
import { useSelector } from "react-redux";
import CourseCarousel from "../Course/CourseCarousel";

const MyCourse = () => {
  const courses = useSelector((state) => state.course.userCourses);

  return (
    <>
      {courses?.length > 0 ? (
        <CourseCarousel
          data={courses}
          title={"KHÓA HỌC BẠN ĐÃ ĐĂNG KÝ"}
          paragraph={"Danh sách các khóa học bạn đã đăng ký"}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default MyCourse;
