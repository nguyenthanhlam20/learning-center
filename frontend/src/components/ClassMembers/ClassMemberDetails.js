import { Unstable_Grid2 as Grid, Stack } from "@mui/material";
import { isEmpty } from "lodash";
import AvatarDefault from "../../assets/images/img-default.png";
import AppDatePicker from "../AppInput/AppDatePicker";
import AppInput from "../AppInput/AppInput";
import AppRadioButton from "../AppInput/AppRadioButton";
import AppTextArea from "../AppInput/AppTextArea";
import AppInputPhone from "../AppInput/AppInputPhone";

export const ClassMemberDetails = ({ handleChangeValue, values, width }) => {
  return (
    <Grid xs={12} container width={width}>
      <Grid xs={12} md={6} pr={3}>
        <Stack spacing={3}>
          <div
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
              width: "100%",
            }}
            className="bg-blue-gray-500 shadow-blue-gray-500/40  relative  h-56 overflow-hidden rounded-xl rounded-xl bg-white bg-clip-border bg-clip-border text-gray-700 text-white shadow-lg shadow-md"
          >
            <img
              style={{ width: "100%", objectFit: "cover" }}
              src={
                isEmpty(values?.avatar_url) ? AvatarDefault : values?.avatar_url
              }
              alt="img-blur-shadow"
            />
          </div>
          <AppTextArea
            height={"h-[140px]"}
            value={values?.description}
            title={"description"}
            handleChangeValue={handleChangeValue}
            placeholder={"Mô tả"}
          />
        </Stack>
      </Grid>
      <Grid xs={12} md={6}>
        <Stack spacing={2}>
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
          <AppInputPhone
            value={values?.phone}
            title={"phone"}
            handleChangeValue={handleChangeValue}
            placeholder={"Số điện thoại"}
          />

          <AppRadioButton
            value={values?.gender}
            handleChangeValue={handleChangeValue}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};
