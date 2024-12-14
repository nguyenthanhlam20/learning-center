import {
  Breadcrumbs,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserClasses } from "../../../redux/classSlice";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import SmoothScrollUp from "../../../components/Common/SmoothScrollUp";
import ScoreDialog from "./score";
import dayjs from "dayjs";
import FeedbackDialog from "./feedback";
import { getFeedbackById, insertFeedback } from "../../../redux/feedbackSlice";
import { toast } from "react-toastify";
import { isEmpty } from "lodash";

const MyClassPage = () => {
  const dispatch = useDispatch();

  const classes = useSelector((state) => state.classes.data);
  const user = useSelector((state) => state.authen.user);
  const specific = useSelector((state) => state.feedback.specific);
  const isRefresh = useSelector((state) => state.feedback.isRefresh);

  useEffect(() => {
    dispatch(getUserClasses(user?.email));
  }, []);

  const getStatus = (startDate, endTime) => {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endTime);

    if (now < start) {
      return { color: "#9A7E6F", status: "Sắp diễn ra" };
    } else if (now >= start && now <= end) {
      return { color: "#7EACB5", status: "Đang diễn ra" };
    } else {
      return { color: "red", status: "Đã hoàn thành" };
    }
  };

  const [score, setScore] = useState();

  // Example usage:
  console.log(getStatus("2024-11-09", "2024-11-10"));
  const dialogRef = useRef(null);

  const handleOpenDialog = (classId) => {
    var target = classes?.find((x) => x.classId === classId);

    if (target !== undefined) {
      var score = target?.grades?.find((x) => x.classId === classId);
      console.log("target?.grades", target);
      setScore(score);
    }

    if (dialogRef.current) {
      dialogRef.current.openDialog();
    }
  };

  const [feedback, setFeedback] = useState({
    email: user?.email,
    classId: 0,
    courseId: 0,
    star: 0,
    message: "",
    courseName: "",
    className: "",
  });
  const dialogFeedbackRef = useRef(null);

  useEffect(() => {
    if (specific !== undefined && specific !== null) {
      console.log("specific", specific);

      setFeedback(specific);
    }
  }, [specific]);

  const handleChangeValue = (key, value) => {
    setFeedback((prevValues) => {
      return {
        ...prevValues,
        [key]: value,
      };
    });
  };

  useEffect(() => {
    if (isRefresh) {
      if (dialogFeedbackRef.current) {
        dialogFeedbackRef.current.closeDialog();
      }
    }
  }, [isRefresh]);
  const handleSubmit = () => {
    if (feedback?.star < 0 || feedback.star > 5) {
      toast.warning("Số sao phải nằm trong khoảng 0-5");
      return;
    }
    if (isEmpty(feedback?.message)) {
      toast.warning("Chưa điền nội dung đánh giá");
      return;
    }
    dispatch(
      insertFeedback({
        email: feedback?.email,
        classId: feedback.classId,
        courseId: feedback.courseId,
        star: feedback.star,
        message: feedback.message,
      })
    );

    if (dialogFeedbackRef.current) {
      dialogFeedbackRef.current.openDialog();
    }
  };
  const handleOpenFeedbackDialog = (
    courseId,
    classId,
    email,
    courseName,
    className
  ) => {
    console.log("course", courseName);

    setFeedback((prevValues) => {
      return {
        ...prevValues,
        classId: classId,
        courseId: courseId,
        courseName: courseName,
        className: className,
      };
    });

    dispatch(getFeedbackById({ courseId, classId, email }));
    if (dialogFeedbackRef.current) {
      dialogFeedbackRef.current.openDialog();
    }
  };
  console.log("feedback", feedback);
  return (
    <>
      <SmoothScrollUp />
      <Breadcrumb
        pageName={"Lớp học của tôi"}
        description={"Xem danh sách lớp học đã đăng ký"}
      />
      <div className="relative w-full pb-40 pl-20 pr-20">
        {classes?.length > 0 && (
          <Stack direction={"column"} spacing={3}>
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
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Sĩ số
                    </TableCell>{" "}
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Trạng thái
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                      Hành động
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {classes?.map((row) => {
                    const { color, status } = getStatus(
                      row.startDate,
                      row.endDate
                    );

                    const startTime =
                      dayjs().format("YYYY-MM-DD") + " " + row?.startTime;

                    const endTime =
                      dayjs().format("YYYY-MM-DD") + " " + row?.endTime;
                    return (
                      <TableRow>
                        <TableCell>
                          {row?.course?.code + "-00" + row.classId}
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
                          <span
                            style={{
                              borderRadius: "5px",
                              padding: "5px 10px",
                              backgroundColor: color,
                              color: "white",
                              fontSize: "13px",
                            }}
                          >
                            {status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Stack
                            direction={"row"}
                            spacing={2}
                            justifyContent={"center"}
                          >
                            {status === "Đã hoàn thành" && (
                              <Button
                                variant="contained"
                                color="secondary"
                                onClick={() =>
                                  handleOpenFeedbackDialog(
                                    row.courseId,
                                    row.classId,
                                    user?.email,
                                    row?.course?.course_name,
                                    row?.className
                                  )
                                }
                              >
                                Đánh giá
                              </Button>
                            )}
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={() => handleOpenDialog(row.classId)}
                            >
                              Xem điểm
                            </Button>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <ScoreDialog score={score} ref={dialogRef} />
            <FeedbackDialog
              ref={dialogFeedbackRef}
              values={feedback}
              handleSubmit={handleSubmit}
              handleChangeValue={handleChangeValue}
            />
          </Stack>
        )}
      </div>
    </>
  );
};

export default MyClassPage;
