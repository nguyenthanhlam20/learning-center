import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";
import { Save } from "@mui/icons-material";
import { SvgIcon, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Stack } from "@mui/system";
import * as React from "react";
import AppInput from "../../components/AppInput/AppInput";

// Use forwardRef to allow the parent component to access the openDialog method
const RegisterDialog = React.forwardRef(
  ({ handleSubmit = () => {}, values, handleChangeValue }, ref) => {
    const [open, setOpen] = React.useState(false);
    console.log("ok", values);
    // Expose the openDialog method to the parent component
    React.useImperativeHandle(ref, () => ({
      openDialog: () => setOpen(true),
    }));

    const handleClose = () => {
      setOpen(false);
    };

    const handleClickYes = () => {
      handleSubmit();
      setOpen(false);
    };

    return (
      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle textAlign={"center"} color={"red"} fontWeight={"bold"}>
          Phiếu đăng ký khóa học
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2} paddingY={2}>
            <AppInput
              value={values?.name}
              title={"name"}
              handleChangeValue={handleChangeValue}
              placeholder={"Họ và tên"}
            />

            <AppInput
              value={values?.phone}
              title={"phone"}
              handleChangeValue={handleChangeValue}
              placeholder={"Số điện thoại"}
            />

            <AppInput
              disabled
              value={values?.studentEmail}
              title={"studentEmail"}
              handleChangeValue={handleChangeValue}
              placeholder={"Email"}
            />

            <AppInput
              disabled
              value={values?.courseName}
              title={"courseName"}
              handleChangeValue={handleChangeValue}
              placeholder={"Khóa học"}
            />
            <AppInput
              disabled
              value={values?.className}
              title={"className"}
              handleChangeValue={handleChangeValue}
              placeholder={"Lớp học"}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Stack direction={"row"} spacing={2} m={1}>
            <Button variant="contained" color="error" onClick={handleClose}>
              <SvgIcon className="mr-2">
                <XMarkIcon />
              </SvgIcon>
              Hủy
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClickYes}
              autoFocus
            >
              <SvgIcon className="mr-2">
                <Save />
              </SvgIcon>
              Xác nhận
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    );
  }
);

export default RegisterDialog;
