import React from "react";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import SmoothScrollUp from "../../../components/Common/SmoothScrollUp";
import CourseCard from "../../../components/Course/CourseCard";

const UserCourses = ({ userCourses }) => {
  return (
    <>
      <SmoothScrollUp />
      <Breadcrumb
        pageName="Khóa học của tôi"
        description="Các khóa học của bạn"
      />
      <div className="relative w-full pb-40 pl-20 pr-20">
        <div
          className={` grid h-full w-full grid-cols-1 gap-x-8 gap-y-10 duration-700 ease-in-out md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3 `}
        >
          {userCourses &&
            userCourses?.map((course, key) => (
              <CourseCard key={"course-card-" + key} course={course} />
            ))}
        </div>
      </div>
    </>
  );
};

export default UserCourses;
