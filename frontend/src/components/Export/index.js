import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";
import { SvgIcon } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Stack } from "@mui/system";
import * as React from "react";
import AppDatePicker from "../AppInput/AppDatePicker";
import { CSVLink } from "react-csv";
import { FileDownload } from "@mui/icons-material";

const ExportDialog = React.forwardRef(
  ({ values, handleChangeValue, headers, data, filename }, ref) => {
    const [open, setOpen] = React.useState(false);

    // Expose the openDialog method to the parent component
    React.useImperativeHandle(ref, () => ({
      openDialog: () => setOpen(true),
    }));

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle>Xuất excel</DialogTitle>
        <DialogContent>
          <Stack direction={"row"} spacing={2} pt={1}>
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
        </DialogContent>
        <DialogActions>
          <Stack direction={"row"} spacing={2} m={1}>
            <Button
              variant="contained"
              color="error"
              onClick={handleClose}
              size="medium"
            >
              <SvgIcon className="mr-2">
                <XMarkIcon />
              </SvgIcon>
              Hủy
            </Button>

            <Button
              onClick={handleClose}
              variant="contained"
              color="primary"
              size="medium"
            >
              <CSVLink data={data} headers={headers} filename={filename}>
                <SvgIcon sx={{ mr: 1 }}>
                  <FileDownload />
                </SvgIcon>
                Tải xuống
              </CSVLink>
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    );
  }
);

export default ExportDialog;
