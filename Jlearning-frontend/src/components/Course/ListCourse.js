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
  Grid,
  Stack,
  SvgIcon,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import AppInput from "../../components/AppInput/AppInput";
import { CourseProfileDetails } from "../../components/Course/CourseProfileDetails";
import { insertCourse } from "../../redux/courseSlice";
import userSlice from "../../redux/userSlice";
import { CourseTable } from "../../sections/table/course-table";
import { isEmpty } from "lodash";

const ListCourse = ({ data }) => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [courses, setCourses] = useState(data);
  const [coursesPagination, setCoursesPagination] = useState(
    courses.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  );
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [searchTerm, setSearchTerm] = React.useState({ value: "" });

  const [values, setValues] = useState({
    avatar_url: "",
    code: "",
    course_name: "",
    description: "",
    number_of_slots: 1,
    price: "",
    status: true,
    level: "",
  });

  const handleChangeValue = (key, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const { setCurrentPage } = userSlice.actions;

  React.useEffect(() => {
    dispatch(setCurrentPage("Quản lý khóa học"));
  }, []);

  React.useEffect(() => {
    setCourses(data);
    setCoursesPagination(
      data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    );
  }, [data]);

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handlePageChange = (value) => {
    setPage(value);
    setCoursesPagination(
      courses.slice(value * rowsPerPage, value * rowsPerPage + rowsPerPage)
    );
  };

  const handleSubmitCourse = () => {
    if (isEmpty(values.avatar_url.trim())) {
      toast.warning("Chưa nhập ảnh khóa học");
      return;
    }
    if (isEmpty(values.course_name.trim())) {
      toast.warning("Chưa nhập tên khóa học");
      return;
    }
    if (isEmpty(values.code.trim())) {
      toast.warning("Chưa nhập mã khóa học");
      return;
    }
    if (isEmpty(values.level.trim())) {
      toast.warning("Chưa chọn cập độ khóa học");
      return;
    }
    if (parseInt(values.number_of_slots) <= 0) {
      toast.warning("Số buổi học phải lớn hơn 0");
      return;
    }
    if (isEmpty(values.price.trim())) {
      toast.warning("Chưa nhập giá tiền");
      return;
    }

    if (isEmpty(values.description.trim())) {
      toast.warning("Chưa nhập mô tả");
      return;
    }

    dispatch(
      insertCourse({
        ...values,
        created_at: new Date(),
        price: parseFloat(values.price.replace(/\./g, "").replace("₫", "")),
      })
    );
    setValues({
      avatar_url: "",
      code: "",
      course_name: "",
      description: "",
      number_of_slots: 1,
      price: 0,
      status: true,
      level: "",
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
    if (courses.length < endIndex) endIndex = courses.length;

    setCoursesPagination(courses.slice(0, endIndex));
  };
  React.useEffect(() => {
    const result = data.filter((course) =>
      course?.course_name.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
    setCourses(result);
    setPage(0);
    setRowsPerPage(5);

    let endIndex = 5;
    if (result.length < endIndex) endIndex = result.length;

    setCoursesPagination(result.slice(0, endIndex));
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
            <Card sx={{ p: 2, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }}>
              <div className="flex flex-row justify-between">
                <Stack direction={"row"} spacing={2}>
                  <div className="w-96 ">
                    <AppInput
                      value={searchTerm.value}
                      handleChangeValue={handleChangeSearchTerm}
                      placeholder={"Tìm kiếm khóa học"}
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
                  Thêm mới khóa học
                </Button>
              </div>
            </Card>
            {courses.length > 0 ? (
              <CourseTable
                count={courses.length}
                items={coursesPagination}
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

      <Dialog maxWidth open={isOpenModal} onClose={handleCloseModal}>
        <DialogTitle>THÊM MỚI KHÓA HỌC</DialogTitle>
        <DialogContent
          sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" }}
          dividers
        >
          <Stack spacing={3} mb={1} mt={1}>
            <CourseProfileDetails
              handleChangeValue={handleChangeValue}
              values={values}
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
                onClick={handleSubmitCourse}
                color="primary"
                variant="contained"
                className="ml-3 w-[150px]"
              >
                <SvgIcon className="mr-2">
                  <HandThumbUpIcon />
                </SvgIcon>
                Lưu
              </Button>
            </Stack>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ListCourse;
