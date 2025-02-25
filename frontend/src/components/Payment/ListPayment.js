import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";
import { SchoolOutlined } from "@mui/icons-material";
import AlarmIcon from "@mui/icons-material/Alarm";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BookIcon from "@mui/icons-material/Book";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppInput from "../../components/AppInput/AppInput";
import { getPaymentsByUser } from "../../redux/paymentSlice";
import { PaymentTable } from "../../sections/table/payment-table";
import Badge from "../Badge";

const ListPayment = ({ user, courses }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.payment.paymentByUsers);
  const isRefresh = useSelector((state) => state.payment.isRefresh);

  React.useEffect(() => {
    dispatch(getPaymentsByUser({ email: user?.email }));
  }, [isRefresh]);

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [payments, setPayments] = useState(data);

  const [paymentsPagination, setPaymentsPagination] = useState(
    payments?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  );
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [searchTerm, setSearchTerm] = React.useState({ value: "" });

  React.useEffect(() => {
    setPayments(data);
    setPaymentsPagination(
      payments?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    );
  }, [data]);

  const [currentPayment, setCurrentPayment] = React.useState(null);
  const [currentCourse, setCurrentCourse] = React.useState(null);
  console.log(data);

  React.useEffect(() => {
    if (currentPayment === null) {
      setCurrentCourse(null);
    } else {
      setCurrentCourse(
        courses.find((c) => c.course_id === currentPayment.course_id)
      );
    }
  }, [currentPayment]);

  const handleCloseModal = () => {
    setIsOpenModal(false);
    setCurrentPayment(null);
  };

  const handlePageChange = (value) => {
    setPage(value);
    setPaymentsPagination(
      payments?.slice(value * rowsPerPage, value * rowsPerPage + rowsPerPage)
    );
  };

  const handleChangeSearchTerm = (key, value) => {
    setSearchTerm({
      [key]: value,
    });
  };

  const handleRowsPerPageChange = (event) => {
    setPage(0);
    setRowsPerPage(event.target.value);

    let endIndex = rowsPerPage;
    if (payments?.length < endIndex) endIndex = payments?.length;

    setPaymentsPagination(payments?.slice(0, endIndex));
  };

  React.useEffect(() => {
    const result = data?.filter((payment) =>
      payment?.course?.course_name
        ?.toLowerCase()
        .includes(searchTerm?.value.toLowerCase())
    );
    setPayments(result);
    setPage(0);
    setRowsPerPage(5);

    let endIndex = 5;
    if (result?.length < endIndex) endIndex = result?.length;

    setPaymentsPagination(result?.slice(0, endIndex));
  }, [searchTerm.value]);

  const handleClearSearch = () => {
    setSearchTerm({
      value: "",
    });
  };
  const getInvoiceId = (id) => {
    const idStr = new String(id);

    let str = "#00000";
    const result = str.slice(0, str?.length - idStr?.length);
    console.log(result);
    return result + id;
  };

  return (
    <div className="relative w-full pb-40 pl-20 pr-20">
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 5,
          mb: 10,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={2} sx={{ mt: 2 }}>
            <Card sx={{ p: 2, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }}>
              <Stack direction={"row"} spacing={2}>
                <div className="w-96 ">
                  <AppInput
                    value={searchTerm.value}
                    handleChangeValue={handleChangeSearchTerm}
                    placeholder={"Tìm kiếm lịch sử giao dịch"}
                    title={"value"}
                  />
                </div>
                {searchTerm.value != "" ? (
                  <Button
                    onClick={handleClearSearch}
                    variant="contained"
                    size="medium"
                    color="error"
                  >
                    Xóa
                  </Button>
                ) : (
                  <></>
                )}
              </Stack>
            </Card>
            {payments?.length > 0 ? (
              <PaymentTable
                count={payments?.length}
                items={paymentsPagination}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsPerPageChange}
                page={page}
                rowsPerPage={rowsPerPage}
                user={user}
                courses={courses}
                setIsOpenModal={setIsOpenModal}
                setCurrentPayment={setCurrentPayment}
              />
            ) : (
              <>
                <Card
                  sx={{
                    p: 2,
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
                    height: 525,
                  }}
                >
                  <CardContent>
                    <div className="mt-[200px] h-full w-full text-center text-xl font-bold">
                      Không tìm thấy kết quả
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </Stack>
        </Container>
      </Box>

      <Dialog fullWidth maxWidth="lg" open={isOpenModal}>
        <DialogTitle>
          <div className="flex justify-between">
            <p>Hóa Đơn {getInvoiceId(currentPayment?.paymentId)}</p>
            <p className="text-body-color">
              Ngày tạo:{" "}
              {new Date(currentPayment?.paymentDate).toLocaleDateString()}
            </p>
          </div>
        </DialogTitle>
        <DialogContent>
          <Stack spacing={3} sx={{ mt: 8, pl: 6, pr: 5, mb: 2 }}>
            <div>
              <Grid container spacing={3}>
                <Grid
                  xs={12}
                  md={6}
                  lg={4}
                  className="rounded-md"
                  sx={{
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                  }}
                >
                  <div className="relative   flex w-full flex-col  bg-white bg-clip-border text-gray-700 ">
                    <div
                      style={{ height: "200px" }}
                      className="bg-blue-gray-500 shadow-blue-gray-500/40  relative mx-4 -mt-6  overflow-hidden rounded-xl bg-clip-border text-white shadow-lg"
                    >
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        src={currentPayment?.course?.course_avatar_url}
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
                            {currentPayment?.course?.course_name}
                          </div>
                        </Stack>
                      </Typography>
                      <Typography>
                        <Stack direction={"row"} spacing={1}>
                          <SvgIcon color="primary">
                            <SchoolOutlined />
                          </SvgIcon>
                          <div className="block text-base font-medium text-black">
                            {currentPayment?.class?.className}
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
                              Number(currentPayment?.course?.price)
                            ) + "₫"}
                          </div>
                        </Stack>
                      </Typography>
                      <Typography>
                        <Stack direction={"row"} spacing={1}>
                          <SvgIcon color="primary">
                            <AlarmIcon />
                          </SvgIcon>
                          <div>
                            {currentPayment?.class?.numberOfSlots + " buổi"}
                          </div>
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
                    <CardContent className="h-[370px]" sx={{ pb: 5 }}>
                      <CardHeader title="Thông tin cá nhân" />
                      <CardContent>
                        <Stack direction={"column"} spacing={3}>
                          <p>Họ và tên: {currentPayment?.student?.name}</p>
                          <p>Email: {currentPayment?.student?.email}</p>
                          <p>Sđt: {currentPayment?.student?.phone}</p>
                          <p>Địa chỉ: {currentPayment?.student?.address}</p>
                          <Stack direction={"row"} spacing={3}>
                            <span>Trạng thái giao dịch:</span>
                            <Badge color="green" text={"Đã thanh toán"} />
                          </Stack>
                        </Stack>
                      </CardContent>
                    </CardContent>
                    <Divider />
                  </Card>
                </Grid>
              </Grid>
            </div>
            <div className="flex w-full justify-end">
              <Stack direction={"row"} spacing={2}>
                <Button
                  onClick={handleCloseModal}
                  color="error"
                  variant="contained"
                  className="w-[280px]"
                >
                  <SvgIcon className="mr-2">
                    <XMarkIcon />
                  </SvgIcon>{" "}
                  Đóng
                </Button>
              </Stack>
            </div>
          </Stack>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ListPayment;
