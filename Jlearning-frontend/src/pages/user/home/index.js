import React from "react";
import ScrollUp from "../../../components/Common/ScrollUp";
import Contact from "../../../components/Contact";
import Course from "../../../components/Course";
import MyCourse from "../../../components/MyCourse/MyCourse";
const UserHomePage = () => {
  return (
    <>
      <ScrollUp />
      <div className="py-44">
        <MyCourse />
        <Course />
        <Contact />
      </div>
    </>
  );
};

export default UserHomePage;
