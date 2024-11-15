import { School, WorkRounded } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

export const OverviewClasses = (props) => {
  const { value, sx } = props;

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack spacing={2}>
          <Stack spacing={2} direction={"row"} alignItems={"center"}>
            <Avatar
              sx={{
                backgroundColor: "lightcoral",
                height: 42,
                width: 42,
              }}
            >
              <SvgIcon>
                <School />
              </SvgIcon>
            </Avatar>
            <Typography color="text.secondary" gutterBottom variant="overline">
              Lớp học
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

OverviewClasses.propTypes = {
  value: PropTypes.string,
  sx: PropTypes.object,
};
