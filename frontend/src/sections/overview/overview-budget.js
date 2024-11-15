import CurrencyDollarIcon from "@heroicons/react/24/solid/CurrencyDollarIcon";
import {
  Avatar,
  Card,
  CardContent,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";

export const OverviewBudget = (props) => {
  const { sx, value } = props;

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack spacing={2}>
          <Stack spacing={1} direction={"row"} alignItems={"center"}>
            <Avatar
              sx={{
                backgroundColor: "error.main",
                height: 42,
                width: 42,
              }}
            >
              <SvgIcon>
                <CurrencyDollarIcon />
              </SvgIcon>
            </Avatar>
            <Typography color="text.secondary" variant="overline">
              Tổng doanh thu
            </Typography>
          </Stack>
          <Typography textAlign={"center"} variant="h5">
            {new Intl.NumberFormat("vi-VN").format(Number(value)) + "₫"}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};
