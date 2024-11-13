import { Check } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Stack,
  SvgIcon,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AvatarDefault from "../../assets/images/avatar_default.jpeg";
import AppDatePicker from "../../components/AppInput/AppDatePicker";
import AppInput from "../../components/AppInput/AppInput";
import AppInputPhone from "../../components/AppInput/AppInputPhone";
import AppRadioButton from "../../components/AppInput/AppRadioButton";
import Breadcrumb from "../../components/Common/Breadcrumb";
import SmoothScrollUp from "../../components/Common/SmoothScrollUp";
import authenSlice from "../../redux/authenSlice";
import { updateInfo } from "../../redux/userSlice";

const AccountPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authen.user);
  const { setUser } = authenSlice.actions;

  const [values, setValues] = useState({
    name: user?.name,
    address: user?.address,
    date_of_birth: user?.date_of_birth,
    phone: user?.phone,
    email: user?.email,
    gender: user?.gender === true || user?.gender === 1 ? 1 : 0,
    avatar_url: user?.avatar_url,
  });

  const handleSubmitInfo = () => {
    dispatch(updateInfo(values));
    dispatch(setUser(values));
  };

  const handleChangeValue = (key, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  return (
    <>
      <SmoothScrollUp />

      <Breadcrumb
        pageName="Thông tin cá nhân"
        description="Cập nhật thông tin cá nhân của bạn"
      />
      <Container className="mb-24 mt-12 block" sx={{ width: 700 }}>
        <Stack spacing={3}>
          <Card
            sx={{
              ml: 3,
              pt: 2,
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
            }}
          >
            <CardContent sx={{ pb: 5 }}>
              <Stack direction={"column"} spacing={2} className="w-full">
                <div className="flex w-full justify-center">
                  <Avatar
                    src={
                      values?.avatar_url != null
                        ? values?.avatar_url
                        : AvatarDefault
                    }
                    sx={{ width: 200, height: 200 }}
                  />
                </div>
                <Chip
                  sx={{
                    borderRadius: 1,
                    height: 36,
                    paddingLeft: "8px",
                    justifyContent: "left",
                  }}
                  className="w-full"
                  color="default"
                  icon={<EmailIcon />}
                  label={"Email: " + values.email}
                />
                <AppInput
                  value={values.name}
                  title={"name"}
                  handleChangeValue={handleChangeValue}
                  placeholder={"Tên đầy đủ"}
                />
                <AppInputPhone
                  value={values.phone}
                  title={"phone"}
                  handleChangeValue={handleChangeValue}
                  placeholder={"Số điện thoại"}
                />
                <AppDatePicker
                  value={values.date_of_birth}
                  title={"date_of_birth"}
                  handleChangeValue={handleChangeValue}
                  placeholder={"Ngày sinh"}
                />
                <AppInput
                  value={values.address}
                  title={"address"}
                  handleChangeValue={handleChangeValue}
                  placeholder={"Địa chỉ"}
                />
                <AppRadioButton
                  value={values.gender}
                  handleChangeValue={handleChangeValue}
                />
                <Stack direction={"row"} justifyContent={"end"}>
                  <Button
                    onClick={handleSubmitInfo}
                    color="primary"
                    variant="contained"
                    className="ml-3 w-[150px]"
                  >
                    <SvgIcon className="mr-2">
                      <Check />
                    </SvgIcon>
                    Lưu
                  </Button>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </>
  );
};

export default AccountPage;
