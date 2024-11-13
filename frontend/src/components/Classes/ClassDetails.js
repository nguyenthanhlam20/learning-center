import { Grid, Stack } from "@mui/material";
import AppCheckBox from "../AppInput/AppCheckBox";
import AppDatePicker from "../AppInput/AppDatePicker";
import AppInput from "../AppInput/AppInput";
import AppInputNumber from "../AppInput/AppInputNumber";
import AppSelect from "../AppInput/AppSelect";
import { TimePicker } from "@mui/x-date-pickers";
import AppTimePicker from "../AppInput/AppTimePicker";

export const ClassDetails = ({
  handleChangeValue,
  values,
  staffs,
  teachers,
  courses,
  width = 900,
  direction = "row",
}) => {
  return (
    <Stack spacing={2} width={width}>
      <Stack direction={direction} gap={3}>
        <AppInput
          value={values?.className}
          title={"className"}
          handleChangeValue={handleChangeValue}
          placeholder={"Tên lớp"}
        />
      </Stack>
      <Stack direction={direction} gap={3}>
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
      <Stack direction={direction} gap={3}>
        <AppTimePicker
          value={values?.startTime}
          title={"startTime"}
          handleChangeValue={handleChangeValue}
          placeholder={"Thời gian bắt đầu"}
        />

        <AppTimePicker
          value={values?.endTime}
          title={"endTime"}
          handleChangeValue={handleChangeValue}
          placeholder={"Thời gian kết thúc"}
        />
      </Stack>
      <Stack direction={direction} gap={3}>
        <AppInput
          value={values?.room}
          title={"room"}
          handleChangeValue={handleChangeValue}
          placeholder={"Phòng học"}
        />

        <AppInput
          value={values?.daysOfWeek}
          title={"daysOfWeek"}
          handleChangeValue={handleChangeValue}
          placeholder={"Lịch học"}
        />
      </Stack>
      <Stack direction={direction} gap={3}>
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
