import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  SvgIcon,
} from "@mui/material";
import React, { useState } from "react";
import AppInput from "../../../components/AppInput/AppInput";
import { RegistrationTable } from "../../../sections/table/registration-table";
import { CSVLink } from "react-csv";
import { FileDownload, School, SchoolOutlined } from "@mui/icons-material";

const ListRegistration = ({ data }) => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [registration, setRegistrations] = useState(data);
  const [registrationPagination, setRegistrationsPagination] = useState(
    registration.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  );
  const [searchTerm, setSearchTerm] = React.useState({ value: "" });

  React.useEffect(() => {
    setRegistrations(data);
    setRegistrationsPagination(
      data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    );
  }, [data]);

  const handlePageChange = (value) => {
    setPage(value);
    setRegistrationsPagination(
      registration.slice(value * rowsPerPage, value * rowsPerPage + rowsPerPage)
    );
  };

  const handleChangeSearchTerm = (key, value) => {
    setSearchTerm({
      [key]: value,
    });
  };

  const handleRowsPerPageChange = (event) => {
    const rows = event.target.value;
    setPage(0);
    setRowsPerPage(rows);

    let endIndex = rowsPerPage;
    if (registration.length < endIndex) endIndex = registration.length;

    setRegistrationsPagination(registration.slice(0, endIndex));
  };
  React.useEffect(() => {
    const result = data.filter(
      (course) =>
        course?.student?.name
          ?.toLowerCase()
          .includes(searchTerm.value.toLowerCase()) ||
        course?.student?.email
          ?.toLowerCase()
          .includes(searchTerm.value.toLowerCase()) ||
        course?.class?.className
          ?.toLowerCase()
          .includes(searchTerm.value.toLowerCase()) ||
        course?.course?.course_name
          ?.toLowerCase()
          .includes(searchTerm.value.toLowerCase())
    );
    setRegistrations(result);
    setPage(0);
    setRowsPerPage(5);

    let endIndex = 5;
    if (result.length < endIndex) endIndex = result.length;

    setRegistrationsPagination(result.slice(0, endIndex));
  }, [searchTerm.value]);

  const handleClearSearch = () => {
    setSearchTerm({
      value: "",
    });
  };
  const headers = [
    { label: "Họ và tên", key: "student.name" },
    { label: "Khóa học", key: "course.course_name" },
    { label: "Lớp học", key: "class.className" },
    { label: "Email", key: "student.email" },
    { label: "Số điện thoại", key: "student.phone" },
    { label: "Ngày sinh", key: "student.date_of_birth" },
    { label: "Trạng thái", key: "status" },
  ];
  return (
    <>
      <Box
        className="ml-72"
        component="main"
        sx={{
          flexGrow: 1,
          py: 0,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={2} sx={{ mt: 2 }}>
            <Card sx={{ p: 2, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }}>
              <div className="flex flex-row justify-between">
                <Stack direction={"row"} spacing={2}>
                  <div className="w-96 ">
                    <AppInput
                      value={searchTerm.value}
                      handleChangeValue={handleChangeSearchTerm}
                      placeholder={"Tìm kiếm phiếu đăng ký"}
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
                <Stack>
                  <Button variant="contained" color="secondary" size="medium">
                    <CSVLink
                      data={data}
                      headers={headers}
                      filename={"registration-forms.csv"}
                    >
                      <SvgIcon sx={{ mr: 1 }}>
                        <FileDownload />
                      </SvgIcon>
                      Xuất excel
                    </CSVLink>
                  </Button>
                </Stack>
              </div>
            </Card>
            {registration.length > 0 ? (
              <RegistrationTable
                count={registration.length}
                items={registrationPagination}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsPerPageChange}
                page={page}
                rowsPerPage={rowsPerPage}
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
    </>
  );
};

export default ListRegistration;
