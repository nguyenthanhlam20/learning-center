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
import { getUser } from "../../redux/userSlice";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import AvatarDefault from "../../assets/images/avatar_default.jpeg";
import { ArrowBack } from "@mui/icons-material";

function EditAccount() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const email = params.get("email");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [tabIndex, setTabIndex] = React.useState("1");
  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const account = useSelector((state) => state.user.specific);

  React.useEffect(() => {
    dispatch(getUser(email));
  }, []);

  useEffect(() => {
    setValues(account);
  }, [account]);

  console.log("a", account);

  const [values, setValues] = useState(account);

  const handleChangeValue = (key, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const handleCancel = () => {
    navigate(ROUTE_CONSTANTS.ADMIN.STAFF_PAGE);
  };

  const handleSubmitAccount = () => {};

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
              value={values?.email}
              title={"email"}
              handleChangeValue={handleChangeValue}
              placeholder={"Email"}
            />
            <AppInput
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
            <AppCheckBox
              value={values?.status}
              handleChangeValue={handleChangeValue}
              title={"status"}
              placeholder={"Active"}
            />
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
            Danh sách các lớp phụ trách
          </Typography>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={tabIndex}>
              <TabList onChange={handleChange} aria-label="class tab">
                <Tab label="Lớp đã kết thúc" value="1" wrapped />
                <Tab label="Lớp đang phụ trách" value="2" wrapped />
                <Tab label="Lớp sắp diên ra" value="3" wrapped />
              </TabList>
              <TabPanel value="1">Danh sách các lớp đã kết thúc</TabPanel>
              <TabPanel value="2">Danh sách các lớp đang phụ trách</TabPanel>
              <TabPanel value="3">Danh sách các lớp sắp diễn ra</TabPanel>
            </TabContext>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

export default EditAccount;
