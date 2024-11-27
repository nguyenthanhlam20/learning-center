import HandThumbUpIcon from "@heroicons/react/24/solid/HandThumbUpIcon";
import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";
import { Button, Divider, SvgIcon, Tab, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import AppCheckBox from "../../components/AppInput/AppCheckBox";
import AppDatePicker from "../../components/AppInput/AppDatePicker";
import AppInput from "../../components/AppInput/AppInput";
import AppRadioButton from "../../components/AppInput/AppRadioButton";
import AppTextArea from "../../components/AppInput/AppTextArea";
import { ROUTE_CONSTANTS } from "../../constants/route.constants";
import userSlice, { getUser, updateInfo } from "../../redux/userSlice";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import AvatarDefault from "../../assets/images/avatar_default.jpeg";
import { ArrowBack } from "@mui/icons-material";
import { ClassTableMini } from "../../sections/table/class-table-mini";
import dayjs from "dayjs";
import { ROLE } from "../../constants/constants";
import { isValidPhoneNumber } from "../../helpers/validation";
import { toast } from "react-toastify";
import AppInputPhone from "../../components/AppInput/AppInputPhone";

function EditAccount() {
  const user = useSelector((state) => state.authen.user);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const email = params.get("email") ?? user?.email;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [tabIndex, setTabIndex] = React.useState("1");
  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };
  const { setCurrentPage } = userSlice.actions;

  React.useEffect(() => {
    dispatch(setCurrentPage("Thông tin cá nhân"));
  }, []);

  const account = useSelector((state) => state.user.specific);

  const disabled = user?.role_id !== ROLE.ADMIN;

  // Separate classes into three categories
  const pastClasses = [];
  const ongoingClasses = [];
  const incomingClasses = [];
  const today = dayjs();

  console.log("account.classes", account?.classes);

  account?.classes?.forEach((classItem) => {
    const startDate = dayjs(classItem.startDate);
    const endDate = dayjs(classItem.endDate);

    if (endDate.isBefore(today, "day")) {
      pastClasses.push(classItem);
    } else if (startDate.isAfter(today, "day")) {
      incomingClasses.push(classItem);
    } else {
      ongoingClasses.push(classItem);
    }
  });

  React.useEffect(() => {
    dispatch(getUser(email));
  }, []);

  useEffect(() => {
    setValues(account);
  }, [account]);

  const [values, setValues] = useState(account);

  const handleChangeValue = (key, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleSubmitAccount = () => {
    if (isEmpty(values.name.trim())) {
      toast.warning("Chưa nhập tên");
      return;
    }

    if (isEmpty(values.address.trim())) {
      toast.warning("Chưa nhập địa chỉ");
      return;
    }

    if (isEmpty(values.email.trim())) {
      toast.warning("Chưa nhập địa chỉ email");
      return;
    }

    if (isEmpty(values.phone.trim())) {
      toast.warning("Chưa nhập số điện thoại");
      return;
    }

    if (!isValidPhoneNumber(values.phone.trim())) {
      toast.warning("Số điện thoại không hợp lệ");
      return;
    }
    dispatch(updateInfo(values));
  };
  return (
    <Box className="my-4 ml-72 p-4 ">
      <Stack direction={"row"} spacing={3}>
        <Box
          sx={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
          }}
          p={2}
        >
          <Stack spacing={2}>
            <div
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                width: "500px",
                height: "250px",
              }}
              className="bg-blue-gray-500 shadow-blue-gray-500/40  relative   overflow-hidden rounded-xl rounded-xl bg-white bg-clip-border bg-clip-border text-gray-700 text-white shadow-lg shadow-md"
            >
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src={
                  isEmpty(values?.avatar_url)
                    ? AvatarDefault
                    : values?.avatar_url
                }
                alt="img-blur-shadow"
              />
            </div>
            <AppInput
              value={values?.avatar_url}
              title={"avatar_url"}
              handleChangeValue={handleChangeValue}
              placeholder={"Ảnh thẻ"}
            />
            <AppInput
              value={values?.name}
              title={"name"}
              handleChangeValue={handleChangeValue}
              placeholder={"Họ và tên "}
            />
            <AppInput
              value={values?.address}
              title={"address"}
              handleChangeValue={handleChangeValue}
              placeholder={"Địa chỉ"}
            />
            <AppDatePicker
              value={values?.date_of_birth}
              title={"date_of_birth"}
              handleChangeValue={handleChangeValue}
              placeholder={"Ngày sinh"}
            />

            <AppInput
              disabled={true}
              value={values?.email}
              title={"email"}
              handleChangeValue={handleChangeValue}
              placeholder={"Email"}
            />
            <AppInputPhone
              value={values?.phone}
              title={"phone"}
              handleChangeValue={handleChangeValue}
              placeholder={"Số điện thoại"}
            />
            <AppTextArea
              height={"h-[175px]"}
              value={values?.description}
              title={"description"}
              handleChangeValue={handleChangeValue}
              placeholder={"Mô tả"}
            />
            <AppRadioButton
              value={values?.gender}
              handleChangeValue={handleChangeValue}
            />
            {!disabled && (
              <AppCheckBox
                value={values?.status}
                handleChangeValue={handleChangeValue}
                title={"status"}
                placeholder={"Active"}
              />
            )}
            <Divider />
            <Stack spacing={2} direction={"row"} justifyContent={"end"}>
              <Button
                color="success"
                variant="contained"
                className=" w-full"
                onClick={handleCancel}
              >
                <SvgIcon className="mr-2">
                  <ArrowBack />
                </SvgIcon>
                Quay trở lại
              </Button>
              <Button
                onClick={handleSubmitAccount}
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
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
            width: "100%",
          }}
          p={2}
        >
          <Typography variant="h6" fontWeight={600}>
            Danh sách các lớp
          </Typography>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={tabIndex}>
              <TabList onChange={handleChange} aria-label="class tab">
                <Tab label="Lớp đã kết thúc" value="1" wrapped />
                <Tab label={"Lớp đang diễn ra"} value="2" wrapped />
                <Tab label="Lớp sắp diên ra" value="3" wrapped />
              </TabList>
              <TabPanel value="1" sx={{ padding: 0 }}>
                {pastClasses.length > 0 ? (
                  <Stack spacing={2} mt={2}>
                    <span>Danh sách các lớp đã kết thúc</span>
                    <ClassTableMini items={pastClasses} />
                  </Stack>
                ) : (
                  <Typography color={"red"} mt={2}>
                    Không có lớp học nào.
                  </Typography>
                )}
              </TabPanel>
              <TabPanel value="2" sx={{ padding: 0 }}>
                {ongoingClasses.length > 0 ? (
                  <Stack spacing={2} mt={2}>
                    <span>{"Danh sách các lớp đang diễn ra"}</span>
                    <ClassTableMini items={ongoingClasses} />
                  </Stack>
                ) : (
                  <Typography color={"red"} mt={2}>
                    Không có lớp học nào.
                  </Typography>
                )}
              </TabPanel>
              <TabPanel value="3" sx={{ padding: 0 }}>
                {incomingClasses.length > 0 ? (
                  <Stack spacing={2} mt={2}>
                    <span>Danh sách các lớp sắp diễn ra</span>
                    <ClassTableMini items={incomingClasses} />
                  </Stack>
                ) : (
                  <Typography color={"red"} mt={2}>
                    Không có lớp học nào.
                  </Typography>
                )}
              </TabPanel>
            </TabContext>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

export default EditAccount;
