import HandThumbUpIcon from "@heroicons/react/24/solid/HandThumbUpIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Stack,
  SvgIcon,
} from "@mui/material";
import { capitalize, isEmpty } from "lodash";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { insertClass } from "../../redux/classSlice";
import userSlice from "../../redux/userSlice";
import { ClassTable } from "../../sections/table/class-table";
import AppInput from "../AppInput/AppInput";
import { ClassDetails } from "./ClassDetails";

const ListClass = ({ data, title, staffs, teachers, courses }) => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [classs, setClasss] = useState(data || []);
  const [classsPagination, setClasssPagination] = useState(
    classs?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  );
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [searchTerm, setSearchTerm] = React.useState({ value: "" });

  const [values, setValues] = useState({
    courseId: 0,
    classCode: "",
    className: "",
    startDate: "",
    endDate: "",
    numberOfStudent: 1,
    numberOfSlots: 1,
    staffEmail: "",
    teacherEmail: "",
    room: "",
    status: true,
  });

  const handleChangeValue = (key, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const { setCurrentPage } = userSlice.actions;

  React.useEffect(() => {
    dispatch(setCurrentPage("Quản lý " + title));
  }, []);

  // console.log(data);
  React.useEffect(() => {
    setClasss(data);
    setClasssPagination(
      data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    );
  }, [data]);

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handlePageChange = (value) => {
    setPage(value);
    setClasssPagination(
      classs.slice(value * rowsPerPage, value * rowsPerPage + rowsPerPage)
    );
  };

  const handleSubmitClass = () => {
    if (isEmpty(values.classCode.trim())) {
      toast.warning("Chưa nhập mã " + title);
      return;
    }

    if (isEmpty(values.className.trim())) {
      toast.warning("Chưa tên " + title);
      return;
    }

    if (isEmpty(values.room.trim())) {
      toast.warning("Chưa nhập phòng học");
      return;
    }

    if (isEmpty(values.startDate.trim())) {
      toast.warning("Chưa chọn ngày bắt đầu");
      return;
    }

    if (isEmpty(values.endDate.trim())) {
      toast.warning("Chưa chọn ngày kết thúc");
      return;
    }

    if (parseInt(values.numberOfStudent) <= 0) {
      toast.warning("Số lượng học viên phải lớn hơn 1");
      return;
    }

    if (parseInt(values.numberOfSlots) <= 0) {
      toast.warning("Số lượng buổi học phải lớn hơn 1");
      return;
    }

    if (parseInt(values.courseId) <= 0) {
      toast.warning("Chưa chọn khóa học");
      return;
    }

    dispatch(insertClass(values));
    setValues({
      courseId: 0,
      classCode: "",
      className: "",
      startDate: "",
      endDate: "",
      numberOfStudent: 1,
      numberOfSlots: 1,
      staffEmail: "",
      teacherEmail: "",
      room: "",
      status: true,
    });

    setIsOpenModal(false);
    // console.log(values);
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
    if (classs.length < endIndex) endIndex = classs.length;

    setClasssPagination(classs.slice(0, endIndex));
  };
  React.useEffect(() => {
    const result = data.filter((classes) =>
      classes?.className.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
    setClasss(result);
    setPage(0);
    setRowsPerPage(5);

    let endIndex = 5;
    if (result.length < endIndex) endIndex = result.length;

    setClasssPagination(result.slice(0, endIndex));
  }, [searchTerm.value]);

  const handleClearSearch = () => {
    setSearchTerm({
      value: "",
    });
  };

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
            <Card
              sx={{
                p: 2,

                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
              }}
            >
              <div className="flex flex-row justify-between">
                <Stack direction={"row"} spacing={2}>
                  <div className="w-96 ">
                    <AppInput
                      value={searchTerm.value}
                      handleChangeValue={handleChangeSearchTerm}
                      placeholder={"Tìm kiếm " + title}
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
                <Button
                  onClick={() => {
                    setIsOpenModal(true);
                  }}
                  variant="contained"
                  color="primary"
                >
                  <SvgIcon sx={{ mr: 1 }}>
                    <PlusIcon />
                  </SvgIcon>
                  Thêm mới
                </Button>
              </div>
            </Card>
            {classs.length > 0 ? (
              <ClassTable
                count={classs.length}
                items={classsPagination}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsPerPageChange}
                page={page}
                rowsPerPage={rowsPerPage}
                title={capitalize(title)}
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

      <Dialog maxWidth="lg" open={isOpenModal} onClose={handleCloseModal}>
        <DialogTitle>THÊM MỚI {title.toUpperCase()}</DialogTitle>
        <DialogContent
          sx={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
          }}
          dividers
        >
          <div className="my-2">
            <Stack spacing={3}>
              <ClassDetails
                handleChangeValue={handleChangeValue}
                values={values}
                staffs={staffs}
                teachers={teachers}
                courses={courses}
              />
              <Divider />

              <Stack spacing={2} direction={"row"} justifyContent={"end"}>
                <Button
                  color="error"
                  variant="contained"
                  className=" w-[150px]"
                  onClick={handleCloseModal}
                >
                  <SvgIcon className="mr-2">
                    <XMarkIcon />
                  </SvgIcon>
                  Hủy
                </Button>
                <Button
                  onClick={handleSubmitClass}
                  color="primary"
                  variant="contained"
                  className="ml-3 w-[150px]"
                >
                  <SvgIcon className="mr-2">
                    <HandThumbUpIcon />
                  </SvgIcon>{" "}
                  Lưu
                </Button>
              </Stack>
            </Stack>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ListClass;
