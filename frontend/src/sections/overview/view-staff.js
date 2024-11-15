import { WorkRounded } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

export const OverviewStaffs = (props) => {
  const { value, sx } = props;

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack spacing={2}>
          <Stack spacing={2} direction={"row"} alignItems={"center"}>
            <Avatar
              sx={{
                backgroundColor: "violet",
                height: 42,
                width: 42,
              }}
            >
              <SvgIcon>
                <WorkRounded />
              </SvgIcon>
            </Avatar>
            <Typography color="text.secondary" gutterBottom variant="overline">
              Nhân viên
            </Typography>
          </Stack>
          <Typography textAlign={"center"} variant="h5">
            {value}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

OverviewStaffs.propTypes = {
  value: PropTypes.string,
  sx: PropTypes.object,
};
