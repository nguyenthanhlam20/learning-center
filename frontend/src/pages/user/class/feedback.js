import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Stack } from "@mui/system";
import * as React from "react";
import AppInput from "../../../components/AppInput/AppInput";
import AppInputNumber from "../../../components/AppInput/AppInputNumber";

// Use forwardRef to allow the parent component to access the openDialog method
const FeedbackDialog = React.forwardRef(
  ({ handleSubmit = () => {}, values, handleChangeValue }, ref) => {
    const [open, setOpen] = React.useState(false);

    // Expose the openDialog method to the parent component
    React.useImperativeHandle(ref, () => ({
      openDialog: () => setOpen(true),
      closeDialog: () => setOpen(false),
    }));

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle textAlign={"center"}>Đánh giá khóa học</DialogTitle>
        <DialogContent>
          <Stack spacing={2} py={1}>
            <AppInput
              disabled={true}
              value={values?.courseName}
              title={"courseName"}
              handleChangeValue={handleChangeValue}
              placeholder={"Khoá học"}
            />
            <AppInput
              disabled={true}
              value={values?.className}
              title={"className"}
              handleChangeValue={handleChangeValue}
              placeholder={"Lớp học"}
            />
            <AppInputNumber
              value={values?.star}
              title={"star"}
              handleChangeValue={handleChangeValue}
              placeholder={"Số sao"}
            />
            <AppInput
              value={values?.message}
              title={"message"}
              handleChangeValue={handleChangeValue}
              placeholder={"Nội dung đánh giá"}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Stack direction={"row"} spacing={2} px={2} pb={2}>
            <Button onClick={handleClose} variant="contained" color="error">
              Hủy
            </Button>
            <Button
              onClick={() => handleSubmit()}
              variant="contained"
              color="primary"
            >
              Gửi
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    );
  }
);

export default FeedbackDialog;
