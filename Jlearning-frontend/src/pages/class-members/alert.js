import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Stack } from "@mui/system";
import { Alert, SvgIcon } from "@mui/material";
import PencilIcon from "@heroicons/react/24/solid/PencilIcon";
import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";
import { Save, Warning } from "@mui/icons-material";

// Use forwardRef to allow the parent component to access the openDialog method
const AlertDialog = React.forwardRef(
  ({ handleSubmit = () => {}, message }, ref) => {
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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <SvgIcon className="mr-2">
            <Warning color="error" />
          </SvgIcon>
          Chú ý
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Stack direction={"row"} spacing={1} m={1}>
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
              Đồng ý
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    );
  }
);

export default AlertDialog;
