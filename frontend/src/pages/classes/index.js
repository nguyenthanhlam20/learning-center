import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ListClass from "../../components/Classes/ListClasses";
import classSlice, { getClasses } from "../../redux/classSlice";
import { getStaffs, getTeachers, getUsers } from "../../redux/userSlice";
import { getCourses } from "../../redux/courseSlice";
import { ROLE } from "../../constants/constants";

const AdminClassPage = () => {
  const dispatch = useDispatch();
  let classes = useSelector((state) => state.classes.data);
  const isRefreshClass = useSelector((state) => state.classes.isRefresh);
  const user = useSelector((state) => state.authen.user);
  const isRefreshClassMember = useSelector(
    (state) => state.classMember.isRefresh
  );

  console.log("classes", classes);
  const { setCurrentPage } = classSlice.actions;

  React.useEffect(() => {
    dispatch(setCurrentPage("Quản lý lớp học"));
  }, [dispatch, setCurrentPage]);

  React.useEffect(() => {
    dispatch(getClasses());
  }, [dispatch, isRefreshClass, isRefreshClassMember]);

  const staffs = useSelector((state) => state.user.staffs);
  const teachers = useSelector((state) => state.user.teachers);
  const courses = useSelector((state) => state.course.data);

  React.useEffect(() => {
    dispatch(getStaffs());
    dispatch(getTeachers());
    dispatch(getCourses());
  }, []);
  if (user?.role_id === ROLE.STAFF) {
    classes = classes?.filter(
      (x) => x.staffEmailNavigation.email === user?.email
    );
  }
  if (user?.role_id === ROLE.TEACHER) {
    classes = classes?.filter(
      (x) => x.teacherEmailNavigation.email === user?.email
    );
  }

  const allowInsert = user?.role_id === ROLE.ADMIN;

  console.log("classes", classes);
  return (
    <ListClass
      data={classes ?? []}
      title={"lớp học"}
      staffs={staffs}
      teachers={teachers}
      courses={courses}
      allowInsert={allowInsert}
    />
  );
};

export default AdminClassPage;
