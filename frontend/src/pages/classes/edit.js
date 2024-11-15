import { ArrowBack, Check } from "@mui/icons-material";
import { Button, Divider, SvgIcon, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { ClassDetails } from "../../components/Classes/ClassDetails";
import { ROUTE_CONSTANTS } from "../../constants/route.constants";
import { editClass, getClass, insertClass } from "../../redux/classSlice";
import { getCourses } from "../../redux/courseSlice";
import { getStaffs, getTeachers } from "../../redux/userSlice";
import { isEmpty } from "lodash";
import { toast } from "react-toastify";

export default function EditClassPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const classId = params.get("classId");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const specificClass = useSelector((state) => state.classes.specific);
  const staffs = useSelector((state) => state.user.staffs);
  const teachers = useSelector((state) => state.user.teachers);
  const courses = useSelector((state) => state.course.data);
  const today = dayjs().format("YYYY-MM-DD");

  useEffect(() => {
    dispatch(getStaffs());
    dispatch(getTeachers());
    dispatch(getCourses());
  }, []);

  useEffect(() => {
    dispatch(getClass(classId));
  }, []);

  useEffect(() => {
    setValues({
      ...specificClass,
      startTime: dayjs(
        `${today} ${specificClass?.startTime}`,
        "YYYY-MM-DD HH:mm:ss"
      ),
      endTime: dayjs(
        `${today} ${specificClass?.endTime}`,
        "YYYY-MM-DD HH:mm:ss"
      ),
    });
  }, [specificClass]);

  console.log("a", specificClass);

  const [values, setValues] = useState({
    ...specificClass,
    startTime: dayjs(
      `${today} ${specificClass?.startTime}`,
      "YYYY-MM-DD HH:mm:ss"
    ),
    endTime: dayjs(`${today} ${specificClass?.endTime}`, "YYYY-MM-DD HH:mm:ss"),
  });

  const handleChangeValue = (key, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const handleCancel = () => {
    navigate(ROUTE_CONSTANTS.CLASS.INDEX);
  };

  const handleSubmitClass = () => {
    if (isEmpty(values.className.trim())) {
      toast.warning("Chưa nhập tên " + title);
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

    const today = new dayjs();
    const start = new dayjs(values.startDate);
    const end = new dayjs(values.endDate);

    if (end <= start) {
      toast.warning("Ngày kết thúc phải sau ngày bắt đầu");
      return;
    }

    const startTime = new dayjs(values.startTime);
    const endTime = new dayjs(values.endTime);

    if (endTime <= startTime) {
      toast.warning("Thời gian kết thúc phải sau thời gian bắt đầu");
      return;
    }

    if (endTime?.diff(startTime, "minute") < 30) {
      toast.warning("Khoảng thời gian học phải ít nhất 30 phút");
      return;
    }

    if (isEmpty(values.room.trim())) {
      toast.warning("Chưa nhập phòng học");
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

    dispatch(
      editClass({
        ...values,
        startTime: dayjs(values.startTime.toDate()).format("HH:mm:ss"),
        endTime: dayjs(values.endTime.toDate()).format("HH:mm:ss"),
      })
    );

    navigate(ROUTE_CONSTANTS.CLASS.INDEX);
  };
  return (
    <Stack direction={"row"} spacing={3} className="my-4 ml-72 p-4">
      <Box
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
          width: "100%",
        }}
        p={2}
      >
        <Stack spacing={3} sx={{ width: "100%" }}>
          <Typography variant="h6" fontWeight={600} textAlign={"center"}>
            Thông tin lớp học
          </Typography>
          <ClassDetails
            handleChangeValue={handleChangeValue}
            values={values}
            staffs={staffs}
            teachers={teachers}
            courses={courses}
            width="100%"
            direction="row"
          />
          <Divider />

          <Stack spacing={2} direction={"row"} justifyContent={"end"}>
            <Button
              color="success"
              variant="contained"
              className="w-full"
              onClick={handleCancel}
            >
              <SvgIcon className="mr-2">
                <ArrowBack />
              </SvgIcon>
              Quay trở lại
            </Button>
            <Button
              onClick={handleSubmitClass}
              color="primary"
              variant="contained"
              className="w-full"
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
