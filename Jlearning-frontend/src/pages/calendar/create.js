import HandThumbUpIcon from "@heroicons/react/24/solid/HandThumbUpIcon";
import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";
import { TimePicker } from "@mui/lab";
import { Button, Divider, SvgIcon, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useState } from "react";

export default function AddCalendarPage() {
  const handleCancel = () => {
    navigate(ROUTE_CONSTANTS.CLASS.INDEX);
  };

  const [values, setValues] = useState({
    classId: 0,
    startTime: "",
    endTime: "",
    dayOfWeeks: "",
  });

  const handleChangeValue = (key, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const handleSubmit = () => {};
  return (
    <Box className="my-4 ml-72 p-4">
      <Box
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
        }}
        p={2}
        m={"auto"}
        width={"60%"}
      >
        <Stack spacing={3}>
          <Typography textAlign={"center"} variant="h6" fontWeight={600}>
            Thêm mới lịch học
          </Typography>
          <TimePicker label="Giờ bắt đầu" value={values?.startTime} />
          <TimePicker label="Giờ kết thúc" value={values?.startTime} />
          <Divider />
          <Stack spacing={2} direction={"row"} justifyContent={"end"}>
            <Button
              color="error"
              variant="contained"
              className=" w-[150px]"
              onClick={handleCancel}
            >
              <SvgIcon className="mr-2">
                <XMarkIcon />
              </SvgIcon>
              Hủy
            </Button>
            <Button
              onClick={handleSubmit}
              color="primary"
              variant="contained"
              className="ml-3 w-[150px]"
            >
              <SvgIcon className="mr-2">
                <HandThumbUpIcon />
              </SvgIcon>
              Xác nhận
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
