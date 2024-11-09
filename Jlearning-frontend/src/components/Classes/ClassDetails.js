import { Grid, Stack } from "@mui/material";
import AppCheckBox from "../AppInput/AppCheckBox";
import AppDatePicker from "../AppInput/AppDatePicker";
import AppInput from "../AppInput/AppInput";
import AppInputNumber from "../AppInput/AppInputNumber";
import AppSelect from "../AppInput/AppSelect";

export const ClassDetails = ({
  handleChangeValue,
  values,
  staffs,
  teachers,
  courses,
}) => {
  return (
    <Stack spacing={2} width={900}>
      <Stack direction={"row"} gap={3}>
        <AppInput
          value={values?.classCode}
          title={"classCode"}
          handleChangeValue={handleChangeValue}
          placeholder={"Mã lớp"}
        />
        <AppInput
          value={values?.className}
          title={"className"}
          handleChangeValue={handleChangeValue}
          placeholder={"Tên lớp"}
        />
      </Stack>
      <Stack direction={"row"} gap={3}>
        <AppDatePicker
          value={values?.startDate}
          title={"startDate"}
          handleChangeValue={handleChangeValue}
          placeholder={"Ngày bắt đầu"}
        />

        <AppDatePicker
          value={values?.endDate}
          title={"endDate"}
          handleChangeValue={handleChangeValue}
          placeholder={"Ngày kết thúc"}
        />
      </Stack>

      <Stack direction={"row"} gap={3}>
        <AppInputNumber
          value={values?.numberOfStudent}
          title={"numberOfStudent"}
          handleChangeValue={handleChangeValue}
          placeholder={"Số học viên"}
        />

        <AppInputNumber
          value={values?.numberOfSlots}
          title={"numberOfSlots"}
          handleChangeValue={handleChangeValue}
          placeholder={"Số buổi học"}
        />
      </Stack>
      <AppInput
        value={values?.room}
        title={"room"}
        handleChangeValue={handleChangeValue}
        placeholder={"Phòng học"}
      />
      <AppSelect
        value={values?.courseId}
        data={courses}
        title={"courseId"}
        display={"course_name"}
        placeholder={"Chọn khóa học"}
        itemKey="course_id"
        handleChangeValue={handleChangeValue}
      />

      <AppSelect
        value={values?.staffEmail}
        data={staffs}
        title={"staffEmail"}
        display={"name"}
        display2={"email"}
        itemKey="email"
        placeholder={"Chọn nhân viên phụ trách"}
        handleChangeValue={handleChangeValue}
      />
      <AppSelect
        value={values?.teacherEmail}
        data={teachers}
        title={"teacherEmail"}
        display={"name"}
        display2={"email"}
        itemKey="email"
        placeholder={"Chọn giảng viên"}
        handleChangeValue={handleChangeValue}
      />
      <AppCheckBox
        value={values?.status}
        handleChangeValue={handleChangeValue}
        title={"status"}
        placeholder={"Active"}
      />
    </Stack>
  );
};
