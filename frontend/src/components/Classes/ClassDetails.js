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
  isDisabled,
}) => {
  const c = courses?.filter((x) => x.status === true) ?? [];
  const t = teachers?.filter((x) => x.status === true) ?? [];
  const s = staffs?.filter((x) => x.status === true) ?? [];

  return (
    <Stack spacing={2} width={width}>
      <Stack direction={direction} gap={3}>
        <AppInput
          disabled={isDisabled}
          value={values?.className}
          title={"className"}
          handleChangeValue={handleChangeValue}
          placeholder={"Tên lớp"}
        />
      </Stack>
      <Stack direction={direction} gap={3}>
        <AppDatePicker
          disabled={isDisabled}
          value={values?.startDate}
          title={"startDate"}
          handleChangeValue={handleChangeValue}
          placeholder={"Ngày bắt đầu"}
        />

        <AppDatePicker
          disabled={isDisabled}
          value={values?.endDate}
          title={"endDate"}
          handleChangeValue={handleChangeValue}
          placeholder={"Ngày kết thúc"}
        />
      </Stack>
      <Stack direction={direction} gap={3}>
        <AppTimePicker
          disabled={isDisabled}
          value={values?.startTime}
          title={"startTime"}
          handleChangeValue={handleChangeValue}
          placeholder={"Thời gian bắt đầu"}
        />

        <AppTimePicker
          disabled={isDisabled}
          value={values?.endTime}
          title={"endTime"}
          handleChangeValue={handleChangeValue}
          placeholder={"Thời gian kết thúc"}
        />
      </Stack>
      <Stack direction={direction} gap={3}>
        <AppInput
          disabled={isDisabled}
          value={values?.room}
          title={"room"}
          handleChangeValue={handleChangeValue}
          placeholder={"Phòng học"}
        />

        <AppInput
          disabled={isDisabled}
          value={values?.daysOfWeek}
          title={"daysOfWeek"}
          handleChangeValue={handleChangeValue}
          placeholder={"Lịch học"}
        />
      </Stack>
      <Stack direction={direction} gap={3}>
        <AppInputNumber
          disabled={isDisabled}
          value={values?.numberOfStudent}
          title={"numberOfStudent"}
          handleChangeValue={handleChangeValue}
          placeholder={"Số học viên"}
        />

        <AppInputNumber
          disabled={true}
          value={values?.numberOfSlots}
          title={"numberOfSlots"}
          handleChangeValue={handleChangeValue}
          placeholder={"Số buổi học"}
        />
      </Stack>

      <AppSelect
        disabled={isDisabled}
        value={values?.courseId}
        data={c}
        title={"courseId"}
        display={"course_name"}
        placeholder={"Chọn khóa học"}
        itemKey="course_id"
        handleChangeValue={handleChangeValue}
      />

      <AppSelect
        disabled={isDisabled}
        value={values?.staffEmail}
        data={s}
        title={"staffEmail"}
        display={"name"}
        display2={"email"}
        itemKey="email"
        placeholder={"Chọn nhân viên phụ trách"}
        handleChangeValue={handleChangeValue}
      />
      <AppSelect
        disabled={isDisabled}
        value={values?.teacherEmail}
        data={t}
        title={"teacherEmail"}
        display={"name"}
        display2={"email"}
        itemKey="email"
        placeholder={"Chọn giảng viên"}
        handleChangeValue={handleChangeValue}
      />
      <AppCheckBox
        disabled={isDisabled}
        value={values?.status}
        handleChangeValue={handleChangeValue}
        title={"status"}
        placeholder={"Active"}
      />
    </Stack>
  );
};
