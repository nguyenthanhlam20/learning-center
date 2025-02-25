import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";
import { FileDownload, SchoolOutlined } from "@mui/icons-material";
import AlarmIcon from "@mui/icons-material/Alarm";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BookIcon from "@mui/icons-material/Book";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
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
import dayjs from "dayjs";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppInput from "../../../components/AppInput/AppInput";
import ExportDialog from "../../../components/Export";
import { ROUTE_CONSTANTS } from "../../../constants/route.constants";
import { InvoiceTable } from "../../../sections/table/invoice-table";

const ListInvoice = ({ data, user, courses }) => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [invoices, setInvoices] = useState(data);

  const [invoicesPagination, setInvoicesPagination] = useState(
    invoices?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  );
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [searchTerm, setSearchTerm] = React.useState({ value: "" });

  const [currentInvoice, setCurrentInvoice] = React.useState(null);
  const headers = [
    { label: "Mã hóa đơn", key: "paymentId" },
    { label: "Họ và tên", key: "student.name" },
    { label: "Khóa học", key: "course.course_name" },
    { label: "Lớp học", key: "class.className" },
    { label: "Email", key: "student.email" },
    { label: "Số điện thoại", key: "student.phone" },
    { label: "Giá", key: "amount" },
    { label: "Ngày mua", key: "paymentDate" },
    { label: "Phương thức", key: "paymentMethod" },
  ];

  React.useEffect(() => {
    setInvoices(data);
    setInvoicesPagination(
      invoices?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    );
  }, [data]);

  const handleCloseModal = () => {
    setIsOpenModal(false);
    setCurrentInvoice(null);
  };

  const handlePageChange = (value) => {
    setPage(value);
    setInvoicesPagination(
      invoices?.slice(value * rowsPerPage, value * rowsPerPage + rowsPerPage)
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
    if (invoices?.length < endIndex) endIndex = invoices?.length;

    setInvoicesPagination(invoices?.slice(0, endIndex));
  };

  React.useEffect(() => {
    const result = data?.filter((invoice) => {
      const courseName = invoice?.course?.course_name?.toLowerCase();
      const className = invoice?.class?.className?.toLowerCase();
      const customerName = invoice?.student?.name?.toLowerCase();
      const searchTermValue = searchTerm?.value?.toLowerCase();
      const paymentId = new String(invoice.payment_id);
      // Add your conditions here using the logical OR operator (||)
      return (
        courseName.includes(searchTermValue) || // First condition: courseName includes the searchTermValue
        paymentId.includes(searchTermValue) || // Second condition: additional property check
        customerName.includes(searchTermValue) ||
        className.includes(searchTermValue) ||
        // Add more conditions if needed
        false
      ); // Always include this to prevent an empty filter result
    });

    setInvoices(result);
    setPage(0);
    setRowsPerPage(5);

    let endIndex = 5;
    if (result.length < endIndex) endIndex = result.length;

    setInvoicesPagination(result?.slice(0, endIndex));
  }, [searchTerm.value]);

  const handleClearSearch = () => {
    setSearchTerm({
      value: "",
    });
  };

  const getInvoiceId = (id) => {
    const idStr = new String(id);

    let str = "#00000";
    const result = str.slice(0, str.length - idStr.length);
    return result + id;
  };

  const navigate = useNavigate();

  const handleAddInvoice = () => navigate(ROUTE_CONSTANTS.ADMIN.INVOICE.ADD);

  const [query, setQuery] = useState({
    startDate: undefined,
    endDate: undefined,
  });
  const [excelData, setExcelData] = useState(data);

  const handleChangeExcelValue = (key, value) => {
    const newValues = {
      ...query,
      [key]: value,
    };
    setQuery((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));

    let queryStartDate = newValues.startDate;
    if (newValues?.startDate === undefined) {
      queryStartDate = dayjs(new Date().toString()).subtract(10, "year");
    } else {
      queryStartDate = dayjs(newValues.startDate, "YYYY-MM-DD");
    }

    let queryEndDate;
    if (newValues?.endDate === undefined) {
      queryEndDate = dayjs(new Date().toString());
    } else {
      queryEndDate = dayjs(newValues.endDate, "YYYY-MM-DD");
    }

    const newData = data?.filter(
      (x) =>
        dayjs(x.paymentDate, "MM/DD/YYYY hh:mm:ss A").isAfter(queryStartDate) &&
        dayjs(x.paymentDate, "MM/DD/YYYY hh:mm:ss A").isBefore(queryEndDate)
    );
    console.log("newData", newData);
    setExcelData(newData);
  };
  const dialogRef = useRef(null);

  const handleOpenDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.openDialog();
    }
  };

  return (
    <>
      <ExportDialog
        ref={dialogRef}
        values={query}
        handleChangeValue={handleChangeExcelValue}
        headers={headers}
        data={excelData}
        filename="accounts.csv"
      />
      <Box
        className="ml-72"
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={2} sx={{ mt: 2 }}>
            <Card sx={{ p: 2, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }}>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Stack direction={"row"} spacing={2}>
                  <div className="w-96 ">
                    <AppInput
                      value={searchTerm.value}
                      handleChangeValue={handleChangeSearchTerm}
                      placeholder={"Tìm kiếm hóa đơn"}
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
                <Stack direction={"row"} spacing={2}>
                  <Button
                    onClick={handleOpenDialog}
                    variant="contained"
                    color="secondary"
                    size="medium"
                  >
                    <SvgIcon sx={{ mr: 1 }}>
                      <FileDownload />
                    </SvgIcon>
                    Xuất excel
                  </Button>
                  {/* <Button
                    onClick={handleAddInvoice}
                    variant="contained"
                    color="primary"
                    size="medium"
                  >
                    <SvgIcon sx={{ mr: 1 }}>
                      <PlusIcon />
                    </SvgIcon>
                    Thêm mới
                  </Button> */}
                </Stack>
              </Stack>
            </Card>
            {invoices?.length > 0 ? (
              <InvoiceTable
                count={invoices?.length}
                items={invoicesPagination}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsPerPageChange}
                page={page}
                rowsPerPage={rowsPerPage}
                user={user}
                courses={courses}
                setIsOpenModal={setIsOpenModal}
                setCurrentInvoice={setCurrentInvoice}
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
            <p>Hóa Đơn {getInvoiceId(currentInvoice?.paymentId)}</p>
            <p className="text-body-color">
              Ngày tạo:
              {new Date(currentInvoice?.paymentDate).toLocaleDateString()}
            </p>
          </div>
        </DialogTitle>
        <DialogContent>
          <Stack spacing={3} sx={{ mt: 8, pl: 5, pr: 5, mb: 2 }}>
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
                    <div className="bg-blue-gray-500 shadow-blue-gray-500/40  relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg">
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        src={currentInvoice?.course?.course_avatar_url}
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
                            {currentInvoice?.course?.course_name}
                          </div>
                        </Stack>
                      </Typography>
                      <Typography>
                        <Stack direction={"row"} spacing={1}>
                          <SvgIcon color="primary">
                            <SchoolOutlined />
                          </SvgIcon>
                          <div className="block text-base font-medium text-black">
                            {currentInvoice?.class?.className}
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
                              Number(currentInvoice?.amount)
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
                            {currentInvoice?.class?.numberOfSlots + " buổi"}
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
                    <CardContent className="h-[394px]" sx={{ pb: 5 }}>
                      <CardHeader title="Thông tin cá nhân" />
                      <CardContent>
                        <Stack direction={"column"} spacing={3}>
                          <p>Họ và tên: {currentInvoice?.student?.name}</p>
                          <p>Email: {currentInvoice?.student?.email}</p>
                          <p>Sđt: {currentInvoice?.student?.phone}</p>
                          <p>Địa chỉ: {currentInvoice?.student?.address}</p>
                          <p>
                            <span>{"Trạng thái giao dịch:"}</span>
                            <Chip
                              color="primary"
                              variant="filled"
                              sx={{ ml: 3, width: 150 }}
                              label={"Đã thanh toán"}
                            />
                          </p>
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
    </>
  );
};

export default ListInvoice;
