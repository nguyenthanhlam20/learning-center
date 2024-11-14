import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";
import { SvgIcon, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Stack } from "@mui/system";
import * as React from "react";
import ScoreCard from "../../../components/Score";
import { Headphones } from "@mui/icons-material";
import PencilIcon from "@heroicons/react/24/solid/PencilIcon";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SportsScoreIcon from "@mui/icons-material/SportsScore";

// Use forwardRef to allow the parent component to access the openDialog method
const ScoreDialog = React.forwardRef(({ score }, ref) => {
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
      <DialogTitle textAlign={"center"}>Điểm của bạn</DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          <Stack direction={"column"} spacing={2}>
            <Stack direction={"row"} spacing={2}>
              <ScoreCard
                title={"Listening"}
                icon={<Headphones />}
                score={score?.listening}
                color={"#FCF596"}
              />
              <ScoreCard
                title={"Reading"}
                icon={<AutoStoriesIcon />}
                score={score?.reading}
                color={"#FBD288"}
              />
              <ScoreCard
                title={"Writing"}
                icon={<PencilIcon />}
                score={score?.writing}
                color={"#C4E1F6"}
              />
              <ScoreCard
                title={"Speaking"}
                icon={<VolumeUpIcon />}
                score={score?.speaking}
                color={"#FFF1DB"}
              />
            </Stack>
            <ScoreCard
              title={"Overall"}
              icon={<SportsScoreIcon />}
              score={score?.overall}
              color={"#C2FFC7"}
            />
          </Stack>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Stack direction={"row"} spacing={2} m={1}>
          <Button variant="contained" color="error" onClick={handleClose}>
            <SvgIcon className="mr-2">
              <XMarkIcon />
            </SvgIcon>
            Đóng
          </Button>
        </Stack>
      </DialogActions>
    </Dialog>
  );
});

export default ScoreDialog;
