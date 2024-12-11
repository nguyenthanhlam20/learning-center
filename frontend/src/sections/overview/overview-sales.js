import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import AppDatePicker from "../../components/AppInput/AppDatePicker";
import BarChart from "../../components/BarChart";
import { getData } from "../../redux/dashboardSlice";
import { useDispatch } from "react-redux";

export const OverviewSales = ({ sales }) => {
  const [values, setValues] = useState({
    startDate: undefined,
    endDate: undefined,
  });
  const dispatch = useDispatch();

  const handleChangeValue = (key, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));

    const newValues = {
      ...values,
      [key]: value,
    };

    dispatch(getData(newValues));
  };

  return (
    <Card
      className="w-full"
      sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <CardHeader title="Doanh Thu Theo Khóa Học" />
        <Stack direction={"row"} spacing={2} pr={2} pt={1}>
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
      </Box>
      <CardContent>
        <BarChart sales={sales} />
      </CardContent>
      <Divider />
    </Card>
  );
};
