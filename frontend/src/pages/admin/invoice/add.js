import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";
import { Check } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AppInput from "../../../components/AppInput/AppInput";
import AppInputNumber from "../../../components/AppInput/AppInputNumber";
import AppSelect from "../../../components/AppInput/AppSelect";
import { ROUTE_CONSTANTS } from "../../../constants/route.constants";
import { getClasses } from "../../../redux/classSlice";
import { getCourses } from "../../../redux/courseSlice";
import { insertPayment } from "../../../redux/paymentSlice";
import { toast } from "react-toastify";
import AppDatePicker from "../../../components/AppInput/AppDatePicker";

export default function AddInvoicePage() {
  const classes = useSelector((state) => state.classes.data);
  const courses = useSelector((state) => state.course.data);
  const isRefresh = useSelector((state) => state.payment.isRefresh);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getClasses());
    dispatch(getCourses());
  }, []);

  const [values, setValues] = useState({
    studentName: "",
    studentEmail: "",
    studentPhone: "",
    address: "",
    dateOfBirth: "",
    classId: 0,
    courseId: 0,
    paymentMethod: "",
    amount: 0,
    paymentDate: new Date(),
  });

  const handleChangeValue = (key, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (values.studentName.trim() === "") {
      toast.warning("Chưa nhập tên");
      return;
    }
    if (values.address.trim() === "") {
      toast.warning("Chưa nhập địa chỉ");
      return;
    }

    if (values.dateOfBirth.trim() === "") {
      toast.warning("Chưa chọn ngày sinh");
      return;
    }
    if (values.studentEmail.trim() === "") {
      toast.warning("Chưa nhập email");
      return;
    }
    if (values.studentPhone.trim() === "") {
      toast.warning("Chưa nhập số điện thoại");
      return;
    }

    if (values.studentPhone.trim().length !== 10) {
      toast.warning("Số điện thoại không hợp lệ");
      return;
    }

    if (values.paymentMethod.trim() === "") {
      toast.warning("Chưa nhập phương thức thanh toán");
      return;
    }

    if (parseInt(values.amount) <= 0) {
      toast.warning("Chưa nhập giá");
      return;
    }

    if (parseInt(values.courseId) <= 0) {
      toast.warning("Chưa chọn khóa học");
      return;
    }

    if (parseInt(values.classId) <= 0) {
      toast.warning("Chưa chọn lớp học");
      return;
    }

    dispatch(insertPayment(values));
  };

  useEffect(() => {
    if (isRefresh === true) handleReturn();
  }, [isRefresh]);

  const handleReturn = () => navigate(ROUTE_CONSTANTS.ADMIN_INVOICE_PAGE);

  return (
    <Stack className="my-5 ml-72 p-4" direction={"row"} gap={3}>
      <Box
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
          borderRadius: "10px",
          width: "100%",
        }}
      >
        <Stack spacing={3} p={3} sx={{ width: "100%" }}>
          <Typography fontWeight={"bold"} variant="h5" textAlign={"center"}>
            Thêm mới hóa đơn thanh toán
          </Typography>

          <Stack spacing={2}>
            <AppInput
              value={values?.studentName}
              title={"studentName"}
              handleChangeValue={handleChangeValue}
              placeholder={"Họ và tên"}
            />
            <AppInput
              value={values?.address}
              title={"address"}
              handleChangeValue={handleChangeValue}
              placeholder={"Địa chỉ"}
            />
            <AppDatePicker
              value={values.dateOfBirth}
              title={"dateOfBirth"}
              handleChangeValue={handleChangeValue}
              placeholder={"Ngày sinh"}
            />
            <AppInput
              value={values?.studentEmail}
              title={"studentEmail"}
              handleChangeValue={handleChangeValue}
              placeholder={"Email"}
            />
            <AppInput
              value={values?.studentPhone}
              title={"studentPhone"}
              handleChangeValue={handleChangeValue}
              placeholder={"Số điện thoại"}
            />
            <AppInput
              value={values?.paymentMethod}
              title={"paymentMethod"}
              handleChangeValue={handleChangeValue}
              placeholder={"Phương thức thanh toán"}
            />
            <AppInputNumber
              value={values?.amount}
              title={"amount"}
              handleChangeValue={handleChangeValue}
              placeholder={"Giá"}
            />
            <AppSelect
              value={values?.courseId}
              data={courses}
              title={"courseId"}
              display={"course_name"}
              placeholder={"Chọn khóa học"}
              itemKey="course_id"
              handleChangeValue={handleChangeValue}
            />
            <AppSelect
              value={values?.classId}
              data={classes}
              title={"classId"}
              display={"className"}
              placeholder={"Chọn lớp"}
              itemKey="classId"
              handleChangeValue={handleChangeValue}
            />
          </Stack>
          <Divider />

          <Stack spacing={2} direction={"row"} justifyContent={"end"}>
            <Button
              color="error"
              variant="contained"
              className=" w-[150px]"
              onClick={handleReturn}
            >
              <SvgIcon className="mr-2">
                <XMarkIcon />
              </SvgIcon>
              Hủy
            </Button>
            <Button
              onClick={handleSubmit}
              color="primary"
              variant="contained"
              className="ml-3 w-[150px]"
            >
              <SvgIcon className="mr-2">
                <Check />
              </SvgIcon>
              Lưu
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}
