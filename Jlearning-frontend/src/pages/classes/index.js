import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ListClass from "../../components/Classes/ListClasses";
import classSlice, { getClasses } from "../../redux/classSlice";
import { getStaffs, getTeachers, getUsers } from "../../redux/userSlice";
import { getCourses } from "../../redux/courseSlice";

const AdminClassPage = () => {
  const dispatch = useDispatch();
  const classes = useSelector((state) => state.classes.data);
  const isRefreshClass = useSelector((state) => state.classes.isRefresh);

  console.log("classes", classes);
  const { setCurrentPage } = classSlice.actions;

  React.useEffect(() => {
    dispatch(setCurrentPage("Quản lý lớp học"));
  }, [dispatch, setCurrentPage]);

  React.useEffect(() => {
    dispatch(getClasses());
  }, [dispatch, isRefreshClass]);

  const staffs = useSelector((state) => state.user.staffs);
  const teachers = useSelector((state) => state.user.teachers);
  const courses = useSelector((state) => state.course.data);

  React.useEffect(() => {
    dispatch(getStaffs());
    dispatch(getTeachers());
    dispatch(getCourses());
  }, []);

  return (
    <ListClass
      data={classes ?? []}
      title={"lớp học"}
      staffs={staffs}
      teachers={teachers}
      courses={courses}
    />
  );
};

export default AdminClassPage;
