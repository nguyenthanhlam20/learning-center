import { Box, Container, Stack } from "@mui/system";
import { AccountDetails } from "../../components/Account/AccountDetails";
import { Button, Divider, SvgIcon, Typography } from "@mui/material";
import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";
import HandThumbUpIcon from "@heroicons/react/24/solid/HandThumbUpIcon";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { ROUTE_CONSTANTS } from "../../constants/route.constants";
import { getUser } from "../../redux/userSlice";

function EditAccount() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const email = params.get("email");
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    <Box
      className="ml-72 mt-5"
      component="main"
      sx={{
        flexGrow: 1,
        py: 0,
      }}
    >
      <Container maxWidth="xl">
        <Typography mb={3} textAlign={"center"} sx={{ fontSize: "20px" }}>
          Chỉnh sửa thông tin
        </Typography>
        <Stack spacing={3}>
          <AccountDetails
            handleChangeValue={handleChangeValue}
            values={values}
          />
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
              onClick={handleSubmitAccount}
              color="primary"
              variant="contained"
              className="ml-3 w-[150px]"
            >
              <SvgIcon className="mr-2">
                <HandThumbUpIcon />
              </SvgIcon>
              Lưu
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default EditAccount;
