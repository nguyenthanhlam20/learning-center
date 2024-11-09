import AppCheckBox from "../../../components/AppInput/AppCheckBox";
import AppInput from "../../../components/AppInput/AppInput";
import CourseChapter from "../../../components/Course/CourseChapter";
import CourseChapterModal from "../../../components/Course/CourseChapterModal";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import HandThumbUpIcon from "@heroicons/react/24/solid/HandThumbUpIcon";

import {
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../../constants/route.constants";
import { useDispatch } from "react-redux";
import { updateCourse } from "../../../redux/courseSlice";
import { ACTION_TYPE, levels } from "../../../constants/constants";
import { Box } from "@mui/system";
import AppTextArea from "../../../components/AppInput/AppTextArea";
import AppInputNumber from "../../../components/AppInput/AppInputNumber";
import AppInputCurrency from "../../../components/AppInput/AppInputCurrency";
import ArrowLeftIcon from "@heroicons/react/24/solid/ArrowLeftIcon";
import { toast } from "react-toastify";
import FileUploader from "../../../components/FileUploader";
import AppSelect from "../../../components/AppInput/AppSelect";

const AdminCourseDetails = ({ course, isRefreshSpecific }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentFile, setCurrentFile] = React.useState(null);
  const [previewUrl, setPreviewUrl] = React.useState("");

  const [disableSubmit, setDisableSubmit] = React.useState(false);

  const [values, setValues] = React.useState({
    course_id: course?.course_id,
    course_avatar_url: course?.course_avatar_url,
    course_name: course?.course_name,
    description: course?.description,
    duration: String(course?.duration),
    price: String(course?.price),
    status: course?.status,
  });

  React.useEffect(() => {
    setValues({
      course_id: course?.course_id,
      course_avatar_url: course?.course_avatar_url,
      course_name: course?.course_name,
      description: course?.description,
      duration: String(course?.duration),
      price: String(course?.price),
      status: course?.status,
    });
  }, [course, isRefreshSpecific]);

  React.useEffect(() => {
    if (currentFile !== null) {
      setValues((prevValues) => ({
        ...prevValues,
        course_avatar_url: currentFile.url,
      }));
      setDisableSubmit(false);
    }
  }, [currentFile]);

  const handleChangeValue = (key, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const handleUpdateCourse = () => {
    if (values.course_name.trim() === "") {
      toast.warning("Chưa nhập tên khóa học");
      return;
    }

    if (
      values.duration.trim() === "" ||
      parseInt(values.duration.trim()) === 0
    ) {
      toast.warning("Chưa thời gian học");
      return;
    }
    if (values.price.trim() === "") {
      toast.warning("Chưa nhập giá tiền");
      return;
    }

    if (values.description.trim() === "") {
      toast.warning("Chưa nhập giá tiền");
      return;
    }
    if (values.course_avatar_url.trim() === "") {
      toast.warning("Chưa chọn ảnh khóa học");
      return;
    }

    dispatch(updateCourse(values));
  };

  const handleReturnToList = () => {
    navigate(ROUTE_CONSTANTS.ADMIN_COURSE_PAGE);
  };

  const handleCloseAddModal = () => {
    setIsAddChapter(false);
  };
  return (
    <Stack className="my-5 ml-72 p-4" direction={"row"} gap={3}>
      <Box
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
          borderRadius: "10px",
        }}
      >
        <Stack direction={"column"} spacing={2} p={2}>
          <div
            style={{ width: "500px", height: "250px" }}
            className="bg-blue-gray-500 shadow-blue-gray-500/40 h-full overflow-hidden rounded-xl bg-clip-border text-white shadow-lg"
          >
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={
                previewUrl !== "" && previewUrl !== undefined
                  ? previewUrl
                  : values.course_avatar_url
              }
              alt="img-blur-shadow"
            />
          </div>
          <AppInput
            value={values?.course_name}
            title={"course_name"}
            handleChangeValue={handleChangeValue}
            placeholder={"Tên khóa học"}
          />
          <AppInput
            value={values?.code}
            title={"code"}
            handleChangeValue={handleChangeValue}
            placeholder={"Code"}
          />
          <AppInput
            value={values?.avatar_url}
            title={"avatar_url"}
            handleChangeValue={handleChangeValue}
            placeholder={"Ảnh khóa học"}
          />
          <AppInputCurrency
            value={values?.price}
            title={"price"}
            handleChangeValue={handleChangeValue}
            placeholder={"Giá (vnd)"}
          />
          <AppInputNumber
            value={values?.number_of_slots}
            title={"number_of_slots"}
            handleChangeValue={handleChangeValue}
            placeholder={"Số buổi học"}
          />
          <AppSelect
            value={values?.level}
            data={levels}
            title={"level"}
            display={"level"}
            itemKey={"level"}
            placeholder={"Chọn cấp độ"}
            handleChangeValue={handleChangeValue}
          />

          <AppTextArea
            height={"h-[170px]"}
            value={values?.description}
            title={"description"}
            handleChangeValue={handleChangeValue}
            placeholder={"Mô tả khóa học"}
          />
          <AppCheckBox
            value={values?.status}
            handleChangeValue={handleChangeValue}
            title={"status"}
            placeholder={"Active"}
          />
          <Divider />
          <Stack direction={"row"} spacing={3} justifyContent={"end"}>
            <Button
              disabled={disableSubmit}
              onClick={handleReturnToList}
              color="success"
              variant="contained"
              className="w-full"
            >
              <SvgIcon className="mr-2">
                <ArrowLeftIcon />
              </SvgIcon>{" "}
              Trở lại
            </Button>
            <Button
              disabled={disableSubmit}
              variant="contained"
              onClick={handleUpdateCourse}
              className="w-full bg-primary"
            >
              <SvgIcon className="mr-2">
                <HandThumbUpIcon />
              </SvgIcon>{" "}
              Lưu
            </Button>
          </Stack>
        </Stack>
      </Box>
      <Box
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
          borderRadius: "10px",
          width: "100%",
        }}
        p={2}
      >
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600} textAlign={"center"}>
            Danh sách lớp
          </Typography>
          <Divider />
        </Stack>
      </Box>
    </Stack>
  );
};

export default AdminCourseDetails;
