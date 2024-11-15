import NewspaperIcon from "@heroicons/react/24/solid/NewspaperIcon";
import {
  Avatar,
  Card,
  CardContent,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

export const OverviewNews = (props) => {
  const { value, sx } = props;

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack spacing={2}>
          <Stack spacing={2} direction={"row"} alignItems={"center"}>
            <Avatar
              sx={{
                backgroundColor: "primary.main",
                height: 42,
                width: 42,
              }}
            >
              <SvgIcon>
                <NewspaperIcon />
              </SvgIcon>
            </Avatar>
            <Typography color="text.secondary" gutterBottom variant="overline">
              Giảng viên
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

OverviewNews.propTypes = {
  value: PropTypes.string,
  sx: PropTypes.object,
};
