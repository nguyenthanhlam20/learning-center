import { Stack } from "@mui/system";
import { isEmpty } from "lodash";
import CourseImageDefault from "../../assets/images/course/course-default.png";
import { levels } from "../../constants/constants";
import AppCheckBox from "../AppInput/AppCheckBox";
import AppInput from "../AppInput/AppInput";
import AppInputCurrency from "../AppInput/AppInputCurrency";
import AppInputNumber from "../AppInput/AppInputNumber";
import AppSelect from "../AppInput/AppSelect";
import AppTextArea from "../AppInput/AppTextArea";

export const CourseProfileDetails = ({ handleChangeValue, values }) => {
  return (
    <Stack spacing={3} direction={"row"} minWidth={900}>
      <Stack spacing={2}>
        <div
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
            borderRadius: "10px",
          }}
          className="relative flex h-[240px] w-96 flex-col rounded bg-white  text-gray-700 shadow-md"
        >
          <img
            src={
              isEmpty(values.avatar_url)
                ? CourseImageDefault
                : values.avatar_url
            }
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              borderRadius: "10px",
            }}
            alt="img-blur-shadow"
          />
        </div>
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
      </Stack>
      <Stack spacing={2} sx={{ width: "100%" }}>
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
      </Stack>
    </Stack>
  );
};
