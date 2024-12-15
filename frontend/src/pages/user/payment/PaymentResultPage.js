import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import courseSlice, { insertUserCourse } from "../../../redux/courseSlice";
import paymentSlice, { insertPayment } from "../../../redux/paymentSlice";
import PaymentFailed from "./PaymentFailed";
import PaymentSuccess from "./PaymentSuccess";
import { Box, CircularProgress } from "@mui/material";
import PaymentLoading from "./PaymentLoading";

const PaymentResultPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const status = params.get("vnp_TransactionStatus");
  const [paymentStatus, _] = React.useState(
    2 === parseInt(status) ? false : true
  );

  const { resetPayment, resetInsertFinish } = paymentSlice.actions;
  const { setIsRefresh } = courseSlice.actions;
  const payment = useSelector((state) => state.payment.data);
  const insertFinish = useSelector((state) => state.payment.insertFinish);
  const [isLoading, setIsLoading] = useState(true);

  console.log("insertFinish", insertFinish);
  console.log("isLoading", isLoading);

  let flag = paymentStatus;
  React.useEffect(() => {
    if (flag === true && payment !== null) {
      if (paymentStatus === true) {
        dispatch(insertPayment(payment));
        flag = false;
        dispatch(setIsRefresh());
      }
      dispatch(resetPayment());
    }
  }, []);

  React.useEffect(() => {
    if (insertFinish === true) {
      const timeout = setTimeout(() => {
        setIsLoading(false);
        dispatch(resetInsertFinish());
      }, [500]);

      return () => {
        clearTimeout(timeout);
      };
    }

    if (paymentStatus === false) {
      setIsLoading(false);
    }
  }, [insertFinish, paymentStatus]);

  return (
    <>
      {isLoading === true ? (
        <PaymentLoading />
      ) : (
        <>{paymentStatus === false ? <PaymentFailed /> : <PaymentSuccess />}</>
      )}
    </>
  );
};

export default PaymentResultPage;
