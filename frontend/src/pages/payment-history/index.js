import React from "react";
import { useSelector } from "react-redux";
import Breadcrumb from "../../components/Common/Breadcrumb";
import SmoothScrollUp from "../../components/Common/SmoothScrollUp";
import ListPayment from "../../components/Payment/ListPayment";

const PaymentHistoryPage = () => {
  const user = useSelector((state) => state.authen.user);
  const courses = useSelector((state) => state.course.data);

  return (
    <>
      <SmoothScrollUp />
      <Breadcrumb
        pageName="Lịch sử giao dịch"
        description="Xem thông tin các giao dịch mà bạn thanh toán"
      />
      <ListPayment user={user} courses={courses} />
    </>
  );
};

export default PaymentHistoryPage;
