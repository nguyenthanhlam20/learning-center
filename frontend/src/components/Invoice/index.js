import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";
import { SchoolOutlined } from "@mui/icons-material";
import AlarmIcon from "@mui/icons-material/Alarm";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BookIcon from "@mui/icons-material/Book";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import EmailIcon from "@mui/icons-material/Email";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ROUTE_CONSTANTS } from "../../constants/route.constants";
import paymentSlice, { createPayment } from "../../redux/paymentSlice";
import AppDatePicker from "../AppInput/AppDatePicker";
import AppInput from "../AppInput/AppInput";
import AppInputPhone from "../AppInput/AppInputPhone";
import AppTextArea from "../AppInput/AppTextArea";

const Invoice = ({ data }) => {
  const user = useSelector((state) => state.authen.user);
  console.log("user", user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = React.useState({
    registerId: data?.id,
    paymentMethod: "Chuyển khoản",
    classId: data?.class?.classId,
    courseId: data?.course?.course_id,
    studentEmail: data?.studentEmail,
    amount: data?.course?.price,
    paymentDate: new Date(),
    studentName: user?.name,
    studentPhone: user?.phone,
    address: user?.address,
    dateOfBirth: user?.date_of_birth,
  });

  React.useEffect(() => {
    setValues({
      registerId: data?.id,
      paymentMethod: "Chuyển khoản",
      classId: data?.class?.classId,
      courseId: data?.course?.course_id,
      studentEmail: data?.studentEmail,
      amount: data?.course?.price,
      paymentDate: new Date(),
      studentName: user?.name ?? "",
      studentPhone: user?.phone ?? "",
      address: user?.address ?? "",
      dateOfBirth: user?.date_of_birth,
    });
  }, [data]);

  const { resetPayment } = paymentSlice.actions;
  const paymentUrl = useSelector((state) => state.payment.url);

  const goToPayment = localStorage.getItem("goToPayment");
  if (goToPayment > 0) {
    dispatch(resetPayment());
  }

  React.useEffect(() => {
    if (paymentUrl !== null && paymentUrl !== "" && paymentUrl !== undefined) {
      window.location.href = paymentUrl;

      if (!goToPayment) {
        localStorage.setItem("goToPayment", 1);
      } else {
        localStorage.setItem("goToPayment", parseInt(goToPayment) + 1);
      }
    }
  }, [paymentUrl, goToPayment]);

  const handlePayment = async () => {
    if (values.studentName.trim() === "") {
      toast.warning("Chưa nhập tên");
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

    if (values.address.trim() === "") {
      toast.warning("Chưa nhập địa chỉ");
      return;
    }

    if (values.dateOfBirth === null || values.dateOfBirth === undefined) {
      toast.warning("Chưa chọn ngày sinh");
      return;
    }

    const paymentDetails = {
      ...values,
      bankCode: "", // Optional bank code
      orderDescription: "Thanh toán hóa đơn mua khóa học", // The order description
      orderType: "", // Optional order type
      language: "vn", // Language preference
      ipAddr: window.location.hostname,
    };

    dispatch(createPayment(paymentDetails));
  };

  const handleChangeValue = (key, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const handleCancelBuy = () => {
    navigate(ROUTE_CONSTANTS.HOME_PAGE);
  };

  return (
    <>
      <Container className=" mb-24 block">
        <Stack spacing={3}>
          <div>
            <Grid container spacing={3}>
              <Grid
                xs={12}
                md={6}
                lg={4}
                className="rounded-md"
                sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" }}
              >
                <div className="relative   flex w-full flex-col  bg-white bg-clip-border text-gray-700 ">
                  <div className="bg-blue-gray-500 shadow-blue-gray-500/40  relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg">
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={data?.course.course_avatar_url}
                      alt="img-blur-shadow"
                    />
                  </div>
                  <Divider className="h-4" />
                  <Stack direction={"column"} spacing={2} sx={{ p: 3 }}>
                    <Typography>
                      <Stack direction={"row"} spacing={1}>
                        <SvgIcon color="primary">
                          <BookIcon />
                        </SvgIcon>
                        <div className="block text-base font-medium text-black">
                          {data?.course.course_name}
                        </div>
                      </Stack>
                    </Typography>
                    <Typography>
                      <Stack direction={"row"} spacing={1}>
                        <SvgIcon color="primary">
                          <SchoolOutlined />
                        </SvgIcon>
                        <div className="block text-base font-medium text-black">
                          {data?.class.className}
                        </div>
                      </Stack>
                    </Typography>
                    <Typography>
                      <Stack direction={"row"} spacing={1}>
                        <SvgIcon color="primary">
                          <AttachMoneyIcon />
                        </SvgIcon>
                        <div>
                          {new Intl.NumberFormat("vi-VN").format(
                            Number(data?.course.price)
                          ) + "₫"}
                        </div>
                      </Stack>
                    </Typography>
                    <Typography>
                      <Stack direction={"row"} spacing={1}>
                        <SvgIcon color="primary">
                          <AlarmIcon />
                        </SvgIcon>
                        <div>{data?.class.numberOfSlots + " buổi"}</div>
                      </Stack>
                    </Typography>
                  </Stack>
                </div>
              </Grid>
              <Grid xs={12} md={6} lg={8}>
                <Card
                  sx={{
                    ml: 3,
                    pt: 2,
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                  }}
                >
                  <CardContent className="h-[394px]" sx={{ pb: 5 }}>
                    <CardHeader title="Thông tin cá nhân" />
                    <Stack direction={"column"} spacing={2}>
                      <Stack direction={"row"} spacing={2} className="w-full">
                        <AppInput
                          value={values.studentName}
                          title={"studentName"}
                          handleChangeValue={handleChangeValue}
                          placeholder={"Tên đầy đủ"}
                        />
                        <AppInputPhone
                          value={values.studentPhone}
                          title={"studentPhone"}
                          handleChangeValue={handleChangeValue}
                          placeholder={"Số điện thoại"}
                        />
                      </Stack>
                      <Stack className="w-full" direction={"row"} spacing={2}>
                        <Chip
                          sx={{
                            borderRadius: 1,
                            height: 36,
                            paddingLeft: "8px",
                            justifyContent: "left",
                          }}
                          className="w-full"
                          color="default"
                          icon={<EmailIcon />}
                          label={"Email: " + values.studentEmail}
                        />
                        <AppDatePicker
                          value={values.dateOfBirth}
                          title={"dateOfBirth"}
                          handleChangeValue={handleChangeValue}
                          placeholder={"Ngày sinh"}
                        />
                      </Stack>

                      <Stack direction={"row"} spacing={2}>
                        <AppTextArea
                          height={"h-[180px]"}
                          value={values.address}
                          title={"address"}
                          handleChangeValue={handleChangeValue}
                          placeholder={"Địa chỉ"}
                        />
                      </Stack>
                    </Stack>
                  </CardContent>
                  <Divider />
                </Card>
              </Grid>
            </Grid>
          </div>
          <div className="flex w-full justify-end">
            <Stack direction={"row"} spacing={2}>
              <Button
                onClick={handleCancelBuy}
                color="error"
                variant="contained"
                className="w-[280px]"
              >
                <SvgIcon className="mr-2">
                  <XMarkIcon />
                </SvgIcon>{" "}
                Hủy
              </Button>
              <Button
                onClick={handlePayment}
                color="primary"
                variant="contained"
                className="w-[280px]"
              >
                <SvgIcon className="mr-2">
                  <CurrencyExchangeIcon />
                </SvgIcon>{" "}
                Thanh Toán
              </Button>
            </Stack>
          </div>
        </Stack>
      </Container>
    </>
  );
};

export default Invoice;
