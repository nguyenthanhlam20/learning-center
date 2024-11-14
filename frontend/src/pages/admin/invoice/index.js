import { useDispatch, useSelector } from "react-redux";
import SmoothScrollUp from "../../../components/Common/SmoothScrollUp";
import React from "react";
import { getAllPayments } from "../../../redux/paymentSlice";
import ListInvoice from "./ListInvoice";
import userSlice from "../../../redux/userSlice";

const AdminInvoicePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authen.user);
  const payments = useSelector((state) => state.payment.allPayments);
  const courses = useSelector((state) => state.course.data);
  const { setCurrentPage } = userSlice.actions;
  const isRefresh = useSelector((state) => state.payment.isRefresh);

  React.useEffect(() => {
    dispatch(setCurrentPage("Quản lý hóa đơn"));
  }, [dispatch, setCurrentPage]);

  React.useEffect(() => {
    dispatch(getAllPayments());
  }, [isRefresh]);

  console.log(payments);

  return (
    <>
      <SmoothScrollUp />
      <ListInvoice data={payments} user={user} courses={courses} />
    </>
  );
};

export default AdminInvoicePage;
