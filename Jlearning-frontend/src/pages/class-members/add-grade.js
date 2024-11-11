import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";
import { Save, Warning } from "@mui/icons-material";
import { SvgIcon, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Stack } from "@mui/system";
import * as React from "react";
import AppInput from "../../components/AppInput/AppInput";
import AppInputDecimalNumber from "../../components/AppInput/AppInputDecimal";

// Use forwardRef to allow the parent component to access the openDialog method
const AddGradeDialog = React.forwardRef(
  ({ handleSubmit = () => {}, values, handleChangeValue }, ref) => {
    const [open, setOpen] = React.useState(false);

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
        <DialogTitle>Thêm điểm cho học viên</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <Typography>Họ và tên: {values?.name}</Typography>
            <AppInputDecimalNumber
              value={values?.listening}
              title={"listening"}
              handleChangeValue={handleChangeValue}
              placeholder={"Điểm listening"}
            />

            <AppInputDecimalNumber
              value={values?.reading}
              title={"reading"}
              handleChangeValue={handleChangeValue}
              placeholder={"Điểm reading"}
            />
            <AppInputDecimalNumber
              value={values?.writing}
              title={"writing"}
              handleChangeValue={handleChangeValue}
              placeholder={"Điểm writing"}
            />
            <AppInputDecimalNumber
              value={values?.speaking}
              title={"speaking"}
              handleChangeValue={handleChangeValue}
              placeholder={"Điểm speaking"}
            />
            <Typography id="alert-dialog-title">
              Tổng điểm: {values?.overall}
            </Typography>
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
              Lưu
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    );
  }
);

export default AddGradeDialog;
