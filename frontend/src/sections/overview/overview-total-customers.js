import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import {
  Avatar,
  Card,
  CardContent,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";

export const OverviewTotalCustomers = (props) => {
  const { sx, value } = props;

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack spacing={2}>
          <Stack spacing={2} direction={"row"} alignItems={"center"}>
            <Avatar
              sx={{
                backgroundColor: "success.main",
                height: 42,
                width: 42,
              }}
            >
              <SvgIcon>
                <UsersIcon />
              </SvgIcon>
            </Avatar>
            <Typography
              textAlign={"center"}
              color="text.secondary"
              gutterBottom
              variant="overline"
            >
              Học viên
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
