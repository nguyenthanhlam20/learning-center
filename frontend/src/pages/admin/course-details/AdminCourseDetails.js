import ArrowLeftIcon from "@heroicons/react/24/solid/ArrowLeftIcon";
import HandThumbUpIcon from "@heroicons/react/24/solid/HandThumbUpIcon";
import { Button, Divider, Stack, SvgIcon, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { isEmpty } from "lodash";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AppCheckBox from "../../../components/AppInput/AppCheckBox";
import AppInput from "../../../components/AppInput/AppInput";
import AppInputCurrency from "../../../components/AppInput/AppInputCurrency";
import AppInputNumber from "../../../components/AppInput/AppInputNumber";
import AppSelect from "../../../components/AppInput/AppSelect";
import AppTextArea from "../../../components/AppInput/AppTextArea";
import { levels, ROLE } from "../../../constants/constants";
import { ROUTE_CONSTANTS } from "../../../constants/route.constants";
import { updateCourse } from "../../../redux/courseSlice";
import { ClassTableMini } from "../../../sections/table/class-table-mini";

const AdminCourseDetails = ({ course, isRefreshSpecific }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.authen.user);
  const isDisabled = user?.role_id !== ROLE.ADMIN;

  const [values, setValues] = React.useState({
    course_id: course?.course_id,
    course_avatar_url: course?.course_avatar_url,
    course_name: course?.course_name,
    description: course?.description,
    price: String(course?.price),
    status: course?.status,
    level: course?.level,
    code: course?.code,
    number_of_slots: course?.number_of_slots ?? 1,
  });

  React.useEffect(() => {
    setValues({
      course_id: course?.course_id,
      course_avatar_url: course?.course_avatar_url,
      course_name: course?.course_name,
      description: course?.description,
      price: String(course?.price),
      status: course?.status,
      level: course?.level,
      code: course?.code,
      number_of_slots: course?.number_of_slots ?? 1,
    });
  }, [course, isRefreshSpecific]);

  const handleChangeValue = (key, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const handleUpdateCourse = () => {
    console.log("values", values);
    if (isEmpty(values?.code)) {
      toast.warning("Chưa nhập mã khóa học");
      return;
    }
    if (isEmpty(values.course_name)) {
      toast.warning("Chưa nhập tên khóa học");
      return;
    }

    if (values.number_of_slots === 0) {
      toast.warning("Số buổi học phải > 0");
      return;
    }
    if (isEmpty(String(values.price))) {
      toast.warning("Chưa nhập giá tiền");
      return;
    }

    if (isEmpty(values.description)) {
      toast.warning("Chưa nhập mô tả khóa học");
      return;
    }
    if (isEmpty(values.course_avatar_url)) {
      toast.warning("Chưa chọn ảnh khóa học");
      return;
    }
    if (isEmpty(values.level)) {
      toast.warning("Chưa chọn cấp độ");
      return;
    }

    dispatch(updateCourse(values));
  };

  const handleReturnToList = () => {
    navigate(ROUTE_CONSTANTS.ADMIN_COURSE_PAGE);
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
              src={values?.course_avatar_url}
              alt="img-blur-shadow"
            />
          </div>
          <AppInput
            disabled={isDisabled}
            value={values?.course_name}
            title={"course_name"}
            handleChangeValue={handleChangeValue}
            placeholder={"Tên khóa học"}
          />
          <AppInput
            disabled={isDisabled}
            value={values?.code}
            title={"code"}
            handleChangeValue={handleChangeValue}
            placeholder={"Code"}
          />
          <AppInput
            disabled={isDisabled}
            value={values?.course_avatar_url}
            title={"course_avatar_url"}
            handleChangeValue={handleChangeValue}
            placeholder={"Ảnh khóa học"}
          />
          <AppInputCurrency
            disabled={isDisabled}
            value={values?.price}
            title={"price"}
            handleChangeValue={handleChangeValue}
            placeholder={"Giá (vnd)"}
          />
          <AppInputNumber
            disabled={isDisabled}
            value={values?.number_of_slots}
            title={"number_of_slots"}
            handleChangeValue={handleChangeValue}
            placeholder={"Số buổi học"}
          />
          <AppSelect
            disabled={isDisabled}
            value={values?.level}
            data={levels}
            title={"level"}
            display={"level"}
            itemKey={"level"}
            placeholder={"Chọn cấp độ"}
            handleChangeValue={handleChangeValue}
          />

          <AppTextArea
            disabled={isDisabled}
            height={"h-[170px]"}
            value={values?.description}
            title={"description"}
            handleChangeValue={handleChangeValue}
            placeholder={"Mô tả khóa học"}
          />
          <AppCheckBox
            disabled={isDisabled}
            value={values?.status}
            handleChangeValue={handleChangeValue}
            title={"status"}
            placeholder={"Active"}
          />
          <Divider />
          <Stack direction={"row"} spacing={3} justifyContent={"end"}>
            <Button
              onClick={handleReturnToList}
              color="success"
              variant="contained"
              className="w-full"
            >
              <SvgIcon className="mr-2">
                <ArrowLeftIcon />
              </SvgIcon>
              Trở lại
            </Button>
            {!isDisabled && (
              <Button
                variant="contained"
                onClick={handleUpdateCourse}
                className="w-full bg-primary"
              >
                <SvgIcon className="mr-2">
                  <HandThumbUpIcon />
                </SvgIcon>
                Lưu
              </Button>
            )}
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
          {course?.classes.length > 0 ? (
            <ClassTableMini items={course?.classes} />
          ) : (
            <Typography textAlign={"center"} color={"red"}>
              Chưa có lớp học.
            </Typography>
          )}
        </Stack>
      </Box>
    </Stack>
  );
};

export default AdminCourseDetails;
