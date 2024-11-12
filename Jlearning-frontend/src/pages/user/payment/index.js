import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import SectionTitle from "../../../components/Common/SectionTitle";
import SmoothScrollUp from "../../../components/Common/SmoothScrollUp";
import Invoice from "../../../components/Invoice";
import { getRegistrationForm } from "../../../redux/registrationFormSlice";

const PaymentPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const registerId = params.get("registerId");
  const dispatch = useDispatch();

  const data = useSelector((state) => state.registrationForm.specific);
  React.useEffect(() => {
    dispatch(getRegistrationForm(registerId));
  }, [registerId]);

  console.log("registerId", registerId);

  return (
    <>
      <SmoothScrollUp />
      <Breadcrumb
        pageName="Thanh toán"
        description="Thanh toán đăng ký khóa học"
      />
      <SectionTitle
        title={"Hóa Đơn"}
        center
        paragraph={"Ngày tạo: " + new Date().toLocaleDateString()}
        mb="70px"
      />
      <Invoice data={data} />
    </>
  );
};

export default PaymentPage;
