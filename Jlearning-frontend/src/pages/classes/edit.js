import HandThumbUpIcon from "@heroicons/react/24/solid/HandThumbUpIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";
import { Button, Divider, SvgIcon, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { ClassDetails } from "../../components/Classes/ClassDetails";
import { ROUTE_CONSTANTS } from "../../constants/route.constants";
import { getClass } from "../../redux/classSlice";
import { getCourses } from "../../redux/courseSlice";
import { getStaffs, getTeachers } from "../../redux/userSlice";
import { ArrowBack } from "@mui/icons-material";

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

  useEffect(() => {
    dispatch(getStaffs());
    dispatch(getTeachers());
    dispatch(getCourses());
  }, []);

  useEffect(() => {
    dispatch(getClass(classId));
  }, []);

  useEffect(() => {
    setValues(specificClass);
  }, [specificClass]);

  console.log("a", specificClass);

  const [values, setValues] = useState(specificClass);

  const handleChangeValue = (key, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const handleCancel = () => {
    navigate(ROUTE_CONSTANTS.CLASS.INDEX);
  };

  const handleAddCalendar = () => {
    navigate(ROUTE_CONSTANTS.CALENDAR.ADD);
  };

  const handleSubmitClass = () => {};

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
          <Typography variant="h6" fontWeight={600}>
            Thông tin lớp học
          </Typography>
          <ClassDetails
            handleChangeValue={handleChangeValue}
            values={values}
            staffs={staffs}
            teachers={teachers}
            courses={courses}
            width="100%"
            direction="column"
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
                <HandThumbUpIcon />
              </SvgIcon>
              Lưu
            </Button>
          </Stack>
        </Stack>
      </Box>

      <Box
        sx={{
          ml: 1,
          mr: 2,
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
          width: "100%",
        }}
        p={2}
      >
        <Stack direction={"row"} spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            Lịch học
          </Typography>
          <Button
            onClick={handleAddCalendar}
            color="primary"
            variant="contained"
            size="small"
          >
            <SvgIcon>
              <PlusIcon />
            </SvgIcon>
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}
