import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListClassMember from "../../components/ClassMembers/ListClassMember";
import { ROLE } from "../../constants/constants";
import { getClassMembers } from "../../redux/classMemberSlice";
import userSlice from "../../redux/userSlice";
import { useLocation } from "react-router-dom";
import { getClass } from "../../redux/classSlice";

const AdminClassMemberPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const classId = params.get("classId");

  const dispatch = useDispatch();
  const classMembers = useSelector((state) => state.classMember.data);
  const isRefreshClass = useSelector((state) => state.classMember.isRefresh);

  const specificClass = useSelector((state) => state.classes.specific);

  useEffect(() => {
    dispatch(getClass(classId));
  }, []);

  const { setCurrentPage } = userSlice.actions;

  useEffect(() => {
    const title = `Quản lý thành viên lớp - ${specificClass?.className}`;
    dispatch(setCurrentPage(title));
  }, [dispatch, setCurrentPage, specificClass]);

  useEffect(() => {
    dispatch(getClassMembers(classId));
  }, [dispatch, isRefreshClass]);

  return (
    <ListClassMember
      data={classMembers ?? []}
      title={"thành viên lớp"}
      roleId={ROLE.USER}
      classId={classId}
    />
  );
};

export default AdminClassMemberPage;
