import {
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useState } from "react";
import Breadcrumb from "../../components/Common/Breadcrumb";
import SmoothScrollUp from "../../components/Common/SmoothScrollUp";
import RegisterDialog from "./register";
import { insertRegistrationForm } from "../../redux/registrationFormSlice";
import { useDispatch } from "react-redux";
import { Status } from "../../constants/status";
import { isEmpty } from "lodash";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import { isValidPhoneNumber } from "../../helpers/validation";

const CourseDetails = ({ course, user }) => {
  console.log("course", course);
  const dispatch = useDispatch();
  const formattedPrice = course?.price?.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  const dialogRef = React.useRef(null);
  const [values, setValues] = useState({
    classId: "",
    className: "",
    courseId: course?.course_id,
    name: user?.name,
    phone: user?.phone,
    studentEmail: user?.email,
    courseName: course?.course_name,
    status: Status.PENDING,
    createdDate: new Date(),
  });

  React.useEffect(() => {
    setValues({
      classId: "",
      className: "",
      courseId: course?.course_id,
      name: user?.name ?? "",
      phone: user?.phone ?? "",
      studentEmail: user?.email,
      courseName: course?.course_name,
      status: Status.PENDING,
      createdDate: new Date(),
    });
  }, [course]);

  console.log("values", values);

  const handleChangeValue = (key, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    if (isEmpty(values?.name?.trim())) {
      toast.warning("Chưa nhập tên");
      return;
    }
    if (isEmpty(values?.phone?.trim())) {
      toast.warning("Chưa nhập số điện thoại");
      return;
    }

    if (!isValidPhoneNumber(values.phone.trim())) {
      toast.warning("Số điện thoại không hợp lệ");
      return;
    }

    dispatch(insertRegistrationForm(values));
    if (dialogRef.current) {
      dialogRef.current.closeDialog();
    }
  };

  const handleOpenDialog = (classId, className) => {
    handleChangeValue("classId", classId);
    handleChangeValue("className", className);
    if (dialogRef.current) {
      dialogRef.current.openDialog();
    }
  };

  return (
    <>
      <SmoothScrollUp />
      <Breadcrumb
        pageName={"Thông tin khóa học"}
        description={"Xem thông tin về khóa học"}
      />
      <Stack
        sx={{
          width: "100%",
          padding: "100px",
          paddingTop: "0px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        direction={"column"}
        spacing={3}
      >
        <Stack
          direction={"column"}
          spacing={3}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <h2 className="text-center text-4xl font-bold">
            {course?.course_name}
          </h2>
          <p className="text-center">{formattedPrice}</p>
          <div style={{ width: "750px", height: "350px" }}>
            <img
              src={course?.course_avatar_url}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </div>
        </Stack>
        <Stack direction={"column"} spacing={3}>
          <h6
            style={{
              textAlign: "center",
              fontWeight: "600",
              fontSize: "20px",
            }}
          >
            Danh sách lớp
          </h6>

          {course?.classes?.length > 0 ? (
            <TableContainer
              component={Paper}
              sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#fafafa" }}>
                    <TableCell sx={{ fontWeight: "bold" }}>Mã lớp</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Tên lớp</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Giảng viên
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Ngày bắt đầu
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Ngày kết thúc
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Thời gian học{" "}
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Buổi học</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Còn lại</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Hành động</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {course?.classes?.map((row) => {
                    const startTime =
                      dayjs().format("YYYY-MM-DD") + " " + row?.startTime;

                    const endTime =
                      dayjs().format("YYYY-MM-DD") + " " + row?.endTime;
                    return (
                      <TableRow>
                        <TableCell>
                          {course?.code + "-00" + row.classId}
                        </TableCell>
                        <TableCell>{row?.className}</TableCell>
                        <TableCell>
                          {row?.teacherEmailNavigation?.name}
                        </TableCell>
                        <TableCell>{row.startDate}</TableCell>
                        <TableCell>{row.endDate}</TableCell>
                        <TableCell>
                          {dayjs(startTime).format("HH:mm A") +
                            " - " +
                            dayjs(endTime).format("HH:mm A")}
                        </TableCell>
                        <TableCell>{row.daysOfWeek}</TableCell>
                        <TableCell>
                          {row.classMembers.length + "/" + row.numberOfStudent}
                        </TableCell>
                        <TableCell>
                          <Button
                            onClick={() =>
                              handleOpenDialog(row.classId, row.className)
                            }
                          >
                            Đăng ký
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Typography color={"red"} textAlign={"center"}>
              Hiện tại chưa mở lớp.
            </Typography>
          )}
        </Stack>
      </Stack>

      <RegisterDialog
        ref={dialogRef}
        values={values}
        handleChangeValue={handleChangeValue}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default CourseDetails;
