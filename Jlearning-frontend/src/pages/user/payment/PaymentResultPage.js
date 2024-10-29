import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import courseSlice, { insertUserCourse } from "../../../redux/courseSlice";
import paymentSlice, { insertPayment } from "../../../redux/paymentSlice";
import PaymentFailed from "./PaymentFailed";
import PaymentSuccess from "./PaymentSuccess";

const PaymentResultPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const status = params.get("vnp_TransactionStatus");
  const [paymentStatus, _] = React.useState(
    2 === parseInt(status) ? false : true
  );

  const { resetPayment } = paymentSlice.actions;
  const { setIsRefresh } = courseSlice.actions;
  const payment = useSelector((state) => state.payment.data);

  let flag = paymentStatus;
  React.useEffect(() => {
    if (flag === true && payment !== null) {
      if (paymentStatus === true) {
        dispatch(
          insertUserCourse({
            email: payment.email,
            course_id: payment.course_id,
            enrolled_date: payment.created_date,
          })
        );
        dispatch(insertPayment(payment));
        flag = false;
        dispatch(setIsRefresh());
      }
      dispatch(resetPayment());
    }
  }, []);
  return (
    <> {paymentStatus === false ? <PaymentFailed /> : <PaymentSuccess />}</>
  );
};

export default PaymentResultPage;
